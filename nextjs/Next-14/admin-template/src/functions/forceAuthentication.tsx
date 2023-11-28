import Head from 'next/head'
import Image from 'next/image'
import loading from '../../public/images/loading.gif'
import useAuth from '@/data/hook/useAuth'
import router from 'next/router'

const forceAuthentication = (jsx) => {
  const renderContent = () => {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                        window.location.href = "/authentication"
                    }
                `,
            }}
          />
        </Head>
        {jsx}
      </>
    )
  }

  const renderLoading = () => {
    const { user, loading } = useAuth()

    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading} alt="loading image" />
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderContent()
  } else {
    router.push('/authentication')
    return null
  }
}

export default forceAuthentication
