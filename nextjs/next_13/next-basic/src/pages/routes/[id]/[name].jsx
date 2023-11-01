import { useRouter } from 'next/router'

const name = () => {
  const router = useRouter()
  const id = router.query.name



  return (
    <div>
        <h1>Routes / {id} / name</h1>
    </div>
  )
}

export default name