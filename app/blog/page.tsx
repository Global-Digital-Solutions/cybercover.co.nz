import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Cyber Insurance Resources | NZ Business Guides | CyberCover.co.nz',
  description: 'Expert resources on cyber insurance for NZ businesses. Data breach response, ransomware, Privacy Act compliance, cost guides and more.',
};

export default function BlogPage() {
  return (
    <>
      <section className="relative min-h-[300px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Cyber Insurance Resources</h1>
          <p className="text-slate-200 text-lg max-w-2xl">Expert guides and resources on cyber risk, coverage, and protecting your NZ business.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <div className="h-48" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-6">
                <span className="inline-block px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-2">{post.category}</span>
                <h2 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 hover:text-teal-600">
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h2>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4 mb-4">
                  <span>{post.readTime}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
                <Link href={`/blog/${post.slug}/`} className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition">Read More →</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
