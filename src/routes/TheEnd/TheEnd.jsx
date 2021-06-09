import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import BottomContainer from 'components/BottomContainer'
import ExternalLink from 'components/ExternalLink'

import { atelierCaveDark, atelierCaveLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const pythonCode = `
from camila.skills import (
  python,
  javascript,
  typescript,
  react,
  react-native,
  nextjs,
  html,
  css
)


class Programmer():

  def __init__(self):
      self.name = 'Camila Furtado da Fonseca'
      self.age = 18
      self.email = 'camilafonseca.ang7@gmail.com'

      self.city = 'Pelotas'
      self.uf = 'RS'
      self.country = 'BR'

  def get_skills(self):
    skills_set = {
          'programming_languages': [
              python,
              javascript,
          ],
          'supersets': [
              typescript,
          ],
          'libraries': [
              react
              react-native
          ],
          'frameworks': [
              nextjs
          ],
          'markup_languages': [
              html
          ],
          'stylization_languages': [
              css
          ]
      }

      return skills_set

  def get_courses(self):
      return [
          'MooDev - Escola de Ciência da Computação e Robótica',
          'Udemy - React, Python',
          'Curso em Vídeo - Python',
      ]


Camila = Programmer()

`

const TheEnd = () => {
  const currentTheme = useContext(ThemeContext)?.current

  return (
    <Main>
      <Helmet>
        <title>FIM</title>
      </Helmet>
      <MarginTopCard>
        <Title>FIM</Title>
        <MarginBottomImage />
        <StyledText>Obrigada pela atenção, espero que tenha gostado. {':)'}</StyledText>
        <StyledText>Qualquer coisa entre contato pelos canais abaixo.</StyledText>
        {currentTheme === 'dark' ? (
          <StyledSyntaxHighlighter language='python' style={atelierCaveDark}>
            {pythonCode}
          </StyledSyntaxHighlighter>
        ) : (
          <StyledSyntaxHighlighter language='python' style={atelierCaveLight}>
            {pythonCode}
          </StyledSyntaxHighlighter>
        )}
        <BottomContainer>
          <ExternalLink href='https://github.com/camilaffonseca'>GitHub</ExternalLink>
          <ExternalLink href='mailto:camilafonseca.ang7@gmail.com'>Email</ExternalLink>
        </BottomContainer>
      </MarginTopCard>
    </Main>
  )
}

const StyledText = styled(Text)`
  text-align: center;
  text-indent: none;
`

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 10px;
  width: 90%;
  margin: 5rem 0;
`

export default TheEnd
