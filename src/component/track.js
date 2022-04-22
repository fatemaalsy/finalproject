import "./index.css";


function songTrack(props) {
    return (
      <div className="baris-1">
        <div className="card-one">
          <img src={props.image} alt={props.title} />
          <h1>{props.title}</h1>
          <p>{props.album}</p>
          <h3>{props.artist}</h3>
          <button class="buttonPlaylist button1" type="button">
            Select
          </button>
        </div>
      </div>
    );
  }
  export default songTrack;