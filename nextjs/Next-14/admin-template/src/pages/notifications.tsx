import Layout from '@/components/template/Layout'
import useAppData from '@/data/hook/useAppData'
import React from 'react'

const notifications = () => {
  const { changeTheme } = useAppData()

  return (
    <div>
      <Layout title='Notifications' 
          subtitle='Here you manage your notifications'>

            <button onClick={changeTheme}>Change theme</button>
      </Layout>
    </div>
  )
}

export default notifications