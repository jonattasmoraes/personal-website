import Image from 'next/image'

import { FaJava } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

import { Avatar, Backgrond, Info, Separator } from './styles'

const Header = () => {
  return (
    <>
      <Backgrond imageUrl={'/background.png'}>
        <Avatar>
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={90}
            height={90}
            priority
          />
        </Avatar>
      </Backgrond>
      <Info>
        <div>
          <h1>Jônattas Moraes</h1>
          <p>Full Stack Developer</p>
          <div>
            <a href="http://" target="_blank">
              <p>
                @jonattasmoraes
                <FaSquareXTwitter />
              </p>
            </a>
          </div>
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
