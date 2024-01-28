import React from "react";
import "./styles.css";
import image1 from "../images/blog-1.jpg";
import image2 from "../images/blog-2.jpg";
import image3 from "../images/blog-3.jpg";
import image4 from "../images/blog-4.jpg";
import image5 from "../images/blog-5.jpg";
import image6 from "../images/blog-6.jpg";

const Blog = () => {
  function getImages() {
    return [image1, image2, image3, image4, image5, image6];
  }
  return (
    <div>
      {/* Header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Blog</h1>
            <p>
            The blog of Meram locals who share their opinions and recommendations about places they visited and sights they saw!
            </p>
          </div>
        </div>
      </header>
      {/* End of Header */}

      {/* Blog Section */}
      <section id="blog" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <h2 className="sm-title">
            You can check out blogs to gather more information about Meram.
            </h2>
            <h3 className="lg-title">Blogs</h3>
          </div>

          <div className="blog-row">
            {/* Map through your blog items here */}
            {console.log([...Array(8)])}
            {getImages().map((image, index) => (
              <div className="blog-item my-2 shadow" key={index}>
                <div className="blog-item-top">
                  <img src={image} alt="blog" />
                  <span className="blog-date">oct 28, 2021</span>
                </div>
                <div className="blog-item-bottom">
                  <span>Visits</span>
                  <b style={{ fontSize: "25px" }}>Meram Belediyesi</b>
                  <p className="text">
                    Meram, one of the central districts of Konya, is situated in the southwest of the city. It hosts numerous Islamic historical landmarks. Within the district boundaries, there are notable historical sites such as the Saint Paul's Church, which dates back to the Roman Empire period and is the last church of Konya, and the Kilistra Ancient City, known for its splendid view due to being carved into the rocks.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End of Blog Section */}

      {/* Footer */}

      {/* End of Footer */}
    </div>
  );
};

export default Blog;
