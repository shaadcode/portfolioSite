import { useEffect, useState } from "react"


export const useFetch = (url: string) => {
    const [data, setData] = useState<[]>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const jsData = await response.json()

                setIsLoading(false)
                setData(jsData)
                setError("")
            } catch (err: unknown) {
                setIsLoading(false)
                setError(err.message)

            }
        }

        fetchData()
    }, [url])


    return { data, isLoading, error }
}