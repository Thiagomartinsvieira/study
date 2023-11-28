import Layout from '@/components/template/Layout'
import useAppData from '@/data/hook/useAppData'
import React from 'react'

const Profile = () => {
  const { changeTheme } = useAppData()

  return (
    <div>
      <Layout title="Profile" subtitle="Here you manage your Profile">
        <h1>User profile</h1>
      </Layout>
    </div>
  )
}

export default Profile
