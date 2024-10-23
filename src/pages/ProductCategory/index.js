import { useEffect, useState } from "react";
import { getProductCategory } from "../../services/productCategory";
import { Link } from "react-router-dom";
import "./productCategory.scss";

function ProductCategory() {
    const [productCategory, setProductCategory] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getProductCategory();
            setProductCategory(data);
        };
        fetchApi();
    }, []);

    return (
        <>
            <div className="all-category">
                {productCategory.map((item) => (
                    <div key={item._id} className="category">
                        <Link to={`/product/${item._id}`} className="category__title">{item.name}</Link>   
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductCategory;