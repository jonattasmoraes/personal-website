import Image from 'next/image'

import { FaJava } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

import { Avatar, Backgrond, Info, Separator } from './styles'

const Header = () => {
  return (
    <>
      <Avatar>
        <Backgrond>
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={90}
            height={90}
            priority
          />
        </Backgrond>
      </Avatar>
      <Info>
        <div>
          <h1>Jônattas Moraes</h1>
          <p>Full Stack Developer</p>
          <a
            href="https://x.com/jonattasmoraes"
            target="_blank"
            rel="noopener noreferrer"
          >
            @jonattasmoraes
          </a>
        </div>
        <div>
          <span>
            <FaJava />
          </span>
          <span>
            <SiTypescript />
          </span>
          <span>
            <SiJavascript />
          </span>
          <span>
            <FaReact />
          </span>
        </div>
      </Info>
      <Separator />
    </>
  )
}

export default Header
