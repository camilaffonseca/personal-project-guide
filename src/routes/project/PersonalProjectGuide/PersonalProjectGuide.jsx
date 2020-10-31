import React from 'react'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'

import personalProjectGuideImage from 'images/projects/personal-project-guide.gif'

const PersonalProjectGuide = () => (
  <MarginTopCard>
    <Title>Personal Project Guide</Title>
    <MarginBottomImage src={personalProjectGuideImage} alt='Project Image' />
    <Text>
      Primeiro queria falar sobre este projeto aqui. No momento em que escrevo isso ele ainda está sendo
      desenvolvido e está sendo um dos meus maiores desafios até então, visto que comecei com React há pouquíssimo
      tempo e que durante o desenvolvimento tenho entrado muito em contato com conteúdos não vistos até então, assim
      como tenho tido ainda mais envolvimento com Git e um entendimento maior sobre arquitetura de software, sobre
      como funciona um pull request e o processo de deploy, por exemplo. Basicamente, o propósito dele é mostrar um
      pouco de tudo que já fiz até agora, os projetos desenvolvidos, o meu processo de desenvolvimento, de estudos e
      o meu contexto atual.
    </Text>
  </MarginTopCard>
)

export default PersonalProjectGuide
