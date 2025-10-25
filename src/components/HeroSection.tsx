export const HeroSection = () => {
  return (
    <main>
      <section className="bg-gray-950">
        <div className="grid md:max-w-[1100px] mx-auto gap-8 p-4 grid-cols-2">
          <div className="text-white md:grid md:place-content-center md:w-[360px] md:text-left text-center flex flex-col items-center justify-center w-screen">
            <h2 className="text-gray-400 tracking-[10px]">New Product</h2>
            <p className="md:text-6xl my-4 text-2xl">XX99 MARK II HEADPHONES</p>
            <p className="text-gray-200 leading-relaxed w-[360px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              className="bg-primary p-4 w-48
          mt-9"
            >
              SEE PRODUCT
            </button>
          </div>
          <div className="position-relative hidden md:block">
            <div className="absolute w-50 h-50 top-65 right-90 shadow-[0_10px_70px_rgba(255,255,255,0.9)] rounded-full bg-white/10 blur-3xl"></div>
            <img
              src="/heroSectionImg.png"
              alt="heroSectionImg"
              className="bg-gray-950 w-[600px] h-[600px] object-cover "
            />
          </div>
        </div>
      </section>
    </main>
  );
};
