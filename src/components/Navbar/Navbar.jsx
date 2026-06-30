import React from 'react';
import logoImg from '../../assets/logo.jpeg';

function Navbar() {
    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            {/* Contenedor Alineado del Navbar Píldora Flotante con Sombra */}
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between h-16 bg-white rounded-full px-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.1)] border border-slate-200/50">

                {/* Lado Izquierdo: LOGO REAL RECTANGULAR */}
                <div className="flex items-center space-x-3 cursor-pointer h-full">
                    {/* Contenedor adaptado para mantener la proporción del logo SBP */}
                    <div className="h-10 w-auto flex items-center justify-center overflow-hidden">
                        <img
                            src={logoImg}
                            alt="SABIMP Logotipo"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                    {/* Texto de la marca en el azul corporativo de tu logo */}
                    <span className="text-xl font-black tracking-wider text-[#00529b]">
                        SABIMP
                    </span>
                </div>

                {/* Centro: Enlaces Claros con Emojis */}
                <div className="hidden md:flex items-center space-x-8 h-full">
                    <a href="#inicio" className="flex items-center space-x-1.5 text-sm font-semibold text-slate-600 hover:text-[#00529b] transition-colors duration-200">
                        <span>🏠</span>
                        <span>Inicio</span>
                    </a>
                    <a href="#contacto" className="flex items-center space-x-1.5 text-sm font-semibold text-slate-600 hover:text-[#00529b] transition-colors duration-200">
                        <span>✉️</span>
                        <span>Contacto</span>
                    </a>
                    <a href="#planes" className="flex items-center space-x-1.5 text-sm font-semibold text-slate-600 hover:text-[#00529b] transition-colors duration-200">
                        <span>💰</span>
                        <span>Planes</span>
                    </a>
                </div>

                {/* Lado Derecho: Botón Iniciar Sesión con el azul exacto de tu logo */}
                <div className="h-full flex items-center">
                    <button className="bg-[#00529b] hover:bg-[#003d73] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-sm transition-all duration-200 active:scale-95">
                        Iniciar Sesión
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Navbar;