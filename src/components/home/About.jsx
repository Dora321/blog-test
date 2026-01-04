export default function About() {
    return (
        <section id="about" className="min-h-screen py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Image */}
                <div className="md:col-span-5 relative reveal">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                        <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Portrait aesthetic"
                            className="w-full h-full object-cover img-hover-effect grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    {/* Decorative Text */}
                    <div className="absolute -bottom-10 -right-10 hidden md:block vertical-text text-6xl text-gray-100 font-bold -z-10 select-none">
                        独自等待
                    </div>
                </div>

                {/* Text */}
                <div className="md:col-span-6 md:col-start-7 space-y-8 reveal">
                    <div className="flex items-center gap-4">
                        <span className="h-[1px] w-12 bg-accent"></span>
                        <span className="text-accent text-sm tracking-widest uppercase">About Me</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif">是个做梦的人，<br />也是个写字的人。</h2>
                    <div className="space-y-6 text-muted leading-loose font-light text-justify">
                        <p>
                            你好，我是Joyce。坐标南方的一座小城。
                            比起宏大的叙事，我更着迷于生活的细枝末节：午后三点洒在书页上的阳光，雨天泥土的腥味，或是老电影里模糊的胶片颗粒。
                        </p>
                        <p>
                            这里没有复杂的职场头衔，只有我作为“观察者”收集到的世界碎片。
                            我喜欢摄影、独立音乐，最近正在尝试手冲咖啡。
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 pt-4">
                        <span className="px-4 py-1 border border-gray-200 text-xs tracking-wider text-gray-500 rounded-full hover:border-accent hover:text-accent transition-colors cursor-default">Photography</span>
                        <span className="px-4 py-1 border border-gray-200 text-xs tracking-wider text-gray-500 rounded-full hover:border-accent hover:text-accent transition-colors cursor-default">Literature</span>
                        <span className="px-4 py-1 border border-gray-200 text-xs tracking-wider text-gray-500 rounded-full hover:border-accent hover:text-accent transition-colors cursor-default">Indie Folk</span>
                        <span className="px-4 py-1 border border-gray-200 text-xs tracking-wider text-gray-500 rounded-full hover:border-accent hover:text-accent transition-colors cursor-default">Cats</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
