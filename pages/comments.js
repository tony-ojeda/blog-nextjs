import Head from 'next/head'

export default function Comment() {

  return (
    <div className="container">
      <Head>
        <title>Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hacker News
        </h1>

        <div className="grid">
          <div className="notice">
            <a href="https://nextjs.org/docs" className="card"><h3>fist document</h3></a>
            <div>
              <span>157 point</span>
              <span>- 120 comments</span>
            </div>
          </div>
          <div className="notice">
            <a href="https://nextjs.org/docs" className="card"><h3>fist document</h3></a>
            <div>
              <span>157 point</span>
              <span>- 120 comments</span>
            </div>
          </div>
          <div className="notice">
            <a href="https://nextjs.org/docs" className="card"><h3>fist document</h3></a>
            <div>
              <span>157 point</span>
              <span>- 120 comments</span>
            </div>
          </div>
          <div className="notice">
            <a href="https://nextjs.org/docs" className="card"><h3>fist document</h3></a>
            <div>
              <span>157 point</span>
              <span>- 120 comments</span>
            </div>
          </div>
          <div className="notice">
            <a href="https://nextjs.org/docs" className="card"><h3>fist document</h3></a>
            <div>
              <span>157 point</span>
              <span>- 120 comments</span>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          flex-direction: column;

          max-width: 800px;
          margin-top: 1rem;
        }

        .notice {
        margin-bottom: 10px;
        }

        .card {
          margin: 0;
          padding: 0;
        }

        h3 {
          margin: 0;
          padding: 0;

        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
