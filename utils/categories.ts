import { IconType } from "react-icons";
import { FaMale,FaFemale,FaChild  } from "react-icons/fa";
import { GiTShirt,GiArmoredPants,GiRunningShoe,GiClothes,GiNecklaceDisplay,GiDress,GiSombrero    } from "react-icons/gi";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "men"
  | "women"
  | "children"
  | "shoes"
  // | "suits"
  // | "ties"
  | "hats";

export const categories: Category[] = [
  {
    label: "men",
    icon: FaMale,
  },
  {
    label: "women",
    icon: FaFemale,
  },
  {
    label: "children",
    icon: FaChild,
  },

  {
    label: "shoes",
    icon: GiRunningShoe ,
  },
  // {
  //   label: "suits",
  //   icon: GiClothes ,
  // },
  // {
  //   label: "ties",
  //   icon: GiNecklaceDisplay ,
  // },
  {
    label: "hats",
    icon: GiSombrero ,
  },
];
