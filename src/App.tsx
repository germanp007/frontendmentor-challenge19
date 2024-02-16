const App = () => {
  return (
    <main className=" h-[956px] w-screen bg-VeryDarkBlue flex justify-center items-center text-White font-inter md:h-screen">
      <article className="w-[90%] h-[780px] text-center md:flex md:h-[446px] lg:w-[1124px]">
        <section className="bg-[url('/images/image-header-mobile.jpg')] bg-no-repeat bg-cover  w-full h-[240px] rounded-t-[10px] overflow-hidden md:order-2 md:bg-[url('/images/image-header-desktop.jpg')] md:h-full md:rounded-none md:rounded-r-[10px]">
          <div className="bg-MaskBg h-full w-full opacity-70"></div>
        </section>
        <section className="bg-DarkDesaturatedBlue w-full h-[540px] rounded-b-[10px] flex flex-col justify-evenly items-center md:rounded-none md:rounded-l-[10px] md:h-full md:items-start md:pl-[4rem] lg:pr-[4rem]">
          <div className="flex flex-col justify-center items-center md:text-left">
            <h1 className="text-[1.7rem] font-bold w-[272px] leading-[2rem] mb-4 xs:w-[90%] lg:text-[2.24rem] lg:leading-[3rem]  ">
              Get <span className="text-SoftViolet">insights</span> that help
              your business grow.
            </h1>
            <p className="text-base text-SlightlyTransparentWhite1 font-extralight w-[272px] xs:w-[90%]  ">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className="text-2xl font-bold flex flex-col gap-7 md:flex-row md:ml-5 lg:gap-[3.5rem]">
            <div className="md:text-left">
              <h2>10k+</h2>
              <p className=" text-SlightlyTransparentWhite1 font-extralight uppercase font-lexend text-xs tracking-[0.09rem]">
                Companies
              </p>
            </div>
            <div className="md:text-left">
              <h2>314</h2>
              <p className=" text-SlightlyTransparentWhite1 font-extralight uppercase font-lexend text-xs tracking-[0.09rem]">
                Templates
              </p>
            </div>
            <div className="md:text-left">
              <h2>12M+</h2>
              <p className=" text-SlightlyTransparentWhite1 font-extralight uppercase font-lexend text-xs tracking-[0.09rem]">
                Queries
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default App;
