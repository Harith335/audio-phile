export const Types = () => {
  return (
    <div className="space-y-10">
      <div className="grid place-content-center md:w-[1100px] w-screen md:gap-8 md:p-8 md:grid-cols-2 bg-primary mt-30 rounded-lg">
        <div>
          <img
            src="/spektor-2-black_1.png"
            alt="heroSectionImg"
            className="md:w-[400px] md:h-[400px] object-cover w-[300px] h-[300px] mx-auto mt-6"
          />
        </div>
        <div className="text-white grid place-content-center md:w-[360px] w-screen text-center md:text-left p-6">
          <p className="md:text-6xl my-4 text-4xl ">ZX9 SPEAKERS</p>
          <p className="text-gray-200 leading-relaxed md:w-[360px] w-[300px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-gray-950 p-4 w-48 mt-9">SEE PRODUCT</button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 bg-gray-300 md:rounded-lg relative">
        <div className="md:text-gray-900 md:grid  md:place-content-center md:w-[360px] md:relative absolute z-20 w-screen flex flex-col justify-center items-center p-6">
          <p className="text-2xl my-4 text-white">ZX7 SPEAKERS</p>
          <button className=" md:border md:border-gray-900 p-4 w-48 md:text-gray-900 font-bold bg-transparent text-white border-4 border-white ">
            SEE PRODUCT
          </button>
        </div>
        <div className="md:block flex flex-col justify-center items-center mdw-[600px] w-screen">
          <div className="md:hidden absolute bg-black opacity-50 h-full w-full"></div>
          <img
            src="/spektor-2-black_1.png"
            alt="heroSectionImg"
            className="md:w-[600px] md:h-[250px] w-[400px] h-[200px] object-cover "
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:w-[1100px] w-screen gap-6 rounded-lg">
        <div className="bg-gray-950 flex justify-center items-center p-6">
          <img src="/earphone.webp" alt="Earphones" className="w-[150px]" />
        </div>
        <div className="bg-gray-300 text-gray-900 grid place-content-center p-6 rounded-lg">
          <p className="text-2xl my-4 font-bold">YX1 EARPHONES</p>
          <button className="bg-gray-300 border border-gray-900 p-4 w-48 text-gray-900 font-bold">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};
