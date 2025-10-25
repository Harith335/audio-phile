import { Card } from "./Card";

export const Cards = () => {
  return (
    <>
      <div className="mt-18 flex justify-between items-center gap-28 md:flex-row flex-col md:w-[1100px] ">
        <Card src={"Headphones.webp"} product={"Headphones"} />
        <Card src={"speaker2.webp"} product={"Speaker"} />
        <Card src={"earphone.webp"} product={"Earphone"} />
      </div>
    </>
  );
};
