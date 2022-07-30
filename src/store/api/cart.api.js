import axios from "axios";

export const getProduct = async () => {
    try {
        // const params = { title, description, price, image }
        const res = await axios.get(`https://fakestoreapi.com/products`)
        return res?.data
    } catch (error) {
        // console.log("error: ", error);
        return {
            error: true,
            message: error?.response?.data?.message || "Request fail"
        }
    }
}