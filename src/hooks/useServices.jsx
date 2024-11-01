import { useEffect, useState } from "react";

const useServices = (value) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(value)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return services;
};

export default useServices;
