import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight mb-6">
            Informes ESG claros. <br /> Impacto real y medible.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            En DUERO ESG te ayudamos a integrar la sostenibilidad en tu estrategia empresarial con reportes sólidos, éticos y alineados con normativas.
          </p>
          <a
            href="#servicios"
            className="inline-flex items-center bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-800 transition"
          >
            Descubre nuestros servicios
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Optional Image or Graphic */}
        <div className="w-full md:w-1/2">
          <img 
            src="/hero-esg-illustration.png" 
            alt="Ilustración ESG" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
