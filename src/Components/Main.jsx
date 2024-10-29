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
          image: '/5.png',
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
          image: '/3.png',
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
          image: '/4.png',
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
          image: '/5.png',
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
          image: '/3.png',
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
          image: '/4.png',
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
