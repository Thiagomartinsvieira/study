import { useEffect, useState } from "react"



/// 4 - custom hook

const useFetch = () => {
    const [data, setDate] = useState(null)

    // 5 - refatorando o post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 loading
    const [loading, setLoading] = useState(false)

    // 7 - tratando erros

    const  [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "content-type": 'aplication/json',
                },
                body: JSON.stringify(data)
            })


            setMethod(method);
        }
    }

    useEffect(() => {

        const fetchData = async () => {

            // 6 - loading
            setLoading(true)

            try{

            } catch (error) {
                console.log(error.message)
                setError("Houve um erro ao carregar os dados!")
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch]);

    // 5 - refaturando post
    useEffect(() => {
        const httpRequest = async = () => {
            if (method === "POST") {

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json()

                setCallFetch(json)

            }
        }

        httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading, error };

}

export default useFetch