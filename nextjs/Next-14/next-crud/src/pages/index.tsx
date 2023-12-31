import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import useClients from '@/hooks/useClient'

export default function Home() {
  const {
    client,
    clients,
    newClient,
    SelectCustomer,
    DeleteCustomer,
    saveClient,
    tableVisible,
  } = useClients()

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      i
      <Layout title="Simple Registration">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              SelectCustomer={SelectCustomer}
              DeleteCustomer={DeleteCustomer}
            ></Table>
          </>
        ) : (
          <Form
            client={client}
            clientChanged={saveClient}
            canceld={tableVisible}
          />
        )}
      </Layout>
    </div>
  )
}
