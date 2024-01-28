import React, { useState } from "react";
import "./styles.css";

import place1 from "../images/80bindedevrialem.jpg";
import place2 from "../images/akyokus.jpg";
import place3 from "../images/etnografya.jpg";
import place4 from "../images/hadimi.jpg";
import place5 from "../images/kapucamii.jpg";
import place6 from "../images/sahipata.jpg";
import place7 from "../images/lkccami.jpg";
import place8 from "../images/evliyacelebiparki.jpg";

const Gallery = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const allGalleryItem = Array.from(document.querySelectorAll(".gallery-item")); // Convert NodeList to an array
  const imgModalDiv = document.getElementById("img-modal-box");

  const popularPlacesData = [
    {
      imageSrc: place1,
      placeName: "80 BİNDE DEVRİ ALEM",
      rating: 4.5,
      reviews: 400,
      description: "80 Binde Devri Alem Park consists of three sections!",
    },
    {
      imageSrc: place2,
      placeName: "AKYOKUŞ",
      rating: 4.5,
      reviews: 400,
      description:
        "Akyokuş Nature Park is located in the Akyokuş area of Meram district in Konya",
    },
    {
      imageSrc: place3,
      placeName: "ETNOGRAFYA MÜZESİ",
      rating: 4.5,
      reviews: 400,
      description: "Our museum reflecting the beauties of our history.",
    },
    {
      imageSrc: place4,
      placeName: "KARAASLAN HADİMİ PARKI",
      rating: 4.5,
      reviews: 400,
      description:
        "The Karaaslan Hadimi Park, built by Konya Metropolitan Municipality, is located in the Yaylapınar neighborhood, covering an area of 186,000 m², making it the largest park in Konya.",
    },
    {
      imageSrc: place5,
      placeName: "KAPU CAMİİ",
      rating: 4.5,
      reviews: 400,
      description:
        "The mosque takes its name from being located next to one of the entrances of Konya Castle.",
    },
    {
      imageSrc: place6,
      placeName: "SAHİPATA MÜZESİ",
      rating: 4.5,
      reviews: 400,
      description:
        "The Sahip Ata Foundation Museum - Konya. It was built in 1277 by Sahip Ata Fahreddin Ali, one of the viziers of the Anatolian Seljuk State.",
    },
    {
      imageSrc: place7,
      placeName: "İPLİKÇİ CAMİİ",
      rating: 4.5,
      reviews: 400,
      description:
        "The İplikçi Mosque was the first madrasa (theological school) in Konya, the capital of the Anatolian Seljuk State.",
    },
    {
      imageSrc: place8,
      placeName: "EVLİYA ÇELEBİ PARKI",
      rating: 4.5,
      reviews: 400,
      description: "Cultural and entertainment park.",
    },

    // ... Repeat the structure for other places
  ];

  const showImageContent = (index) => {
    setImgIndex(index);
    imgModalDiv.querySelector(
      "#img-modal img"
    ).src = `images/gallery-${index}.jpg`;
  };

  const closeModal = () => {
    imgModalDiv.style.display = "none";
  };

  const openModal = (galleryItem) => {
    imgModalDiv.style.display = "block";
    let imgSrc = galleryItem.querySelector("img").src;
    const index = parseInt(imgSrc.split("-")[1].substring(0, 1));
    showImageContent(index);
  };

  const nextImage = () => {
    let nextIndex = imgIndex + 1;
    if (nextIndex > allGalleryItem.length) {
      nextIndex = 1;
    }
    showImageContent(nextIndex);
  };

  const prevImage = () => {
    let prevIndex = imgIndex - 1;
    if (prevIndex <= 0) {
      prevIndex = allGalleryItem.length;
    }
    showImageContent(prevIndex);
  };

  return (
    <div>
      {/* header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Gallery</h1>
            <p>
            Discover the tourist, historical, and cultural richness of Meram with accompanying pictures!
            </p>
          </div>
        </div>
      </header>
      {/* end of header */}

      {/* gallery section */}
      <div id="gallery" className="  galeripadding">
        <div className="container">
          <div className="gallery-row">
            {allGalleryItem.map((galleryItem, index) => (
              <div
                key={index}
                className="gallery-item shadow"
                onClick={() => openModal(galleryItem)}
              >
                <img
                  src={`images/gallery-${index + 1}.jpg`}
                  alt={`gallery img ${index + 1}`}
                />
                <span className="zoom-icon">
                  <i className="fas fa-search-plus"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of gallery section */}

      {/* img modal */}
      <div id="img-modal-box">
        <div id="img-modal">
          <button
            type="button"
            id="modal-close-btn"
            className="flex"
            onClick={closeModal}
          >
            <i className="fas fa-times"></i>
          </button>
          <button
            type="button"
            id="prev-btn"
            className="flex"
            onClick={prevImage}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            id="next-btn"
            className="flex"
            onClick={nextImage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <img
            src={`images/gallery-${imgIndex}.jpg`}
            alt={`gallery img ${imgIndex}`}
          />
        </div>
      </div>
      {/* end of img modal */}

      {/* ... (Include the rest of your components and sections) */}
      <section id="popular" className="py-4">
        <div className="title-wrap">
          <span className="sm-title">You can browse the gallery below!</span>
          <h2 className="lg-title">Meram, filled with beauty:</h2>
        </div>

        <div className="popular-row gallery-popular-row">
          {popularPlacesData.map((place, index) => (
            <div key={index} className="popular-item itempiece shadow">
              <img src={place.imageSrc} alt={place.placeName} />
              <div>
                <span>{place.placeName}</span>
                <ul className="rating flex">
                  {[...Array(Math.floor(place.rating))].map((_, i) => (
                    <li key={i}>
                      <i className="fas fa-star"></i>
                    </li>
                  ))}
                  {place.rating % 1 !== 0 && (
                    <li>
                      <i className="fas fa-star-half-alt"></i>
                    </li>
                  )}
                  <li>&nbsp;{place.reviews} reviews</li>
                </ul>
                <p className="text">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}

      {/* end of footer */}
    </div>
  );
};

export default Gallery;
