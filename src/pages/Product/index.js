import { useEffect, useState } from "react";
import { getProductByCateID } from "../../services/product";
import { Link, useParams } from "react-router-dom";
import "./product.scss";

function Product() {
    const params = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getProductByCateID(params.id);
            setProduct(data);
        };
        fetchApi();
    }, [params.id]);

    return (
        <>
            <div className="product-category">
                {
                    (product.length > 0) && (
                        product.map((item) => (
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
                                    <Link to={`/detailProduct/${item._id}`} className="product__detail">Chi tiết sản phẩm</Link>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    );
}

export default Product;