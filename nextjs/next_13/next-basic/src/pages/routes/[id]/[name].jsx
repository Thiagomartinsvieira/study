import { useRouter } from 'next/router'
import Link from 'next/link'

const name = () => {
  const router = useRouter()
  const id = router.query.name



  return (
    <div>
      <h1>Routes / {id} / name</h1>
      <Link href='/routes'>
        <button>to back</button>
      </Link>
    </div>
  )
}

export default name