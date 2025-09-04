import { useForm } from 'react-hook-form'
import './Search.css'

const Search = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    alert(`Buscando: ${data.searchQuery}`)
  }

  return (
    <div className="search-page">
      <h2>Buscar música</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="search-form">
        <input
          type="text"
          placeholder="Artistas, canciones o podcasts..."
          {...register("searchQuery", { 
            required: "Este campo es obligatorio",
            minLength: {
              value: 2,
              message: "La búsqueda debe tener al menos 2 caracteres"
            }
          })}
        />
        <button type="submit">Buscar</button>
      </form>
      
      {errors.searchQuery && <span className="error">{errors.searchQuery.message}</span>}
      
      <div className="search-results">
        <p>Utiliza el formulario para buscar música.</p>
      </div>

      <div className="contact-section">
        <h3>Formulario de Contacto</h3>
        <ContactForm />
      </div>
    </div>
  )
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    alert('Formulario enviado con éxito!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          {...register("name", { 
            required: "El nombre es obligatorio"
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { 
            required: "El email es obligatorio"
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label>Mensaje:</label>
        <textarea
          {...register("message", { 
            required: "El mensaje es obligatorio"
          })}
        ></textarea>
        {errors.message && <span className="error">{errors.message.message}</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}

export default Search