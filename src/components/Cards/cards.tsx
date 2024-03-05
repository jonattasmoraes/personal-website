import Image from 'next/image'

import { MdOutlineArrowOutward } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

import { Card, Title } from './styles'

export type Project = {
  id: number
  name: string
  year: string
  urlIcon: string
  aboutProject: string
  infos: string
  repositoryUrl: string
  deployUrl: string
}

const Cards = ({
  name,
  year,
  urlIcon,
  aboutProject,
  infos,
  repositoryUrl,
  deployUrl
}: Project) => {
  return (
    <Card>
      <div>
        <span>{year}</span>
      </div>
      <div>
        <Image src={urlIcon} alt="logo" width={50} height={50} />
        {deployUrl ? (
          <span>
            <a href={deployUrl} target="_blank">
              <Title>
                {name}
                <MdOutlineArrowOutward />
              </Title>
            </a>
          </span>
        ) : (
          <span>
            <Title>{name}</Title>
          </span>
        )}
        <p>{aboutProject}</p>
        {repositoryUrl && (
          <span>
            <a href={repositoryUrl} target="_blank">
              GitHub
              <FaGithub />
            </a>
          </span>
        )}
        <span>{infos}</span>
      </div>
    </Card>
  )
}

export default Cards
