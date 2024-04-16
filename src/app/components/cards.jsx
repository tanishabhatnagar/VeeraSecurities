import React from "react";

const ServicesData = [
  {
    id: 1,
    img: 'images/img1.png ',
    name: "Experienced Staff",
    description:
      "We have experienced professionals who can easily understand our clients' requirements."
  },
  {
    id: 2,
    img: 'images/img2.png',
    name: "Top-Tier Quality",
    description:
      "Our no-compromise approach to quality ensures that our solutions are robust, user-friendly, and last for years."
  },
  {
    id: 3,
    img: 'images/img3.png ',
    name: "Affordable",
    description:
      "Our services have competitive pricing in the security market."
  }
];

const Services = () => {
    return (
      <>
        <span id="services"></span>
        <div className="py-10 relative bg-[black]">
          <div className="container mx-auto w-3/5">
            <div className="mb-auto text-center max-w-[400px] mx-auto">
              <h1 className="text-2xl lg:text-4xl mb-20 font-bold text-white dark:text-white whitespace-nowrap md:text-center flex justify-center items-center">
                What Sets Us Apart?
              </h1>
            </div>
            <div className="relative mt-2">
              <div className="absolute -inset-5 rounded-full bg-gray-700 blur-xl"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
                {ServicesData.map((service) => (
                  <button
                    key={service.id}
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    className="rounded-2xl mb-5 bg-gray-800 relative shadow-xl duration-high group h-[320px] transition-transform hover:-translate-y-2 flex flex-col justify-between"
                  >
                    <div className="mt-5 h-[240px] w-[240px] flex items-center justify-center overflow-hidden mx-auto">
                      <img
                        src={service.img}
                        alt=""
                        className="max-h-full max-w-full transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-5 text-center flex flex-col justify-between flex-grow">
                      <div>
                        <h1 className="text-xl font-bold mb-1 text-gray-200">{service.name}</h1>
                      </div>
                      <p className="text-white text-sm mt-1">
                        {service.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Services;
