import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({ theme }) => {
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <footer
        className={`footer_area navbar fixed-bottom bg-body-tertiary`}
        data-bs-theme={theme === 'dark' ? 'dark' : undefined}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                <div className="footer-logo mb-3"></div>

                <div className="footer_social_area">
                  <a
                    href="https://www.facebook.com/CMX.BG"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCqElYlVbs68ohjPetcSMjcA"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Pinterest"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5
                  className={`widget-title ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                >
                  About
                </h5>

                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="https://www.cmx.bg/page/1/za-nas">За нас</a>
                    </li>
                    <li>
                      <a href="https://www.cmx.bg/main/index/contacts">
                        Контакти
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5
                  className={`widget-title ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                >
                  Support
                </h5>

                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="https://www.cmx.bg/page/2/vrashtane-na-produkt">
                        Връщане на продукт
                      </a>
                    </li>
                    <li>
                      <a href="https://www.cmx.bg/page/3/usloviya-za-polzvane">
                        Условия за ползване
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5
                  className={`widget-title ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                >
                  Delivery
                </h5>

                <div className="footer_menu">
                  <ul>
                    <li>
                      <a
                        href="https://www.cmx.bg/page/4/kak-da-poracham-onlayn"
                     
                      >
                        Как да поръчам онлайн?
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cmx.bg/page/5/dostavka"
                       
                      >
                        Доставка
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`footer-bottom small py-3 border-top ${
                theme === 'dark'
                  ? 'border-white border-opacity-10'
                  : 'border-black border-opacity-10'
              }`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-center text-md-start py-1">
                    <p
                      className={`m-0 ${
                        theme === 'dark'
                          ? 'text-white text-opacity-75'
                          : 'text-black text-opacity-75'
                      }`}
                      data-bs-theme={theme === 'dark' ? 'dark' : undefined}
                    >
                      © 2024 Copyright cmx.bg. Всички права запазени.
                    </p>
                  </div>
                  <div className="col-md-6 text-center text-md-end py-1">
                    <ul className="nav justify-content-center justify-content-md-end list-unstyled footer-link-01 m-0">
                      <li className="p-0 mx-3 ms-md-0 me-md-3">
                        <a
                          href="#"
                          className={`m-0 ${
                            theme === 'dark'
                              ? 'text-white text-opacity-75'
                              : 'text-black text-opacity-75'
                          }`}
                          data-bs-theme={theme === 'dark' ? 'dark' : undefined}
                        >
                          Privace &amp; Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};
