import { Html, Head, Main, NextScript } from "next/document";

console.log = () => {};
console.error = () => {};
console.debug = () => {};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
