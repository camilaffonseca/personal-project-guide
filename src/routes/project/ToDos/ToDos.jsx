import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'

import toDosImage from 'images/projects/todos.gif'

const ToDos = () => (
  <Main>
    <MarginTopCard>
      <Title>To-dos</Title>
      <MarginBottomImage src={toDosImage} alt='Project Image' />
      <Text>ToDos - description</Text>
    </MarginTopCard>
  </Main>
)

export default ToDos
