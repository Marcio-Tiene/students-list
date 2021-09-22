import {
  Listbox,
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxPopover,
} from '@reach/listbox'
import '@reach/listbox/styles.css'

import { CustomComboBox, CustomListboxInput } from './styles'

interface Iprops {
  value: string
  setValue: (value: string) => void
}

export default function SelectComboBox({ value, setValue }: Iprops) {
  return (
    <CustomComboBox>
      <CustomListboxInput
        aria-labelledby={'zas'}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <ListboxButton arrow="▼" />
        <ListboxPopover>
          <ListboxList>
            <ListboxOption value="name">Nome</ListboxOption>
            <ListboxOption value="cpf">CPF</ListboxOption>
            <ListboxOption value="email">E-mail</ListboxOption>
          </ListboxList>
        </ListboxPopover>
      </CustomListboxInput>
    </CustomComboBox>
  )
}
