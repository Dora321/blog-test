import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';

export default function Journal() {
    return (
        <section id="journal" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-16 reveal">
                <h2 className="text-3xl font-serif">碎碎念</h2>
                <a href="#" className="text-xs tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-colors">READ ALL</a>
            </div>

            <div className="space-y-12">
                {posts.map((post) => (
                    <article key={post.id} className="group cursor-pointer reveal">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-baseline border-t border-gray-200 pt-8 transition-all duration-500 hover:border-accent">
                            <div className="text-xs text-muted tracking-widest font-sans">
                                {post.date}
                            </div>
                            <div className="md:col-span-3">
                                <Link to={`/post/${post.id}`}>
                                    <h3 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
