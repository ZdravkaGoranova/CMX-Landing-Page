import { useEffect, useState } from 'react';
import './Main.css';

import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListProducts from './ListProducts.jsx';

const Main = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = JSON.parse(localStorage.getItem('CMX-Products'));
      if (data) {
        setProducts(data);
      }

      const newProducts = [
        // {
        //   id: uuid(),
        //   key: uuid(),
        //   title: '',
        //   content: '',
        //   newPrice: '',
        //   oldPrice: '',
        //   linkBuy: '',
        //   linkLearnMore: '',
        // },
        {
          id: uuid(),
          key: uuid(),
          title: 'Машината за безвъздушно боядисване с латекс STAHL Easy',
          content:
            'Paint S1 е идеалният избор за ентусиасти, които търсят висока ефективност и качество при боядисване на различни повърхности. ...',
          newPrice: '439.00',
          oldPrice: ' 685.00',
          linkBuy: 'https://www.cmx.bg/store/checkout',
          linkLearnMore:
            'https://www.cmx.bg/product44076/mashina-za-bezvazdushno-boyadisvane-stahl-easy-paint-s1-15-lmin',
          image: '320_44076.webp',
        },
        {
          id: uuid(),
          key: uuid(),
          title: ' Машина за рязане на плочки 230мм',
          content:
            'Размер на диска, max 230 мм Централен отвор на диска 25. 4мм Дължина на рязане, max 1200 мм Дълбочина на рязане, max 45 мм Мощност 1.1kW ...',
          newPrice: '2 220.00',
          oldPrice: '2 600.00',
          linkBuy: 'https://www.cmx.bg/store/checkout',
          linkLearnMore:
            'https://www.cmx.bg/product45629/otrezna-masa-za-plochki-cimex-tc350-1200n-11-kw',
          image: '/320_41.webp',
        },
        {
          id: uuid(),
          key: uuid(),
          title: 'Моторна косачка 25-80 мм 46 см 65 л',
          content:
            'Моторната косачка е оборудвана е с мощен 4-тактов двигател и превключваемо задвижване на задните колела. Сгъваемото кормило спестява място при съхранение.',
          newPrice: '559.00',
          oldPrice: '599.00',
          linkBuy: 'https://www.cmx.bg/store/checkout',
          linkLearnMore:
            'https://www.cmx.bg/product39184/benzinova-samohodna-kosachka-einhell-gc-pm-465-s-272-ks',
          image: '320_39184.webp',
        },
        {
          id: uuid(),
          key: uuid(),
          title: 'Машината за безвъздушно боядисване с латекс STAHL Easy',
          content:
            'Paint S1 е идеалният избор за ентусиасти, които търсят висока ефективност и качество при боядисване на различни повърхности. ...',
          newPrice: '439.00',
          oldPrice: ' 685.00',
          linkBuy: 'https://www.cmx.bg/store/checkout',
          linkLearnMore:
            'https://www.cmx.bg/product44076/mashina-za-bezvazdushno-boyadisvane-stahl-easy-paint-s1-15-lmin',
          image: '320_44076.webp',
        },
        {
          id: uuid(),
          key: uuid(),
          title: ' Машина за рязане на плочки 230мм',
          content:
            'Размер на диска, max 230 мм Централен отвор на диска 25. 4мм Дължина на рязане, max 1200 мм Дълбочина на рязане, max 45 мм Мощност 1.1kW ...',
          newPrice: '2 220.00',
          oldPrice: '2 600.00',
          linkBuy: 'https://www.cmx.bg/store/checkout',
          linkLearnMore:
            'https://www.cmx.bg/product45629/otrezna-masa-za-plochki-cimex-tc350-1200n-11-kw',
          image: '/320_41.webp',
        },
        {
          id: uuid(),
          key: uuid(),
          title: 'Моторна косачка 25-80 мм 46 см 65 л',
          content:
            'Моторната косачка е оборудвана е с мощен 4-тактов двигател и превключваемо задвижване на задните колела. Сгъваемото кормило спестява място при съхранение.',
          newPrice: '559.00',
          oldPrice: '599.00',
          linkBuy: 'https://www.cmx.bg/store/checkout',
          linkLearnMore:
            'https://www.cmx.bg/product39184/benzinova-samohodna-kosachka-einhell-gc-pm-465-s-272-ks',
          image: '320_39184.webp',
        },
      ];

      // setProducts([newProducts]);
      setProducts(newProducts);
      console.log(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      toast.error('Error fetching notes:!', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('CMX-Products', JSON.stringify(products));
  }, [products]);
  return (
    <>
      <ListProducts products={products} />
      <ToastContainer />
    </>
  );
};

export default Main;

//  <section id="pricing" className="pricing-content section-padding">
//    <div className="container">
//      <div className="section-title text-center">
//        <h1>Pricing Plan</h1>
//        <p>
//          It is a long established fact that a reader will be distracted by the
//          readable content of a page when looking at its layout.
//        </p>
//      </div>
//      <div className="row text-center">
//        <div
//          className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
//          data-wow-duration="1s"
//          data-wow-delay="0.1s"
//          data-wow-offset="0"
//        >
//          <div className="single-pricing">
//            <div className="price-head">
//              <h2>Starter</h2>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//            </div>
//            <h1 className="price">$29</h1>
//            <h5>Monthly</h5>
//            <ul>
//              <li>5 website</li>
//              <li>50GB Disk Space</li>
//              <li>50 Email Accounts</li>
//            </ul>
//            <a href="#">Get start</a>
//          </div>
//        </div>
//        <div
//          className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
//          data-wow-duration="1s"
//          data-wow-delay="0.2s"
//          data-wow-offset="0"
//        >
//          <div className="single-pricing">
//            <div className="price-head">
//              <h2>popular</h2>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//            </div>
//            <h1 className="price">$49</h1>
//            <h5>Monthly</h5>
//            <ul>
//              <li>10 website</li>
//              <li>50GB Disk Space</li>
//              <li>50 Email Accounts</li>
//              <li>50GB Monthly Bandwidth</li>
//              <li>10 Subdomains</li>
//            </ul>
//            <a href="#">Get start</a>
//          </div>
//        </div>
//        <div
//          className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
//          data-wow-duration="1s"
//          data-wow-delay="0.3s"
//          data-wow-offset="0"
//        >
//          <div className="single-pricing single-pricing-white">
//            <div className="price-head">
//              <h2>Advance</h2>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//              <span></span>
//            </div>
//            <span className="price-label">Best</span>
//            <h1 className="price">$69</h1>
//            <h5>Monthly</h5>
//            <ul>
//              <li>15 website</li>
//              <li>50GB Disk Space</li>
//              <li>50 Email Accounts</li>
//              <li>50GB Monthly Bandwidth</li>
//              <li>10 Subdomains</li>
//              <li>15 Domains</li>
//              <li>Unlimited Support</li>
//            </ul>
//            <a href="#">Get start</a>
//          </div>
//        </div>
//      </div>
//    </div>
//  </section>;
