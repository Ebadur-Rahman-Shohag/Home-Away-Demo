"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Slider } from "@/components/ui/slider";

// Define props type for PriceSearch
interface PriceSearchProps {
  category?: string;
  search?: string;
  price?: number;
}

const PriceSearch: React.FC<PriceSearchProps> = ({ category, search, price }) => {
  const searchTerm = search ? `&search=${search}` : "";
  const categoriesTerm = category ? `&category=${category}` : "";
  const router = useRouter();
  const [rangeValue, setRangeValue] = useState<number>(price || 100); // Default value of 100

  const handleRangeChange = (value: number[]) => {
    setRangeValue(value[0]); // Extract the first value from the array and update the state
  };

  const handleClick = (): void => {
    // Update the URL when button is clicked
    router.push(`?price=${rangeValue}${categoriesTerm}${searchTerm}`);
  };

  return (
    <div className="flex space-x-10">
      <Label htmlFor="rangeInput">{rangeValue}</Label>
      <Slider
        id="rangeInput"
        min={0}
        max={50000}
        value={[rangeValue]} // Pass the current value as an array
        step={1}
        onValueChange={handleRangeChange} // Correctly update the state
      />
      <Button size="sm" onClick={handleClick}>
        Filter By Price
      </Button>
    </div>
  );
};

export default PriceSearch;
