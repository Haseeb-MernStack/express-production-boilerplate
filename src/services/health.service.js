export const healthCheck = () => {
  return {
    status: "OK",
    uptime: process.uptime()
  };
};
