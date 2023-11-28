import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Client from '@/core/Client'

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 18, '2'),
    new Client('Thiago', 24, '3'),
    new Client('Lucas', 19, '4'),
  ]

  const SelectCustomer = (client: Client) => {}

  const DeleteCustomer = (client: Client) => {}

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Layout title="Simple Registration">
        <div className="flex justify-end">
          <Button color="green" className="mb-4">
            New Client
          </Button>
        </div>
        <Table
          clients={clients}
          SelectCustomer={SelectCustomer}
          DeleteCustomer={DeleteCustomer}
        ></Table>
        <Form client={clients[0]}></Form>
      </Layout>
    </div>
  )
}
