import useAppData from '@/data/hook/useAppData'
import ButtonChangeTheme from './ButtonChangeTheme'
import Title from './Title'
import AvatarUser from './AvatarUser'

interface HeaderProps {
  title: string
  subtitle: string
}

const Header = (props: HeaderProps) => {
  const { theme, changeTheme } = useAppData()

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonChangeTheme theme={theme} changeTheme={changeTheme} />
        <AvatarUser className="ml-3" />
      </div>
    </div>
  )
}

export default Header
