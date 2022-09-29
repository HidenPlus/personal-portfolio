import { atom } from "jotai"

type ActionsType = {
  text: string
  onClick: () => void
  element: JSX.Element
}

export type ModalContentType = {
  title: string
  actions: ActionsType[] | []
  children: JSX.Element | null
  visible: boolean
}

export const modalContent = atom<ModalContentType>({
  title: "",
  actions: [],
  children: null,
  visible: false,
})
