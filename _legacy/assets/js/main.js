// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'paper': '#fdfbf7', // 暖白纸张色
                'ink': '#2c2c2c',   // 墨色，不是纯黑
                'muted': '#8c8c8c',
                'accent': '#a89f91', // 莫兰迪棕
            },
            fontFamily: {
                'serif': ['"Noto Serif SC"', '"Playfair Display"', 'serif'],
                'sans': ['system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 初始化图标
    lucide.createIcons();

    // 滚动显现动画 (Intersection Observer)
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

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4');
                navbar.classList.remove('py-6', 'md:py-8');
            } else {
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4');
                navbar.classList.add('py-6', 'md:py-8');
            }
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
