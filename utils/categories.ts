import { IconType } from "react-icons";
import { 
  GiTShirt, 
  GiRunningShoe, 
  GiModernCity, 
  GiSmartphone, 
  GiCircuitry, 
  GiSofa
} from "react-icons/gi";
import { FaChild } from "react-icons/fa";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "clothing"
  | "children_clothing"
  | "shoes"
  | "gadgets"
  | "electronics"
  | "home_decoration";

export const categories: Category[] = [
  {
    label: "clothing",
    icon: GiTShirt,
  },
  {
    label: "children_clothing",
    icon: FaChild,
  },
  {
    label: "shoes",
    icon: GiRunningShoe,
  },
  {
    label: "gadgets",
    icon: GiSmartphone,
  },
  {
    label: "electronics",
    icon: GiCircuitry,
  },
  {
    label: "home_decoration",
    icon: GiSofa,
  },
];
