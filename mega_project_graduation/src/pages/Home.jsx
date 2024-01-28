import React from "react";
import { useRef } from "react";
import "./styles.css";

import bottomvideo from "../videos/video-section.mp4";
import test1 from "../images/test-1.jpg";
import test2 from "../images/test-2.jpg";
import test3 from "../images/test-3.jpeg";
import test5 from "../images/test-5.jpg";

import bindedevrialem from "../images/80bindedevrialem.jpg";
import akyokus from "../images/akyokus.jpg";
import etnografya from "../images/etnografya.jpg";

function Home() {
  const videoRef = useRef(null);

  // Function to play/pause the video
  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div>
      {/* Header */}
      <header className="flex">
        <div className="container">
          <div className="header-title">
            <h1>Welcome to our municipality's page!</h1>
            <p>
            On this page, you will get to know Konya with its historical and natural beauties, as well as our municipality serving this beautiful city!
            </p>
          </div>
          <div className="header-form">
            <h2>"NE OLURSAN OL, YİNE GEL!"</h2>
            <h2>-Mevlana-</h2>
          </div>
        </div>
      </header>

      {/* Featured Section */}
      <section id="featured" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">
            SOME TOURISTIC PLACES IN MERAM!
            </span>
            <h2 className="lg-title">Take a look:</h2>
          </div>

          <div className="featured-row">
            {/* Repeat the featured items as needed */}
            {/* Example Featured Item */}
            <div className="featured-item my-2 shadow">
              <img src={akyokus} alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                  Akyokuş
                </span>
                <div>
                  <p className="text">
                  Akyokuş Nature Park is located in the Akyokuş area of Meram district in Konya. It spans approximately 21.6 hectares of land. The park is home to many plant species such as mulberry, black mulberry, almond, birch, Scots pine, and elm. Visitors can encounter various animals including hedgehogs, field mice, wild boars, rabbits, squirrels, snakes, and lizards.
                  </p>
                </div>
              </div>
            </div>
            <div className="featured-item my-2 shadow">
              <img src={bindedevrialem} alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                  80 Binde Devri Alem
                </span>
                <div>
                  <p className="text">
                  80 Binde Devri Alem Parkı is a theme park located in Meram district of Konya. It consists of three sections: 1. Cihan-ı Türk Parkı, 2. T-Rex Parkı, 3. Pamuk Şekeri Parkı
                  </p>
                </div>
              </div>
            </div>
            <div className="featured-item my-2 shadow">
              <img src={etnografya} alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                  Ethnography Museum
                </span>
                <div>
                  <p className="text">
                  The building, originally constructed for educational purposes, was opened as the Ethnography Museum in 1975. The three-story building includes a photography studio, archives, personal belongings and study artifact storerooms on the basement floor, along with a boiler room. It also houses a carpet and kilim section, which is planned to be opened in 1998 and is currently under construction.
                  </p>
                </div>
              </div>
            </div>
            {/* End of Featured Item */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">
            "Meram Municipality, the municipality of hearts with its services!
            </span>
            <h2 className="lg-title">Our Services:</h2>
          </div>

          <div className="services-row">
            {/* Repeat the services items as needed */}
            {/* Example Services Item */}
            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-hotel"></i>
              </span>
              <h3>Software Training Courses</h3>
              <p className="text">
              We provide free software training for our youth in this age of technology through initiatives like the MEGA Software Academy, created within the scope of the Productive Academy
              </p>
              <a
                href="https://uretkenakademi.com/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Read more
              </a>
            </div>
            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-hotel"></i>
              </span>
              <h3>Happy Birthday Baby!</h3>
              <p className="text">
              With the 'Happy Birthday Baby' application, our fellow citizens who have newborns are visited.
              </p>
              <a
                href="https://www.meram.bel.tr/iyiki-dogdun"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Read more
              </a>
            </div>
            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-hotel"></i>
              </span>
              <h3>Marriage Procedures</h3>
              <p className="text">
              We accept applications from couples who will marry within the framework of marriage laws and regulations, open files, allocate appointment dates for the wedding day and time, and conduct marriage ceremonies on the appointed date and time.
              </p>
              <a
                href="https://www.meram.bel.tr/evlilik-islemleri"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Read more
              </a>
            </div>

            {/* End of Services Item */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">Meram Address and Phone Directory:</span>
            <h2 className="lg-title">LIST</h2>
          </div>

          <div className="test-row">
            {/* Repeat the testimonials items as needed */}
            {/* Example Testimonial Item */}

            <div className="test-item">
              <p className="text">
                Sahibata Mahallesi Tevfikiye Caddesi No: 2 42040 Meram/KONYA 0
                332 310 20 10
              </p>
              <div className="test-item-info">
                <img src={test1} alt="testimonial" />
                <div>
                  <h3>Konya Governorship</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>
            <div className="test-item">
              <p className="text">
                Sahibata Mahallesi Saitpaşa Caddesi No:26 Meram/KONYA 0 332 351
                88 30
              </p>
              <div className="test-item-info">
                <img src={test2} alt="testimonial" />
                <div>
                  <h3>Meram  District Governorship</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>
            <div className="test-item">
              <p className="text">
                Konevi Mahallesi Feritpaşa Caddesi No:18 42040 Meram / KONYA 0
                332 280 28 00
              </p>
              <div className="test-item-info">
                <img src={test3} alt="testimonial" />
                <div>
                  <h3> KOP Regional Development Administration</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>
            <div className="test-item">
              <p className="text">
                Konevi Mahallesi Vali Cemil Keleşoğlu Sokak No:17 Meram / KONYA
                0 332 353 25 61
              </p>
              <div className="test-item-info">
                <img src={test3} alt="testimonial" />
                <div>
                  <h3> TUIK Konya Regional Directorate</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>

            <div className="test-item">
              <p className="text">
                Aydoğdu Mahallesi Mücahit Asker Caddesi Meram / KONYA 0 332 280
                44 97
              </p>
              <div className="test-item-info">
                <img src={test5} alt="testimonial" />
                <div>
                  <h3> Land Registry and Cadastre 5th Regional Directorate</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>
            {/* End of Testimonial Item */}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video">
        <div className="video-wrapper flex">
          <video ref={videoRef} loop>
            <source src={bottomvideo} type="video/mp4" />
          </video>
          <button type="button" id="play-btn" onClick={handlePlayPause}>
            <i className="fas fa-play"></i>
          </button>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default Home;
