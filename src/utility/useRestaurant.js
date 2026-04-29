import data from "../data/data.json";
const useRestaurant = (id) => {
 
  // Find the restaurant by ID
  const restaurant = data.find((res) => res.id === Number(id));

  return restaurant;
}

export default useRestaurant;  