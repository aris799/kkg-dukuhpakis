import React from 'react';
import Container from '../../components/common/Container';
import { MdSchool, MdOutlineTrackChanges, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import './Profil.css';

const Profil = () => {
  const misiList = [
    'Meningkatkan kompetensi pedagogik guru melalui beragam kegiatan secara berkala',
    'Membangun budaya kolaborasi antar guru dalam berbagi pengalaman pembelajaran',
    'Mengembangkan inovasi pembelajaran yang kreatif, kontekstual, dan berbasis teknologi',
    'Mendorong penelitian tindakan kelas (PTK) serta publikasi karya guru secara berkelanjutan',
    'Memperkuat kerjasama dengan stakeholder pendidikan untuk mendukung peningkatan mutu guru dan pendidikan'
  ];

  return (
    <main className="profil-page">
      {/* Top Gradient Section Full Width */}
      <div className="profil-top-gradient">
        <Container>
          <div className="profil-icon-wrapper">
            <MdSchool size={50} className="profil-icon" />
          </div>
          <h2 className="profil-title">
            Tentang KKG <br />
            Kecamatan Dukuh Pakis
          </h2>
          <p className="profil-subtitle">
            Kelompok Kerja Guru (KKG) Kecamatan Dukuh Pakis adalah wadah pengembangan profesional guru
            untuk meningkatkan kualitas pendidikan di Kecamatan Dukuh Pakis, Kota Surabaya.
          </p>
        </Container>
      </div>

      {/* Gambar Peresmian */}
      <div className="profil-image-wrapper">
        <img
          src="/src/assets/peresmiankkg.jpeg"
          alt="Peresmian KKG"
          className="profil-image"
        />
      </div>

      {/* Visi & Misi */}
      <section className="profil-visimisi">
        <h2 className="visimisi-header">Visi & Misi</h2>
        <p className="visimisi-subtitle">
          Komitmen kami dalam membangun pendidikan yang berkualitas
        </p>
        <div className="visimisi-boxes">
          {/* Visi */}
          <div className="visimisi-card visi-card">
            <div className="visimisi-card-header">
              <MdOutlineTrackChanges size={35} className="visimisi-icon" />
              <h3>Visi</h3>
            </div>
            <p className="visi-text">
              Menjadi kelompok kerja guru yang unggul, inovatif, dan kolaboratif dalam meningkatkan kualitas pembelajaran serta profesionalisme guru di wilayah Kecamatan Dukuh Pakis, demi terwujudnya pendidikan yang berkualitas dan berdaya saing tinggi.
            </p>
          </div>

          {/* Misi */}
          <div className="visimisi-card misi-card">
            <div className="visimisi-card-header">
              <MdOutlineTrackChanges size={35} className="visimisi-icon" />
              <h3>Misi</h3>
            </div>
            <ol className="misi-list">
              {misiList.map((item, index) => (
                <li key={index}>
                  <span className="misi-number">{index + 1}</span>
                  <span className="visimisi-text">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Hubungi Kami Section */}
      <section className="profil-hubungi" id="hubungiKami">
        <h2 className="hubungi-header">Hubungi Kami</h2>
        <p className="hubungi-subtitle">
          Punya pertanyaan atau ingin bergabung? Jangan ragu untuk menghubungi kami
        </p>
        <div className="hubungi-boxes">
          <div className="hubungi-card">
            <div className="hubungi-icon-wrapper">
              <MdLocationOn size={30} />
            </div>
            <h3>Alamat</h3>
            <p>Jl. Raya Dukuh Kupang Barat No.31, Kec.Dukuh Pakis</p>
          </div>
          <div className="hubungi-card">
            <div className="hubungi-icon-wrapper">
              <MdPhone size={30} />
            </div>
            <h3>Telepon</h3>
            <p>08165459783</p>
          </div>
          <div className="hubungi-card">
            <div className="hubungi-icon-wrapper">
              <MdEmail size={30} />
            </div>
            <h3>Email</h3>
            <p>mawandwiyanto@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 KKG Kecamatan Dukuh Pakis. Hak Cipta Dilindungi.
      </footer>
    </main>
  );
};

export default Profil;