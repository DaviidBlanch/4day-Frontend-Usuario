import { useEffect, useState } from 'react'
import { getAllPosts } from '../services/posts/getAllPosts'
import TinderCard from 'react-tinder-card'
import axios from 'axios'

function TinderCards (props) {
  const [posts, setPosts] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    getAllPosts()
      .then(data => {
        setPosts(data)
        setloading(false)
      })
  }, [])

  const swiped = (direction, postId) => {
    if (direction === 'right') {
      const trabajadorId = props.user.usuario.id
      const values = { trabajadorId, postId }
      axios.post('http://localhost:3001/newApplication', values)
      axios.put(`http://localhost:3001/changePost/${postId}`, { showed: false })
    }
    if (direction === 'left') {
      console.log('IZQUIERDAA')
      axios.put(`http://localhost:3001/changePost/${postId}`, { showed: false })
    }
  }

  const outOfFrame = (name) => {
    console.log(name + ' Salió de la pantalla ')
  }

  return (
    <div id='pantalla'>
      {
        loading
          ? (
            <div className='text-center'>
              <div role='status'>
                <svg className='inline mr-2 w-10 h-10 text-gray-200 animate-spin fill-red-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                  <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                </svg>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
            )
          : ''
      }
      <div className='flex justify-center my-7'>
        {posts
          .filter((post) => {
            return post.showed === true
          })
          .map((post) => (
            <TinderCard
              key={post.id}
              className='absolute'
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, post.id)}
              onCardLeftScreen={() => outOfFrame(post.title)}
            >
              <div
                className='relative bg-white p-5 max-w-lg h-96 w-96 rounded-lg bg-cover bg-center shadow-md'
              >
                <img className='max-h-60 pl-20' src={`http://localhost:3001/imagenPost/${post.id}`} alt={post.image.originalname} />
                <hr />
                <h5 className='bottom-3 text-lg font-bold tracking-tight text-gray-900'>{post.title} <small className=' text-sm'>en</small> {post.empresa.name}</h5>
                <h5 className='bottom-3 text-lg tracking-tight text-gray-900'><small className=' text-lg'>Salario:</small> {post.salary}€</h5>
                <h5 className='bottom-3 text-base tracking-tight text-gray-900'><small className=' text-lg'>Ciudad:</small> {post.country}</h5>
                <p className='bottom-3 text-right mb-6 text-sm text-gray-500 sm:mb-0'>{post.date.substring(0, 10)}</p>
              </div>
            </TinderCard>
          ))}
      </div>
      <div class='flex h-screen items-center '>
        <div class='mr-auto'>
          <div className='max-w-xs text-red-800 flex items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-arrow-left mr-2' viewBox='0 0 16 16'>
              <path fillRule='evenodd' d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z' />
            </svg>
            <div>
              <p className='text-left'>Arrastra a la</p>
              <p className='text-left'>izquierda.</p>
            </div>
          </div>
        </div>
        <div class='ml-auto'>
          <div className='max-w-xs text-green-800 flex items-center'>
            <div>
              <p className='text-right'>Arrastra a la</p>
              <p className='text-left'>derecha.</p>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-arrow-right' viewBox='0 0 16 16'>
              <path fillRule='evenodd' d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TinderCards
