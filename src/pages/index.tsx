import Heading from "../components/heading/heading"
import Tag from "../components/tag/tag"
import Text from "../components/text/text"




const Index = () => {
  return (
    <div>
      <Heading tag='h2'>Heading</Heading>
      <Text size='s'>Text</Text>
      <Tag size='s' color='red'>Red</Tag>
      <Tag size='m' color='green'>Green</Tag>
    </div>
  )
}

export default Index