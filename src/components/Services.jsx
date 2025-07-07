import { Leaf, Users, Landmark } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Nuestros Servicios ESG
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Acompañamos a empresas en su camino hacia la sostenibilidad con informes, estrategias y cumplimiento normativo.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Environmental */}
          <div className="bg-green-50 rounded-2xl shadow p-8 text-left hover:shadow-lg transition">
            <div className="mb-4 text-green-700">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Análisis Ambiental
            </h3>
            <p className="text-gray-600">
              Evaluamos el impacto ambiental de tu organización y desarrollamos estrategias sostenibles personalizadas.
            </p>
          </div>

          {/* Social */}
          <div className="bg-green-50 rounded-2xl shadow p-8 text-left hover:shadow-lg transition">
            <div className="mb-4 text-green-700">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Responsabilidad Social
            </h3>
            <p className="text-gray-600">
              Fortalecemos tus relaciones con empleados, comunidades y grupos de interés mediante prácticas éticas y transparentes.
            </p>
          </div>

          {/* Governance */}
          <div className="bg-green-50 rounded-2xl shadow p-8 text-left hover:shadow-lg transition">
            <div className="mb-4 text-green-700">
              <Landmark size={32} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Buen Gobierno
            </h3>
            <p className="text-gray-600">
              Asesoramos en la implementación de estructuras de gobernanza sólidas y alineadas con normativas europeas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
