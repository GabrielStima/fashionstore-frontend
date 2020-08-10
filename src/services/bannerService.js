import Axios from "./Axios";

const categoryIndex = [
  { name: "/home" },
  { name: "/masculino" },
  { name: "/feminino" },
];

const findCategory = (string) => {
  return categoryIndex.findIndex((el) => el.name === string);
};

const bannerService = {
  getBanner: async (string) => {
    const banner = await Axios.get(`/banners/${findCategory(string)}`);
    return banner;
  },
};

export default bannerService;
