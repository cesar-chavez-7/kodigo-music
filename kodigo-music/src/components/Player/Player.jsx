import './Player.css'

const Player = () => {
  return (
    <div className="player">
      <div className="song-info">
        <img src="https://via.placeholder.com/50" alt="Song cover" />
        <div>
          <h4>Song Name</h4>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="player-controls">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>
      <div className="volume-control">
        <input type="range" min="0" max="100" />
      </div>
    </div>
  )
}

export default Player