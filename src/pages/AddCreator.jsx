import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'
import CreatorForm from '../components/CreatorForm'

function AddCreator() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageURL: '',
    youtube: '',
    twitter: '',
    instagram: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from('creators').insert([formData])
    if (error) alert('Error: ' + error.message)
    else navigate('/')
  }

  return (
    <div className="form-wrapper">
      <CreatorForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default AddCreator