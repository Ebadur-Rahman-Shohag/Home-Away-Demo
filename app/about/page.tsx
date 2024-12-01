import { Button } from "@/components/ui/button"

function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div>
          <Button className="text-4xl p-8">E-Commerce BestDeal Website</Button>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
      Welcome to E-Commerce BestDeal Website! We offer a variety of clothing, electronics, and more at great prices. Our goal is to make shopping easy and enjoyable. Thank you for choosing us!
      </p>
    </>
  );
}

export default About;
