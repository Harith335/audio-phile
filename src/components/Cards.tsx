import { Card } from "./Card";

export const Cards = () => {
  return (
    <>
      <div className="md:flex md:justify-between mt-50 grid gap-30 place-content-center md:w-[1100px] w-screen ">
        <Card src={"Headphones.webp"} product={"Headphones"} />
        <Card src={"speaker2.webp"} product={"Speaker"} />
        <Card src={"earphone.webp"} product={"Earphone"} />
      </div>
    </>
  );
};
