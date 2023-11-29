import { useState } from 'react'

export default function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const displayTable = () => setVisible('table')
  const displayForm = () => setVisible('table')

  return {
    formVisible: visible === 'form',
    tableVisible: visible === 'table',
    displayTable,
    displayForm,
  }
}
