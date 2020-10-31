import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'

import jsHuntImage from 'images/projects/jshunt.gif'

const JSHunt = () => (
  <Main>
    <MarginTopCard>
      <Title>JSHunt</Title>
      <MarginBottomImage src={jsHuntImage} alt='Project Image' />
      <Text>JSHunt - description</Text>
    </MarginTopCard>
  </Main>
)

export default JSHunt
