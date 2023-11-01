import React from 'react'
import { useRouter } from 'next/router'

const params = () => {
    const router = useRouter()

    const id = router.query.id
    const name = router.query.name

    return (
        <div>
            <h1>Route params {id} e {name} </h1>
        </div>
    )
}

export default params