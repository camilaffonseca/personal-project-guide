import { Helmet } from 'react-helmet'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import BottomContainer from 'components/BottomContainer'
import ExternalLink from 'components/ExternalLink'
import Subtitle from 'components/Subtitle'

import learningPythonImage from 'images/projects/learning-python.gif'

const LearningPython = () => (
  <Main>
    <Helmet>
      <title>Learning Python</title>
    </Helmet>
    <MarginTopCard>
      <Title>Learning Python</Title>
      <MarginBottomImage src={learningPythonImage} alt='Project Image' />
      <Subtitle>Minha linguagem primária</Subtitle>
      <Text>
        O Learning Python é basicamente um compilado de aplicações desenvolvidas com base nos desafios propostos pelo
        curso de Python do canal do YouTube Curso em Vídeo, onde aplico, além do conteúdo absorvido do curso,
        conhecimentos um pouco mais avançados adquiridos por meio de outros materiais. Como o curso é basicamente uma
        introdução à linguagem, constantemente vejo necessidade de ampliar os meus conhecimentos e desenvolver soluções
        de nível superior ao proposto pelo curso, como arquitetura de software, implementação de novos métodos e
        recursos da linguagem a fim de potencializar o meu aprendizado e a qualidade da aplicação final &#128516;
      </Text>
      <br />
      <BottomContainer>
        <ExternalLink href='https://github.com/camilaffonseca/Learning_Python'>Repositório no Github</ExternalLink>
      </BottomContainer>
    </MarginTopCard>
  </Main>
)

export default LearningPython
