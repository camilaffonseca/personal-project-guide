import styled from 'styled-components'

const ImageComponent = ({ ...props }) => <Image {...props} draggable={false} />

const Image = styled.img`
  &::selection {
    background: transparent;
  }
`

export default ImageComponent
