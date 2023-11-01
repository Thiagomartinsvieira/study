import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const params = () => {
    const router = useRouter()

    const id = router.query.id
    const name = router.query.name

    return (
        <div>
            <h1>Route params {id} e {name} </h1>
            <Link href='/routes'>
                <button>to back</button>
            </Link>
        </div>
    )
}

export default params