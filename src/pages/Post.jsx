import { ArrowLeft, Feather } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { posts } from '../data/posts';
import { useEffect } from 'react';

export default function Post() {
    useReveal();
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-serif mb-4">Post not found</h1>
                    <Link to="/" className="text-accent hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

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
                <p className="text-xs tracking-[0.2em] text-accent uppercase mb-4">{post.date} · {post.category}</p>
                <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-8">{post.title}</h1>
                <div className="h-[1px] w-20 bg-gray-200 mx-auto"></div>
            </header>

            {/* Content */}
            <div
                className="prose prose-stone prose-lg mx-auto font-light leading-loose text-justify animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Divider */}
            <div className="flex items-center gap-4 my-16 text-gray-200">
                <div className="h-[1px] flex-1 bg-gray-200"></div>
                <Feather className="w-4 h-4" />
                <div className="h-[1px] flex-1 bg-gray-200"></div>
            </div>
        </article>
    );
}
