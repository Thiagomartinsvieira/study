import { useRouter } from 'next/router'

const search = () => {
  const router = useRouter()
  const id = router.query.id



  return (
    <div>
        <h1>Routes / {id} / search !!!</h1>
    </div>
  )
}

export default search