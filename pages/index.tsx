import Head from "next/head"
import sanitizeHtml from "sanitize-html"

import { Card } from "../components/Card"

import { WP_REST, URL } from "../libs/url"
import type { Post } from "../types/pages"

export async function getStaticProps() {
  const src = await fetch(WP_REST + "/posts")
  const resp = await src.json()
  const posts: Post[] = await [...resp]

  return {
    props: {
      posts,
    },
  }
}

type Props = {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  return (
    <div className="container mx-auto py-5">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="font-bold text-3xl my-5">
          Impariamo <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="my-2">
          Contenuti <i>presi in prestito</i> da <code>{URL}</code>
        </p>

        <h3 className="font-bold text-2xl my-2">Articoli</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-5">
          {posts.map((post, i) => (
            <Card key={i} link={"/post/" + post.id} title={post.title.rendered}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(post.excerpt.rendered),
                }}
              ></div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
