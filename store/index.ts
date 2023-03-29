import { proxy } from 'valtio'

type LayoutProxy = {
  isCartOpen: boolean
  isAuthDrawerOpen: boolean
}

export const LayoutStore = proxy<LayoutProxy>({
  isCartOpen: false,
  isAuthDrawerOpen: false,
})

export const openCart = () => {
  LayoutStore.isCartOpen = true
}
export const closeCart = () => {
  LayoutStore.isCartOpen = false
}
export const openAuthDrawer = () => {
  LayoutStore.isAuthDrawerOpen = true
}
export const closeAuthDrawer = () => {
  LayoutStore.isAuthDrawerOpen = false
}
