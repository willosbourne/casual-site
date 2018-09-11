import React from 'react'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'font-awesome/css/font-awesome.css'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />

          {/* adding tags */}
          {/* <!-- COMMON TAGS --> */}
          <meta charset="utf-8" />
          <title>Will / bang-tilde (!~)</title>
          {/* <!-- Search Engine --> */}
          <meta name="description" content="Will makes some music" />
          <meta name="image" content="/img/android-chrome-512x512.png" />
          {/* <!-- Schema.org for Google --> */}
          <meta itemprop="name" content="Will / bang-tilde (!~)" />
          <meta itemprop="description" content="Will makes some music" />
          <meta itemprop="image" content="/img/android-chrome-512x512.png" />
          {/* <!-- Twitter --> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Will / bang-tilde (!~)" />
          <meta name="twitter:description" content="Will makes some music" />
          <meta name="twitter:site" content="@WillGOsbourne" />
          <meta name="twitter:creator" content="@WillGOsbourne" />
          <meta
            name="twitter:image:src"
            content="/img/android-chrome-512x512.png"
          />
          {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
          <meta name="og:title" content="Will / bang-tilde (!~)" />
          <meta name="og:description" content="Will makes some music" />
          <meta name="og:image" content="/img/android-chrome-512x512.png" />
          <meta name="og:url" content="https://personal.willosbourne.com" />
          <meta name="og:site_name" content="Will / bang-tilde (!~)" />
          <meta name="og:type" content="website" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </body>
      </html>
    )
  }
}
