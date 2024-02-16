import { useState, useEffect } from "react";
const Useractivity = () => {
  const [onlineStatus, setonlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);
  return onlineStatus;
};
export default Useractivity;
