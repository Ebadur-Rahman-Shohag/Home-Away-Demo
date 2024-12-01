import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import LoadingCards from "@/components/card/LoadingCards";
import { Suspense } from "react";
import PriceSearch from "@/components/home/PriceSearch";
function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string; price?: string };
}) {

    // Convert price to number or default to 0
  const price = searchParams?.price ? Number(searchParams.price) : 0;
  return (
    <section>
      <CategoriesList
        category={searchParams?.category}
        search={searchParams?.search}
        price={price}
      />
      <PriceSearch />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams?.category}
          search={searchParams?.search}
          price={price}
        />
      </Suspense>
    </section>
  );
}
export default HomePage;
