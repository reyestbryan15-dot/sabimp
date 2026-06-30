import React from 'react';

function HeroMobile() {
    return (
        <div className="block md:hidden w-full pt-16 pb-32 bg-gradient-to-b from-[#E8F2FC] to-white px-4 text-center">
            <h1 className="text-3xl font-[900] tracking-tight text-slate-900 leading-tight mb-4">
                Virtualiza tu saber<br />Transforma tu camino
            </h1>
            <div className="w-16 h-1 bg-[#FF9F1C] mx-auto mb-6 rounded-sm"></div>
            <p className="text-base text-slate-500 max-w-sm mx-auto mb-8">
                Plataforma sólida para aprender y enseñar, desde cualquier lugar
            </p>

            {/* Carrusel vertical simple para que las fotos queden perfectas en celular */}
            <div className="flex flex-col gap-4 max-w-sm mx-auto text-left">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md border-2 border-white">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=cover&w=500&q=80" alt="..." className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 bg-[#0A4B91]/95 text-white px-2.5 py-1 rounded-full text-[11px] font-semibold">🚀 Aprendizaje colaborativo</span>
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden shadow-md border-2 border-white">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=cover&w=500&q=80" alt="..." className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 bg-[#0A4B91]/95 text-white px-2.5 py-1 rounded-full text-[11px] font-semibold">💻 Flexibilidad total</span>
                </div>
            </div>
        </div>
    );
}

export default HeroMobile;