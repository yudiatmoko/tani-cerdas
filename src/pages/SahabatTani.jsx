import { useState } from 'react';
import greenhouseImage from '/komunitas.jpg'; // Replace with the correct image path
import eventImage1 from '/about.jpeg'; // Replace with the correct image path
import eventImage2 from '/about.jpeg'; // Replace with the correct image path
import eventImage3 from '/about.jpeg'; // Replace with the correct image path

function SahabatTani() {
  const [activeTab, setActiveTab] = useState('event');
  const [showLoginModal, setShowLoginModal] = useState(false); // Modal state for registration
  const [showCommentModal, setShowCommentModal] = useState(false); // Modal state for comments
  const [showDiscussionModal, setShowDiscussionModal] = useState(false); // Modal state for adding discussion
  const discussions = [
    {
      title: 'Inovasi Smart Farming di Pertanian Indonesia',
      author: 'IlhamAgroTech',
      message: 'Saat ini, teknologi smart farming mulai diterapkan di berbagai wilayah pertanian Indonesia...',
    },
    {
      title: 'Pemanfaatan Sensor Tanah untuk Optimasi Irigasi',
      author: 'RahayuTani',
      message: 'Irigasi merupakan hal penting dalam sistem pertanian...',
    },
    {
      title: 'Tanam Jajar Legowo, Efektifkah?',
      author: 'FitriOrganik',
      message: 'Saya ingin mencoba sistem tanam jajar legowo di lahan saya...',
    },
    {
      title: 'Tips Mencegah Serangan Hama Secara Alami',
      author: 'BudiSwift',
      message: 'Adakah yang punya pengalaman menggunakan metode alami untuk mencegah hama?',
    },
  ];

  // Function to open the login modal for registration
  const handleRegisterClick = () => {
    setShowLoginModal(true);
  };

  // Function to open the login modal for adding comments
  const handleAddCommentClick = () => {
    setShowCommentModal(true);
  };

  // Function to open the login modal for adding discussions
  const handleAddDiscussionClick = () => {
    setShowDiscussionModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="text-white py-8 flex justify-center items-center">
        <img src={greenhouseImage} alt="Greenhouse" className="w-3/4 h-97 object-cover rounded-md" />
      </header>

      {/* Tabs */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setActiveTab('event')}
          className={`px-6 py-2 rounded-lg mr-2 ${activeTab === 'event' ? 'bg-green-700 text-white' : 'bg-white text-green-700 border border-green-700'}`}
        >
          Event
        </button>
        <button
          onClick={() => setActiveTab('discussion')}
          className={`px-6 py-2 rounded-lg ${activeTab === 'discussion' ? 'bg-green-700 text-white' : 'bg-white text-green-700 border border-green-700'}`}
        >
          Form Diskusi
        </button>
      </div>

      {/* Content */}
      <div className="mt-8 flex flex-col items-center">
        {/* Event List */}
        {activeTab === 'event' && (
          <div className="w-full max-w-4xl px-4 md:px-0">
            {[{
              date: '29-01-2024', time: '12.00 WIB', title: 'Seminar Pengenalan Pertanian Digital', location: 'Gedung kecamatan gunung pati, kota semarang, jawa tengah', image: eventImage1
            }, {
              date: '29-01-2024', time: '12.00 WIB', title: 'Workshop Manajemen Hama dan Penyakit dengan Teknologi', location: 'Gedung kecamatan gunung pati, kota semarang, jawa tengah', image: eventImage2
            }, {
              date: '29-01-2024', time: '12.00 WIB', title: 'Workshop Optimalisasi Irigasi', location: 'Gedung kecamatan gunung pati, kota semarang, jawa tengah', image: eventImage3
            }].map((event, index) => (
              <div key={index} className="flex mb-6 bg-green-900 text-white rounded-lg overflow-hidden shadow-lg">
                {/* Image Section with Border */}
                <div className="border-r border-white">
                  <img src={event.image} alt={event.title} className="w-4/5 object-cover h-40" />
                </div>

                {/* Text Section with Separate Border */}
                <div className="p-4 w-2/3 border-l border-white">
                  <div className="flex items-center text-sm mb-2">
                    <span>{event.date}</span>
                    <span className="mx-2">|</span>
                    <span>{event.time}</span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
                  <p className="text-sm mb-4">{event.location}</p>
                  <button onClick={handleRegisterClick} className="bg-white text-green-900 px-4 py-2 rounded-md">Daftar</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Discussion Forum */}
        {activeTab === 'discussion' && (
          <div className="w-full max-w-4xl px-4 md:px-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-green-900"></h2>
              <button onClick={handleAddDiscussionClick} className="bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                <span className="mr-2">+</span> Tambahkan diskusi baru
              </button>
            </div>
            {discussions.map((discussion, index) => (
              <div key={index} className="mb-4 bg-green-900 text-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">{discussion.title}</h3>
                <p className="text-sm mb-2">oleh {discussion.author}</p>
                <p className="text-sm">{discussion.message}</p>
                <button onClick={handleAddCommentClick} className="mt-4 text-green-700 bg-white px-3 py-1 rounded-md">+ Tambahkan Komentar</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Login Modal for Registration */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Anda harus login untuk mendaftar</h3>
            <button onClick={() => setShowLoginModal(false)} className="bg-green-700 text-white px-4 py-2 rounded-md">Tutup</button>
          </div>
        </div>
      )}

      {/* Login Modal for Comments */}
      {showCommentModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Anda harus login untuk menambahkan komentar</h3>
            <button onClick={() => setShowCommentModal(false)} className="bg-green-700 text-white px-4 py-2 rounded-md">Tutup</button>
          </div>
        </div>
      )}

      {/* Login Modal for Adding Discussions */}
      {showDiscussionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Anda harus login untuk menambahkan diskusi</h3>
            <button onClick={() => setShowDiscussionModal(false)} className="bg-green-700 text-white px-4 py-2 rounded-md">Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SahabatTani;
