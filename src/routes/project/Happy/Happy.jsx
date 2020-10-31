import React from 'react'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'

import happyImage from 'images/projects/happy.png'

const Happy = () => (
  <MarginTopCard>
    <Title>Happy</Title>
    <MarginBottomImage src={happyImage} alt='Project Image' />
    <Text>Happy - description</Text>
  </MarginTopCard>
)

export default Happy
