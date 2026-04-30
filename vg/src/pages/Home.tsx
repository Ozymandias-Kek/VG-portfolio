import{ useState, useEffect } from 'react';

// IMPORT NG BACKGROUND 
import heroBg from '../assets/nav-bg.jpg'; 

// IMPORT NG PICTURE PARA SA UNANG SLIDE (Vice Gov Photo)
import caravanImg from '../assets/caravan.jpg'; 

// IMPORT NG MGA LOGOS PARA SA PANGALAWANG SLIDE
import logoNieva from '../assets/nieva.png';
import logoStJames from '../assets/stjames.png';
import logoIfern from '../assets/ifern.png';
import logoBanko from '../assets/banko.png';
import logoCalamba from '../assets/calamba.png';
import logoGob from '../assets/gob.png';
// BAGONG LOGOS (SSS at Pag-IBIG)
import logoSss from '../assets/sss.png';
import logoPagibig from '../assets/pagibig.png';

const Home = () => {
  const [heroSlide, setHeroSlide] = useState(0);
  
  const heroData = [
    {
      id: 1,
      type: 'image', // Unang slide: Picture ni Vice Gov
      title: "SERVICEYO CARAVAN PROGRAM FOR LAGUNA 2026",
      desc: "We continue our efforts on the ground and take action to ensure that every Lagunense receives fast, reliable, and high-quality service. Here are some of our key initiatives for the entire province",
      image: caravanImg 
    },
    {
      id: 2,
      type: 'logos', // Pangalawang slide: Logos
      title: "PARTNERSHIP FOR SERVICEYO CARAVAN 2026",
      desc: "United with our fellow public servants, we remain committed to our continued service to the people of Laguna."
    }
  ];

  const nextHeroSlide = () => setHeroSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  
  // AUTO-PLAY LOGIC
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextHeroSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [heroSlide]);

  return (
    <div className="home-container">

      {/* =======================================
          HERO CAROUSEL
          ======================================= */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(126, 127, 134, 0.8), rgba(43, 108, 176, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-carousel-wrapper">
          <div className="hero-slider-container">
            <ul 
              className="hero-slider-track"
              style={{ transform: `translateX(calc(-${heroSlide * 100}vw - ${heroSlide * 4}vw))` }}
            >
              {heroData.map((slide) => (
                <li className="hero-slide-item" key={slide.id}>
                  <div className="ovp-content">
                    
                    {/* LEFT COLUMN: TEXT */}
                    <div className="ovp-text-col">
                      <h1 className="ovp-title">{slide.title}</h1>
                      <p className="ovp-desc">{slide.desc}</p>
                    </div>

                    {/* RIGHT COLUMN: LOGIC KUNG PICTURE O LOGOS */}
                    {slide.type === 'image' ? (
                      
                      // KUNG TYPE AY 'IMAGE' (UNANG SLIDE - CARAVAN PIC)
                      <div className="ovp-image-col">
                        <img src={slide.image} alt={slide.title} className="ovp-hero-img" />
                      </div>

                    ) : (

                      // KUNG HINDI (PANGALAWANG SLIDE - LOGOS CARD)
                      <div className="ovp-logos-card">
                        <h3 className="logos-title">OUR PARTNERS & SUPPORTERS</h3>
                        <div className="logos-grid">
                          <img src={logoNieva} alt="Nieva Optical" className="partner-logo" />
                          <img src={logoStJames} alt="St. James Hospital" className="partner-logo" />
                          <img src={logoIfern} alt="I-Fern" className="partner-logo" />
                          <img src={logoBanko} alt="Banko" className="partner-logo" />
                          <img src={logoCalamba} alt="Calamba Eye Center" className="partner-logo" />
                          <img src={logoGob} alt="Gobyernong May Solusyon" className="partner-logo" />
                          
                          {/* IDINAGDAG ANG SSS AT PAG-IBIG DITO */}
                          <img src={logoSss} alt="SSS" className="partner-logo" />
                          <img src={logoPagibig} alt="Pag-IBIG Fund" className="partner-logo" />
                        </div>
                      </div>

                    )}

                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Carousel Markers */}
        <div className="carousel-markers" style={{ marginTop: '2rem' }}>
          {heroData.map((_, index) => (
            <div 
              key={index} 
              className={`marker-dot ${heroSlide === index ? 'active' : ''}`}
              onClick={() => setHeroSlide(index)}
            ></div>
          ))}
        </div>
      </section>

      {/* =======================================
          VISION & MISSION
          ======================================= */}
      <section className="vision-mission-section">
        <div className="vm-container">
          <div className="vm-box">
            <h2>Vision</h2>
            <p>To be a beacon of integrity and accessible justice in Laguna, where every citizen regardless of their status has direct access to professional legal support and compassionate government services that empower them to lead better lives.</p>
          </div>
          <div className="vm-box">
            <h2>Mission</h2>
            <p>To institutionalize a culture of accessible, transparent, and compassionate governance throughout the Province of Laguna. He is dedicated to empowering the grassroots by bridging the gap between provincial resources and the people through comprehensive programs like the serVICEyo Caravan and Sangguniang Panlalawigan Day. Furthermore, he is committed to utilizing his legal expertise to uphold the rule of law and provide equitable legal advocacy to all constituents, ensuring that every Lagunense is served with honor, integrity, and excellence.</p>
          </div>
        </div>
      </section>

      {/* =======================================
          CORE VALUES
          ======================================= */}
      <section className="core-values-section">
        <div className="cv-container">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Resilience</h3>
              <div className="icon-placeholder">✊</div>
              <p>"We respond quickly to issues as they arise and transform problems into solutions to ensure the long-term sustainability of the office's work."</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <div className="icon-placeholder">🤝</div>
              <p>"We uphold the highest standards of ethics, transparency, and accountability in everything we do."</p>
            </div>
            <div className="value-card">
              <h3>Diligence</h3>
              <div className="icon-placeholder">🧑‍💼</div>
              <p>"We work hard and dedicate ourselves to serving the public with utmost care and responsibility."</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <div className="icon-placeholder">🎖️</div>
              <p>"We strive for the highest quality of service and continuously improve to meet the needs of the people."</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;