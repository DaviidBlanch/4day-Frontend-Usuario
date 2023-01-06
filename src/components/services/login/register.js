import axios from 'axios'

const register = async (values) => {
  const { data } = await axios.post('http://localhost:3001/newTrabajador', values)
  return data
}

export default register
