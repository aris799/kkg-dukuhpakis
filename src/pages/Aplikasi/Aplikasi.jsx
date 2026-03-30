import React from 'react';
import { MdApps } from 'react-icons/md'; // Changed the icon to a general app icon from the library
import './Aplikasi.css';
import Container from '../../components/common/Container';

const Aplikasi = () => {
  return (
    <main className="aplikasi-page">
      <div className="aplikasi-container">
        {/* Top Title Section */}
        <div className="aplikasi-top">
          <span className="aplikasi-label">Platform Digital</span>
          <h1 className="aplikasi-title">
            Aplikasi <span>Guru</span>
          </h1>
          <p className="aplikasi-subtitle">
            Aplikasi inovatif pendukung kinerja guru yang lebih mudah dan efektif
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="aplikasi-content">
          <div className="aplikasi-empty">
            <MdApps size={60} color="#8391a2" />
            <h2>Belum Ada Aplikasi</h2>
            <p>Aplikasi akan segera ditambahkan.</p>
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

export default Aplikasi;