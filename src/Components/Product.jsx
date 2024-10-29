import PropTypes from 'prop-types';

const Product = ({ products }) => {
  return (
    <>
      <div className="row position-relative">
        {products.map((product, index) => (
          <div key={product.id || index} className="col-md-6 col-lg-4 mt-1-9">
            <div className="team-style1 text-center">
              <img
                src={product.image}
                className="border-radius-5"
                alt={product.title}
              />
              <div className="team-info">
                <h3 className="mb-1 h5 content-title">{product.title}</h3>
                <div className="price-container">
                  <p className="text-decoration-line-through text-primary fs-6 fw-normal no-margin-bottom">
                    {product.oldPrice} лв.
                  </p>
                  <span className="font-weight-500 text-warning fs-3 fw-bolder">
                    {product.newPrice} лв.
                  </span>
                </div>
              </div>
              <div className="team-overlay">
                <div className="d-table h-100 w-100">
                  <div className="d-table-cell align-middle">
                    <h3>
                      <a href={product.linkLearnMore} className="text-black h5">
                        {product.title}
                      </a>
                    </h3>
                    <p className="text-black mb-0 fst-italic fw-normal fs-6">
                      {product.content}
                    </p>
                    <div className="d-flex justify-content-around">
                      <a
                        className="btn btn-light m-3"
                        href={product.linkLearnMore}
                        role="button"
                      >
                        Научи повече
                      </a>
                      <a
                        className="btn btn-dark m-3"
                        href={product.linkBuy}
                        role="button"
                      >
                        Купи
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;

Product.propTypes = {
  products: PropTypes.array.isRequired,
};
