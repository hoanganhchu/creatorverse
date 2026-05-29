import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'
import CreatorForm from '../components/CreatorForm'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageURL: '',
    youtube: '',
    twitter: '',
    instagram: '',
  })

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators').select('*').eq('id', id).single()
      if (error) console.error(error)
      else setFormData({
        name: data.name || '',
        description: data.description || '',
        imageURL: data.imageURL || '',
        youtube: data.youtube || '',
        twitter: data.twitter || '',
        instagram: data.instagram || '',
      })
    }
    fetchCreator()
  }, [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from('creators').update(formData).eq('id', id)
    if (error) alert('Error: ' + error.message)
    else navigate('/')
  }

  const handleDelete = async () => {
    const { error } = await supabase.from('creators').delete().eq('id', id)
    if (error) alert('Error: ' + error.message)
    else navigate('/')
  }

  return (
    <div className="form-wrapper">
      <CreatorForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleUpdate}
        onDelete={() => setShowModal(true)}
        isEdit={true}
      />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>⚠️ WAIT!!!! ⚠️</h2>
            <p>Are you sure you want to delete {formData.name}???</p>
            <div className="modal-buttons">
              <button className="btn btn-primary" onClick={() => setShowModal(false)}>
                Nah, never mind
              </button>
              <button className="btn btn-primary" onClick={handleDelete}>
                Yes! Totally sure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditCreator