import Product1 from "../../assets/dummy/img/teknologi-pangan-img.png";

const courses = [
  // Pemula
  {
    id: 1,
    image: Product1,
    title: "Teknologi Pertanian Dasar",
    duration: 30,
    modules: 3,
    level: "Pemula",
    desc: "Pelajari dasar-dasar teknologi pertanian untuk pemula, termasuk teknik irigasi dan pemeliharaan tanaman.",
    videoUrl: "https://youtu.be/u31qwQUeGuM?si=ee7eIceg0kP1JuXW",
    courseModules: [
      {
        moduleId: 1,
        moduleTitle: "Pengenalan Teknologi Pertanian dan Berkelanjutan",
        submodules: [
          {
            submodulesId: 1,
            title: "Apa itu Teknologi Pertanian?",
            content:
              "Teknologi pertanian merujuk pada penerapan ilmu pengetahuan dan teknik dalam proses pertanian untuk meningkatkan efisiensi dan hasil produksi. Ini mencakup berbagai aspek, mulai dari pemilihan benih, pengolahan tanah, hingga penggunaan alat dan mesin pertanian modern. Dengan teknologi pertanian, petani dapat mengoptimalkan sumber daya yang ada, mengurangi kerugian, dan meningkatkan kualitas hasil pertanian. Selain itu, teknologi pertanian juga berperan penting dalam menjaga keberlanjutan lingkungan dengan mengurangi dampak negatif dari praktik pertanian tradisional.",
          },
          {
            submodulesId: 2,
            title: "Sejarah dan Perkembangan",
            content:
              "Sejarah teknologi pertanian dimulai ribuan tahun yang lalu ketika manusia pertama kali melakukan penanaman tanaman secara sistematis. Dari teknik pertanian tradisional yang sederhana, seperti penanaman manual dan pengairan dengan tangan, hingga inovasi modern seperti penggunaan drone untuk pemantauan lahan, teknologi pertanian telah mengalami evolusi yang signifikan. Perkembangan ini dipengaruhi oleh berbagai faktor, termasuk kebutuhan untuk memenuhi populasi yang terus berkembang, perubahan iklim, dan kemajuan dalam ilmu pengetahuan. Dengan memahami sejarah ini, kita dapat menghargai pentingnya inovasi dalam pertanian dan bagaimana teknologi dapat membantu mengatasi tantangan yang dihadapi oleh petani saat ini.",
          },
        ],
      },
      {
        moduleId: 2,
        moduleTitle: "Dasar-Dasar Irigasi",
        submodules: [
          {
            submodulesId: 3,
            title: "Metode Irigasi Tradisional",
            content:
              "Metode irigasi tradisional merupakan teknik yang telah digunakan oleh para petani selama berabad-abad. Ini termasuk sistem irigasi sederhana seperti pengairan dengan saluran terbuka, penggunaan embung, dan irigasi dengan alat-alat manual. Meskipun metode ini mungkin tidak seefisien sistem modern, mereka memiliki keunggulan dalam hal biaya dan kemudahan akses. Dalam modul ini, peserta akan belajar tentang berbagai metode tradisional, cara penerapannya, serta keuntungan dan kerugian masing-masing metode dalam konteks pertanian lokal.",
          },
          {
            submodulesId: 4,
            title: "Irigasi Modern",
            content:
              "Irigasi modern mengacu pada penggunaan teknologi canggih untuk meningkatkan efisiensi penggunaan air dalam pertanian. Ini mencakup teknik seperti irigasi tetes, irigasi sprinkler, dan sistem otomatisasi yang memungkinkan pengelolaan air yang lebih baik. Dengan irigasi modern, petani dapat mengontrol jumlah air yang diberikan kepada tanaman, mengurangi pemborosan, dan meningkatkan hasil panen. Selain itu, teknologi ini juga membantu dalam adaptasi terhadap perubahan iklim dan memastikan bahwa tanaman mendapatkan pasokan air yang cukup selama periode kering.",
          },
        ],
      },
      {
        moduleId: 3,
        moduleTitle: "Pemeliharaan Tanaman",
        submodules: [
          {
            submodulesId: 5,
            title: "Pengairan dan Penyiraman",
            content:
              "Pengairan dan penyiraman adalah bagian penting dari pemeliharaan tanaman yang berfungsi untuk memenuhi kebutuhan air tanaman. Teknik penyiraman yang efektif meliputi pemahaman tentang waktu, frekuensi, dan jumlah air yang dibutuhkan oleh tanaman. Dalam modul ini, peserta akan mempelajari berbagai metode penyiraman, termasuk penyiraman manual dan otomatis, serta faktor-faktor yang mempengaruhi kebutuhan air tanaman, seperti jenis tanah, cuaca, dan fase pertumbuhan tanaman.",
          },
          {
            submodulesId: 6,
            title: "Pemupukan Dasar",
            content:
              "Pemupukan adalah proses memberikan nutrisi tambahan kepada tanaman untuk meningkatkan pertumbuhan dan hasil panen. Dalam modul ini, peserta akan diperkenalkan pada berbagai jenis pupuk, baik organik maupun anorganik, serta cara penggunaannya yang tepat. Pemahaman tentang pemupukan yang baik sangat penting untuk memastikan bahwa tanaman mendapatkan nutrisi yang diperlukan tanpa menyebabkan kerusakan pada tanah atau lingkungan. Selain itu, peserta juga akan belajar tentang cara menganalisis kebutuhan nutrisi tanaman dan menentukan jenis pupuk yang sesuai untuk berbagai jenis tanaman.",
          },
        ],
      },
    ],
    contributors: {
      id: 1,
      name: "Rahmat Sutisno S.P, M.P",
      position: "Dosen Pertanian",
      institution: "Universitas Negeri Jakarta",
      experience: "5 Tahun",
      rating: "4.0",
      imageUrl: "https://placehold.co/400x600",
    },
  },
  {
    id: 2,
    image: Product1,
    title: "Pemahaman Dasar Tanah dan Tanaman",
    duration: 45,
    modules: 4,
    level: "Pemula",
    desc: "Mengenali jenis tanah dan tanaman yang cocok untuk berbagai kondisi iklim dan lingkungan.",
  },
  {
    id: 3,
    image: Product1,
    title: "Perawatan Tanaman Dasar",
    duration: 40,
    modules: 3,
    level: "Pemula",
    desc: "Memahami teknik dasar dalam merawat tanaman, pemupukan, dan pengendalian hama alami.",
  },

  // Menengah
  {
    id: 4,
    image: Product1,
    title: "Teknik Irigasi Modern",
    duration: 60,
    modules: 5,
    level: "Menengah",
    desc: "Mendalami teknik irigasi modern yang dapat membantu meningkatkan hasil panen dan efisiensi air.",
  },
  {
    id: 5,
    image: Product1,
    title: "Pupuk dan Nutrisi Tanaman",
    duration: 70,
    modules: 6,
    level: "Menengah",
    desc: "Belajar tentang komposisi pupuk dan cara penggunaannya untuk berbagai jenis tanaman.",
  },
  {
    id: 6,
    image: Product1,
    title: "Pengendalian Hama Terpadu",
    duration: 50,
    modules: 5,
    level: "Menengah",
    desc: "Teknik pengendalian hama dengan metode ramah lingkungan yang efektif untuk kebun kecil dan besar.",
  },
  {
    id: 7,
    image: Product1,
    title: "Manajemen Tanaman Berkelanjutan",
    duration: 55,
    modules: 5,
    level: "Menengah",
    desc: "Membahas konsep pertanian berkelanjutan yang bertujuan menjaga keseimbangan ekosistem.",
  },

  // Mahir
  {
    id: 8,
    image: Product1,
    title: "Pertanian Precision",
    duration: 90,
    modules: 7,
    level: "Mahir",
    desc: "Menerapkan teknologi dan data untuk meningkatkan efisiensi dan hasil dalam praktik pertanian.",
  },
  {
    id: 9,
    image: Product1,
    title: "Teknik Pasca Panen",
    duration: 80,
    modules: 6,
    level: "Mahir",
    desc: "Belajar cara menangani dan menyimpan hasil panen agar kualitas tetap terjaga.",
  },
  {
    id: 10,
    image: Product1,
    title: "Pengelolaan Agribisnis",
    duration: 100,
    modules: 8,
    level: "Mahir",
    desc: "Mengembangkan keterampilan untuk mengelola agribisnis, mulai dari produksi hingga pemasaran.",
  },
];

export default courses;