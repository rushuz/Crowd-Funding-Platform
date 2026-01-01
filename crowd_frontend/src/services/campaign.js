import axios from "axios";
import { toast } from "react-toastify";
import {
  getAllCampaignsUrl,
  getCampaignDataByIdUrl,
  createNewCampaignUrl,
  updateCampaignUrl,
  deleteCampaignUrl,
} from "../config.js";

/* attach token dynamically */
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

/* get all campaigns */
export const getAllCampaigns = async () => {
  let data = [];
  let err;

  try {
    const res = await axios.get(getAllCampaignsUrl());
    data = res.data;
  } catch (e) {
    err = e;
  }

  return { data, err };
};

/* get campaign by id */
export const getCampaignData = async (id) => {
  let data = {};
  let err;

  try {
    const res = await axios.get(getCampaignDataByIdUrl(id));
    data = res.data;
  } catch (e) {
    err = e;
  }

  return { data, err };
};

/* create new campaign */
export const newCampaign = async (data, props) => {
  try {
    const res = await axios.post(createNewCampaignUrl(), data);
    props.history.push(`/campaign/${res.data._id}`);
  } catch (e) {
    if (e.response?.data?.message) toast.error(e.response.data.message);
    else toast.error("Something went wrong");
  }
};

/* update campaign */
export const updateCampaign = async (data, props) => {
  try {
    const res = await axios.put(
      updateCampaignUrl(props.match.params.id),
      data
    );
    props.history.push(`/campaign/${res.data._id}`);
  } catch (e) {
    if (e.response?.data?.message) toast.error(e.response.data.message);
    else toast.error("Something went wrong");
  }
};

/* delete campaign */
export const deleteCampaign = async (props) => {
  try {
    await axios.delete(deleteCampaignUrl(props.match.params.id));
    props.history.push("/");
  } catch (e) {
    if (e.response?.data?.message) toast.error(e.response.data.message);
    else toast.error("Something went wrong");
  }
};
