import React from 'react';
import logoImg from '../../assets/logo.jpeg';

function NavbarMobile() {
    return (
        <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
            {/* Cápsula flotante blanca con sombra */}
            <nav className="w-full max-w-md bg-white rounded-full px-5 py-2.5 flex items-center justify-between shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-slate-200/60">

                {/* LOGO PRINCIPAL */}
                <div className="relative group flex items-center justify-center">
                    <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center">
                        <span className="relative z-10 p-2 text-xs text-white whitespace-nowrap bg-slate-800 rounded-lg shadow-lg">
                            SABIMP
                        </span>
                        <div className="w-3 h-3 -mt-2 rotate-45 bg-slate-800"></div>
                    </div>

                    <div className="w-10 h-10 bg-slate-50 p-1.5 rounded-full flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner cursor-pointer">
                        <img src={logoImg} alt="Logo SBP" className="w-full h-full object-contain rounded-full" />
                    </div>
                </div>

                {/* ICONO: INICIO */}
                <div className="relative group flex items-center justify-center">
                    <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center">
                        <span className="relative z-10 p-2 text-xs text-white whitespace-nowrap bg-slate-800 rounded-lg shadow-lg">
                            Inicio
                        </span>
                        <div className="w-3 h-3 -mt-2 rotate-45 bg-slate-800"></div>
                    </div>

                    <a href="#inicio" className="text-xl p-1.5 hover:bg-slate-50 rounded-full transition-colors">
                        🏠
                    </a>
                </div>

                {/* ICONO: CONTACTO */}
                <div className="relative group flex items-center justify-center">
                    <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center">
                        <span className="relative z-10 p-2 text-xs text-white whitespace-nowrap bg-slate-800 rounded-lg shadow-lg">
                            Contacto
                        </span>
                        <div className="w-3 h-3 -mt-2 rotate-45 bg-slate-800"></div>
                    </div>

                    <a href="#contacto" className="text-xl p-1.5 hover:bg-slate-50 rounded-full transition-colors">
                        ✉️
                    </a>
                </div>

                {/* ICONO: PLANES */}
                <div className="relative group flex items-center justify-center">
                    <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center">
                        <span className="relative z-10 p-2 text-xs text-white whitespace-nowrap bg-slate-800 rounded-lg shadow-lg">
                            Planes
                        </span>
                        <div className="w-3 h-3 -mt-2 rotate-45 bg-slate-800"></div>
                    </div>

                    <a href="#planes" className="text-xl p-1.5 hover:bg-slate-50 rounded-full transition-colors">
                        💰
                    </a>
                </div>

                {/* BOTÓN: INICIAR SESIÓN */}
                <div className="relative group flex items-center justify-center">
                    <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center">
                        <span className="relative z-10 p-2 text-xs text-white whitespace-nowrap bg-slate-800 rounded-lg shadow-lg">
                            Iniciar Sesión
                        </span>
                        <div className="w-3 h-3 -mt-2 rotate-45 bg-slate-800"></div>
                    </div>

                    <button className="bg-[#0A4B91] hover:bg-[#083B73] text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-[0_4px_10px_rgba(10,75,145,0.2)] transition-all">
                        Iniciar Sesión
                    </button>
                </div>

            </nav>
        </header>
    );
}

export default NavbarMobile;