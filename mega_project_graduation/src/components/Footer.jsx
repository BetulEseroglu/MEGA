import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-4">
      <div className="container footer-row">
        <div className="footer-item">
          <Link to="/" className="site-brand">
            Meram<span>Bel</span>
          </Link>
          <p className="text">
          The word "Meram" in Konya dialect means "purpose, desire, goal, aim, theme". It has become the special name of this paradise promenade where everyone longs to see, meet, wander, and live. Thus, it has been remembered. This name has passed into history, documents, deeds, travelogues, books, poems, spreading from mouth to mouth, from heart to heart.
          </p>
        </div>

        <div className="footer-item">
          <h2>Follow Us:</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://tr-tr.facebook.com/Meram.Belediyesi/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/meram.belediyesi/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MeramBelediyesi"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <h2>Follow our mayor, Mustafa Kavuş Bey:</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/mustafakavuss/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mustafakavuss/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MustafaKavus"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <h2>Popular Places to visit in Meram:</h2>
          <ul>
            <li>
              <p>80 Binde Devri Alem Park</p>
            </li>
            <li>
              <p>Sahip Ata Museum</p>
            </li>
            <li>
              <p>Akyokuş</p>
            </li>
            <li>
              <p>Kapu Camii</p>
            </li>
            <li>
              <p>Karaaslan Hadimi Park</p>
            </li>
            <li>
              <p>Tavusbaba Türbesi</p>
            </li>
          </ul>
        </div>

        <div className="subscribe-form footer-item">
          <h2>Subscribe for updates and notifications!</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Email adress"
              className="form-control"
            />
            <input type="submit" className="btn" value="Subscribe!" />
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
