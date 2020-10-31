import styled from 'styled-components'

const ImageComponent = ({ ...props }) => <Image {...props} draggable={false} />

const Image = styled.img`
  max-width: 90%;

  &::selection {
    background: transparent;
  }
`

export default ImageComponent
