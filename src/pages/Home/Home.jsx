import { useNavigate } from 'react-router-dom';
import { 
  MdDownload, 
  MdArrowForward, 
  MdApps, 
  MdPhotoLibrary,
  MdBook,
  MdGroup
} from 'react-icons/md';
import { useState, useEffect } from 'react';
import Container from '../../components/common/Container';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  // ===================== DATA STATISTICS =====================
  const stats = [
    { number: '50+', label: 'Guru Aktif' },
    { number: '100+', label: 'Materi' },
    { number: '10+', label: 'Sekolah' },
    { number: '30+', label: 'Galeri Kegiatan' }
  ];

  // ===================== DATA SERVICES =====================
  const services = [
    {
      icon: MdBook,
      iconColor: '#0066FF',
      iconBg: '#E3F2FD',
      title: 'Materi Pembelajaran',
      description: 'Akses beragam materi pembelajaran berkualitas dari guru-guru berpengalaman.',
      link: '/materi'
    },
    {
      icon: MdGroup,
      iconColor: '#4CAF50',
      iconBg: '#E8F5E9',
      title: 'Komunitas Guru',
      description: 'Bergabung dengan komunitas guru profesional untuk berbagi ilmu dan pengalaman.',
      link: '/profil'
    },
    {
      icon: MdApps,
      iconColor: '#FF9800',
      iconBg: '#FFF3E0',
      title: 'Aplikasi KKG',
      description: 'Daftar aplikasi yang dapat mendukung pengembangan guru profesional.',
      link: '/aplikasi'
    },
    {
      icon: MdPhotoLibrary,
      iconColor: '#9C27B0',
      iconBg: '#F3E5F5',
      title: 'Galeri Kegiatan',
      description: 'Dokumentasi kegiatan dan event yang telah dilaksanakan oleh KKG Dukuh Pakis.',
      link: '/galeri'
    }
  ];

  // ===================== DATA TESTIMONIALS =====================
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { text: 'Program KKG membuat proses pembelajaran lebih menarik. Siswa lebih aktif dan termotivasi belajar', name: 'Pak Mawan', school: 'SDN DUKUH KUPANG I / 488' },
    { text: 'KKG memfasilitasi guru untuk berbagi pengalaman. Semua saran dan praktik terbaik sangat membantu di lapangan.', name: 'Pak Darsono', school: 'SDN DUKUH KUPANG II-489' },
    { text: 'Materi KKG sangat lengkap dan mudah dipahami. Saya bisa langsung mempraktikkannya di kelas.', name: 'Bu Linda', school: 'SDN DUKUH PAKIS I - 486' },
    { text: 'Bergabung di komunitas guru KKG membuat saya belajar banyak strategi mengajar baru. Diskusi rutin sangat membantu.', name: 'Pak Arip', school: '	SDN DUKUH KUPANG V-534' },
  ];

  // ===================== AUTO CAROUSEL =====================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 5 detik
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <div className="hero__content">
            <img 
              src="/src/assets/logokkgdukuhpakis.png" 
              alt="KKG Dukuh Pakis" 
              className="hero__logo"
            />
            
            <h1 className="hero__title">
              Kelompok Kerja Guru<br />Kecamatan Dukuh Pakis
            </h1>
            
            <p className="hero__description">
              Sarang pengembangan kompetensi guru dalam mendukung terciptanya<br />
              pendidikan yang berkualitas tinggi di Kecamatan Dukuh Pakis, Kota Surabaya
            </p>

            <div className="hero__cta">
              <button 
                className="cta-btn cta-btn--primary"
                onClick={() => navigate('/materi')}
              >
                <MdDownload className="cta-btn__icon" />
                Akses Materi Gratis
              </button>
              
              <button 
                className="cta-btn cta-btn--secondary"
                onClick={() => navigate('/profil')}
              >
                Tentang Kami
                <MdArrowForward className="cta-btn__icon" />
              </button>
            </div>
          </div>
        </Container>
        <svg className="hero__wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,20 600,50 T1200,50 L1200,121 L0,121 Z" fill="#f0f2f5" stroke="none"></path>
        </svg>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <Container>
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats__card">
                <div className="stats__number">{stat.number}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services">
        <Container>
          <div className="services__header">
            <h2 className="services__title">Layanan KKG Dukuh Pakis</h2>
            <p className="services__subtitle">
              Berbagai fasilitas dan layanan untuk mendukung pengembangan profesional guru
            </p>
          </div>

          <div className="services__grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service__card">
                  <div 
                    className="service__icon"
                    style={{backgroundColor: service.iconBg}}
                  >
                    <IconComponent size={32} color={service.iconColor} />
                  </div>
                  <h3 className="service__title">{service.title}</h3>
                  <p className="service__description">{service.description}</p>
                  <button 
                    className="service__link"
                    onClick={() => navigate(service.link)}
                  >
                    Selengkapnya <MdArrowForward size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="content">
        <Container>
          <p className="content__subtitle">KKG Dukuh Pakis - Berakhlak, Bersinergi, dan Berdaya Saing</p>
          <h2 className="content__title">
            Meningkatkan Kompetensi Guru melalui Kolaborasi Profesional
          </h2>
          <p className="content__text">
            KKG Dukuh Pakis merupakan wadah kolaborasi bagi para guru tingkat SD di wilayah Dukuh Pakis, Surabaya. Platform ini hadir untuk mendukung kegiatan kelompok kerja guru secara terstruktur, sehingga proses peningkatan kualitas mengajar dapat berjalan lebih efektif dan berkelanjutan. Melalui kegiatan rutin dan berbagi pengalaman, KKG Dukuh Pakis berkomitmen menjadi mitra strategis bagi seluruh anggota dalam menghadapi tantangan dunia pendidikan saat ini.
          </p>
          <p className="content__text">
            Dengan pendekatan yang menggabungkan diskusi kelompok, pelatihan, dan penyusunan perangkat ajar, KKG Dukuh Pakis membantu guru meningkatkan kompetensi pedagogik, profesional, sosial, dan kepribadian. Semua materi dan program yang dikembangkan bersumber dari kebutuhan nyata di lapangan serta selaras dengan kurikulum pendidikan nasional. Hal ini menjadikan setiap kegiatan lebih relevan dan berdampak langsung terhadap kualitas pembelajaran di sekolah-sekolah wilayah Dukuh Pakis.
          </p>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <Container>
          <p className="testimonials__subtitle">Testimoni</p>
          <h2 className="testimonials__title">Temukan Apa Kata Guru Tentang KKG Dukuh Pakis</h2>

          <div className="testimonial__carousel">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`testimonial__card ${currentIndex === index ? 'active' : ''}`}
              >
                <p className="testimonial__text">"{t.text}"</p>
                <h3 className="testimonial__name">{t.name}</h3>
                <p className="testimonial__school">{t.school}</p>
              </div>
            ))}
            <div className="testimonial__dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </Container>
      </section>

  
{/* Join Section */}
<section className="join-kkg">
  <Container>
    <div className="join-kkg__box">
      <h2 className="join-kkg__title">Bergabung Bersama Kami</h2>
      <p className="join-kkg__description">
        Daftarkan diri Anda sebagai anggota KKG Kecamatan Dukuh Pakis dan nikmati berbagai fasilitas pengembangan profesional guru.
      </p>
      <button 
        className="cta-btn cta-btn--primary"
        onClick={() => navigate('/profil')}
      >
        Pelajari Lebih Lanjut
      </button>
    </div>
  </Container>
</section>
{/* Logos Section */}
<section className="kkg-logos">
  <div className="kkg-logos__container">
    <img src="/src/assets/logopemkotsby.png" alt="Logo Pemkot Surabaya" className="kkg-logo" />
    <img src="/src/assets/logoberakhlak.png" alt="Logo Berakhlak" className="kkg-logo" />
    <img src="/src/assets/logokkgdukuhpakis.png" alt="Logo KKG Dukuh Pakis" className="kkg-logo" />
    <img src="/src/assets/logobanggamelayanibangsa.png" alt="Logo Bangga Melayani Bangsa" className="kkg-logo" />
    <img src="/src/assets/logotutwurihandayani.png" alt="Logo Tut Wuri Handayani" className="kkg-logo" />
  </div>
</section>
{/* Footer */}
<footer className="home-footer">
  © 2026 KKG Kecamatan Dukuh Pakis.  Hak Cipta Dilindungi.
</footer>
    </main>
  );
}

export default Home;