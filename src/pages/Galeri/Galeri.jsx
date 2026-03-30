import React from 'react';
import { MdPhotoLibrary } from 'react-icons/md';
import './Galeri.css';
import Container from '../../components/common/Container';

const Galeri = () => {
  return (
    <main className="galeri-page">
      <div className="galeri-container">
        {/* Top Title Section */}
        <div className="galeri-top">
          <span className="galeri-label">Dokumentasi Kegiatan</span>
          <h1 className="galeri-title">
            Galeri <span>Kegiatan</span>
          </h1>
          <p className="galeri-subtitle">
            Dokumentasi berbagai kegiatan KKG Kecamatan Dukuh Pakis
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="galeri-content">
          <div className="galeri-empty">
            <MdPhotoLibrary size={60} color="#8391a2" />
            <h2>Belum Ada Foto</h2>
            <p>Foto kegiatan akan segera ditambahkan.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2026 KKG Kecamatan Dukuh Pakis. Hak Cipta Dilindungi.
      </footer>
    </main>
  );
};

export default Galeri;