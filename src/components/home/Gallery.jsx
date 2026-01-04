import { Camera } from 'lucide-react';

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 px-4 md:px-12 bg-[#f6f4ef]">
            <div className="max-w-7xl mx-auto mb-16 text-center reveal">
                <h2 className="text-2xl tracking-[0.5em] text-ink mb-4">捕风捉影</h2>
                <p className="text-accent text-sm italic font-serif">"Photography is the pause button of life."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Col 1 */}
                <div className="space-y-8 mt-0 md:mt-12">
                    <div className="group relative reveal">
                        <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                className="w-full h-full object-cover img-hover-effect" alt="Rain" />
                        </div>
                        <p className="mt-3 text-xs tracking-widest text-muted text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            雨季来信
                        </p>
                    </div>
                    <div className="group relative reveal">
                        <div className="aspect-square overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                className="w-full h-full object-cover img-hover-effect" alt="Coffee" />
                        </div>
                        <p className="mt-3 text-xs tracking-widest text-muted text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            黑咖啡与书
                        </p>
                    </div>
                </div>

                {/* Col 2 */}
                <div className="space-y-8">
                    <div className="group relative reveal">
                        <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                className="w-full h-full object-cover img-hover-effect" alt="Cinque Terre" />
                        </div>
                        <p className="mt-3 text-xs tracking-widest text-muted text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            那年意大利
                        </p>
                    </div>
                    <div className="bg-white p-8 flex items-center justify-center text-center aspect-[4/3] reveal shadow-sm">
                        <div>
                            <Camera className="w-6 h-6 mx-auto mb-4 text-accent" />
                            <p className="text-sm font-serif text-muted">Contax T3</p>
                            <p className="text-xs text-gray-400 mt-2">Kodak Gold 200</p>
                        </div>
                    </div>
                </div>

                {/* Col 3 */}
                <div className="space-y-8 mt-0 md:mt-24">
                    <div className="group relative reveal">
                        <div className="aspect-square overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                className="w-full h-full object-cover img-hover-effect" alt="Books" />
                        </div>
                        <p className="mt-3 text-xs tracking-widest text-muted text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            精神角落
                        </p>
                    </div>
                    <div className="group relative reveal">
                        <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1516575334481-f85287c2c81d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                className="w-full h-full object-cover img-hover-effect" alt="Window" />
                        </div>
                        <p className="mt-3 text-xs tracking-widest text-muted text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            窗边的猫
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
