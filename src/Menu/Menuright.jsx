
function Menuright() {
  return (
    <div className="w-1/3   text-white h-screen flex flex-col justify-between">
      {/* Navbar */}
      <div className="flex justify-between items-center p-5">
        <div className="text-white text-4xl"> {/* Add Logo Here */} </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-start">
        <div className="text-start font-normal font-[Monument]">
          <h2 className="text-3xl">ABOUT</h2>
          <h2 className="text-3xl">STORY</h2>
          <h2 className="text-3xl">PROJECTS</h2>
          <h2 className="text-3xl">RELEASES</h2>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-grow flex flex-col justify-center items-start">
        
      <footer className="grid grid-cols-2 gap-20">
        {/* Left Section */}
        <div className="space-y-20">
            <div className=" text-[0.6vw]">
              <p>FOLLOW (AROCK®)</p>
              <p>LISTEN (AROCK®)</p>
          </div>
            <div className="text-[0.6vw]">
            <p>SAN DIEGO</p>
            <p>BPM MUSIC</p>
            <p>1600 NATIONAL AVE</p>
            <p>SAN DIEGO, CA 92123</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-20">
            <div className="text-[0.6vw]">
            <p>INSTAGRAM</p>
            <p>YOUTUBE</p>
            <p>SPOTIFY</p>
            <p>MIXCLOUD</p>
          </div>
            <div className="text-[0.6vw]">
            <p>LOS ANGELES</p>
            <p>6255 SUNSET BLVD.</p>
            <p>SUITE</p>
            <p>LOS ANGELES, CA 90028</p>
          </div>
        </div>

        {/* Email Button */}
        <div className="col-span-2 flex justify-center w-full">
          <button className="w-full border-[1px] p-3 rounded-xl text-xs px-10 bg-white text-black">
            EMAIL
          </button>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Menuright