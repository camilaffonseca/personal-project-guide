import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import Main from 'components/Main'

import jsHuntImage from 'images/projects/jshunt.gif'

const JSHunt = () => (
  <Main>
    <MarginTopCard>
      <Title>JSHunt</Title>
      <MarginBottomImage src={jsHuntImage} alt='Project Image' />
      <Subtitle>O projeto</Subtitle>
      <Text>
        O JSHunt foi uma aplicação desenvolvida no curso de React da Rocketseat, que foi uma das minhas primeiras
        experiências com a biblioteca, o que gerou uma certa dificuldade inicial pela quantidade massiva de informações
        que àquela altura ainda eram desconhecidas por mim. Com o desenvolvimento da aplicação, as explicações das aulas
        e pesquisas extras sobre alguns tópicos, os conteúdos foram ficando cada vez mais claros. Considero a aplicação
        concluída por enquanto, mas ainda pretendo adicionar novas funcionalidades, aperfeiçoar UX e a UI em geral e
        refatorar partes da aplicação a fim de incluir os novos conhecimentos adquiridos por mim ao longo do tempo.
      </Text>
      <Subtitle>API e Node</Subtitle>
      <Text>
        Há muito tempo tenho curiosidade de aplicar conteúdos dinâmicos nas páginas e este projeto possui um
        diferencial, que inclusive foi o que me chamou atenção, que seria a integração com uma API externa desenvolvida
        pela Rocketseat em um curso que trata de back-end em Node.js, o qual pretendo realizar em breve, com intuito de
        absorver a base da contrução server-side em Node e pela importância do JavaScript no desenvolvimento hoje em
        dia.
      </Text>
    </MarginTopCard>
  </Main>
)

export default JSHunt
