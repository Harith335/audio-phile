export const Card = ({ src, product }) => {
  return (
    <div className="relative flex flex-col justify-between items-center bg-gray-100 rounded-lg p-6 w-80 h-32">
      <div className="relative h-80 w-full flex justify-center">
        <img
          src={src}
          alt=""
          className=" w-32 absolute bottom-4 object-contain z-10"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/20 rounded-full blur-md"></div>
      </div>
      <div className="text-center">
        <p className="mt-4 text-lg font-bold tracking-wide">{product}</p>
        <p className="text-sm text-gray-500">Shop &gt;</p>
      </div>
    </div>
  );
};
