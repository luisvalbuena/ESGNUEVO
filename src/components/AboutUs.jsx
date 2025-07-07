export default function AboutUs() {
    return (
      <section id="sobre-nosotros" className="w-full bg-green-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Imagen ilustrativa */}
          <div className="w-full">
            <img 
              src="/about-us-esg.png" 
              alt="Sobre DUERO ESG" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
  
          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Comprometidos con la sostenibilidad real
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              DUERO ESG nace en Valladolid con la misión de ayudar a las empresas a alinear su estrategia con los estándares ESG (medioambientales, sociales y de gobernanza).
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Somos un equipo multidisciplinar con experiencia en sostenibilidad, análisis de impacto, cumplimiento normativo y responsabilidad corporativa. Apostamos por soluciones claras, medibles y adaptadas a cada organización.
            </p>
            <p className="text-gray-700 text-lg">
              Creemos que el cambio empieza por los datos, pero se consolida con decisiones responsables.
            </p>
          </div>
        </div>
      </section>
    );
  }
  