export const getDetailUsuario = ({ id }) => {
  return fetch(`http://localhost:3001/trabajador/${id}`)
    .then(response => response.json())
    .then(
      (data) => {
        return data
      })
}
