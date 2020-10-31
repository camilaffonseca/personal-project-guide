import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'

import learningJsImage from 'images/projects/learning-js.gif'

const LearningJS = () => (
  <Main>
    <MarginTopCard>
      <Title>Learning JS</Title>
      <MarginBottomImage src={learningJsImage} alt='Project Image' />
      <Text>LearningJS - description</Text>
    </MarginTopCard>
  </Main>
)

export default LearningJS
