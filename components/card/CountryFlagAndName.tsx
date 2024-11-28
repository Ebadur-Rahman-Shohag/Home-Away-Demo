// import { findCountryByCode } from "@/utils/countries";

// function CountryFlagAndName({ countryCode }: { countryCode: string }) {
//   const validCountry = findCountryByCode(countryCode);
//   const countryName =
//     validCountry!.name.length > 20
//       ? `${validCountry!.name.substring(0, 20)}...`
//       : validCountry!.name;
//   return (
//     <span className="flex justify-between items-center gap-2 text-sm ">
//       {validCountry?.flag} {countryName}
//     </span>
//   );
// }
// export default CountryFlagAndName;

import { FaLocationDot } from "react-icons/fa6";

function CountryFlagAndName({ country }: { country: string }) {
  // const validCountry = findLocation(country);
  // const countryName =
  //   validCountry!.name.length > 20
  //     ? `${validCountry!.name.substring(0, 20)}...`
  //     : validCountry!.name;
  return (
    <span className="flex  items-center gap-2 text-sm ">
      <FaLocationDot /> {country}
    </span>
  );
}
export default CountryFlagAndName;