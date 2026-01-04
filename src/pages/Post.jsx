import { ArrowLeft, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function Post() {
    useReveal();

    return (
        <article className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
            {/* Back Button */}
            <Link to="/#journal"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-12 animate-fade-in-up">
                <ArrowLeft className="w-4 h-4" />
                BACK TO JOURNAL
            </Link>

            {/* Header */}
            <header className="mb-12 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <p className="text-xs tracking-[0.2em] text-accent uppercase mb-4">2024.05.20 · Thoughts</p>
                <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-8">论孤独的必要性</h1>
                <div className="h-[1px] w-20 bg-gray-200 mx-auto"></div>
            </header>

            {/* Content */}
            <div className="prose prose-stone prose-lg mx-auto font-light leading-loose text-justify animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-ink">
                    在这个过度连接的时代，保持断联似乎成了一种奢侈。昨天关掉手机读了一整下午的黑塞，才发现内心的噪音终于平息了。
                </p>
                <p className="mb-6">
                    我们习惯了随时随地被信息轰炸，却忘记了如何与自己独处。孤独不是寂寞，而是一种清醒的自我审视。正如里尔克所说：“这是我们必须时常回去的地方。”
                </p>
                <div className="aspect-[16/9] bg-gray-100 my-10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1499750310159-5254f4cc1575?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Reading"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    <p className="text-center text-xs text-muted mt-2 italic">A quiet afternoon.</p>
                </div>
                <p className="mb-6">
                    当我重新打开手机，并在社交网络上发布这条动态时，一种荒谬感油然而生。或许我们都在表演生活，而真正的生活往往发生在那些不被记录的时刻。
                </p>
                <p>
                    希望在这个喧嚣的世界里，我们都能保留一处属于自己的精神角落。不大，但足够安放灵魂。
                </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-16 text-gray-200">
                <div className="h-[1px] flex-1 bg-gray-200"></div>
                <Feather className="w-4 h-4" />
                <div className="h-[1px] flex-1 bg-gray-200"></div>
            </div>
        </article>
    );
}
