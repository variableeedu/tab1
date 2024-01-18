import { useState } from 'react'

function App() {
  const [list, SetList] = useState(0)
  const [index, setIndex] = useState(0)

  return (

    <div className='w-full h-screen  flex flex-col'>
      <div className='w-full h-16 p-4  space-x-4 bg-blue-500'>
        <button onClick={() => {
          setIndex(1)
        }}
          className='h-12 w-24 rounded-t-lg bg-green-300 '>1</button>


        <button onClick={() => {
          setIndex(2)
        }} className='h-12 w-24 rounded-t-lg bg-green-300'>2</button>
        <button onClick={() => {
          setIndex(3)
        }} className='h-12 w-24 rounded-t-lg bg-green-300'>3</button>
      </div>
      {index === 1 &&
        <div className='h-screen flex   bg-red-300'>web</div>
      }
      {index === 2 &&

        <div className='h-screen flex   bg-gray-300'>java</div>
      }
      {index === 3 &&
        <div className='h-screen flex   bg-green-300'>script</div>
      }
    </div>
  )
}

export default App
