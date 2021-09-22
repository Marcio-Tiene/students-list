import React from 'react'
import { IStudent } from '../../types'
import {
  CardLabels,
  CardStudentsAttributes,
  CardTable,
  CardTableRows,
  CradBody,
} from './styles'

export default React.memo(function ProfileCards({
  name,
  email,
  cpf,
}: IStudent) {
  return (
    <CardTable>
      <CradBody>
        <CardTableRows>
          <CardLabels>Nome</CardLabels>
          <CardStudentsAttributes>{name}</CardStudentsAttributes>
        </CardTableRows>
        <CardTableRows>
          <CardLabels>Email</CardLabels>
          <CardStudentsAttributes>{email}</CardStudentsAttributes>
        </CardTableRows>
        <CardTableRows>
          <CardLabels>CPF</CardLabels>
          <CardStudentsAttributes>{cpf}</CardStudentsAttributes>
        </CardTableRows>
      </CradBody>
    </CardTable>
  )
})
