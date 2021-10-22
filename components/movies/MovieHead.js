import Head from "next/head"

const MovieHead = () => {
  return(
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Memico</title>
      {/* Animate.css */}
      <link href="/memico/animate.css/animate.css" rel="stylesheet" type="text/css" />
      {/* Font Awesome iconic font */}
      <link
        href="/memico/fontawesome/css/fontawesome-all.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Magnific Popup */}
      <link
        href="/memico/magnific-popup/magnific-popup.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Slick carousel */}
      <link href="/memico/slick/slick.css" rel="stylesheet" type="text/css" />
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
        type="text/css"
      />
      {/* Theme styles */}
      <link href="/memico/css/dot-icons.css" rel="stylesheet" type="text/css" />
      <link href="/memico/css/theme.css" rel="stylesheet" type="text/css" />
    </Head>
  )
}

export default MovieHead