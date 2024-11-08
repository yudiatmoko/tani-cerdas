import about from "../data/dummy/about";


export default function About() {
  return (
    <div className="min-h-screen bg-[--md-sys-color-surface] font-sans">
      {/* Section About */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-16">
        {/* Konten Kiri (Gambar) */}
        <div className="w-full md:w-1/2">
          <img
            src={about.heroImage}
            alt="Deskripsi Gambar"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Teks Deskripsi di Kanan */}
        <div className="w-full md:w-1/2 max-w-lg md:ml-4 mt-8 md:mt-0">
          {/* Judul */}
          <h1 className="text-3xl font-semibold mb-4" style={{ color: 'black' }}>
            {about.title}
          </h1>

          {/* Deskripsi dengan Border Hijau */}
          <div className="bg-primary-100 p-6 rounded-md border-l-4 border-primary-50 shadow-md">
            <p className="text-[--md-sys-color-on-surface]">{about.description}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-primary-100">
        <h2 className="text-center text-2xl font-semibold text-primary-600">
          Frequently Asked Question
        </h2>
        <div className="max-w-xl mx-auto mt-8 space-y-4">
          {about.faq.map((faq, index) => (
            <button
              key={index}
              className="w-full bg-white text-black py-3 rounded-md text-left px-4 font-medium"
            >
              {faq.question}
            </button>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-16 bg-[--md-sys-color-surface]">
        <h2 className="text-center text-2xl font-semibold text-primary-600">
          Hubungi Kami
        </h2>
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Alamat Kontak */}
          <div className="flex flex-col space-y-4">
            <p className="text-[--md-sys-color-on-surface] font-medium">
              Alamat Kami:
            </p>
            <p className="text-gray-700">{about.contact.address}</p>
            <p className="text-gray-700">{about.contact.email}</p>
            <p className="text-gray-700">{about.contact.phone}</p>
          </div>

          {/* Gambar Bangunan */}
          <div>
            <img
              src={about.contactImage}
              alt="Hubungi Kami"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
