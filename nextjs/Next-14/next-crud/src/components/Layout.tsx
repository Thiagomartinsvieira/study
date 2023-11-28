import React from 'react'
import Title from './Title'

interface LayoutProps {
  title?: string
  children: any
}

const Layout = (props) => {
  return (
    <div
      className={`
        flex flex-col w-2/3 
        bg-white text-gray-800
    `}
    >
      <Title>{props.title}</Title>
      <div className="p-6">{props.children}</div>
    </div>
  )
}

export default Layout
