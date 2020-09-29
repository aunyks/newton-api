import Head from 'next/head'
export default function Index({ }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>newton</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </Head>
      <style global jsx>
        {

          ` html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          background-color: black;
          color: white;
          overflow: scroll;
        }

        #center {
          width: 100%;
          text-align: center;
          margin-top: 10vh;
        }

        #center>h1 {
          font-size: 35px;
        }

        #center>p {
          font-size: 25px;
        }

        .code {
          width: 42ex;
          margin: 40px auto;
          text-align: left;
        }

        .code>p {
          padding-top: 40px;
          text-align: center;
        }

        .code>p>a {
          color: white;
        }

        .code>p>a:visited {
          color: white;
        }

        pre {
          text-align: left;
        }
        `}
      </style>
      <article id="center">
        <h1>newton</h1>
        <p>A really micro micro-service for advanced math.</p>
        <div className="code">
          Send this:<br />
          <pre>
            <a href="https://newton.now.sh/api/v2/factor/x^2-1" style={{ color: 'white', 'textDecoration': 'none' }} target="_blank">https://newton.now.sh/api/v2/factor/x^2-1</a>
          </pre>
      Get this:
      <pre>{`
        {
          "operation":"factor",
          "expression":"x^2 - 1",
          "result":"(x - 1) (x + 1)"
        }
        `}
          </pre>
          <p><a href="https://github.com/aunyks/newton-api">See More</a></p>
          <br />
      Supported By:
      <hr />
          <a href="https://mezcla.xyz" style={{ fontWeight: 'bold', color: 'white', fontSize: '2.5em', textDecoration: 'none' }}>MEZCLA</a>
        </div>
      </article>
    </>
  )
}
