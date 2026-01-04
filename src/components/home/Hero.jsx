import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gray-200 rounded-full blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>

            <div className="z-10 text-center space-y-6 md:space-y-8">
                <p className="text-accent tracking-[0.3em] text-xs md:text-sm uppercase animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Est. 2024 · Personal Space
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide text-ink animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    在薄情的世界里，<br className="md:hidden" />
                    <span className="italic font-serif text-gray-400">深情</span>地活着。
                </h1>
                <p className="text-muted text-sm md:text-base tracking-widest max-w-lg mx-auto leading-loose animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    记录书籍、电影、偶尔的旅行，<br />以及那些转瞬即逝的微小感动。
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <a href="#about">
                    <ArrowDown className="w-6 h-6 text-ink font-thin" />
                </a>
            </div>
        </header>
    );
}
