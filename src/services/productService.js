import Axios from "./Axios";

const productService = {
  getHomeProduct: async (promotionId) => {
    const products = await Axios.get(`/clothes/promotion/${promotionId}`);
    return products;
  },
  getListProductByCategory: async (category) => {
    const products = await Axios.get(`/clothes/category/${category}`);
    return products;
  },
  getProductById: async (id) => {
    const product = await Axios.get(`/clothes/${id}`);
    return product;
  },
};

export default productService;
