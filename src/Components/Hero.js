import React from 'react'

const Hero = () => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-36 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Enfocándonos en el rendimiento del estudiante
        </h1>
        <p className="mb-8 leading-relaxed">GlassCore es una app capaz de administrar tu informacion academica y ayudarte a mejorar en esta. Nuestro enfoque es mejorar el rendimiento academico de todos nuestros usuarios de tal manera que obtengan un enfoque eficaz en su manera de trabajar. Nuestro objetivo es el estudiante y nuestra mision es acompañarlo en su camino profesional.</p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="/imagenes/estudiante.png"></img>
      </div>
    </div>

    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/imagenes/Estudiante2.png"></img>
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Jacob</h2>
              <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
              <p className="text-base">Integrante de equipo</p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4" />Quiero expresar mi más sincero agradecimiento a cada uno de ustedes por su dedicación, esfuerzo y compromiso en el desarrollo y implementación de nuestro sistema de rendimiento académico. Como líder de este equipo, estoy inmensamente orgulloso de lo que hemos logrado juntos.
            Hemos trabajado incansablemente para crear una herramienta que no solo simplifica la gestión de datos académicos, sino que también está teniendo un impacto positivo en la experiencia educativa de nuestros usuarios. Hemos superado obstáculos, enfrentado desafíos y perseverado con determinación en cada etapa del proyecto.
          </div>
        </div>
      </div>
    </div>
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">1</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Seguridad</h2>
            <p className="leading-relaxed">La seguridad del usuario es una preocupación esencial en el ámbito académico, y estamos comprometidos en garantizar que su experiencia sea protegida en todo momento. Nuestra plataforma se enorgullece de implementar rigurosas medidas de seguridad que salvaguardan su información personal y su índice académico. </p>
          </div>
        </div>
      </div>
      <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">2</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Compatibilidad</h2>
            <p className="leading-relaxed">Al priorizar la compatibilidad con navegadores, no solo mejora la usabilidad de su producto, sino que también aumenta la retención de usuarios y la satisfacción del cliente. Además, al llegar a un público más amplio, tiene la oportunidad de expandir su alcance y aumentar sus conversiones.</p>
          </div>
        </div>
      </div>
      <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">3</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Almacenamiento de Datos</h2>
            <p className="leading-relaxed"> Nuestra infraestructura de almacenamiento de datos utiliza las últimas tecnologías de seguridad para proteger su información contra amenazas cibernéticas y garantizar su integridad a lo largo del tiempo. Además, cumplimos rigurosamente con las regulaciones de privacidad y protección de datos, lo que significa que puede confiar en que sus datos estarán en buenas manos.</p>
          </div>
        </div>
      </div>
      <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">4</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Registro de Usuarios</h2>
            <p className="leading-relaxed">Nuestro sistema de registro de usuarios se destaca por su facilidad de uso y flexibilidad. Con una interfaz intuitiva, podrás registrar y mantener la información de todos los usuarios de tu institución de manera eficiente.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <p className="leading-relaxed">Nuestra principal prioridad en este proyecto fue la usabilidad. Diseñamos una interfaz limpia y fácil de navegar que permite a los usuarios acceder rápidamente a la información que necesitan. Implementamos una estructura de navegación intuitiva que garantiza una experiencia fluida, desde el registro de usuarios hasta la consulta de informes detallados.</p>
            <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Donato</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <p className="leading-relaxed">En el diseño de la interfaz de usuario, me he centrado en la simplicidad y la accesibilidad. Cada pantalla ha sido cuidadosamente diseñada para proporcionar una experiencia de usuario agradable y sin complicaciones. Los colores, las tipografías y la disposición de los elementos se han seleccionado meticulosamente para garantizar que la información sea clara y fácil de entender.</p>
            <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Jacob</h2>
            <p className="text-gray-500">UI Develeoper</p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 p-4">
          <div className="h-full text-center">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <p className="leading-relaxed">Hemos implementado un sistema integral que no solo simplifica la gestión de datos de usuarios, sino que también ofrece una visión profunda y significativa del desempeño académico. Hemos diseñado interfaces intuitivas para facilitar el registro de usuarios y la actualización de datos, ahorrando tiempo y recursos valiosos para todos.</p>
            <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Mario</h2>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero