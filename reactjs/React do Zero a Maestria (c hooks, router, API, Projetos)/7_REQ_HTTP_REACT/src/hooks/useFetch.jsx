import { useEffect, useState } from "react"

/// 4 - custom hook



const useFetch = () => {
    const [data, setDate] = useState(null)

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }

        fetchData()
    }, [url]);

return { data };

}

export default useFetch