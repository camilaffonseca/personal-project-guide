import React from 'react'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'

import learningPythonImage from 'images/projects/learning-python.gif'

const LearningPython = () => (
  <MarginTopCard>
    <Title>Learning Python</Title>
    <MarginBottomImage src={learningPythonImage} alt='Project Image'/>
    <Text>

    </Text>
  </MarginTopCard>
)

export default LearningPython
