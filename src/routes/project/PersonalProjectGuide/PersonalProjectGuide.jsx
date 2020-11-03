import { Helmet } from 'react-helmet'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import BottomContainer from 'components/BottomContainer'
import ExternalLink from 'components/ExternalLink'

import personalProjectGuideImage from 'images/projects/personal-project-guide.gif'

const PersonalProjectGuide = () => (
  <Main>
    <Helmet>
      <title>Personal Project Guide</title>
    </Helmet>
    <MarginTopCard>
      <Title>Personal Project Guide</Title>
      <MarginBottomImage src={personalProjectGuideImage} alt='Project Image' />
      <Text>
        Primeiro queria falar sobre este projeto aqui. No momento em que escrevo isso ele ainda está sendo desenvolvido
        e está sendo um dos meus maiores desafios até então, visto que comecei com React há pouquíssimo tempo e que
        durante o desenvolvimento tenho entrado muito em contato com conteúdos não vistos até então, assim como tenho
        tido ainda mais envolvimento com Git e um entendimento maior sobre arquitetura de software, sobre como funciona
        um pull request e o processo de deploy, por exemplo. Basicamente, o propósito dele é mostrar um pouco de tudo
        que já fiz até agora.
      </Text>
      <br />
      <Text>
        Escolhi desenvolver este projeto em React ao invés de tecnologia nativa simples pela facilidade e escalabilidade
        que a biblioteca traz e também porque já era uma tecnologia que constava no meu planejamento de estudos. Já
        tinha utilizado a biblioteca anteriormente em pequenos testes e para consolidar os seus fundamentos. Neste
        projeto comecei a explorar novas possibilidades e novos padrões de projeto, juntamente com bibliotecas
        auxiliares e uma arquitetura mais elaborada.
      </Text>
      <br />
      <Text>
        Dentre as tecnologias utilizadas neste projeto está a biblioteca react-app-polyfill, e foi pensada para trazer
        maior compatibilidade com alguns browsers. A próxima biblioteca utilizada é a react-router-dom e basicamente
        implementa o sistema de roteamento das páginas. Uma outra biblioteca utilizada é a sanitize.css que basicamente
        previne inconsistências na visualização da aplicação. E por fim, a styled-components que implementa a utilização
        de css-in-js e o sistema dos temas, facilitando o desenvolvimento de apicações responsivas e dinâmicas.
      </Text>
      <BottomContainer>
        <ExternalLink msg='Você já está aqui :)' href='https://personal-project-guide.netlify.app'>
          Visualização em produção
        </ExternalLink>
        <ExternalLink href='https://github.com/camilaffonseca/personal-project-guide'>
          Repositório no Github
        </ExternalLink>
      </BottomContainer>
    </MarginTopCard>
  </Main>
)

export default PersonalProjectGuide
