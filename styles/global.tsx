import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import emotionReset from "emotion-reset";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Calibri";
        src: local("Calibri Regular"), local("Calibri-Regular"),
          url("/fonts/Calibri/Calibri.woff2") format("woff2"),
          url("/fonts/Calibri/Calibri.woff") format("woff"),
          url("/fonts/Calibri/Calibri.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: "Calibri";
        src: local("Calibri Bold"), local("Calibri-Bold"),
          url("/fonts/Calibri-Bold/Calibri-Bold.woff2") format("woff2"),
          url("/fonts/Calibri-Bold/Calibri-Bold.woff") format("woff"),
          url("/fonts/Calibri-Bold/Calibri-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
      }
      @font-face {
        font-family: "Circe Rounded";
        src: local("Circe Rounded Alt Regular2"),
          local("Circe-Rounded-Alt-Regular2"),
          url("/fonts/CirceRoundedAlt-Regular2/CirceRoundedAlt-Regular2.woff2")
            format("woff2"),
          url("/fonts/CirceRoundedAlt-Regular2/CirceRoundedAlt-Regular2.woff")
            format("woff"),
          url("/fonts/CirceRoundedAlt-Regular2/CirceRoundedAlt-Regular2.ttf")
            format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: "Circe Rounded";
        src: local("Circe Rounded Regular"), local("Circe-Rounded-Regular"),
          url("/fonts/CirceRounded-Regular/CirceRounded-Regular.woff2")
            format("woff2"),
          url("/fonts/CirceRounded-Regular/CirceRounded-Regular.woff")
            format("woff"),
          url("/fonts/CirceRounded-Regular/CirceRounded-Regular.ttf")
            format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: "Helvetica";
        src: local("Helvetica Regular"), local("Helvetica-Regular"),
          url("/fonts/Helvetica/Helvetica.woff2") format("woff2"),
          url("/fonts/Helvetica/Helvetica.woff") format("woff"),
          url("/fonts/Helvetica/Helvetica.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      ${emotionReset};
      ${emotionNormalize};
      *,
      *::after,
      *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }
    `}
  />
);

export default GlobalStyles;
