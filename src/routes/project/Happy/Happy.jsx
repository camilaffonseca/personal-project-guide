import { Helmet } from 'react-helmet'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import Subtitle from 'components/Subtitle'
import BottomContainer from 'components/BottomContainer'
import ExternalLink from 'components/ExternalLink'

import happyImage from 'images/projects/happy.png'

const Happy = () => (
  <Main>
    <Helmet>
      <title>Happy</title>
    </Helmet>
    <MarginTopCard>
      <Title>Happy</Title>
      <MarginBottomImage src={happyImage} alt='Project Image' />
      <Subtitle>O projeto</Subtitle>
      <Text>
        Happy foi uma aplicação proposta pela Rocketseat na sua terceira edição da Next Level Week, que ainda está em
        desenvolvimento e, no momento em que escrevo este texto, ele se encontra em estágio inicial. Serão utilizados os
        conhecimentos absorvidos nas aulas, juntamente com as minhas habilidades adquiridas até o momento em outros
        contextos.
      </Text>
      <Subtitle>Um grande diferencial</Subtitle>
      <Text>
        Este projeto introduz o TypeScript, superset o qual se torna cada vez mais utilizado e conhecido pela
        comunidade, e por conta disso, o seu entendimento se mostra de total relevância neste vasto oceano de
        tecnologias &#128522;
      </Text>
      <BottomContainer>
        <ExternalLink href='https://github.com/camilaffonseca/happy-front'>Repositório no Github</ExternalLink>
      </BottomContainer>
    </MarginTopCard>
  </Main>
)

export default Happy
