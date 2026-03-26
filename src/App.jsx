export default function App() {
  const whatsappBase = "https://wa.me/5492604128977";

  const obras = [
    {
      slug: "el-hombre-de-la-tierra",
      codigo: "01",
      nombre: "El Hombre de la Tierra",
      categoria: "Colección Costumbrista",
      autor: "Adrián Serafini",
      anio: "2026",
      precio: "$ 3.200.000",
      descripcion:
        "Escultura artesanal de inspiración rural, ideal para fincas, bodegas y espacios con identidad local.",
      historia:
        "Una obra que homenajea la memoria rural, el trabajo silencioso y el vínculo profundo entre el hombre y la tierra.",
      imagenPrincipal:
        "/obras/el-hombre-de-la-tierra/01-el-hombre-de-la-tierra-catalogo.jpg",
      imagenEntorno:
        "/obras/el-hombre-de-la-tierra/01-el-hombre-de-la-tierra-entorno.jpg",
      imagenDetalle:
        "/obras/el-hombre-de-la-tierra/01-el-hombre-de-la-tierra-rostro.jpg",
      ideal: ["Fincas", "Bodegas", "Hoteles rurales", "Casas de campo"],
      estilo: ["Rural", "Narrativo", "Artesanal"],
      extra: ["Obra por encargo", "Envíos a toda Argentina"],
    },
    {
      slug: "diosa-de-la-vendimia",
      codigo: "02",
      nombre: "Diosa de la Vendimia",
      categoria: "Colección Vendimial",
      autor: "Adrián Serafini",
      anio: "2026",
      precio: "$ 4.600.000",
      descripcion:
        "Pieza de fuerte impronta simbólica y escénica, ideal para bodegas, espacios temáticos y proyectos vinculados al universo del vino.",
      historia:
        "Una figura de fertilidad, celebración y abundancia, nacida del imaginario del viñedo y de la cultura del vino.",
      imagenPrincipal:
        "/obras/diosa-de-la-vendimia/02-diosa-de-la-vendimia-catalogo.jpg",
      imagenEntorno:
        "/obras/diosa-de-la-vendimia/02-diosa-de-la-vendimia-entorno.jpg",
      imagenDetalle:
        "/obras/diosa-de-la-vendimia/02-diosa-de-la-vendimia-rostro.jpg",
      ideal: ["Bodegas", "Wine lodges", "Jardines temáticos", "Hoteles boutique"],
      estilo: ["Simbólica", "Orgánica", "Escénica"],
      extra: ["Obra por encargo", "Envíos a toda Argentina"],
    },
    {
      slug: "mujer-ancestral",
      codigo: "03",
      nombre: "Mujer Ancestral",
      categoria: "Colección Mítica",
      autor: "Adrián Serafini",
      anio: "2026",
      precio: "$ 3.850.000",
      descripcion:
        "Escultura artesanal de inspiración mítica y femenina, pensada para espacios contemplativos y jardines con fuerte identidad visual.",
      historia:
        "Una presencia serena y antigua que parece surgir del paisaje, como si perteneciera a una memoria más vieja que el tiempo.",
      imagenPrincipal: "/obras/mujer-ancestral/03-mujer-ancestral-catalogo.jpg",
      imagenEntorno: "/obras/mujer-ancestral/03-mujer-ancestral-entorno.jpg",
      imagenDetalle: "/obras/mujer-ancestral/03-mujer-ancestral-rostro.jpg",
      ideal: ["Jardines de autor", "Espacios contemplativos", "Paisajismo", "Coleccionistas"],
      estilo: ["Mítica", "Serena", "Contemplativa"],
      extra: ["Obra por encargo", "Envíos a toda Argentina"],
    },
    {
      slug: "centinela-de-roma",
      codigo: "04",
      nombre: "Centinela de Roma",
      categoria: "Colección Histórica",
      autor: "Adrián Serafini",
      anio: "2026",
      precio: "$ 4.400.000",
      descripcion:
        "Escultura artesanal de inspiración histórica, creada para espacios que buscan fuerza visual, carácter épico y presencia monumental.",
      historia:
        "El guerrero sostiene en una mano la memoria de la muerte y en la otra la defensa del honor. Una pieza hecha para imponer relato.",
      imagenPrincipal: "/obras/centinela-de-roma/04-centinela-de-roma-catalogo.jpg",
      imagenEntorno: "/obras/centinela-de-roma/04-centinela-de-roma-entorno.jpg",
      imagenDetalle: "/obras/centinela-de-roma/04-centinela-de-roma-rostro.jpg",
      ideal: ["Coleccionistas", "Restaurantes temáticos", "Hoteles históricos", "Espacios culturales"],
      estilo: ["Histórica", "Épica", "Monumental"],
      extra: ["Obra por encargo", "Envíos a toda Argentina"],
    },
    {
      slug: "el-guardian-de-los-laberintos",
      codigo: "05",
      nombre: "El Guardián de los Laberintos",
      categoria: "Obras de Autor / Homenaje",
      autor: "Adrián Serafini",
      anio: "2026",
      precio: "$ 3.800.000",
      descripcion:
        "Figura inspirada en la esencia de Jorge Luis Borges, pensada para espacios culturales, bibliotecas, estudios y ambientes de contemplación intelectual.",
      historia:
        "No busca copiar un rostro solamente. Busca capturar el peso de las ideas, el tiempo, la memoria y los laberintos invisibles del pensamiento.",
      imagenPrincipal:
        "/obras/el-guardian-de-los-laberintos/05-el-guardian-de-los-laberintos-catalogo.jpg",
      imagenEntorno:
        "/obras/el-guardian-de-los-laberintos/05-el-guardian-de-los-laberintos-entorno.jpg",
      imagenDetalle:
        "/obras/el-guardian-de-los-laberintos/05-el-guardian-de-los-laberintos-rostro.jpg",
      ideal: ["Bibliotecas", "Espacios culturales", "Estudios privados", "Coleccionistas"],
      estilo: ["Intelectual", "Sobria", "De autor"],
      extra: ["Obra por encargo", "Envíos a toda Argentina"],
    },
    {
      slug: "el-guardian-del-silencio",
      codigo: "06",
      nombre: "El Guardián del Silencio",
      categoria: "Colección Espiritual",
      autor: "Adrián Serafini",
      anio: "2026",
      precio: "$ 3.900.000",
      descripcion:
        "Una obra que invita a la calma, la introspección y la desaceleración del tiempo. Ideal para jardines, patios y espacios de bienestar.",
      historia:
        "No es una figura religiosa impuesta. Es una presencia serena, hecha para acompañar el silencio y devolver al observador hacia sí mismo.",
      imagenPrincipal:
        "/obras/el-guardian-del-silencio/06-el-guardian-del-silencio-catalogo.jpg",
      imagenEntorno:
        "/obras/el-guardian-del-silencio/06-el-guardian-del-silencio-entorno.jpg",
      imagenDetalle:
        "/obras/el-guardian-del-silencio/06-el-guardian-del-silencio-rostro.jpg",
      ideal: ["Jardines", "Patios", "Espacios de meditación", "Hoteles boutique"],
      estilo: ["Espiritual", "Serena", "Contemplativa"],
      extra: ["Obra por encargo", "Envíos a toda Argentina"],
    },
    {
      slug: "ganesha-senor-de-los-caminos",
      codigo: "07",
      nombre: "Ganesha, Señor de los Caminos",
      categoria: "Colección Espiritual",
      autor: "Adrián Serafini",
      anio: "2026",
      precio: "$ 4.600.000",
      descripcion:
        "Escultura artesanal de fuerte simbolismo espiritual, ideal para espacios donde se busca armonía, apertura y energía positiva.",
      historia:
        "Una interpretación viva de Ganesha, nacida desde la materia y la tierra, pensada como símbolo de inicio, protección y apertura de caminos.",
      imagenPrincipal:
        "/obras/ganesha-senor-de-los-caminos/07-ganesha-senor-de-los-caminos-catalogo.jpg",
      imagenEntorno:
        "/obras/ganesha-senor-de-los-caminos/07-ganesha-senor-de-los-caminos-entorno.jpg",
      imagenDetalle:
        "/obras/ganesha-senor-de-los-caminos/07-ganesha-senor-de-los-caminos-rostro.jpg",
      ideal: ["Espacios espirituales", "Jardines", "Centros de bienestar", "Coleccionistas"],
      estilo: ["Espiritual", "Universal", "Simbólica"],
      extra: ["Obra por encargo", "Envíos a toda Argentina"],
    },
  ];

  const diferenciales = [
    {
      titulo: "100% artesanal",
      texto:
        "Cada pieza se modela a mano, sin moldes, a partir de una idea inicial, una referencia o un encargo personalizado.",
    },
    {
      titulo: "Obras con identidad",
      texto:
        "No son productos decorativos genéricos. Son esculturas con relato, peso visual y una presencia real en el espacio.",
    },
    {
      titulo: "Por encargo o colección",
      texto:
        "La mayoría de las obras pueden nacer desde un boceto o una intención estética concreta del cliente.",
    },
    {
      titulo: "Envíos a toda Argentina",
      texto:
        "CENITEK desarrolla y coordina entregas para clientes de todo el país desde San Rafael, Mendoza.",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:gap-4 md:px-10 lg:px-12">
          <a href="#inicio" className="flex min-w-0 items-center gap-3 md:gap-4">
            <img src="/logo.png" alt="CENITEK" className="h-11 w-auto md:h-16" />
            <div className="hidden min-w-0 sm:block">
              <div className="truncate text-base font-semibold tracking-[0.14em] text-white md:text-xl md:tracking-[0.18em]">
                CENITEK
              </div>
              <div className="truncate text-[10px] uppercase tracking-[0.28em] text-stone-400 md:text-xs md:tracking-[0.42em]">
                Esculturas artesanales de autor
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#coleccion" className="text-sm text-stone-300 transition hover:text-white">
              Colección
            </a>
            <a href="#encargos" className="text-sm text-stone-300 transition hover:text-white">
              Encargos
            </a>
            <a href="#contacto" className="text-sm text-stone-300 transition hover:text-white">
              Contacto
            </a>
          </nav>

          <a
            href={`${whatsappBase}?text=${encodeURIComponent("Hola, quiero consultar por una escultura artesanal.")}`}
            className="rounded-2xl bg-amber-500 px-3 py-2 text-xs font-semibold text-stone-950 transition hover:scale-[1.02] md:px-4 md:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.14),transparent_30%),linear-gradient(180deg,#0c0a09_0%,#111827_100%)]"
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.12fr_0.88fr] md:px-10 md:py-20 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-sm text-amber-200">
              CENITEK · Obras únicas con carácter real
            </span>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
              Esculturas artesanales que convierten un espacio común en una presencia inolvidable.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-300 md:text-lg">
              Colección y encargos especiales desarrollados en San Rafael, Mendoza. Cada obra se modela a mano, sin moldes, con una identidad visual potente y una historia propia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#coleccion"
                className="rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:scale-[1.02]"
              >
                Ver colección
              </a>
              <a
                href="#encargos"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Cómo encargar una obra
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-amber-200">7</div>
                <p className="mt-1 text-sm text-stone-300">Obras destacadas online</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-amber-200">100%</div>
                <p className="mt-1 text-sm text-stone-300">Artesanal y sin moldes</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-amber-200">AR</div>
                <p className="mt-1 text-sm text-stone-300">Envíos a toda Argentina</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur">
              <img
                src="/obras/diosa-de-la-vendimia/02-diosa-de-la-vendimia-catalogo.jpg"
                alt="Diosa de la Vendimia"
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-5">
                <p className="text-sm text-amber-200">Obra destacada</p>
                <h2 className="mt-1 text-xl font-semibold">Diosa de la Vendimia</h2>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  Fertilidad, vino y celebración. Una pieza escénica ideal para bodegas y espacios de alto impacto visual.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur md:mt-8">
              <img
                src="/obras/el-guardian-de-los-laberintos/05-el-guardian-de-los-laberintos-catalogo.jpg"
                alt="El Guardián de los Laberintos"
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-5">
                <p className="text-sm text-amber-200">Obra de autor</p>
                <h2 className="mt-1 text-xl font-semibold">El Guardián de los Laberintos</h2>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  Una presencia intelectual y silenciosa, inspirada en la esencia de Jorge Luis Borges.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-stone-900/70">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {diferenciales.map((item) => (
              <article
                key={item.titulo}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-amber-200">{item.titulo}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="coleccion" className="mx-auto max-w-7xl px-4 py-14 md:px-10 lg:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.25em] text-stone-400">Colección premium</span>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Siete obras con identidad propia, presentadas como catálogo de galería.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-400">
            Cada ficha muestra imagen de catálogo, imagen en entorno y detalle de la obra para revelar volumen, contexto y textura.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {obras.map((obra) => (
            <article
              key={obra.slug}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-stone-950 shadow-2xl shadow-black/20"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
                  <img
                    src={obra.imagenPrincipal}
                    alt={obra.nombre}
                    className={`h-[320px] w-full object-cover sm:h-[420px] lg:h-full lg:min-h-[420px] ${obra.slug === 'el-guardian-de-los-laberintos' ? 'object-top' : 'object-center'}`}
                  />
                </div>

                <div className="p-5 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-amber-200">{obra.categoria}</p>
                      <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">{obra.nombre}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300">
                      Obra {obra.codigo}
                    </span>
                  </div>

                  <p className="mt-4 text-base leading-8 text-stone-300">{obra.descripcion}</p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-300">
                      <span className="text-stone-400">Autor:</span> {obra.autor}
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-300">
                      <span className="text-stone-400">Año de creación:</span> {obra.anio}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-stone-400">{obra.historia}</p>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <img
                      src={obra.imagenEntorno}
                      alt={`${obra.nombre} en entorno`}
                      className="h-56 w-full rounded-2xl border border-white/10 object-cover object-top sm:h-40"
                    />
                    <img
                      src={obra.imagenDetalle}
                      alt={`Detalle de ${obra.nombre}`}
                      className="h-56 w-full rounded-2xl border border-white/10 object-cover object-top sm:h-40"
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {obra.extra.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {obra.ideal.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {obra.estilo.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col items-start gap-4 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-stone-400">Precio orientativo</p>
                      <div className="text-2xl font-semibold text-white">{obra.precio}</div>
                    </div>
                    <a
                      href={`${whatsappBase}?text=${encodeURIComponent(`Hola, me interesa la escultura \"${obra.nombre}\". Quisiera consultar disponibilidad, tiempos de ejecución y envío.`)}`}
                      className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:scale-[1.02]"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="encargos" className="border-y border-white/10 bg-stone-900/40">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-10 lg:px-12">
          <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-5 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-stone-400">Proceso de encargo</span>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
                Del boceto a la presencia final.
              </h2>
              <p className="mt-4 leading-8 text-stone-300">
                La mayoría de las esculturas se realizan por encargo. El cliente plantea una idea, una referencia o una intención estética, se desarrolla un boceto y luego comienza la ejecución manual completa de la obra.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "1. Idea inicial, referencia o concepto",
                "2. Definición de escala, carácter y estilo",
                "3. Modelado artesanal sin moldes",
                "4. Seguimiento del proceso y terminaciones",
                "5. Cierre final y coordinación de entrega",
                "6. Envío a cualquier punto de Argentina",
              ].map((paso) => (
                <div key={paso} className="rounded-2xl border border-white/10 bg-stone-950/70 px-5 py-4 text-sm text-stone-200">
                  {paso}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[linear-gradient(180deg,#1c1917,#0c0a09)]">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-10 lg:px-12">
          <span className="text-sm uppercase tracking-[0.25em] text-stone-400">Contacto directo</span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl">
            Esculturas artesanales únicas para proyectos con identidad real.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-stone-300">
            CENITEK trabaja desde San Rafael, Mendoza, desarrollando piezas por encargo y enviando obras a toda la Argentina.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`${whatsappBase}?text=${encodeURIComponent("Hola, quiero consultar por una escultura artesanal por encargo.")}`}
              className="rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="mailto:contacto@cenitek.net"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              contacto@cenitek.net
            </a>
          </div>
          <div className="mt-8 text-sm text-stone-400">
            San Rafael, Mendoza · Envíos a toda la Argentina · Obras 100% artesanales
          </div>
        </div>
      </section>
    </main>
  );
}