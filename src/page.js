import React from "react";
import Data from "./Data";
import _songTrack from "./component/track";

const Page = () => {
  return (
    <div className="container">
      <div className="playlist">
        <h1>Search Song</h1>
        <div class="form-playlist">
          <input type="text" id="playlist" name="playlist" />
          <br />
          <br />
          <button class="buttonPlaylist button2" type="button">
            Search
          </button>
        </div>
        <hr></hr>
      </div>

      {Data.map((d) => (
        <_songTrack
          image={d.album.images[0].url}
          album={d.name}
          artist={d.artists[0]?.name}
          title={d.album.name}
          key={d.album.name}
        />
      ))}
    </div>
  );
}

export default Page;