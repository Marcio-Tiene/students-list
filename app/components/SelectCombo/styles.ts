

import { ListboxInput } from '@reach/listbox'
import styled from 'styled-components'

export const CustomComboBox = styled.div`
border-radius: 8px;
margin-left: auto;
background-color:${ p => p.theme.colors.textOnLight};

`
export const CustomListboxInput = styled(ListboxInput)`
border-radius: 8px;
border: none;

`