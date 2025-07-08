

export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Logo y descripción */}
        <div>
          <h3 className="text-2xl font-bold mb-2">
            DUERO <span className="text-green-300">ESG</span>
          </h3>
          <p className="text-sm text-green-100">
            Acompañamos a empresas en su transición hacia un futuro más sostenible, ético y transparente.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-green-100 text-sm">
            <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="#sobre-nosotros" className="hover:text-white">Sobre Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contacto</h4>
          <ul className="text-green-100 text-sm space-y-2">
            <li>Email: info.dueroesg@gmail.com</li>
            <li>Valladolid, España</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-green-700 pt-6 text-center text-xs text-green-300">
        © {new Date().getFullYear()} DUERO ESG. Todos los derechos reservados.
      </div>
    </footer>
  );
}
