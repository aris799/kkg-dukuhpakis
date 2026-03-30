import React, { useState } from 'react';
import { MdFilterList, MdKeyboardArrowDown, MdDescription } from 'react-icons/md';
import './Materi.css';
import Container from '../../components/common/Container';

const Materi = () => {
  const categories = [
    'Semua Kategori',
    'Evaluasi',
    'Kurikulum',
    'Lainnya',
    'Media Pembelajaran',
    'RPP',
    'Silabus',
  ];

  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (cat) => {
    setSelectedCategory(cat);
    setIsOpen(false);
  };

  return (
    <main className="materi-page">
      <div className="materi-container">

        {/* Header Top: Label + Title */}
        <div className="materi-top">
          <span className="materi-label">Gratis & Terbuka untuk Umum</span>
          <h1 className="materi-title">Materi <span>Pembelajaran</span></h1>
          <p className="materi-subtitle">
            Akses ribuan materi pembelajaran berkualitas dari guru-guru berpengalaman. Tersedia secara gratis tanpa harus login.
          </p>
        </div>

        {/* Filter Dropdown + Count */}
        <div className="materi-header">
          <div
            className="materi-filter"
            onClick={() => setIsOpen(!isOpen)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <MdFilterList className="materi-filter-icon" />
            <span className="materi-selected">{selectedCategory}</span>
            <MdKeyboardArrowDown className="materi-arrow-icon" />
            {isOpen && (
              <ul className="materi-options">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className="materi-option"
                    onClick={() => handleSelect(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="materi-count">Menampilkan 0 materi</p>
        </div>

        {/* Materi Placeholder */}
        <div className="materi-content">
          <div className="materi-empty">
            <MdDescription size={60} color="#8391a2" />
            <h2>Belum Ada Materi</h2>
            <p>Materi akan segera ditambahkan oleh koordinator.</p>
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

export default Materi;