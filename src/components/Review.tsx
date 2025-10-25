export const Review = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:my-40 my-20 w-screen md:w-[1100px]">
        <div className="md:w-[300px] md:text-left md:block text-center w-full flex flex-col items-center">
          <h1 className="font-semibold text-4xl w-86 ">
            BRINGING YOU THE <span className="text-primary"> BEST </span>
            AUDIO GEAR
          </h1>
          <p className="md:w-[420px] w-[320px] mt-8">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img
          src="/images.jpeg"
          alt=""
          className="md:w-[550px] md:h-[460px] w-[350px] h-[400px] rounded-xl object-cover md:mt-0 mt-10"
        />
      </div>
    </>
  );
};
