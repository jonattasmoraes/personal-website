import Image from 'next/image'

import { MdOutlineArrowOutward } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

import { Card, Container } from './styles'

type Props = {
  linkApi?: string
}

const Projects = ({ linkApi }: Props) => {
  return (
    <Container>
      <h2>Projetos</h2>
      <Card>
        <div>
          <span>2024</span>
        </div>
        <div>
          <Image src="/cookie.png" alt="logo" width={50} height={50} />
          <a href="http://" target="_blank">
            <h3>
              Server Project NODE
              <MdOutlineArrowOutward />
            </h3>
          </a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi natus
            cupiditate repellendus quia facere porro exercitationem error
            aspernatur. Nihil voluptas eum molestiae esse provident rerum
            architecto atque repellendus labore officiis?
          </p>
          {linkApi && (
            <a href={linkApi} target="_blank">
              <span>
                GitHub
                <FaGithub />
              </span>
            </a>
          )}
          <span>Typescript • SQL • React • Next.js</span>
        </div>
      </Card>
    </Container>
  )
}

export default Projects
