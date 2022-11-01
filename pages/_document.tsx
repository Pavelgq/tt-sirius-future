import { GetServerSideProps, GetStaticProps } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

export const getStaticProps: GetStaticProps = async () => {
  resetServerContext();

  return { props: { data: [] } };
};
export const getServerSideProps: GetServerSideProps = async () => {
  resetServerContext();

  return { props: { data: [] } };
};
const Document = () => {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
