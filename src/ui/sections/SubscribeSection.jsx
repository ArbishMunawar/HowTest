import React from "react";

const SubscribeSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#fef6f6] to-[#f0fdfd] rounded-xl p-6 sm:p-10 my-[80px]  max-w-5xl mx-auto text-center shadow-sm">
      <h2 className="text-xl sm:text-2xl font-semibold text-rasin-black mb-2">
        Subscribe to Get Updated!
      </h2>
      <p className="text-sm sm:text-base text-text-gray max-w-2xl mx-auto mb-6">
        Filter out the noise and enrich your inbox with guidance that empowers
        your CSS and PMS preparation. Stay informed with expert advice, curated
        resources, and strategies tailored to your success!
      </p>
      <div className="md:flex md:items-center md:justify-center ">
      <form className="flex  sm:flex-row  md:w-[50%] xl:w-[40%] md:flex md:items-center md:justify-center items-center border rounded-md bg-white border-light-gray justify-center ">
        <input
          type="email"
          placeholder="Write your email"
          className="w-full sm:w-72 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-azure-blue"
        />
        <button
          type="submit"
          className="bg-azure-blue hover:bg-azure-blue text-white px-6 py-2 rounded-md transition duration-300"
        >
          Subscribe
        </button>
      </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
