import React from "react";

export default function Main() {
  return (
    <div className="text-white">
        {/*image 1 */}
      <div className="flex w-[85%] m-auto justify-between items-center py-16">
        <div>
          <h1 className="text-3xl font-bold"> Enjoy on your TV </h1>
          <p className="p-4 font-bold ">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>

        <img
          className="h-[350px]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
          alt="image-1"
        />
      </div>

       {/*image 2 */}

      <div className="flex w-[85%] m-auto justify-between items-center py-16">
        <img
          className="h-[350px]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
          alt="image-1"
        />
        <div>
          <h1 className="text-3xl font-bold">Watch everywhere </h1>
          <p className="p-4 font-bold ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV
          </p>
        </div>
      </div>

         {/*image 3 */}
      <div className="flex w-[85%] m-auto justify-between items-center py-16">
        <div>
          <h1 className="text-3xl font-bold"> Create profiles for kids </h1>
          <p className="p-4 font-bold ">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>

        <img
          className="h-[350px]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en.png"
          alt="image-1"
        />
      </div>

       {/*image 4 */}

      <div className="flex w-[85%] m-auto justify-between items-center py-16">
        <img
          className="h-[350px]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png"
          alt="image-1"
        />
        <div>
          <h1 className="text-3xl font-bold">
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
