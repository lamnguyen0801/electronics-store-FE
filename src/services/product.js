import { get } from "../utils/request";

export const getProductByCateID = async (id) => {
    const result = await get(`product/${id}`);
    return result;
}

export const getAllProduct = async () => {
    const result = await get(`product`);
    return result;
}

export const getDetailProduct = async (id) => {
    const result = await get(`product/detailProduct/${id}`);
    return result;
}

export const getSearchProduct = async (keyword) => {
    const result = await get(`product?keyword=${keyword}`);
    return result;
}