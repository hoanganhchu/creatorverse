import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

function CreatorForm({ formData, onChange, onSubmit, onDelete, isEdit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label className="field-label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label className="field-label">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label className="field-label">Image URL</label>
        <p className="field-hint">Provide a link to an image of your creator. Be sure to include the http://</p>
        <input
          type="url"
          name="imageURL"
          value={formData.imageURL}
          onChange={onChange}
        />
      </div>

      <div>
        <label className="field-label"><FaYoutube /> YouTube</label>
        <p className="field-hint">The creator's YouTube handle (without the @)</p>
        <input
          type="text"
          name="youtube"
          value={formData.youtube}
          onChange={onChange}
        />
      </div>

      <div>
        <label className="field-label"><FaTwitter /> Twitter</label>
        <p className="field-hint">The creator's Twitter handle (without the @)</p>
        <input
          type="text"
          name="twitter"
          value={formData.twitter}
          onChange={onChange}
        />
      </div>

      <div>
        <label className="field-label"><FaInstagram /> Instagram</label>
        <p className="field-hint">The creator's Instagram handle (without the @)</p>
        <input
          type="text"
          name="instagram"
          value={formData.instagram}
          onChange={onChange}
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">Submit</button>
        {isEdit && (
          <button type="button" className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </form>
  )
}

export default CreatorForm