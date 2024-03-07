import Cards from '../Cards/cards'
import { Container } from './styles'

import { Project } from '../Cards/cards'
import Separator from '../Separator/separator'

export type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  const sortedProjects = projects?.slice().sort((a, b) => a.id - b.id)

  return (
    <Container>
      <Separator />
      <h2>Projetos</h2>
      {sortedProjects?.map((item, index) => (
        <div key={item.id}>
          <Cards
            name={item.name}
            year={item.year}
            urlIcon={item.urlIcon}
            aboutProject={item.aboutProject}
            infos={item.infos}
            repositoryUrl={item.repositoryUrl}
            deployUrl={item.deployUrl}
            id={index}
          />
        </div>
      ))}
    </Container>
  )
}

export default Projects
