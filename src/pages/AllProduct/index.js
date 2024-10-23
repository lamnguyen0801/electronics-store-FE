import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/product";
import { Link } from "react-router-dom";
import { getProductCategory } from "../../services/productCategory";
import "./allProduct.scss";

function AllProduct() {
    const [groupedProducts, setGroupedProducts] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const dataProduct = await getAllProduct();
            const dataCate = await getProductCategory();

            const result = [];

            dataProduct.forEach(product => {
                const cate = dataCate.find(item => item._id === product.cateID);
                
                if (cate) {
                    result.push({
                        ...product,
                        cateName: cate.name  // Thêm cateName vào product
                    });
                }
            });
            
            // Nhóm sản phẩm theo cateName
            const grouped = result.reduce((acc, product) => {
                if (!acc[product.cateName]) {
                    acc[product.cateName] = [];
                }
                acc[product.cateName].push(product);
                return acc;
            }, {});

            setGroupedProducts(grouped);
        };

        fetchApi();
    }, []);

    return (
        <>
            <div className="product-block">
                {
                    Object.keys(groupedProducts).length > 0 && (
                        Object.keys(groupedProducts).map(cateName => (
                            <div key={cateName}>
                                <h2 className="product-cate">{cateName}</h2>
                                <div className="product-list">
                                    {
                                        groupedProducts[cateName].map(item => (
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
                                                    >Chi tiết sản phẩm</Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    );
}

export default AllProduct;
