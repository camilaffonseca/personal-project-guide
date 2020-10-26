import styled from 'styled-components'

const Container = styled.div`
  width: 87vw;
  max-width: 580px;
  margin: 7.2rem 0;
  display: flex;
  justify-content: space-around;

  @media (min-width: 750px) {
    width: calc(53vw + 5rem);
  }
`

export default Container
