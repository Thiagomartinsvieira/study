import React, { useState } from 'react'
import Entrance from './Entrance'
import Client from '@/core/Client'
import Button from './Button'

interface FormProps {
  client: Client
}

const Form = (props: FormProps) => {
  const id = props.client?.id ?? null
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id ? <Entrance text="Code" value={id} className="mb-5" /> : false}

      <Entrance text="Name" value={name} Onchange={setName} className="mb-5" />
      <Entrance text="Age" type="number" value={age} Onchange={setAge} />
      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2">
          {id ? 'Change' : 'Save'}
        </Button>
        <Button>Cancel</Button>
      </div>
    </div>
  )
}

export default Form
