import React from "react";
import imageData from "../public/images.json";
import Card from "./Components/Card";

const UserImages = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-gray-700 font-mono mt-4 text-center mb-8">
        Select Doctor
      </h2>
      <div className="flex flex-wrap justify-center">
        {imageData.map((item, index) => (
          <div key={index} className="w-1/4 p-4">
            <Card
              imageUrl={item.image}
              altText={`User Image ${index}`}
              index={index + 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserImages;
