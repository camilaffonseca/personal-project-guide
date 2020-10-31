import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'

import learningPythonImage from 'images/projects/learning-python.gif'

const LearningPython = () => (
  <Main>
    <MarginTopCard>
      <Title>Learning Python</Title>
      <MarginBottomImage src={learningPythonImage} alt='Project Image' />
      <Text></Text>
    </MarginTopCard>
  </Main>
)

export default LearningPython
