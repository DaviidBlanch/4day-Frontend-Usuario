import axios from 'axios'

const register = async (values) => {
  const formData = new FormData()
  formData.append('foto', values.foto[0])

  Object.keys(values).forEach(key => {
    if (key !== 'foto') {
      formData.append(key, values[key])
    }
  })

  const { data } = await axios.post('http://localhost:3001/newTrabajador', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return data
}

export default register
