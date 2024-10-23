import { get } from "../utils/request";

export const getProductCategory = async () => {
    const result = await get("productCategory");
    return result;
}