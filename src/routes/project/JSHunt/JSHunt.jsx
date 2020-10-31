import React from 'react'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'

import jsHuntImage from 'images/projects/jshunt.gif'

const JSHunt = () => (
  <MarginTopCard>
    <Title>JSHunt</Title>
    <MarginBottomImage src={jsHuntImage} alt='Project Image'/>
    <Text>JSHunt - description</Text>
  </MarginTopCard>
)

export default JSHunt
