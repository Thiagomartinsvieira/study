import firebase from '../config'
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore'
import Client from '@/core/Client'
import ClientRepository from '@/core/ClientRepository'

export default class CollectionClient implements ClientRepository {
  #conversor = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age,
      }
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions,
    ): Client {
      const data = snapshot.data(options)
      return new Client(data.name, data.age, snapshot.id)
    },
  }

  async save(client: Client): Promise<Client> {
    const db = getFirestore(firebase)

    if (client?.id) {
      await setDoc(collection(db, 'clients', client.id), client, {
        merge: true,
      })
      return client
    } else {
      const docRef = await addDoc(collection(db, 'clients'), client)
      const doc = await docRef.get()
      return doc.data()
    }
  }

  async delete(client: Client): Promise<void> {
    const db = getFirestore(firebase)
    await deleteDoc(collection(db, 'clients', client.id))
  }

  async getAll(): Promise<Client[]> {
    const db = getFirestore(firebase)
    const querySnapshot = await getDocs(collection(db, 'clients'))
    return querySnapshot.docs.map((doc) => doc.data()) ?? []
  }
}
