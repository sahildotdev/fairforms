import { Form } from "@/types/form";
import React from "react";

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number; // Optional size prop
  theme?: Form["settings"]["theme"];
}

const LogoIcon: React.FC<LogoIconProps> = ({ size = 24, theme, ...props }) => {
  // Default colors for light theme
  const textColor = theme?.questionColor || "#101828";
  const circleColor = theme?.textColor ? `${theme.textColor}66` : "#667085"; // Using 40% opacity of text color

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.4"
        d="M15 31C23.2843 31 30 24.2843 30 16C30 7.71573 23.2843 1 15 1C6.71573 1 0 7.71573 0 16C0 24.2843 6.71573 31 15 31Z"
        fill={circleColor}
      />
      <path
        d="M15 11H29M15 21H29M13 1H31C34.3137 1 37 3.68629 37 7V25C37 28.3137 34.3137 31 31 31H13C9.68629 31 7 28.3137 7 25V7C7 3.68629 9.68629 1 13 1Z"
        stroke={textColor}
        stroke-width="2"
      />
      <path
        d="M45 27.6134V4H60.9302V6.78658H48.1248V14.0993H59.2067V16.8859H48.1248V27.6134H45Z"
        fill={textColor}
      />
      <path
        d="M75.7973 25.5034C74.7235 26.4161 73.6872 27.0604 72.6886 27.4362C71.7007 27.8121 70.6376 28 69.4993 28C67.6201 28 66.1758 27.5436 65.1664 26.6309C64.157 25.7074 63.6523 24.5315 63.6523 23.1034C63.6523 22.2658 63.8403 21.5034 64.2161 20.8161C64.6027 20.1181 65.102 19.5597 65.7141 19.1409C66.3369 18.7221 67.0349 18.4054 67.8081 18.1906C68.3772 18.0403 69.2362 17.8953 70.3852 17.7557C72.7262 17.4765 74.4497 17.1436 75.5557 16.757C75.5664 16.3597 75.5718 16.1074 75.5718 16C75.5718 14.8188 75.298 13.9866 74.7503 13.5034C74.0094 12.8483 72.9087 12.5208 71.4483 12.5208C70.0846 12.5208 69.0752 12.7624 68.4201 13.2456C67.7758 13.7181 67.298 14.5611 66.9866 15.7745L64.1517 15.3879C64.4094 14.1745 64.8336 13.1973 65.4242 12.4564C66.0148 11.7047 66.8685 11.1302 67.9852 10.7329C69.102 10.3248 70.396 10.1208 71.8671 10.1208C73.3275 10.1208 74.5141 10.2926 75.4268 10.6362C76.3396 10.9799 77.0107 11.4148 77.4403 11.9409C77.8698 12.4564 78.1705 13.1114 78.3423 13.906C78.4389 14.4 78.4872 15.2913 78.4872 16.5799V20.4456C78.4872 23.1409 78.5463 24.8483 78.6644 25.5678C78.7933 26.2765 79.0403 26.9584 79.4054 27.6134H76.3772C76.0765 27.0121 75.8832 26.3087 75.7973 25.5034ZM75.5557 19.0282C74.5034 19.4577 72.9248 19.8228 70.8201 20.1235C69.6282 20.2953 68.7852 20.4886 68.2913 20.7034C67.7973 20.9181 67.4161 21.2349 67.1477 21.6537C66.8792 22.0617 66.745 22.5181 66.745 23.0228C66.745 23.796 67.0349 24.4403 67.6148 24.9557C68.2054 25.4711 69.0644 25.7289 70.1919 25.7289C71.3087 25.7289 72.302 25.4872 73.1718 25.004C74.0416 24.5101 74.6805 23.8389 75.0886 22.9906C75.4 22.3356 75.5557 21.3691 75.5557 20.0913V19.0282Z"
        fill={textColor}
      />
      <path
        d="M83.0134 7.33423V4H85.9128V7.33423H83.0134ZM83.0134 27.6134V10.5074H85.9128V27.6134H83.0134Z"
        fill={textColor}
      />
      <path
        d="M90.3101 27.6134V10.5074H92.9195V13.1007C93.5852 11.8872 94.1973 11.0872 94.7557 10.7007C95.3248 10.3141 95.9477 10.1208 96.6242 10.1208C97.6013 10.1208 98.5946 10.4322 99.604 11.055L98.6054 13.745C97.8966 13.3262 97.1879 13.1168 96.4792 13.1168C95.8456 13.1168 95.2765 13.3101 94.7718 13.6966C94.2671 14.0725 93.9074 14.5987 93.6926 15.2752C93.3705 16.306 93.2094 17.4336 93.2094 18.6577V27.6134H90.3101Z"
        fill={textColor}
      />
      <path
        d="M101.859 27.6134V4H117.789V6.78658H104.984V14.0993H116.066V16.8859H104.984V27.6134H101.859Z"
        fill={textColor}
      />
      <path
        d="M120.415 19.0604C120.415 15.8926 121.295 13.5463 123.056 12.0215C124.528 10.7544 126.321 10.1208 128.436 10.1208C130.788 10.1208 132.71 10.894 134.203 12.4403C135.695 13.9758 136.442 16.102 136.442 18.8188C136.442 21.0201 136.109 22.7544 135.443 24.0215C134.788 25.2779 133.827 26.255 132.56 26.953C131.303 27.651 129.929 28 128.436 28C126.042 28 124.103 27.2322 122.621 25.6966C121.15 24.1611 120.415 21.949 120.415 19.0604ZM123.395 19.0604C123.395 21.251 123.872 22.894 124.828 23.9893C125.784 25.0738 126.987 25.6161 128.436 25.6161C129.875 25.6161 131.072 25.0685 132.028 23.9732C132.984 22.8779 133.462 21.2081 133.462 18.9638C133.462 16.8483 132.979 15.2483 132.012 14.1638C131.056 13.0685 129.864 12.5208 128.436 12.5208C126.987 12.5208 125.784 13.0631 124.828 14.1477C123.872 15.2322 123.395 16.8698 123.395 19.0604Z"
        fill={textColor}
      />
      <path
        d="M139.824 27.6134V10.5074H142.434V13.1007C143.099 11.8872 143.711 11.0872 144.27 10.7007C144.839 10.3141 145.462 10.1208 146.138 10.1208C147.115 10.1208 148.109 10.4322 149.118 11.055L148.119 13.745C147.411 13.3262 146.702 13.1168 145.993 13.1168C145.36 13.1168 144.791 13.3101 144.286 13.6966C143.781 14.0725 143.421 14.5987 143.207 15.2752C142.885 16.306 142.723 17.4336 142.723 18.6577V27.6134H139.824Z"
        fill={textColor}
      />
      <path
        d="M150.842 27.6134V10.5074H153.435V12.9074C153.972 12.0698 154.686 11.3987 155.577 10.894C156.468 10.3785 157.483 10.1208 158.621 10.1208C159.889 10.1208 160.925 10.3839 161.73 10.9101C162.546 11.4362 163.121 12.1718 163.454 13.1168C164.807 11.1195 166.568 10.1208 168.737 10.1208C170.434 10.1208 171.738 10.5933 172.651 11.5383C173.564 12.4725 174.02 13.9168 174.02 15.8711V27.6134H171.137V16.8376C171.137 15.6779 171.04 14.8456 170.847 14.3409C170.664 13.8255 170.326 13.4121 169.832 13.1007C169.338 12.7893 168.758 12.6336 168.093 12.6336C166.89 12.6336 165.891 13.0362 165.097 13.8416C164.302 14.6362 163.905 15.9141 163.905 17.6752V27.6134H161.005V16.4993C161.005 15.2107 160.769 14.2443 160.297 13.6C159.824 12.9557 159.051 12.6336 157.977 12.6336C157.161 12.6336 156.404 12.8483 155.706 13.2779C155.019 13.7074 154.519 14.3356 154.208 15.1624C153.897 15.9893 153.741 17.1812 153.741 18.7383V27.6134H150.842Z"
        fill={textColor}
      />
      <path
        d="M177.161 22.5074L180.028 22.0564C180.189 23.2054 180.635 24.0859 181.365 24.698C182.106 25.3101 183.137 25.6161 184.458 25.6161C185.789 25.6161 186.777 25.3477 187.421 24.8107C188.066 24.2631 188.388 23.6242 188.388 22.894C188.388 22.2389 188.103 21.7235 187.534 21.3477C187.137 21.0899 186.149 20.7624 184.57 20.3651C182.444 19.8282 180.968 19.3664 180.141 18.9799C179.325 18.5826 178.702 18.0403 178.272 17.353C177.854 16.655 177.644 15.8872 177.644 15.0497C177.644 14.2872 177.816 13.5839 178.16 12.9396C178.514 12.2846 178.992 11.7423 179.593 11.3128C180.044 10.9799 180.656 10.7007 181.43 10.4752C182.213 10.2389 183.051 10.1208 183.942 10.1208C185.285 10.1208 186.46 10.3141 187.47 10.7007C188.49 11.0872 189.242 11.6134 189.725 12.2792C190.208 12.9342 190.541 13.8148 190.723 14.9208L187.889 15.3074C187.76 14.4268 187.384 13.7396 186.761 13.2456C186.149 12.7517 185.279 12.5047 184.152 12.5047C182.82 12.5047 181.87 12.7248 181.301 13.1651C180.732 13.6054 180.447 14.1208 180.447 14.7114C180.447 15.0872 180.565 15.4255 180.801 15.7262C181.038 16.0376 181.408 16.2953 181.913 16.4993C182.203 16.6067 183.056 16.8537 184.474 17.2403C186.525 17.7879 187.953 18.2389 188.758 18.5933C189.574 18.9369 190.213 19.4416 190.675 20.1074C191.137 20.7732 191.368 21.6 191.368 22.5879C191.368 23.5544 191.083 24.4671 190.514 25.3262C189.956 26.1745 189.145 26.8349 188.082 27.3074C187.019 27.7691 185.816 28 184.474 28C182.251 28 180.554 27.5383 179.384 26.6148C178.224 25.6913 177.483 24.3221 177.161 22.5074Z"
        fill={textColor}
      />
    </svg>
  );
};

export default LogoIcon;
