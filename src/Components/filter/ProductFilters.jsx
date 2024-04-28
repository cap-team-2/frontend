// ProductFilters.jsx
import {
  LuCarrot,
  LuApple,
  LuBeef,
  LuMilk,
  LuFish,
  LuVegan,
  LuFlower2,
  LuCroissant,
  LuCandy,
  LuHome,
} from "react-icons/lu";



// Array of various products to be used as filter buttons on the home page
const productFilters = [
  {
    category: "Home",
    icon: LuHome,
  },
  {
    category: "Vegetables",
    icon: LuCarrot,
  },
  {
    category: "Fruits",
    icon: LuApple,
  },
  {
    category: "Dairy",
    icon: LuMilk,
  },
  {
    category: "Desserts",
    icon: LuCandy,
  },
  {
    category: "Meat",
    icon: LuBeef,
  },
  {
    category: "Seafood",
    icon: LuFish,
  },
  {
    category: "Vegan",
    icon: LuVegan,
  },
  {
    category: "Bakery",
    icon: LuCroissant,
  },
  {
    category: "Flowers",
    icon: LuFlower2,
  },
];

export default productFilters;