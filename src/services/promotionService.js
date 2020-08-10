import Axios from "./Axios";

const promotionService = {
  getPromotion: async () => {
    const promotions = await Axios.get(`/promotions`);
    return promotions;
  },
  getHomePromotions: async () => {
    const promotions = await Axios.get(`/promotions/parent`);
    return promotions;
  },
  getPromotionsByParent: async (id) => {
    const promotions = await Axios.get(`/promotions/parent/${id}`);
    return promotions;
  },
};

export default promotionService;
