import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'

import reactFundamentalsImage from 'images/projects/react-fundamentals.gif'

const ReactFundamentals = () => (
  <Main>
    <MarginTopCard>
      <Title>React Fundamentals</Title>
      <MarginBottomImage src={reactFundamentalsImage} alt='Project Image' />
      <Text>ReactFundamentals - description</Text>
    </MarginTopCard>
  </Main>
)

export default ReactFundamentals
