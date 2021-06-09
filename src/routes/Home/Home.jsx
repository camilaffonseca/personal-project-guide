import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Title from 'components/Title'
import Container from 'components/Container'
import Card from 'components/Card'
import Text from 'components/Text'
import Image from 'components/Image'
import Main from 'components/Main'
import Subtitle from 'components/Subtitle'

import pythonLogo from 'images/python-logo.png'
import reactLogo from 'images/react-logo.png'
import reactNativeLogo from 'images/react-native-logo.png'
import javascriptLogo from 'images/javascript-logo.png'
import typescriptLogo from 'images/typescript-logo.png'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'

const Home = () => {
  return (
    <Main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <StyledImage disableZoomFunction src={pythonLogo} alt='Python Logo' />
        <StyledImage disableZoomFunction src={reactLogo} alt='React Logo' />
        <StyledImage disableZoomFunction src={reactNativeLogo} alt='React Native Logo' />
        <StyledImage disableZoomFunction src={javascriptLogo} alt='JavaScript Logo' />
        <StyledImage disableZoomFunction src={typescriptLogo} alt='TypeScript Logo' />
      </Container>
      <Card>
        <Title>Sobre este ser que vos fala</Title>
        <Text>Olá pessoa :)</Text>
        <br />
        <Text>Bom te ver por aqui &#x1f604;</Text>
        <br />
        <Text>
          Faz um café e perde alguns minutos aqui comigo que nas próximas linhas eu vou te contar um pouco sobre como eu
          vim parar aqui. &#128522;
        </Text>
        <br />
        <Text>
          Bom, vou começar te contando que a tecnologia sempre foi algo curioso pra mim. E claro, como era de se
          esperar, a minha curiosidade só me rendeu sistemas operacionais corrompidos e uma péssima reputação de
          destruidora de computadores.
        </Text>
        <br />
        <Text>
          “Não dá pra deixar essas coisas na mão dessa guria, ela mexe no que não sabe, depois não funciona.” &mdash;
          Mãe
        </Text>
        <Subtitle>O início de tudo</Subtitle>
        <Text>
          Só comecei a fazer algo útil com essa curiosidade quando, com um interesse absurdo no assunto e um total de
          <span style={{ fontWeight: 600, fontSize: '2.03rem' }}> zero</span> conhecimentos, caí de paraquedas no
          desenvolvimento web com o curso da MooDev no final de 2019.
        </Text>
        <br />
        <Text>
          O curso foi o que me deu um norte, porque até então eu era a pessoa que achava que HTML era linguagem de
          programação e nem fazia ideia de que raios era JavaScript.
        </Text>
        <br />
        <Text>
          Aprendi os fundamentos da web, a base que eu precisava. Fiz alguns projetos toscos com HTML, CSS e JavaScript,
          que para mim ainda era um bicho de sete cabeças, adquiri uma noção básica de Git e Github, e até testei - sem
          muito sucesso - alguns frameworks e bibliotecas.
        </Text>
        <br />
        <Text>
          Mas depois do "node" que o JavaScript deu na minha cabeça precisei de uma trégua. Eu ainda não tinha noção do
          que podia fazer com JS, nunca tinha visto uma linguagem de programação na vida.
        </Text>
        <Subtitle>Um pequeno progresso</Subtitle>
        <Text>
          Depois de um tempo comecei a estudar Python a partir de um curso. Busquei me aprofundar em cada detalhe e
          produzir um conteúdo dedicado e sempre acima do esperado, aplicando conhecimentos adquiridos por meio da
          documentação e de fontes externas.
        </Text>
        <br />
        <Text>
          Com a noção de lógica adquirida no Python, estudar JavaScript ficou muito mais tranquilo, então retomei os
          estudos em JS com maior foco em outubro de 2020, revisando conceitos básicos e os fundamentos da linguagem. A
          partir disso, iniciei os meus estudos em React com o objetivo de obter conhecimentos em front-end com uma
          biblioteca consolidada. E foi com a documentação do React que perdi meu medo das documentações, que
          documentação LINDA.
        </Text>
        <br />
        <Text>
          Dois meses depois, em dezembro de 2020, consegui uma oportunidade de estágio na minha empresa atual onde,
          desde então, tenho me desenvolvido muito.
        </Text>
        <Subtitle>Por onde andam meus estudos atualmente?</Subtitle>
        <Text>
          No momento meus estudos estão focados basicamente em mobile com React Native. Tenho estudado as documentações,
          tanto do React como do React Native (que também é lindíssima), as tecnologias complementares mais utilizadas,
          arquitetura e boas práticas. E paralelamente a isso tenho estudado TypeScript, com ideia de começar a utilizar
          nos meus projetos.
        </Text>
        <Subtitle>Sobre este projeto</Subtitle>
        <Text>
          Quero fazer aqui algo como um histórico das aplicações desenvolvidas por mim, contando também um pouquinho
          sobre o processo em que tudo isso se deu, e também sendo por si própria uma aplicação modelo dos meus estudos
          em React.
        </Text>
        <br />
        <Text>
          Neste compilado de aplicações estará tudo que for desenvolvido por mim, das coisas mais simples às mais
          complexas, das mais inexperientes às mais estruturadas, algumas inclusive que ainda estão em desenvolvimento.
          Ao longo do tempo surgirão outras, que também serão incluídas aqui e assim por diante.
        </Text>
        <br />
        <Text>
          <i>
            (Este projeto foi desenvolvido em dezembro de 2020 com os conhecimentos obtidos até aquele momento, tenho
            pretensão de refatorar utilizando os conhecimentos adquiridos posteriormente.)
          </i>
        </Text>
      </Card>
    </Main>
  )
}

const StyledImage = styled(Image)`
  width: 10vw;
  max-width: 27vw;
  object-fit: contain;
  margin: 0.8rem;

  @media (min-width: ${DESKTOP_BREAKPOINT + 60}px) {
    max-width: 15rem;
    width: calc(15vw + 5rem);
  }
`

export default Home
