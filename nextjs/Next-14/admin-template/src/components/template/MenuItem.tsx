import Link from 'next/link'

interface MenuItemProps {
  url?: string
  text: string
  icon: any
  className?: string
  onclick?: (event: any) => void
}

const MenuItem = (props: MenuItemProps) => {
  const renderLink = () => {
    return (
      <div
        className={`
        flex flex-col justify-center items-center
        h-20 w-20 text-gray-600
        dark:text-gray-200
        ${props.className}
      `}
      >
        {props.icon}
        <span className={`text-xs font-light `}>{props.text}</span>
      </div>
    )
  }
  return (
    <div>
      <li
        onClick={props.onclick}
        className={`
      hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
      `}
      >
        {props.url ? (
          <Link href={props.url}>{renderLink()}</Link>
        ) : (
          renderLink()
        )}
      </li>
    </div>
  )
}

export default MenuItem
