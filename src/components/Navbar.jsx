import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to hash if present
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const navClasses = `fixed top-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-ink transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 md:py-4' : ''
        }`;

    return (
        <>
            <nav className={navClasses} id="navbar">
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-widest hover:opacity-70 transition-opacity">
                    JOYCE.
                </Link>
                <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase opacity-80">
                    {['about', 'gallery', 'journal', 'contact'].map((item) => (
                        <a key={item} href={`/#${item}`} className="hover:text-accent transition-colors relative group">
                            {item === 'about' ? '关于' : item === 'gallery' ? '光影' : item === 'journal' ? '随笔' : '写信'}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu className="w-6 h-6" />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-paper z-50 flex flex-col justify-center items-center text-center space-y-8 p-8 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <button className="absolute top-6 right-6 p-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="w-8 h-8 text-ink" />
                </button>
                {['about', 'gallery', 'journal', 'contact'].map((item) => (
                    <a key={item} href={`/#${item}`} className="text-2xl tracking-widest text-ink" onClick={() => setIsMobileMenuOpen(false)}>
                        {item === 'about' ? '关于' : item === 'gallery' ? '光影' : item === 'journal' ? '随笔' : '写信'}
                    </a>
                ))}
            </div>
        </>
    );
}
