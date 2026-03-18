import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { getPostBySlug } from '@/src/lib/posts'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
          <Link
            href="/blog"
            className="text-accent hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </span>
            {post.tags.length > 0 && (
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.tags.join(', ')}
              </span>
            )}
          </div>
        </header>

        <div className="prose-custom" dangerouslySetInnerHTML={{ __html: simpleMarkdown(post.content) }} />
      </div>
    </article>
  )
}

function simpleMarkdown(content: string): string {
  let html = content
  
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-4 mb-2">$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
  html = html.replace(/^- (.+)$/gm, '<li class="ml-4 text-muted-foreground">$1</li>')
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-4 text-muted-foreground">$1</li>')
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  html = html.replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">$1</code>')
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-accent hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
  
  const lines = html.split('\n')
  html = lines.map((line) => {
    if (
      line.startsWith('<h') ||
      line.startsWith('<li') ||
      line.startsWith('<ul') ||
      line.startsWith('<ol') ||
      line.trim() === ''
    ) {
      return line
    }
    if (!line.startsWith('<')) {
      return `<p class="text-muted-foreground leading-relaxed mb-4">${line}</p>`
    }
    return line
  }).join('\n')
  
  html = html.replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>')

  return html
}
