export const GetAPIUrl = () => {
  if (window.location.hostname === "localhost") {
    return "https://localhost:44346";
  }
  return "https://api.taksivarmi.com";
};
