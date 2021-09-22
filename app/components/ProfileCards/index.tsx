import {
  CardLabels,
  CardStudentsAttributes,
  CardTable,
  CardTableRows,
  CradBody,
} from './styles'

interface ITable {
  name: string
  cpf: string
  email: string
}

export default function ProfileCards({ name, email, cpf }: ITable) {
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
}
