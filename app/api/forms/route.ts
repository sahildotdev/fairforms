import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { forms, responses } from "@/db/schema";
import { NextResponse } from "next/server";
import { eq, desc, sql, and } from "drizzle-orm";
import { FormSettings } from "@/types/form";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userForms = await db
      .select({
        id: forms.id,
        userId: forms.userId,
        title: forms.title,
        description: forms.description,
        elements: forms.elements,
        settings: forms.settings,
        isPublished: forms.isPublished,
        customSlug: forms.customSlug,
        createdAt: forms.createdAt,
        updatedAt: forms.updatedAt,
        metaTitle: forms.metaTitle,
        metaDescription: forms.metaDescription,
        socialImageUrl: forms.socialImageUrl,
      })
      .from(forms)
      .where(eq(forms.userId, userId))
      .orderBy(desc(forms.createdAt));

    // Get response counts separately
    const formsWithCounts = await Promise.all(
      userForms.map(async (form) => {
        const [count] = await db
          .select({ count: sql<number>`count(*)` })
          .from(responses)
          .where(eq(responses.formId, form.id));

        return {
          ...form,
          responseCount: Number(count?.count || 0),
        };
      })
    );

    return NextResponse.json(formsWithCounts);
  } catch (error) {
    // Add detailed error logging
    console.error("[FORMS_GET] Detailed error:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      error,
    });

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if a draft form already exists for this user
    const [existingDraft] = await db
      .select()
      .from(forms)
      .where(
        and(
          eq(forms.userId, userId),
          eq(forms.isPublished, false),
          eq(forms.title, "Untitled Form")
        )
      );

    if (existingDraft) {
      // Return the existing draft instead of creating a new one
      return NextResponse.json(existingDraft);
    }

    const defaultSettings: FormSettings = {
      theme: {
        primaryColor: "#0f172a",
        fontFamily: "Inter",
        backgroundColor: "#ffffff",
        questionColor: "#0f172a",
      },
      behavior: {
        showProgressBar: true,
        enableKeyboardNavigation: true,
        requireLogin: false,
        limitResponses: false,
      },
      notifications: {
        enableEmailNotifications: false,
        notificationEmails: [],
      },
      web3: {
        enabled: false,
        tokenGating: {
          enabled: false,
          chainId: 1,
          tokenType: "ERC20",
        },
        rewards: {
          enabled: false,
          chainId: 1,
        },
      },
      
    };

    const [form] = await db
      .insert(forms)
      .values({
        userId,
        title: "Untitled Form",
        description: "",
        elements: [],
        settings: defaultSettings,
        isPublished: false,
      })
      .returning();

    return NextResponse.json(form);
  } catch (error) {
    console.error("[FORMS_POST]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
