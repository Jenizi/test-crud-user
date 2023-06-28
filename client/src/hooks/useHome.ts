import { useEffect, useState } from "react";
import axios from "axios";

const useHome = () => {
  const [userData, setUserData] = useState<any>();

  const handleData = async () => {
    try {
      const response = await axios.get("/users");
      setUserData(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  async function refreshData() {
    await handleData();
  }

  return [userData, refreshData];
};

export default useHome;
