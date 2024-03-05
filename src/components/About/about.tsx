import { Container } from './styles'

export type Content = {
  id: string
  banner: string
  avatar: string
  aboutPage: string
}

export type Props = {
  content: Content[]
}

const About = ({ content }: Props) => {
  return (
    <Container>
      <h2>Sobre</h2>
      {content?.map((item) => (
        <p key={item.id}>{item.aboutPage}</p>
      ))}
    </Container>
  )
}

export default About
