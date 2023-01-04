export const getAllPosts = () => {
  return fetch('http://localhost:3001/allPosts')
    .then(response => response.json())
    .then(
      (data) => {
        return data
      }
    )
}
