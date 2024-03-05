import axios from 'axios'
import { useState, useEffect } from 'react'

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [url])

  return { data: data as T }
}
