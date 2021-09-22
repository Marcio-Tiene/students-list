import styled from 'styled-components'

const Header = styled.header`
  padding: 1rem 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: sticky;

  top: 0;

  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(40px);

  width: 100%;
  min-height: fit-content;
  height: 15vh;

  box-shadow: unset;
`

export default Header
