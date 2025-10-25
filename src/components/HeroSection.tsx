export const HeroSection = () => {
  return (
    <main className="bg-gray-950 overflow-hidden">
      <section className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8 p-4">
        <div className="text-white flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <h2 className="text-gray-400 tracking-[10px] uppercase">New Product</h2>
          <p className="md:text-6xl my-4 text-2xl font-bold">XX99 MARK II HEADPHONES</p>
          <p className="text-gray-200 leading-relaxed max-w-[360px]">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <button className="bg-primary p-4 w-48 mt-9">SEE PRODUCT</button>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute w-[200px] h-[200px] top-[65px] right-[90px] shadow-[0_10px_70px_rgba(255,255,255,0.9)] rounded-full bg-white/10 blur-3xl"></div>
          <img
            src="/heroSectionImg.png"
            alt="heroSectionImg"
            className="w-[600px] h-[600px] object-cover mx-auto"
          />
        </div>
      </section>
    </main>
  );
};
