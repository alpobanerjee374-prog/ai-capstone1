export interface HomeModel {
  title: string
}

export const createHomeModel = (): HomeModel => ({
  title: 'Home',
})
