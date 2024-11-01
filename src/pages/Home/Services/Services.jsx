import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";

// dry --> Do not repeat yourself
const Services = () => {
  const services = useServices(
    "https://car-doctor-server-lilac-beta.vercel.app/services"
  );

  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("https://car-doctor-server-lilac-beta.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-700">Our Services</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <ServiceCard key={service?._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
