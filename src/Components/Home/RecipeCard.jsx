import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import poster from "../../assets/images/OOPS.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { IoHeart } from "react-icons/io5";

const RecipeCard = ({ data }) => {
  const recipeImg = data.image
    ? `https://spoonacular.com/recipeImages/${data.image}`
    : poster;
  const ratingColor = 5 >= 7 ? "#008101" : "#FFA401";
  return (
    <div
      className="cursor-pointer w-[32%] flex flex-col item-center"
      key={data.id}
    >
      <div className="posterBloc w-full h-[90%] rounded-2xl relative">
        <Link to={"/details/" + data.id} className="w-full h-full">
          <div className="w-full h-[98.5%] absolute bg-transparentBlack hover:bg-transparent transition-all duration-300 rounded-2xl z-10"></div>
          <LazyLoadImage
            // className="w-full rounded-[1rem] h-full object-contain"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "1rem",
              objectPosition: "top",
            }}
            src={recipeImg}
            effect="blur"
            alt=""
            wrapperClassName="w-[100%] rounded-[1rem] h-[25rem] object-cover"
          />
        </Link>
        {/* <IoHeart className="absolute top-4 right-6 text-[2rem] text-gray-600" /> */}

        <div
          className="heart"
          onClick={(e) => {
            e.target.classList.toggle("is-active");
          }}
        ></div>

        <div className="circleRating absolute bottom-[-1rem] left-2 z-20">
          {/* <CircularProgressbar
              value={2}
              maxValue={10}
              text={2}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#fff",
                textColor: "#000",
                pathColor: ratingColor,
                trailColor: "transparent",
                textSize: "1.8rem",
              })}
            /> */}
          <span className="rounded-[2rem] bg-pinkText p-4">
            Takes {data.readyInMinutes} mins
          </span>
        </div>
      </div>
      <br />

      <Link to={"/details/" + data.id}>
        <div className="textBlock h-[10%] mt-2 flex flex-col gap-1">
          <span className="mediaTitle text-lg font-bold">{data.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
