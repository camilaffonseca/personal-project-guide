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
import javascriptLogo from 'images/javascript-logo.png'

const Home = () => {
  return (
    <Main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <StyledImage disableZoomFunction src={pythonLogo} alt='Python Logo' />
        <StyledImage disableZoomFunction src={reactLogo} alt='React Logo' />
        <StyledImage disableZoomFunction src={javascriptLogo} alt='JavaScript Logo' />
      </Container>
      <Card>
        <Title>Guia de Projetos</Title>
        <Text>
          Não sei exatamente como tu vieste parar aqui, em que dia estamos ou que horas são agora. Mas já que estás
          aqui, faz um café e perde alguns minutos aqui comigo que nas próximas linhas eu vou te contar um pouco sobre
          como eu vim parar aqui. &#128522;
        </Text>
        <br />
        <Text>
          Bom, vou começar te contando que a tecnologia sempre foi algo curioso pra mim. E claro, como era de se
          esperar, a minha curiosidade só me rendeu sistemas operacionais corrompidos e uma péssima reputação de
          destruidora de computadores.
        </Text>
        <br />
        <Text>
          “Não dá pra deixar essas coisas na mão dessa guria, ela mexe no que não sabe, depois não funciona nada.”
          &mdash; Mãe
        </Text>
        <Subtitle>O início de tudo</Subtitle>
        <Text>
          Só comecei a fazer algo útil com essa curiosidade quando, com um interesse absurdo no assunto e um total de
          <span style={{ fontWeight: 600, fontSize: '2.03rem' }}> zero</span> conhecimentos, caí de paraquedas no
          desenvolvimento web com o curso da MooDev.
        </Text>
        <Text>
          O curso foi o que me deu um norte, porque até então eu era a pessoa que achava que HTML era linguagem de
          programação, não sabia da existência do CSS e nem o que o JavaScript fazia com isso tudo.
        </Text>
        <br />
        <Text>
          Aprendi os fundamentos da web, a base que eu precisava. Fiz alguns projetos toscos com HTML, CSS e JavaScript,
          que para mim ainda era um bicho de sete cabeças, adquiri uma noção básica de Git e Github, tentei entender e
          até testei - muito superficialmente - alguns frameworks e bibliotecas. Mas comecei a ter noção de que, apesar
          de saber absurdamente mais do que antes, eu ainda sabia muito pouco. O sentimento de que estar envolvida nesse
          meio era algo utópico para mim acabou me segurando muito e não dei continuidade aos estudos por alguns meses.
        </Text>
        <br />
        <Text>
          Conforme fui colocando a cabeça no lugar e entendendo como as coisas funcionam, a frustração por saber muito
          pouco foi dando espaço a uma euforia pela possibilidade de aprender mais. Claro, as oscilações são
          inevitáveis, a instabilidade de se jogar em algo novo gera sempre um certo peso pelo excesso de informação, e
          estar constantemente nessa posição acaba gerando uma sensação de incapacidade, mas tenho aprendido cada vez
          mais como lidar com essas oscilações, fazendo assim a chance de desistência cair drásticamente.
        </Text>
        <Subtitle>Hora de inovar</Subtitle>
        <Text>
          Há cinco meses comecei a estudar Python. Já tinha tido algum contato com a linguagem no ano anterior, mas não
          passou de alguns testes simples e teoria, então optei por começar de novo, do zero, de uma forma mais intensa.
          Comecei pelo básico, e desde então venho estudando a partir de um curso baseado em video-aulas, o qual está
          quase concluído, e a partir dele, busco me aprofundar em cada detalhe e produzir um conteúdo dedicado e sempre
          acima do esperado, aplicando conhecimentos adquiridos por meio de outras fontes. Ao final desse curso, tenho
          pretensão de ainda estudar alguns tópicos pendentes e, posteriormente, iniciar os meus estudos com o framework
          Django para desenvolvimento web focado em API's restfull, paralelamente à leitura da documentação do Python.
        </Text>
        <br />
        <Text>
          Há aproximadamente dois meses, paralelamente ao Python, retomei os estudos em JavaScript com maior foco,
          revisando conceitos básicos e os fundamentos da linguagem. A partir disso, iniciei os meus estudos em React
          com o objetivo de conhecimentos em front-end com uma biblioteca consolidada e de uma forma que eu possa
          integrar com as minhas habilidades em Python baseando em PWA's, SPA's e integrações com servidores por meio de
          API's.
        </Text>
        <Subtitle>Objetivo</Subtitle>
        <Text>
          Sobre este projeto, quero fazer aqui algo como um histórico das aplicações desenvolvidas por mim, contando
          também um pouquinho sobre o processo em que tudo isso se deu, e também sendo por si própria uma aplicação
          modelo dos meus estudos em React que tiveram início recentemente.
        </Text>
        <br />
        <Text>
          Neste compilado de aplicações estará tudo que for desenvolvido por mim, das coisas mais simples às mais
          complexas, das mais inexperientes às mais estruturadas, algumas inclusive que ainda estão em desenvolvimento.
          Ao longo do tempo surgirão outras, que também serão incluídas aqui e assim por diante.
        </Text>
      </Card>
    </Main>
  )
}

const StyledImage = styled(Image)`
  width: calc(15vw + 5rem);
  max-width: 27vw;

  @media (min-width: 210px) {
    max-width: 15rem;
  }
`

export default Home
