import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-[#0b1329] py-6 border-t border-slate-800 flex items-center justify-center">
            <div className="text-center px-4">
                <p className="text-sm tracking-wide text-slate-400 font-medium">
                    &copy; {new Date().getFullYear()} SABIMP. Todos los derechos reservados. Mockup UI Estructural Avanzado.
                </p>
            </div>
        </footer>
    );
}

export default Footer;