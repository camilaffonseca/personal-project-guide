import React from 'react'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'

import reactFundamentalsImage from 'images/projects/react-fundamentals.gif'

const ReactFundamentals = () => (
  <MarginTopCard>
    <Title>React Fundamentals</Title>
    <MarginBottomImage src={reactFundamentalsImage} alt='Project Image' />
    <Text>ReactFundamentals - description</Text>
  </MarginTopCard>
)

export default ReactFundamentals
