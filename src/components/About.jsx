function About() {
  return (
    <div className="w-full p-10 md:p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-2xl md:text-4xl">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

    <div className="flex flex-col md:flex-row w-full border-t-[1px] border-[#b5c481] mt-16">
        <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl pt-10">Our approach:
            </h1>
            <button className="flex items-center justify-center gap-4 px-6 md:px-10 py-2 md:py-4 mt-6 bg-zinc-900 text-white rounded-full uppercase ">Read more
            <div className="w-3 h-3 rounded-full bg-[#fff]"></div>
            </button>
        </div>
        <div className="w-full md:w-1/2 h-[60vh] bg-[#b0c859] mt-10 rounded-3xl bg-no-repeat bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')]">

        </div>
    </div>

    </div>
  );
}

export default About;
