import { useState } from 'react'

export default function VisibleButton ({ children, buttonLabel }) {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  return (
    <div className='my-4'>
      <div style={hideWhenVisible} className='text-center'>
        <button className=' text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => setVisible(true)}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <div className='text-center'>
          <button className='hover:underline' onClick={() => setVisible(false)}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}
