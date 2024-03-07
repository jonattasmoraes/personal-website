import { Loading } from './styles'
import { Content } from '../About/about'

type Props = {
  content: Content[]
}

const Loader = ({ content }: Props) => {
  return (
    <Loading>
      <div className={content && 'loaded'} />
    </Loading>
  )
}

export default Loader
