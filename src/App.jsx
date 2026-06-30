import React from "react";
// Importaciones de Navbar
import NavbarDesktop from "./components/Navbar/Navbar.jsx";
import NavbarMobile from "./components/Navbar/NavbarMobile.jsx";

// Importaciones de Hero
import HeroDesktop from "./components/Hero/Hero.jsx";
import HeroMobile from "./components/Hero/HeroMobile.jsx";

// Importaciones de Footer
import FooterDesktop from "./components/Footer/Footer.jsx";
import FooterMobile from "./components/Footer/FooterMobile.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] text-slate-900 relative antialiased flex flex-col justify-between">

      {/* --- SECCIÓN NAVBAR --- */}
      {/* Se renderiza Navbar.jsx en escritorio y NavbarMobile.jsx en celulares */}
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>

      {/* --- SECCIÓN CONTENIDO PRINCIPAL (HERO) --- */}
      {/* Se renderiza Hero.jsx en escritorio y HeroMobile.jsx en celulares */}
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
      <div className="block md:hidden">
        <HeroMobile />
      </div>

      {/* --- SECCIÓN BARRA INFERIOR (FOOTER) --- */}
      {/* Se renderiza Footer.jsx en escritorio y FooterMobile.jsx en celulares */}
      <div className="hidden md:block">
        <FooterDesktop />
      </div>
      <div className="block md:hidden">
        <FooterMobile />
      </div>

    </div>
  );
}

export default App;