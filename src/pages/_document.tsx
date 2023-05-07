import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="オンラインの共有用カレンダーです。完全無料で使えてシンプルかつ簡単にご利用いただけます。"
          name="description"
        />
        <meta
          content="ネットカレンダー,オンラインカレンダー,共有カレンダー,無料カレンダー"
          name="keywords"
        />
        <link href="/favicon.ico" rel="icon" />
        <link href="favi16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="favi32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="favi48.png" rel="icon" sizes="48x48" type="image/png" />
        <link href="favi62.png" rel="icon" sizes="62x62" type="image/png" />
        <link href="favi150.png" rel="apple-touch-icon-precomposed" />
        <link href="https://net-calender.com" rel="canonical" />
        <meta
          content="ネットカレンダー - 無料で使えるオンライン共有カレンダー"
          property="og:title"
        />
        <meta content="website" property="og:type" />
        <meta
          content="オンラインの共有用カレンダーです。完全無料で使えてシンプルかつ簡単にご利用いただけます。"
          property="og:description"
        />
        <meta content="https://net-calender.com" property="og:url" />
        <meta content="ja_JP" property="og:locale" />
        <meta content="ネットカレンダー" property="og:site_name" />
        <meta content="https://net-calender.com/net-calender-image.png" property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="ネットカレンダー - 無料で使えるオンライン共有カレンダー"
          name="twitter:title"
        />
        <meta
          content="オンラインの共有用カレンダーです。完全無料で使えてシンプルかつ簡単にご利用いただけます。"
          name="twitter:description"
        />
        <meta content="https://net-calender.com/net-calender-image.png" name="twitter:image" />
      </Head>
      <body className="text-gray-800 bg-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
