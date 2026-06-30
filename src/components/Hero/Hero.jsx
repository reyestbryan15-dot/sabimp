import React from 'react';

function Hero() {
    return (
        <main className="w-full pt-40 pb-24 bg-gradient-to-br from-[#E8F2FC] to-white px-5">
            <div className="max-w-[900px] mx-auto text-center relative">

                <h1 className="text-4xl md:text-[54px] font-[900] tracking-tight text-slate-900 leading-[1.2] mb-6">
                    Virtualiza tu saber<br />Transforma tu camino
                </h1>

                <div className="w-20 h-1 bg-[#FF9F1C] mx-auto mb-8 rounded-sm"></div>

                <p className="text-lg md:text-xl text-slate-500 max-w-[600px] mx-auto font-normal mb-12">
                    Plataforma sólida para aprender y enseñar, desde cualquier lugar
                </p>

                {/* GALERÍA DE IMÁGENES MOCKUP */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-5 max-w-[850px] mx-auto text-left">
                    <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(10,75,145,0.15)] border-4 border-white cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=cover&w=800&q=80"
                            alt="Estudiantes colaborando"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-4 left-4 bg-[#0A4B91]/90 backdrop-blur-[4px] text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                            🚀 Aprendizaje colaborativo
                        </span>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="group relative h-[165px] rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] border-4 border-white cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=cover&w=600&q=80"
                                alt="Estudiante frente a laptop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute bottom-4 left-4 bg-[#0A4B91]/90 backdrop-blur-[4px] text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                                💻 Flexibilidad total
                            </span>
                        </div>

                        <div className="group relative h-[165px] rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] border-4 border-white cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=cover&w=600&q=80"
                                alt="Jóvenes universitarios"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute bottom-4 left-4 bg-[#0A4B91]/90 backdrop-blur-[4px] text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                                🎓 Sin límites geográficos
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Hero;