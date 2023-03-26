import { proxy } from 'valtio'

type LayoutProxy = {
  isCartOpen: boolean
}

export const LayoutStore = proxy<LayoutProxy>({
  isCartOpen: false,
})

export const openCart = () => {
  LayoutStore.isCartOpen = true
}
export const closeCart = () => {
  LayoutStore.isCartOpen = false
}
