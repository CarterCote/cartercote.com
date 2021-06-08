
// Initial setup
import Document, { Html, Head, Main, NextScript } from "next/document";

// Styled components SSR
import { ServerStyleSheet } from "styled-components";

// Custom interface to support style tag injection in head
interface MyDocumentProps {
  styleTags: string;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static getInitialProps({ renderPage }) {
    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="https://db.onlinewebfonts.com/c/2206d6cc490084998d531e8c1b2cbb4a?family=Druk+Wide+Bold"
            as="font"
            type="text/css"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book"
            as="font"
            type="text/css"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book"
            as="font"
            type="text/css"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book"
            as="font"
            type="text/css"
            crossOrigin="anonymous"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}