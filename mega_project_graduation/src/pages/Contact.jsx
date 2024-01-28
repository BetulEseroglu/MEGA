import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Contact</h1>
            <p>
            You can submit your suggestions, complaints, and thoughts via the form below or by contacting us through the provided phone number or email address!
            </p>
          </div>
        </div>
      </header>
      {/* End of Header */}

      {/* Contact Section */}
      <section id="contact" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">Contact us!</span>
            <h2 className="lg-title">Form:</h2>
          </div>

          <div className="contact-row">
            <div className="contact-left">
              <form className="contact-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name - Surname"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail address"
                />
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Your message"
                  style={{ resize: "none" }}
                ></textarea>
                <input type="submit" className="btn" value="Send" />
              </form>
            </div>
            <div className="contact-right">
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-phone-alt"></i>
                </span>
                <div>
                  <span>Phone Number:</span>
                  <p className="text">(0332) 320 10 00</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-map-marked-alt"></i>
                </span>
                <div>
                  <span>Address:</span>
                  <p className="text">
                    Yenişehir Mahallesi, Azerbeycan Cd. No:5, 42010 Meram/Konya
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-envelope"></i>
                </span>
                <div>
                  <span>Email:</span>
                  <p className="text">bizimmeram@meram.bel.tr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Contact Section */}

      {/* Footer */}

      {/* End of Footer */}
    </div>
  );
};

export default Contact;
