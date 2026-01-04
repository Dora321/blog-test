import Navbar from './Navbar';
import Footer from './Footer';
import NoiseOverlay from './NoiseOverlay';
import { Music } from 'lucide-react';

export default function Layout({ children }) {
    return (
        <div className="antialiased relative selection:bg-accent selection:text-white">
            <NoiseOverlay />
            <Navbar />
            <main>{children}</main>

            {/* Music Player Mockup */}
            <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm border border-white/50 animate-float">
                <div className="w-8 h-8 bg-ink rounded-full flex items-center justify-center">
                    <Music className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col pr-4">
                    <span className="text-[10px] uppercase tracking-widest text-muted">Now Playing</span>
                    <span className="text-xs font-serif text-ink">The Sound of Silence - Simon & Garfunkel</span>
                </div>
            </div>

            <Footer />
        </div>
    );
}
