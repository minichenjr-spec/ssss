export default function App() {
  const categories = [
    {
      title: 'Sukienki XXL',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Bluzki i Tuniki',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Eleganckie Komplety',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const products = [
    {
      name: 'Elegancka sukienka XXL',
      price: '249 zł',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Bluzka premium Plus Size',
      price: '139 zł',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Komplet wizytowy XXL',
      price: '329 zł',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Bella<span className="text-pink-500">XXL</span>
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#nowosci" className="hover:text-pink-500 transition">
              Nowości
            </a>

            <a href="#kolekcje" className="hover:text-pink-500 transition">
              Kolekcje
            </a>

            <a href="#onas" className="hover:text-pink-500 transition">
              O nas
            </a>

            <a href="#kontakt" className="hover:text-pink-500 transition">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1600&auto=format&fit=crop"
          alt="Bella XXL"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-pink-300 mb-4 text-sm">
            bellaxxl.pl
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Moda Plus Size
            <span className="block text-pink-300">dla Kobiet</span>
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-gray-200">
            Eleganckie i modne ubrania XXL stworzone dla kobiet,
            które chcą wyglądać stylowo każdego dnia.
          </p>

          <button className="bg-pink-500 hover:bg-pink-600 active:scale-95 transition px-8 py-4 rounded-full text-lg font-semibold shadow-2xl">
            Odkryj kolekcję
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="kolekcje" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Nasze Kolekcje</h2>

          <p className="text-gray-500 text-lg">
            Stylowe fasony stworzone specjalnie dla kobiet Plus Size.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-white"
            >
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="text-gray-500 mt-2">
                  Kobiece fasony podkreślające sylwetkę i zapewniające wygodę.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="nowosci" className="bg-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Nowości BellaXXL</h2>

            <p className="text-gray-600 text-lg">
              Najmodniejsze modele w dużych rozmiarach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="h-96 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {product.name}
                  </h3>

                  <p className="text-pink-600 text-xl font-bold mb-4">
                    {product.price}
                  </p>

                  <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-pink-500 active:scale-95 transition">
                    Dodaj do koszyka
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="onas"
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
            alt="Bella XXL"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">
            BellaXXL — moda dla każdej kobiety
          </h2>

          <p className="text-lg text-gray-600 leading-8 mb-6">
            BellaXXL.pl to butik internetowy inspirowany nowoczesną modą Plus Size.
            Łączymy wygodę, elegancję i kobiecy styl.
          </p>

          <p className="text-lg text-gray-600 leading-8 mb-8">
            W naszej ofercie znajdziesz sukienki, tuniki, komplety oraz modne ubrania
            codzienne w rozmiarach od 44 do 64.
          </p>

          <button className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 active:scale-95 transition text-lg">
            Poznaj markę BellaXXL
          </button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Dołącz do newslettera BellaXXL
        </h2>

        <p className="text-gray-300 mb-8 text-lg">
          Otrzymuj informacje o nowych kolekcjach, promocjach i bestsellerach.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Twój adres e-mail"
            className="flex-1 px-6 py-4 rounded-xl text-black outline-none"
          />

          <button className="bg-pink-500 px-8 py-4 rounded-xl hover:bg-pink-600 active:scale-95 transition font-semibold">
            Zapisz się
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontakt" className="bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bella<span className="text-pink-500">XXL</span>
            </h3>

            <p className="text-gray-600">
              Elegancka moda Plus Size dla nowoczesnych kobiet.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Menu</h4>

            <ul className="space-y-2 text-gray-600">
              <li>Nowości</li>
              <li>Sukienki</li>
              <li>Bluzki</li>
              <li>Kontakt</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Kontakt</h4>

            <p className="text-gray-600">kontakt@bellaxxl.pl</p>
            <p className="text-gray-600">+48 500 000 000</p>
            <p className="text-gray-600">www.bellaxxl.pl</p>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-gray-500">
          © 2026 BellaXXL.pl — Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
