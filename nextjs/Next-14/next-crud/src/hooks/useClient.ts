import CollectionClient from '@/backend/db/collectionClient'
import Client from '@/core/Client'
import ClientRepository from '@/core/ClientRepository'
import { useEffect, useState } from 'react'
import useTableOrForm from './useTableOrForm'

export default function useClients() {
  const repo: ClientRepository = new CollectionClient()

  const { tableVisible, displayTable, displayForm } = useTableOrForm()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients)
      displayTable()
    })
  }

  const SelectCustomer = (client: Client) => {
    setClient(client)
    displayForm()
  }

  const DeleteCustomer = async (client: Client) => {
    await repo.delete(client)
    getAll()
  }

  const newClient = (client: Client) => {
    setClient(Client.empty())
    displayForm()
  }

  const saveClient = async (client: Client) => {
    await repo.save(client)
    getAll()
  }

  return {
    tableVisible,
    displayTable,
    client,
    clients,
    getAll,
    SelectCustomer,
    DeleteCustomer,
    newClient,
    saveClient,
  }
}
