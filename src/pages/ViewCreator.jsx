import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators').select('*').eq('id', id).single()
      if (error) console.error(error)
      else setCreator(data)
      setLoading(false)
    }
    fetchCreator()
  }, [id])

  if (loading) return <p className="empty">Loading...</p>
  if (!creator) return <p className="empty">Creator not found</p>

  return (
    <div className="detail">
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <h2>{creator.name}</h2>
      <div className="socials">
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
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to={`/edit/${creator.id}`} className="btn btn-primary" style={{ textDecoration: 'none' }}>
          Edit
        </Link>
        <Link to="/" className="back-link">← Back to all creators</Link>
      </div>
    </div>
  )
}

export default ViewCreator