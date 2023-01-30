import {useEffect, useState} from 'react'

const url ='https://course-api.com/react-tours-project'

function App() {

  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    }catch (error){
      setLoading(false)
      console.log(error)
    }
  }



  return (
    <div>

    </div>
  )
}

export default App
