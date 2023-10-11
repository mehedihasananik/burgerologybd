const Hero = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="flex justify-center pt-[5%]">
          <h3
            style={{
              textShadow:
                "#fff 3px 3px 0,#fff -3px -3px 0,#fff -3px 3px 0,#fff 3px -3px 0",
            }}
            className="text-red-700 text-6xl"
          >
            BIG BURGER, LITTLE MONEY
          </h3>
        </div>
        {/* image */}
        <div className="flex justify-center w-full pt-[4%]">
          <img
            className=" w-[60%]"
            src="https://testo-livid.vercel.app/images/hero-2-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
