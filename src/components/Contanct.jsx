export default function Contact() {
    return (
      <section id="contacto" className="w-full bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-gray-600">
            Ponte en contacto con nosotros para conocer cómo podemos ayudarte a integrar la sostenibilidad en tu empresa.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="text-left space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-green-700">Email</h3>
              <p className="text-gray-700">info.dueroesg@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700">Ubicación</h3>
              <p className="text-gray-700">Valladolid, España</p>
            </div>
          </div>
  
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
  
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-800 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    );
  }
  