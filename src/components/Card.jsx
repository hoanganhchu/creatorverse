import { Link } from 'react-router-dom'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FiInfo, FiEdit2 } from 'react-icons/fi'

function Card({ creator }) {
  const bgImage = creator.imageURL || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800'

  return (
    <div className="card">
      <div className="card-bg" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="card-overlay" />

      <div className="card-actions">
        <Link to={`/creator/${creator.id}`} title="View"><FiInfo /></Link>
        <Link to={`/edit/${creator.id}`} title="Edit"><FiEdit2 /></Link>
      </div>

      <div className="card-content">
        <h2>{creator.name}</h2>
        <div className="card-socials">
          {creator.youtube && (
            <a href={`https://youtube.com/@${creator.youtube}`} target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          )}
          {creator.twitter && (
            <a href={`https://twitter.com/${creator.twitter}`} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          )}
          {creator.instagram && (
            <a href={`https://instagram.com/${creator.instagram}`} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          )}
        </div>
        <p>{creator.description}</p>
      </div>
    </div>
  )
}

export default Card