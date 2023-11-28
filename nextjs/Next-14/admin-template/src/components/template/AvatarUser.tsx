import useAuth from '@/data/hook/useAuth'
import Link from 'next/link'

interface AvatarUserProps {
  className?: string
}

const AvatarUser = (props: AvatarUserProps) => {
  const { user } = useAuth()
  return (
    <Link href="/profile">
      <img
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        src={user?.imageUrl ?? '/images/avatar.svg'}
        alt="Avatar user"
      />
    </Link>
  )
}

export default AvatarUser
