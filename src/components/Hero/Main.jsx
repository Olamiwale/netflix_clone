import React from "react";

export default function Main() {
  return (
    <div className="text-white">
        {/*image 1 */}
       <div className="flex w-[85%] m-auto justify-between items-center  py-16 max-sm:flex-col">
        <div>
          <h1 className="text-3xl font-bold p-4"> Enjoy on your TV </h1>
          <p className="p-4 ">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>

        <img
          className="h-[350px] max-md:h-[220px] max-sm:h-[300px]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
          alt="image-1"
        />
       </div>

       {/*image 2 */}

      <div className="flex w-[85%] m-auto justify-between items-center py-16 max-sm:flex-col-reverse">
        <img
          className="h-[350px] max-md:h-[220px] max-sm:h-[300px]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
          alt="image-1"
        />
        <div>
          <h1 className="text-3xl font-bold p-4">Watch everywhere </h1>
          <p className="p-4 font-bold ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV
          </p>
        </div>
      </div>

         {/*image 3 */}
      <div className="flex w-[85%] m-auto justify-between items-center py-16 max-sm:flex-col">
        <div>
          <h1 className="p-4 text-3xl font-bold"> Create profiles for kids </h1>
          <p className="p-4 font-bold ">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>

        <img
          className="h-[350px] max-md:h-[220px] max-sm:h-[300px]"
          src="https://occ-0-299-1167.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABRFH-vdJSR0qkt72Fgqx45jsKfXao7Ds3YDvdyrPvl7kJHMxfm-9aKjlb4EY3ezBGDQdt0WhJOxOOeMcvDfgTw_cg-XWV8mt8AUk.png?r=b36"
          alt="image-1"
        />
      </div>

       {/*image 4 */}

      <div className="flex w-[85%] m-auto justify-between items-center py-16 max-sm:flex-col-reverse">
        <img
          className="h-[350px] max-md:h-[220px] max-sm:h-[300px]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png"
          alt="image-1"
        />
        <div>
          <h1 className=" p-4 text-3xl font-bold">
            {" "}
            Download your shows to watch offline{" "}
          </h1>
          <p className="p-4 font-bold ">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
}
