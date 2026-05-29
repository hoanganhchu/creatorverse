import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'

function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) console.error(error)
      else setCreators(data)
      setLoading(false)
    }
    fetchCreators()
  }, [])

  if (loading) return <p className="empty">Loading...</p>

  return (
    <div>
      {creators.length === 0 ? (
        <p className="empty">No creators yet. Add your first one!</p>
      ) : (
        <div className="grid">
          {creators.map((c) => <Card key={c.id} creator={c} />)}
        </div>
      )}
    </div>
  )
}

export default ShowCreators