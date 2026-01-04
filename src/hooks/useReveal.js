import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
    const location = useLocation();

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Small delay to ensure DOM is ready and elements are rendered
        const timeoutId = setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, [location]);
}
