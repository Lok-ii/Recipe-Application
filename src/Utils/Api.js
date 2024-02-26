import axios from "axios";

// export const fetchData = async (params) => {
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-api-key": "808259e0eaea4121a0fec6abb9e5e8ce",
//     },
//     params: params,
//   };

//   try {
//     const response = await axios.get("https://api.spoonacular.com/recipes/search", options);
//     const data = response.data;
//     console.log(response, data);
//     return data;
//   } catch(err) {
//     console.error(err); 
//   }
// };


export const fetchRecipeData = async (id, params, type) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "808259e0eaea4121a0fec6abb9e5e8ce",
    },
    params: params,
  };

  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/${type}`, options);
    // console.log(response);
    return response;
  } catch(err) {
    console.error(err); 
  }
}