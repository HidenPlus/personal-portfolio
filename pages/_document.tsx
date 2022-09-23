import Document, { Html, Main, NextScript, Head } from "next/document"
import { ServerStyleSheet } from 'styled-components'

const stylesUrl = [
  "http://fonts.cdnfonts.com/css/inter",
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swaphttps://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swaphttps://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
  "https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
  'http://fonts.cdnfonts.com/css/sf-mono',
  'http://fonts.cdnfonts.com/css/calibre'
]

class MyDocument extends Document<{
  styleTags: any
}> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <title>
          Yojhan Atuesta
        </title>
        <link rel="preconnect" href="http://fonts.cdnfonts.com"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        {stylesUrl.map((url) => (
          <link rel="stylesheet" href={url} />
        ))}
        <Head>
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

export default MyDocument
