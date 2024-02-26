import React, { useEffect, useRef } from "react";
import { fetchRecipeData } from "../../Utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { setHomeRecipeData } from "../../Redux/homeSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RecipeCard from "./RecipeCard";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import LeftArrow from "../../../../movies-app/src/Components/SliderArrows/LeftArrow";
import RightArrow from "../../Components/SliderArrows/RightArrow";
import Footer from "./Footer";

const Home = () => {

  const searchRef = useRef("");


  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    lazyLoad: "ondemand",
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  let commonParams = {
    number: 100,
    offset: 0,
  };
  let type = "search";
  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigateTo = useNavigate();
  const { homeRecipeData, cuisineList } = useSelector((state) => state.home);
  useEffect(() => {
    console.log(location.pathname);
    console.log(params.search);
    if (location.pathname.includes("/search")) {
      commonParams.query = params.search;
      type = "complexSearch";
    } else if (location.pathname.includes("/")) {
      commonParams.cuisine = params.cuisine;
      type = "search";
    }
    const getData = async () => {
      try {
        const data = await fetchRecipeData("", commonParams, "search");
        console.log(data.data.results);
        dispatch(setHomeRecipeData(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params]);
  return (
    <div className="home w-full text-white flex flex-col items-center pb-8 gap-8">
      <div className="hero w-full h-[90vh] bg-gradientImage bg-top bg-no-repeat	bg-cover mt-[-5rem] flex flex-col justify-center items-center gap-4">
        <p className="text-[4rem] font-bold tracking-wider	">Welcome.</p>
        <p className="text-xl font-semibold tracking-wider">
          Thousands of recipes and cuisines to discover. Explore now.
        </p>
        <form
          action=""
          className="w-[60%] flex items-center rounded-[2rem]"
          onSubmit={(e) => {
            e.preventDefault();
            navigateTo("/search/" + searchRef.current.value);
          }}
        >
          <input
            type="text"
            className="w-[80%] h-14 outline-none px-6 rounded-l-[2rem] text-black"
            placeholder="Search for a recipe"
            ref={searchRef}
          ></input>
          <button
            type="submit"
            className="w-[20%] h-14 rounded-r-[2rem] bg-buttonGradient"
          >
            Search
          </button>
        </form>
      </div>
      <div className="cuisine w-full bg-backgroundColor h-[4rem] flex justify-center items-center">
        <Slider
          className="w-[80%] rounded-lg px-4 text-center h-full bg-pinkText  "
          {...settings}
        >
          {cuisineList.map((cuisine, idx) => {
            return (
              <NavLink
                key={idx}
                to={"/" + cuisine}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending text-lg font-bold"
                    : isActive
                    ? "text-backgroundColor text-lg font-bold"
                    : " text-lg font-bold"
                }
              >
                {cuisine}
              </NavLink>
            );
          })}
        </Slider>
      </div>
      <div
        className="w-full bg-backgroundColor px-8 flex flex-wrap items-start gap-4 justify-center"
        style={{ rowGap: "5rem" }}
      >
        {Object.keys(homeRecipeData).length !== 0
          && homeRecipeData.results.length !== 0 ? homeRecipeData.results.map((recipe, idx) => {
              return <RecipeCard data={recipe} key={recipe.id} />;
            })
          : "No Data Found"}
      </div>
    </div>
  );
};

export default Home;
