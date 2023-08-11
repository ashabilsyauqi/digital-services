import React from "react";
import webdev from './assets/close-up-image-programer-working-his-desk-office.jpg'
import devops from './assets/programming-background-with-person-working-with-codes-computer.jpg'
import uiux from './assets/UI-UX-Design.jpg'
import ServiceCard from "./UI/ServiceCard";

export default function Services() {

    const Services = [
        {img: webdev, desc: "Layanan pengembangan web kami menghadirkan solusi yang mengubah konsep menjadi kenyataan digital. Dari merancang tata letak yang menarik hingga mengembangkan fungsionalitas yang canggih, tim ahli kami menggunakan teknologi terkini untuk menciptakan pengalaman web yang responsif dan unik sesuai dengan kebutuhan klien. "},
        {img: devops, desc: "Layanan hosting dan domain kami merupakan fondasi kuat bagi kehadiran online Anda. Dengan penyediaan hosting yang handal, kami menjamin situs web Anda tetap online 24/7 dengan kecepatan tinggi dan keamanan terjamin. "},
        {img: uiux, desc: "Layanan desainer UI/UX kami membawa pengalaman pengguna dan estetika visual menjadi harmoni yang menakjubkan. Tim kreatif kami merancang antarmuka yang intuitif dan menarik, memastikan setiap sentuhan memberikan pengalaman yang luar biasa kepada pengguna. "},

    ]
  return (
    <div className="Services">
      <h1 className="Services-tagline">Services</h1>
      <div className="Services-cards flex-center">
        {/* <ServiceCard data={Services} /> */}

        {Services.map((data, index) => (
        <ServiceCard key={index} data={data} />
      ))}
      </div>
    </div>
  );
}
