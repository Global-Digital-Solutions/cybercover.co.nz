import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | CyberCover Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date, authors: [post.author] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <Link href="/blog/" className="text-teal-600 font-semibold hover:text-teal-700">← Back to Blog</Link>
      </main>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[400px] flex items-end" style={{ backgroundImage: post.image ? `url(${post.image})` : 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-800/25 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <Link href="/blog/" className="text-teal-400 hover:text-white transition mb-4 inline-block text-sm font-semibold">← Back to Blog</Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-semibold">{post.category}</span>
            <span className="text-slate-300 text-sm">{post.author}</span>
            <span className="text-slate-400 text-sm">{post.readTime}</span>
            <span className="text-slate-400 text-sm">{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">{post.title}</h1>
        </div>
      </section>

      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-sm md:prose-base max-w-none text-slate-700 mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="border-t border-slate-200 pt-8 mt-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">About the Author</h3>
                <p className="text-slate-700 text-sm">{post.author} is part of the CyberCover team — dedicated to making cyber insurance transparent and accessible for NZ businesses of all sizes.</p>
              </div>
            </div>
          </article>

          <aside>
            <div className="bg-teal-50 border-2 border-teal-600 rounded-xl p-6 mb-6 sticky top-4">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Need Cover?</h3>
              <p className="text-sm text-slate-700 mb-4">Get a free quote from licensed NZ cyber insurance brokers.</p>
              <QuoteForm compact />
            </div>

            {relatedPosts.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}/`} className="block p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-teal-400 transition">
                      <h4 className="font-semibold text-slate-900 text-sm mb-1 line-clamp-2 hover:text-teal-600">{rp.title}</h4>
                      <p className="text-xs text-slate-400">{rp.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[['Coverage Guide', '/coverage/'], ['Compare Insurers', '/compare/'], ['About CyberCover', '/about/'], ['Contact Us', '/contact/']].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-teal-600 hover:text-teal-700 font-semibold">→ {label}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Protected?</h2>
            <p className="text-lg text-slate-600 mb-8">Get tailored cyber insurance quotes from licensed NZ brokers. Free advice, no obligation.</p>
            <QuoteForm />
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://cybercover.co.nz/blog/${slug}/` },
        headline: post.title,
        description: post.excerpt,
        image: post.image || 'https://cybercover.co.nz/og-image.png',
        datePublished: post.date,
        dateModified: post.date,
        url: `https://cybercover.co.nz/blog/${slug}/`,
        author: { '@type': 'Organization', name: 'CyberCover', url: 'https://cybercover.co.nz' },
        publisher: { '@type': 'Organization', name: 'CyberCover', url: 'https://cybercover.co.nz', logo: { '@type': 'ImageObject', url: 'https://cybercover.co.nz/logo.png', width: 200, height: 60 } },
        articleSection: post.category,
        inLanguage: 'en-NZ',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cybercover.co.nz/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cybercover.co.nz/blog/' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://cybercover.co.nz/blog/${slug}/` },
        ],
      })}} />
    </>
  );
}
