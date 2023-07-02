import Prismic from '@prismicio/client'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Calendar, User } from 'lucide-react'
import { getPrismicClient } from '../service/prismic'
import { GetStaticProps } from 'next'
import Link from 'next/link'

type Post = {
  slug: string
  title: string
  subtitle: string
  updatedAt: string
  author: string
}

interface PostsProps {
  posts: Post[]
}

export default function Home({ posts }: PostsProps) {
  return (
    <div className="mx-auto h-screen max-w-[720px]">
      <div>
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <div key={post.slug} className="my-auto mt-5 justify-start">
              <h1 className="text-3xl font-bold text-white-100">
                {post.title}
              </h1>

              <p className="text-1xl mb-3 text-white-200">{post.subtitle}</p>
              <div className="top-20 flex gap-1">
                <Calendar className="h-4 w-4" />
                <span className="text-[14px] text-white-300">
                  {post.updatedAt}
                </span>
                <User className="ml-4 h-4 w-4" />
                <span className="text-[14px] text-white-300">
                  {post.author}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'publications')],
    {
      pageSize: 100,
    },
  )

  console.log(JSON.stringify(response, null, 2))

  const posts = response.results.map((post) => {
    const updatedAt = format(
      new Date(post.last_publication_date),
      'dd MMMM yyyy',
      {
        locale: ptBR,
      },
    )

    return {
      slug: post.uid,
      title: post.data.title,
      subtitle: post.data.subtitle,
      author: post.data.author,
      updatedAt,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
