import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import Subtitle from 'components/Subtitle'
import BottomContainer from 'components/BottomContainer'
import ExternalLink from 'components/ExternalLink'

import toDosImage from 'images/projects/todos.gif'

const ToDos = () => (
  <Main>
    <MarginTopCard>
      <Title>To-dos</Title>
      <MarginBottomImage src={toDosImage} alt='Project Image' />
      <Subtitle>O projeto</Subtitle>
      <Text>
        Este projeto é um app de to-dos {'(ah, sério?)'} desenvolvido no curso de JavaScript da Rocketseat. O que me
        motivou a iniciar o curso foi uma intenção de revisão da utilização nativa do JS no desenvolvimento web
        front-end. A estrutura do app foi feita de uma forma um pouquinho melhor do que o proposto e já foi concluída,
        juntamente com o curso, ficando pendente apenas a estilização. Pretendo ainda implementar novas funções
        posteriormente. {':)'}
      </Text>
      <BottomContainer>
        <ExternalLink href='https://github.com/camilaffonseca/todos-app'>Repositório no Github</ExternalLink>
      </BottomContainer>
    </MarginTopCard>
  </Main>
)

export default ToDos
