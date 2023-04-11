import { proxy, subscribe } from 'valtio'

const getLocalData = (key: string) => {
  if (typeof window !== 'undefined') {
    const storageData = localStorage.getItem(key)
    if (storageData) {
      return JSON.parse(storageData)
    }
  }

  return null
}

const setLocalData = (key: string, data: { [key: string]: any }) => {
  if (typeof window !== 'undefined') {
    const stringData = JSON.stringify(data)
    localStorage.setItem(key, stringData)
  }
}

export function persistedProxy<Data extends { [key: string]: any }>(key: string, initialData: Data) {
  const stateProxy = proxy<Data>(getLocalData(key) || initialData)

  subscribe(stateProxy, () => {
    setLocalData(key, stateProxy)
  })

  return stateProxy
}
