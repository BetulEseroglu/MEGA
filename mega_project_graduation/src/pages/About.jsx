import React from "react";
import "./styles.css";

import leftImg from "../images/about-img.jpg";

function About() {
  return (
    <div>
      {/* Header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Meram's Name</h1>
            <p>
              The word "Meram" in the Konya dialect encompasses meanings such as "purpose, desire, goal, aim, theme". It has become the specific name for this heavenly recreation area where everyone yearns to see, meet, wander, and live. Thus, it has been etched into memory. This name has transcended into history, documents, charters, travelogues, books, and poems, spreading from mouth to mouth and from heart to heart.

              Meram is located 8 km west of the city center. It is characterized by the steep bare slopes of the Loras Mountain to the west and a harmony of greenery that fans out towards Konya on the eastern slopes of these mountains. In addition to these green slopes, it also encompasses a portion of the plain of Konya on this side. Meram derives its true beauty, character, and legendary reputation from the time of the Seljuks. These beauties continue to captivate with increasing charm and allure through the periods of the Karamanids, Ottomans, and the Republic.

              During the Seljuk period, one of the twelve gates opening to the road leading to Meram was known as the "Meram Gate". The centuries of Mevlevi tradition in Meram have left unforgettable memories in the cultural history of Konya, the capital of the Seljuks. Conversations filled with love, meaning, and wisdom, mingled with flowing water, blooming flowers, fragrant roses, and budding leaves, blended with the gentle breeze, have found their place in writings and spoken words.

              The architectural heritage of Meram, including mosques, tombs, schools, houses, and mansions, has endured through its stone, marble, wood, and mortar, reaching us today.
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">Meram Municipality Mayor</span>
            <h2 className="lg-title">Mustafa Kavuş</h2>
          </div>

          <div className="about-row">
            <div className="about-left my-2">
              <img src={leftImg} alt="about img" />
            </div>
            <div className="about-right">
              <h2>Başkanımız MUSTAFA KAVUŞ:</h2>
              <p className="text">
              Mustafa KAVUŞ, whose educational journey began at Ali İhsan Dayıoğlugil Primary School, completed his middle and high school education at Konya Imam Hatip High School. After successfully graduating from the Department of Business Administration at Ankara University, Faculty of Political Sciences in 1995, he pursued his master's degree in the Department of Management Organization at Selçuk University. Alongside his academic pursuits, Mustafa KAVUŞ sought to gain work experience from a young age. He worked as a manager in the textile, publishing, and food sectors. In addition to his professional endeavors, he developed an interest in politics. He served as the Founding Organization President of the AK Party Youth Branch in the province between 2001 and 2003. Continuing his political journey, he served as a member of the Provincial Organization Executive Board from 2003 to 2005 and ran as a parliamentary candidate in the 2011 general elections.

In 2004, Mustafa KAVUŞ was appointed as an advisor to the Mayor of Konya Metropolitan Municipality, and in 2006, he was appointed as an Inspector at the Inspection Board. He held the position of Chairman of the Inspection Board until 2018. While serving as an Advisor to the Minister at the Ministry of Environment and Urbanization, he resigned to apply for candidacy. Mustafa KAVUŞ, married and father of two, was elected as the Mayor of Meram in the local elections held on March 31, 2019.
              </p>
              {/* <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique explicabo blanditiis quidem consequuntur qui quaerat
                fuga iste tenetur consequatur porro. Aliquam maiores alias
                doloribus at quisquam quo numquam perferendis. Odit!
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts" className="py-4 flex">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">"Meram in Numbers</span>
            <h2 className="lg-title">What happened in Our Meram in a year?</h2>
          </div>

          <div className="facts-row">
            <div className="facts-item">
              <span className="fas fa-solid fa-user facts-icon "></span>

              <div className="facts-info">
                <strong>57200</strong>
                <p className="text">Our citizens conducted transactions at our municipality.</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-solid fa-baby  facts-icon"></span>
              <div className="facts-info">
                <strong>3,155</strong>
                <p className="text">Babies were born in Meram.</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-solid fa-wifi facts-icon"></span>
              <div className="facts-info">
                <strong>612,832</strong>
                <p className="text">People visited our website.</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-solid fa-trash facts-icon"></span>
              <div className="facts-info">
                <strong>139,828 m³</strong>
                <p className="text">
                The garbage was collected and transported to sorting and processing facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* JS script */}
      <script src="js/script.js"></script>
      {/* Additional React scripts can be added here */}
    </div>
  );
}

export default About;
