// // import Nav from 'react-bootstrap/Nav';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <nav
        className={`navbar bg-body-tertiary fixed-top`}
        data-bs-theme={theme === 'dark' ? 'dark' : undefined}
      >
        <div className="container-fluid d-flex justify-content-start align-items-center">
          <a className="navbar-brand me-3 py-2" href="#">
            <img src="/new_logo.png" alt="Logo" width="230" height="50" />
          </a>
          <div className="d-flex align-items-center">
            <nav className="navbar bg-body-tertiary header-nav">
              <form className="container-fluid justify-content-start">
                <a
                  className="btn btn-outline-warning m-3"
                  href="https://www.cmx.bg/"
                  role="button"
                >
                  Kъм сайта
                </a>
                <button
                  className="navbar-toggler order-2 me-3"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  MENU
                  <span className="navbar-toggler-icon"> </span>
                </button>

                <button
                  onClick={toggleTheme}
                  className="btn btn-outline-secondary m-3"
                >
                  {theme === 'light' ? 'Тъмна тема' : 'Светла тема'}
                </button>
              </form>
            </nav>
          </div>
          {/* <a className="navbar-brand me-3 py-2" href="#">
            <img src="/header-banner.png" alt="Logo" width="830" height="80" />
          </a> */}

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand me-3 py-2" href="#">
                <img src="/new_logo.png" alt="Logo" width="230" height="50" />
              </a>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
               
              </button>
            </div>
            <div className="offcanvas-body ">
              <div className="offcanvas-header">
                <figure>
                  <blockquote className="blockquote">
                    <h5>MENU</h5>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Категории
                  </figcaption>
                </figure>
              </div>
              <ul className="navbar-nav  flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-19/avtoserviz"
                    role="button"
                  >
                    Автосервиз
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="hhttps://www.cmx.bg/cat-8/beton"
                    role="button"
                  >
                    Бетон
                  </a>
                </li>

                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-79/boqdisvane"
                    role="button"
                  >
                    Боядисване
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-11/vodni-pompi"
                    role="button"
                  >
                    Водни помпи
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-2/generatori"
                    role="button"
                  >
                    Генератори
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-12/gradinski"
                    role="button"
                  >
                    Градински
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-13/zavarychni"
                    role="button"
                  >
                    Заваръчни
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-21/drugi"
                    role="button"
                  >
                    Други
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-14/izmervane"
                    role="button"
                  >
                    Измерване
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-78/instrumenti"
                    role="button"
                  >
                    Инструменти
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-15/klimatizaciq"
                    role="button"
                  >
                    Климатизация
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-3/kompresori"
                    role="button"
                  >
                    Компресори
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-77/otoplenie"
                    role="button"
                  >
                    Отопление
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-76/pnevmatika"
                    role="button"
                  >
                    Пневматика
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-84/pochistvane"
                    role="button"
                  >
                    Почистване
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="btn btn-outline-primary m-2 btn-sm"
                    href="https://www.cmx.bg/cat-75/probivane"
                    role="button"
                  >
                    Къртене и пробиване
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
