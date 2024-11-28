import { formatQuantity } from "@/utils/format";

type PropertyDetailsProps = {
  details: {
    colors: number;
    sizes: number;
    types: number;
  };
};

function PropertyDetails({
  details: { colors, sizes, types },
}: PropertyDetailsProps) {
  return (
    <p className="text-md font-light ">
      <span>{formatQuantity(colors, "color")} </span>
      <span>{formatQuantity(sizes, "size")} </span>
      <span>{formatQuantity(types, "type")}</span>
    </p>
  );
}
export default PropertyDetails;