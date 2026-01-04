import { Link } from 'react-router-dom';

export default function Journal() {
    const posts = [
        {
            date: '2024.05.20',
            title: '论孤独的必要性',
            excerpt: '在这个过度连接的时代，保持断联似乎成了一种奢侈。昨天关掉手机读了一整下午的黑塞，才发现内心的噪音终于平息了...',
            link: '/post'
        },
        {
            date: '2024.04.12',
            title: '春日限定：樱花与气泡水',
            excerpt: '并不是为了打卡，只是想在花瓣落下的那一刻，捕捉一点确定的温柔。自制了一杯海盐樱花气泡水，味道是淡淡的咸和甜。',
            link: '#'
        },
        {
            date: '2024.03.05',
            title: '再见，挪威的森林',
            excerpt: '重读经典总会有新的感悟。以前只看到直子的破碎，现在却看到了绿子的生命力。或许我们都应该努力成为像绿子那样，在生活的暴风雨中也能煎出完美煎蛋卷的人。',
            link: '#'
        }
    ];

    return (
        <section id="journal" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-16 reveal">
                <h2 className="text-3xl font-serif">碎碎念</h2>
                <a href="#" className="text-xs tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-colors">READ ALL</a>
            </div>

            <div className="space-y-12">
                {posts.map((post, index) => (
                    <article key={index} className="group cursor-pointer reveal">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-baseline border-t border-gray-200 pt-8 transition-all duration-500 hover:border-accent">
                            <div className="text-xs text-muted tracking-widest font-sans">
                                {post.date}
                            </div>
                            <div className="md:col-span-3">
                                <Link to={post.link}>
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
