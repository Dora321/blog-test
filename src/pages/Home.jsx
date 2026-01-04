import { useReveal } from '../hooks/useReveal';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Gallery from '../components/home/Gallery';
import Journal from '../components/home/Journal';

export default function Home() {
    useReveal();

    return (
        <div className="flex flex-col">
            <Hero />
            <About />
            <Gallery />
            <Journal />
        </div>
    );
}
