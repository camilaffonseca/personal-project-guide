import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'

import happyImage from 'images/projects/happy.png'

const Happy = () => (
  <Main>
    <MarginTopCard>
      <Title>Happy</Title>
      <MarginBottomImage src={happyImage} alt='Project Image' />
      <Text>Happy - description</Text>
    </MarginTopCard>
  </Main>
)

export default Happy
