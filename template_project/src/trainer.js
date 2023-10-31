import './css/bootstrap.css';
import './css/responsive.css';
import './css/style.css';
import'./css/style.css.map';

function Trainer() {
    return (
      <div>
        {/* Basic */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Mobile Metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Site Metas */}
        <meta name="keywords" content />
        <meta name="description" content />
        <meta name="author" content />
        <title>Neogym</title>
        {/* slider stylesheet */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        {/* bootstrap core css */}
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        {/* fonts style */}
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
        {/* Custom styles for this template */}
        <link href="css/style.css" rel="stylesheet" />
        {/* responsive style */}
        <link href="css/responsive.css" rel="stylesheet" />
        <div className="hero_area">
          {/* header section strats */}
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="/home">
                  <span>
                    Neogym
                  </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                      <li className="nav-item ">
                        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="/why"> Why us </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="/trainer"> trainers</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contact"> Contact Us</a>
                      </li>
                    </ul>
                    <div className="user_option">
                      <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                      </form>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* end header section */}
        </div>
        {/* trainer section */}
        <section className="trainer_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                Our Gym Trainers
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mx-auto">
                <div className="box">
                  <div className="name">
                    <h5>
                      Smirth Jon
                    </h5>
                  </div>
                  <div className="img-box">
                    <img src="images/t1.jpg" alt="" />
                  </div>
                  <div className="social_box">
                    <a href>
                      <img src="images/facebook-logo.png" alt="" />
                    </a>
                    <a href>
                      <img src="images/twitter.png" alt="" />
                    </a>
                    <a href>
                      <img src="images/instagram-logo.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mx-auto">
                <div className="box">
                  <div className="name">
                    <h5>
                      Jean Doe
                    </h5>
                  </div>
                  <div className="img-box">
                    <img src="images/t2.jpg" alt="" />
                  </div>
                  <div className="social_box">
                    <a href>
                      <img src="images/facebook-logo.png" alt="" />
                    </a>
                    <a href>
                      <img src="images/twitter.png" alt="" />
                    </a>
                    <a href>
                      <img src="images/instagram-logo.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mx-auto">
                <div className="box">
                  <div className="name">
                    <h5>
                      Alex Den
                    </h5>
                  </div>
                  <div className="img-box">
                    <img src="images/t3.jpg" alt="" />
                  </div>
                  <div className="social_box">
                    <a href>
                      <img src="images/facebook-logo.png" alt="" />
                    </a>
                    <a href>
                      <img src="images/twitter.png" alt="" />
                    </a>
                    <a href>
                      <img src="images/instagram-logo.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end trainer section */}
        {/* info section */}
        <section className="info_section layout_padding2">
          <div className="container">
            <div className="info_items">
              <a href>
                <div className="item ">
                  <div className="img-box box-1">
                    <img src alt="" />
                  </div>
                  <div className="detail-box">
                    <p>
                      Location
                    </p>
                  </div>
                </div>
              </a>
              <a href>
                <div className="item ">
                  <div className="img-box box-2">
                    <img src alt="" />
                  </div>
                  <div className="detail-box">
                    <p>
                      +02 1234567890
                    </p>
                  </div>
                </div>
              </a>
              <a href>
                <div className="item ">
                  <div className="img-box box-3">
                    <img src alt="" />
                  </div>
                  <div className="detail-box">
                    <p>
                      demo@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* end info_section */}
        {/* footer section */}
        <footer className="container-fluid footer_section">
          <p>
            © 2020 All Rights Reserved. Design by
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </footer>
        {/* footer section */}
      </div>
    );
  };

  export default Trainer;