import { format, formatDistanceToNow } from 'date-fns'
import { Calendar, Clock, User } from 'lucide-react'

import { getPrismicClient } from '../../service/prismic'
import { GetServerSideProps } from 'next'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'

type PostProps = {
  posts: {
    slug: string
    title: string
    subtitle: string
    updatedAt: string
    createdAt: string
    author: string
    banner: string
    excerpt: string
  }
}

interface ResponseProps {
  data: {
    title: string
    subtitle: string
    content: Array<{
      type: string
      text: string
    }>
    author: string
    banner: {
      url: string
    }
    last_publication_date: string | null
  }
}

export default function Posts({ posts }: PostProps) {
  return (
    <main className="max-w-screen mx-auto">
      <Image
        className="mx-auto flex"
        src={posts.banner}
        width={730}
        height={30}
        alt={'eat sleep code repeat'}
      />
      <article className="mx-auto mt-5 h-screen max-w-[720px] justify-start">
        <h1 className="text-5xl font-bold text-white-100">{posts.title}</h1>

        <div className="mt-4 flex gap-1">
          <Calendar className="h-4 w-4" />
          <span className="text-[14px] text-white-300">{posts.updatedAt}</span>
          <User className="ml-4 h-4 w-4" />
          <span className="text-[14px] text-white-300">{posts.author}</span>
          <Clock className="ml-4 h-4 w-4" />
          <span className="text-[14px] text-white-300">{posts.createdAt}</span>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-white-100">
          {posts.subtitle}
        </h1>

        <div
          className="text-1xl text-justify leading-10 text-white-200"
          dangerouslySetInnerHTML={{ __html: posts.excerpt }}
        />
      </article>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params || {} // Add a default value for params to avoid the "undefined" error

  const prismic = getPrismicClient()

  const response: ResponseProps = await prismic.getByUID(
    'publications',
    String(slug),
    {},
  )

  const posts = {
    slug,
    title: response.data.title,
    subtitle: response.data.subtitle,
    content: response.data.content,
    author: response.data.author,
    banner: response.data.banner.url,
    excerpt:
      response.data.content.find((content) => content.type === 'paragraph')
        ?.text ?? '',

    updatedAt: format(
      new Date(response.last_publication_date),
      'dd MMMM yyyy',
      {
        locale: ptBR,
      },
    ),

    createdAt: formatDistanceToNow(new Date(response.last_publication_date), {
      locale: ptBR,
    }),
  }

  return {
    props: {
      posts,
    },
  }
}
