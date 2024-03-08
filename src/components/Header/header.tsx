import Image from 'next/image'

import { FaJava } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

import { Avatar, Backgrond, Info } from './styles'
import { Props } from '../About/about'
import Separator from '../Separator/separator'

const Header = ({ content }: Props) => {
  return (
    <>
      {content?.map((item) => (
        <div key={item.id}>
          <Backgrond>
            <Avatar>
              <Image
                src={item.avatar}
                alt="Avatar"
                width={90}
                height={90}
                priority
              />
            </Avatar>
            <Image
              src={item.banner}
              alt="Banner"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '16px'
              }}
            />
          </Backgrond>
        </div>
      ))}
      <Info>
        <div>
          <h1>Jônattas Moraes</h1>
          <p>Fullstack Developer</p>
          <div>
            <a href="https://x.com/jonattasmoraes" target="_blank">
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
