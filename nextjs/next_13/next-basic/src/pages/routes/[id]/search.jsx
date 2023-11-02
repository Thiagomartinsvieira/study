import { useRouter } from 'next/router'
import Link from 'next/link'

const search = () => {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>Routes / {id} / search !!!</h1>
      <Link href="/routes">
        <button>to back</button>
      </Link>
    </div>
  )
}

export default search
