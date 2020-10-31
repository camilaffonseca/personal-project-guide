import React from 'react'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'

import learningJsImage from 'images/projects/learning-js.gif'

const LearningJS = () => (
  <MarginTopCard>
    <Title>Learning JS</Title>
    <MarginBottomImage src={learningJsImage} alt='Project Image' />
    <Text>LearningJS - description</Text>
  </MarginTopCard>
)

export default LearningJS
