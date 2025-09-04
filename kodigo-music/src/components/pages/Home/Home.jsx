import './Home.css'

const Home = () => {
  const featuredPlaylists = [
    {
      id: 1,
      title: "Top Hits 2023",
      image: "https://via.placeholder.com/200",
      description: "Las canciones más populares del momento"
    },
    {
      id: 2,
      title: "Rock Classics",
      image: "https://via.placeholder.com/200",
      description: "Los mejores clásicos del rock"
    },
    {
      id: 3,
      title: "Chill Vibes",
      image: "https://via.placeholder.com/200",
      description: "Música relajante para cualquier momento"
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <h2>Bienvenido a Kodigo Music</h2>
        <p>Descubre millones de canciones y podcasts</p>
      </section>
      
      <section className="featured-playlists">
        <h3>Playlists destacadas</h3>
        <div className="playlists-grid">
          {featuredPlaylists.map(playlist => (
            <div key={playlist.id} className="playlist-card">
              <img src={playlist.image} alt={playlist.title} />
              <h4>{playlist.title}</h4>
              <p>{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home