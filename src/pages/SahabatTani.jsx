
function SahabatTani() {
  return (
    <div className="min-h-screen bg-[--md-sys-color-background] font-sans">
      {/* Header */}
      <header
        className="text-[--md-sys-color-on-primary] py-8 flex flex-col items-center"
        style={{
          backgroundImage: `url('path-to-your-image.jpg')`, // Ganti dengan path ke gambar Anda
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Logo */}
        <img src="logo-placeholder.png" alt="Logo" className="mb-4" /> {/* Ganti dengan path logo */}
        
        {/* Container untuk teks utama dengan border */}
        <div className="bg-primary-400 text-center px-8 py-6 rounded-lg border border-[--md-sys-color-primary] shadow-lg max-w-2xl">
          <h1 className="text-3xl text-white font-bold text-primary-600">Improvisasi dan Inovasi</h1>
          <p className="text-white mt-4">
            Platform Tani Cerdas mendorong improvisasi dan inovasi di pertanian dengan memfasilitasi petani untuk mendapatkan teknik terbaru serta peralatan cerdas yang meningkatkan produktivitas secara berkelanjutan.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="py-16 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teknologi Pertanian */}
          <div className="bg-[--md-sys-color-surface] rounded-lg shadow-lg overflow-hidden">
            <img src="tech-image-placeholder.png" alt="Teknologi Pertanian" className="w-full h-48 object-cover" /> {/* Ganti dengan path gambar */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[--md-sys-color-on-surface]">Teknologi Pertanian</h2>
              <p className="text-gray-700 mb-4">Memanfaatkan teknik dan metode pertanian yang lebih canggih untuk meningkatkan produktivitas dan efisiensi.</p>
              <button className="bg-primary-400 text-[--md-sys-color-on-primary] px-4 py-2 rounded">Lihat Selengkapnya</button>
            </div>
          </div>

          {/* Hama Penyakit */}
          <div className="bg-[--md-sys-color-surface] rounded-lg shadow-lg overflow-hidden">
            <img src="pest-image-placeholder.png" alt="Hama Penyakit" className="w-full h-48 object-cover" /> {/* Ganti dengan path gambar */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[--md-sys-color-on-surface]">Hama Penyakit</h2>
              <p className="text-gray-700 mb-4">Mengenal hama dan penyakit tanaman beserta cara mencegah dan mengendalikannya secara tepat.</p>
              <button className="bg-primary-400 text-[--md-sys-color-on-primary] px-4 py-2 rounded">Lihat Selengkapnya</button>
            </div>
          </div>

          {/* Keselamatan Kerja */}
          <div className="bg-[--md-sys-color-surface] rounded-lg shadow-lg overflow-hidden">
            <img src="safety-image-placeholder.png" alt="Keselamatan Kerja" className="w-full h-48 object-cover" /> {/* Ganti dengan path gambar */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[--md-sys-color-on-surface]">Keselamatan Kerja</h2>
              <p className="text-gray-700 mb-4">Tips dan panduan untuk keselamatan di lapangan agar terhindar dari risiko pekerjaan.</p>
              <button className="bg-primary-400 text-[--md-sys-color-on-primary] px-4 py-2 rounded">Lihat Selengkapnya</button>
            </div>
          </div>

          {/* Alat Pelengkap */}
          <div className="bg-[--md-sys-color-surface] rounded-lg shadow-lg overflow-hidden">
            <img src="equipment-image-placeholder.png" alt="Alat Pelengkap" className="w-full h-48 object-cover" /> {/* Ganti dengan path gambar */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[--md-sys-color-on-surface]">Alat Pelengkap</h2>
              <p className="text-gray-700 mb-4">Terdiri dari cangkul, garpu, pisau, dan peralatan lainnya untuk keperluan bertani.</p>
              <button className="bg-primary-400 text-[--md-sys-color-on-primary] px-4 py-2 rounded">Lihat Selengkapnya</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SahabatTani;

