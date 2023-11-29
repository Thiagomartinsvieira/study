import Button from '@/components/Button'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Client from '@/core/Client'
import { useState } from 'react'

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 18, '2'),
    new Client('Thiago', 24, '3'),
    new Client('Lucas', 19, '4'),
  ]

  const SelectCustomer = (client: Client) => {
    setClient(client)
    setVisible('form')
  }

  const DeleteCustomer = (client: Client) => {}

  const saveClient = (client: Client) => {
    console.log(client)
    setVisible('table')
  }

  const newClient = (client: Client) => {
    setClient(Client.empty())
    setVisible('form')
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty())

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
        {visible === 'table' ? (
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
            canceld={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}
