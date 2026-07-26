import { createHomeModel, type HomeModel } from './HomeModel'

export const useHomeViewModel = (): HomeModel => {
  return createHomeModel()
}
