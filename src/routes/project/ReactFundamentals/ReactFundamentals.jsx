import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Subtitle from 'components/Subtitle'
import Main from 'components/Main'
import BottomContainer from 'components/BottomContainer'
import ExternalLink from 'components/ExternalLink'

import reactFundamentalsImage from 'images/projects/react-fundamentals.gif'

const ReactFundamentals = () => (
  <Main>
    <MarginTopCard>
      <Title>React Fundamentals</Title>
      <MarginBottomImage src={reactFundamentalsImage} alt='Project Image' />
      <Subtitle>O projeto</Subtitle>
      <Text>
        Aqui está um sistema desenvolvido no módulo de fundamentos do React no curso React + Redux, produzido pela Cod3r
        na plataforma Udemy. Esse curso é o meu principal foco, no contexto React, por trazer os conhecimentos de uma
        forma mais aprofundada e inclusive proporcionar o entendimento de aplicações restfull com JavaScript no
        server-side.
      </Text>
      <Subtitle>Próximos projetos</Subtitle>
      <Text>
        Ao longo do percurso sobre estas tecnologias, serão produzidas novas aplicações com base em projetos deste curso
        que também serão incluídas neste compilado.
      </Text>
      <BottomContainer>
        <ExternalLink href='https://react-fundamentals-course.netlify.app'>Visualização em produção</ExternalLink>
        <ExternalLink href='https://github.com/camilaffonseca/react-fundamentals'>Repositório no Github</ExternalLink>
      </BottomContainer>
    </MarginTopCard>
  </Main>
)

export default ReactFundamentals
