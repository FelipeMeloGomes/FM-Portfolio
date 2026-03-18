import Link from 'next/link'
import { getAllPosts } from '@/src/lib/posts'
import { AnimatedSection } from '@/components/animations'
import { Calendar, Tag } from 'lucide-react'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <AnimatedSection className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Blog
          </h1>

          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Nenhum post ainda. Volte em breve!
            </p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
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
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
