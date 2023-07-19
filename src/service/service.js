// API CALLS
import { fetchData } from "../data";

const ScheduleData = async () => {
  const response = await fetchData();
  return response;
};

const service = {
  ScheduleData,
};

export default service;
