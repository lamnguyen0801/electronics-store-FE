import { useEffect, useState } from "react";
import { getSearchProduct } from "../../services/product";
import { Link, useLocation } from "react-router-dom";
import "./searchProduct.scss"

function SearchProduct() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getSearchProduct(keyword);
      setSearchProduct(data);
    };
    fetchApi();
  }, [keyword]);

  return (
    <>
      <div className="product-search">
        {searchProduct.length > 0 &&
          searchProduct.map((item) => (
            <div key={item._id} className="product">
              <Link to={`/detailProduct/${item._id}`}>
                <div className="product__img">
                  <img src={item.image} alt="ảnh sp" />
                </div>
              </Link>
              <div className="product__info">
                <span>{item.name}</span>
                <span>{item.price} 000 VNĐ</span>
                <span>{item.promotionPrice} 000 VNĐ</span>
                <span>Mã sản phẩm: {item.seoTitle}</span>
                <Link
                  to={`/detailProduct/${item._id}`}
                  className="product__detail"
                >
                  Chi tiết sản phẩm
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchProduct;
