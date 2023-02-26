import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFecth = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function fetchData() {
    try {
      setLoading(true)
      const res = await axios.get(url)
      setData(res.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      if (error.response) setError(error.response.data)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return { data, loading, error, fetchData }
}

export default useFecth