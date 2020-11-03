import styled from 'styled-components'

import { MarginTopCard } from 'components/Card'
import { MarginBottomTopImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import Subtitle from 'components/Subtitle'

import mooDevProjectsGameImage from 'images/projects/moodev-projects-game.gif'
import mooDevProjectsWebLearningImage from 'images/projects/moodev-projects-web-learning.gif'
import mooDevProjectsBootstrapTestImage from 'images/projects/moodev-projects-bootstrap-test.gif'

const MooDevProjects = () => (
  <Main>
    <MarginTopCard>
      <Title>MooDev Projects</Title>

      <Text>
        Este repositório agrega três projetos desenvolvidos por mim durante o curso da MooDev. Eles foram a porta de
        início aos meus conhecimentos em desenvolvimento web. O curso teve como ideia principal a introdução ao
        desenvolvimento utilizando essas tecnologias, portanto os projetos iniciais buscavam simplicidade a fim de
        ilustrarem com facilidade os conceitos e as ideias de cada etapa.
      </Text>
      <br />
      <Text>
        Estes projetos estão aqui para mostrar um pouco de como foi o início desse processo todo, as minhas
        habilidades ainda muito limitadas no início e a minha evolução durante este processo.
      </Text>

      <StyledSubtitle>JavaScript e Canvas</StyledSubtitle>
      <MarginBottomTopImage src={mooDevProjectsGameImage} alt='Project Image' />
      <Text>
        Este projeto foi desenvolvido durante as aulas, e teve o intuito de testar, aprender e praticar o uso do
        JavaScript de uma forma mais interativa e que gerava maiores resultados visuais, sendo o seu maior foco a sua
        lógica de código, e não o resultado final. Este jogo baseia-se em renderização em canvas, uma tecnologia muito
        interessante no desenvolvimento gráfico de aplicações Web.
      </Text>

      <StyledSubtitle>Aprendendo Fundamentos Web</StyledSubtitle>
      <MarginBottomTopImage src={mooDevProjectsWebLearningImage} alt='Project Image' />
      <Text>
        Três simples páginas onde iniciei os meus estudos em JavaScript, manipulação de elementos HTML e estilos.
      </Text>

      <StyledSubtitle>Primeiro Framework!</StyledSubtitle>
      <MarginBottomTopImage src={mooDevProjectsBootstrapTestImage} alt='Project Image' />
      <Text>
        Iniciei a utilização de bibliotecas e frameworks, como Bootstrap Css neste projeto. Aprendi a trabalhar com
        classes e estilização básica no geral.
      </Text>
    </MarginTopCard>
  </Main>
)

const StyledSubtitle = styled(Subtitle)`
  text-align: center;
  margin-top: 7rem;
`

export default MooDevProjects
