import { useHomeViewModel } from './useHomeViewModel'

const HomeView = () => {
  const model = useHomeViewModel()

  return <div>{model.title}</div>
}

export default HomeView
