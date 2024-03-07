import axios from 'axios'
import { useState, useEffect } from 'react'

const api = axios.create({
  baseURL: 'https://jon-api-website.vercel.app/api'
})

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [url])

  return { data: data as T, isFetching, error }
}
