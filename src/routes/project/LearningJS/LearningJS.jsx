import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import Subtitle from 'components/Subtitle'

import learningJsImage from 'images/projects/learning-js.gif'

const LearningJS = () => (
  <Main>
    <MarginTopCard>
      <Title>Learning JS</Title>
      <MarginBottomImage src={learningJsImage} alt='Project Image' />
      <Subtitle>Propósito</Subtitle>
      <Text>Learning JS é um projeto onde são concentrados meus exercícios e testes em JavaScript.</Text>
      <Subtitle>Até então</Subtitle>
      <Text>
        Neste momento os exercícios são reescritas de aplicações anteriormente implementadas em Python, e que são de
        funcionalidade interessante quando se trata de JavaScript. Ainda há muito por vir por aqui {':)'}
      </Text>
    </MarginTopCard>
  </Main>
)

export default LearningJS
