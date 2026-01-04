import { Instagram, Twitter, BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-ink text-paper py-20 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-12 reveal">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif">见信如晤</h2>
                    <p className="text-gray-400 font-light text-sm tracking-widest">如有共鸣，欢迎来信</p>
                </div>

                <a href="mailto:hello@joyce.com"
                    className="inline-block text-2xl md:text-4xl font-serif border-b border-gray-600 pb-2 hover:text-accent hover:border-accent transition-all">
                    hello@joyce.com
                </a>

                <div className="flex justify-center gap-8 pt-8">
                    <a href="#" className="hover:text-accent transition-colors transform hover:-translate-y-1 duration-300">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-accent transition-colors transform hover:-translate-y-1 duration-300">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-accent transition-colors transform hover:-translate-y-1 duration-300">
                        <BookOpen className="w-5 h-5" />
                    </a>
                </div>

                <div className="pt-12 text-xs text-gray-600 tracking-widest uppercase flex flex-col gap-2">
                    <p>&copy; 2026 Joyce's Space. All Rights Reserved.</p>
                    <p>Designed with <span className="text-accent">❤</span> by Gemini</p>
                </div>
            </div>
        </footer>
    );
}
