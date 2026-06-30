import React from 'react';

function FooterMobile() {
    return (
        <footer className="flex md:hidden w-full bg-[#0b1329] pt-6 pb-24 border-t border-slate-800 items-center justify-center px-4 text-center">
            {/* Añadimos un padding inferior (pb-24) para que el menú flotante inferior no tape las letras */}
            <p className="text-xs tracking-wide text-slate-400 font-medium leading-relaxed">
                &copy; {new Date().getFullYear()} SABIMP. <br /> Todos los derechos reservados.
            </p>
        </footer>
    );
}

export default FooterMobile;