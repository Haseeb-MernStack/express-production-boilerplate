import { healthCheck } from "../services/health.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const check = (req, res) => {
  const data = healthCheck();
  successResponse(res, "Server is healthy", data);
};
