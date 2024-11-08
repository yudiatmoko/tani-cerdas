import React from 'react';
import { useState } from 'react';
import greenhouseImage from '/about.jpeg'; // Ganti dengan path gambar utama
import eventImage1 from '/about.jpeg'; // Ganti dengan path gambar event pertama
import eventImage2 from '/about.jpeg'; // Ganti dengan path gambar event kedua
import eventImage3 from '/about.jpeg'; // Ganti dengan path gambar event ketiga

function SahabatTani() {
  const [activeTab, setActiveTab] = useState('event');

    return (
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Header */}
        <header className="text-white py-8 flex justify-center items-center">
          <img src={greenhouseImage} alt="Greenhouse" className="w-4/5 h-96 object-cover rounded-md" />
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
                    <button className="bg-white text-green-900 px-4 py-2 rounded-md">Daftar</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }    

export default SahabatTani;
