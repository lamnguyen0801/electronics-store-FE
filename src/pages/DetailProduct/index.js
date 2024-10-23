import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/product";
import "./detailProduct.scss";

function DetailProduct() {
    const params = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getDetailProduct(params.id);
            setProduct(data);
        };
        fetchApi();
    }, [params.id]);

    return (
        <>
            {product.length > 0 && (
                <>
                    <div className="detail">
                        <div className="detail__left">
                            <div className="detail__img">
                                <img src={product[0].image} alt={product[0].name} />
                            </div>
                            <div className="detail__list-img">
                                {product[0].listImage.map((item, index) => (
                                    <img src={item} key={index} alt="list product" />
                                ))}
                            </div>
                        </div>
                        <div className="detail__right">
                            <div className="detail__desc">{product[0].description}</div>
                            <div className="detail__info-general">
                                <span>Tên: {product[0].name}</span>
                                <span>Giá: {product[0].price} 000 VNĐ</span>
                                <span>Giá khuyến mại: {product[0].promotionPrice} 000 VNĐ</span>
                                <span>Mã sản phẩm: {product[0].seoTitle}</span>
                                <span>Số lượng: {product[0].quantity}</span>
                                <span>Thời gian bảo hành: {product[0].warranty}</span>
                            </div>
                            <div className="detail__detail-product">{product[0].detail}</div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default DetailProduct;
