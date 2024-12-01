import { IconType } from "react-icons";
import {
  FiCloud,
  FiShoppingBag,
  FiTag,
  FiGift,
  FiSmartphone,
  FiTv,
  FiHome,
  FiBox,
  FiSliders,
  FiSun,
  FiUsers,
  FiTruck,
} from "react-icons/fi";

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const amenities: Amenity[] = [
  { name: "Wide variety of clothing", icon: FiShoppingBag, selected: false },
  { name: "Trendy children clothing", icon: FiUsers, selected: false },
  { name: "Comfortable footwear", icon: FiTag, selected: false },
  { name: "Latest gadgets", icon: FiSmartphone, selected: false },
  { name: "Premium electronics", icon: FiTv, selected: false },
  { name: "Elegant home decor", icon: FiHome, selected: false },
  { name: "Fast shipping", icon: FiTruck, selected: false },
  { name: "Exclusive discounts", icon: FiGift, selected: false },
  { name: "Secure packaging", icon: FiBox, selected: false },
  { name: "Customizable options", icon: FiSliders, selected: false },
  { name: "Outdoor-friendly products", icon: FiSun, selected: false },
];

export const conservativeAmenities: Amenity[] = [
  { name: "Clothing variety", icon: FiShoppingBag, selected: false },
  { name: "Children wear", icon: FiUsers, selected: false },
  { name: "Footwear collection", icon: FiTag, selected: false },
  { name: "Gadgets lineup", icon: FiSmartphone, selected: false },
  { name: "Electronics deals", icon: FiTv, selected: false },
  { name: "Home decoration items", icon: FiHome, selected: false },
  { name: "Fast delivery", icon: FiTruck, selected: false },
  { name: "Gift options", icon: FiGift, selected: false },
  { name: "Safe packaging", icon: FiBox, selected: false },
  { name: "Adjustable features", icon: FiSliders, selected: false },
  { name: "Outdoor accessories", icon: FiSun, selected: false },
];
