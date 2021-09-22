import styled from 'styled-components'

const Header = styled.header`
  padding: 1rem 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: sticky;

  top: 0;

  background-color: ${(p) => p.theme.colors.primaryLight};

  backdrop-filter: opacity(90%) blur(40px);

  width: 100%;
  min-height: fit-content;
  height: 15vh;

  box-shadow: unset;
`

export default Header
