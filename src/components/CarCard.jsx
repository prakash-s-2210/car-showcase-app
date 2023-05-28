import React from "react";
import { GiSteeringWheel, GiGasPump } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import Skeleton from "./Skeleton";

const CarCard = ({ data, isLoading }) => {
  function capitalizeSentence(sentence) {
    const words = sentence.split(" ");

    // Iterate over each word
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }

    const capitalizedSentence = words.join(" ");

    return capitalizedSentence;
  }
  function capitalizeFirstLetter(sentence) {
    let capitalizedSentence =
      sentence.charAt(0).toUpperCase() + sentence.slice(1);
    return capitalizedSentence;
  }

  function makeFormatting(sentence) {
    var words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (i === 0) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }

    let camelCase = words.join("");
    return camelCase;
  }

  function modelFormatting(sentence) {
    let word = "";
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === " ") {
        break;
      }

      word += sentence[i];
    }
    return word.toLowerCase();
  }
  return (
    <>
      {isLoading?<Skeleton /> :<div className="bg-white shadow-xl min-h-full  rounded-xl p-4 py-2 hover:scale-110 hover:shadow-2xl cursor-pointer transition-transform duration-500 ">
        <div className="flex items-center gap-2 font-medium mb-2 ">
          <span>{capitalizeSentence(data.make)}</span>
          <span className="mb-2">.</span>
          <span>{capitalizeSentence(data.model)}</span>
        </div>
        <div className="text-sm mb-3">{capitalizeFirstLetter(data.class)}</div>
        <img
          src={`https://cdn.imagin.studio/getImage?customer=${
            process.env.REACT_APP_CAR_IMAGE_API_KEY
          }&make=${makeFormatting(data.make)}&modelFamily=${modelFormatting(
            data.model
          )}&angle=22`}
          className="w-full object-cover"
          alt={data.make}
        />
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex flex-col items-center">
            <GiSteeringWheel />
            <span className="text-sm">
              {data.transmission === "a" ? "Auto" : "Manual"}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <GiGasPump />
            <span className="text-sm">
              {capitalizeFirstLetter(data.fuel_type)}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaCarAlt />
            <span className="text-sm">{data.drive}</span>
          </div>
        </div>
      </div>}
    </>
  );
};

export default CarCard;
