import { MdOutlineArrowOutward } from 'react-icons/md'
import { Container, Links } from './styles'
import Separator from '../Separator/separator'

const Footer = () => {
  return (
    <Container className="container">
      <Separator />
      <h2>Links</h2>
      <Links>
        <div>
          <p>Linkedin</p>
        </div>
        <div>
          <div>
            <a
              href="https://www.linkedin.com/in/jonattas-moraes"
              target="_blank"
            >
              jonatas-moraes
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      </Links>
      <Links>
        <div>
          <p>GitHub</p>
        </div>
        <div>
          <div>
            <a href="https://github.com/jonattasmoraes" target="_blank">
              jonatasmoraes
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      </Links>
      <Links>
        <div>
          <p>Twitter</p>
        </div>
        <div>
          <div>
            <a href="https://x.com/jonattasmoraes" target="_blank">
              @jonattasmoraes
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      </Links>
      <Links>
        <div>
          <p>E-mail</p>
        </div>
        <div>
          <div>
            <a href="mailto:jonattasmoraes@hotmail.com">
              jonattasmoraes@hotmail.com
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      </Links>
    </Container>
  )
}

export default Footer
