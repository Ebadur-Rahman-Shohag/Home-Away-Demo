import { Button } from "@/components/ui/button";

function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div>
          <Button className="text-xl sm:text-2xl md:text-4xl p-4 md:p-8">
            ShopNShare
          </Button>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to ShopNShare! We offer a variety of clothing,
        electronics, and more at great prices. Our goal is to make shopping easy
        and enjoyable. Thank you for choosing us! Shop now and discover amazing
        deals you don&apos;t want to miss!
      </p>
    </>
  );
}

export default About;
