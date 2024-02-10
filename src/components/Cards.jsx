function Cards() {
  return (
    <div className="w-full h-full md:h-screen flex gap-5 flex-col md:flex-row items-center px-10 lg:px-20 bg-zinc-900">
      <div className="cardContainer h-full md:h-[50vh] w-full md:w-1/2">
        <div className="flex items-center justify-center card relative w-full h-[50vh] md:h-full bg-[#004D43] rounded-xl">
          <div className="w-32">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute px-5 py-2 left-10 bottom-10 border-2 rounded-full text-[#cdea68] text-xs md:text-md">&copy;2019-2024</button>
          </div>
        </div>
      </div>
      <div className="cardContainer h-full md:h-[50vh] w-full md:w-1/2 flex gap-5 flex-col sm:flex-row">
        <div className="card h-[50vh] relative flex items-center justify-center w-full sm:w-1/2 md:h-full bg-[#1f3434] rounded-xl">
          <div>
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="absolute px-5 py-2 left-5 md:left-10 bottom-2 md:bottom-10 border-2 rounded-full uppercase text-xs md:text-md">rating 5.0 on clutch</button>
          </div>
        </div>
        <div className="card h-[50vh] relative flex items-center justify-center w-full sm:w-1/2 md:h-full bg-[#212121] rounded-xl">
          <div>
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="absolute px-5 py-2 left-5 md:left-10 bottom-2 md:bottom-10 border-2 rounded-full uppercase text-xs md:text-md">Buisiness Bootcamp Alumni</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
