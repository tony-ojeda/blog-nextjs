import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://node-hnapi.herokuapp.com/news')
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      })
  }, [])

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
          {

          news.map((item, index) => (
            <div key={index} className="notice">
              <a href={item.url} target="_blank" className="title"><h3>{ item.title }</h3></a>
              <div>
                <span>{item.points} points</span>
                <span>
                  <Link href={`/comment/${item.id}`} target="_blank">
                    <a className="comment"> - {item.comments_count} comments</a>
                  </Link>
                </span>
              </div>
            </div>
          ))
          }
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

        .grid {
          display: flex;
          flex-direction: column;

          max-width: 800px;
          margin-top: 1rem;
        }

        .notice {
        margin-bottom: 10px;
        }

        .title h3 {
          color: blue;
        }

        .comment {
        color: teal
        }

        h3 {
          margin: 0;
          padding: 0;

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
