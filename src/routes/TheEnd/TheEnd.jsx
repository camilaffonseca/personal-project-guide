import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import BottomContainer from 'components/BottomContainer'
import ExternalLink from 'components/ExternalLink'

const TheEnd = () => (
  <Main>
    <Helmet>
      <title>FIM</title>
    </Helmet>
    <MarginTopCard>
      <Title>FIM</Title>
      <MarginBottomImage />
      <StyledText>Obrigada pela atencão, espero que tenha gostado. {':)'}</StyledText>
      <StyledText>Qualquer coisa entre contato pelos canais abaixo.</StyledText>

      <BottomContainer>
        <ExternalLink href='#'>GitHub</ExternalLink>
        <ExternalLink href='mailto:camilafonseca.ang7@gmail.com'>Email</ExternalLink>
      </BottomContainer>
    </MarginTopCard>
  </Main>
)

const StyledText = styled(Text)`
  text-align: center;
  text-indent: none;
`

export default TheEnd
