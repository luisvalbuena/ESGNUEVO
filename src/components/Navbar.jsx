

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-green-700">
          DUERO <span className="text-gray-600">ESG</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#servicios" className="hover:text-green-700 transition">Servicios</a>
          <a href="#sobre-nosotros" className="hover:text-green-700 transition">Sobre Nosotros</a>
          <a href="#contacto" className="hover:text-green-700 transition">Contacto</a>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#servicios" onClick={toggleMenu}>Servicios</a>
          <a href="#sobre-nosotros" onClick={toggleMenu}>Sobre Nosotros</a>
          <a href="#contacto" onClick={toggleMenu}>Contacto</a>
        </div>
      )}
    </nav>
  );
}
