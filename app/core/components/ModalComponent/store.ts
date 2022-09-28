import { atom } from "jotai"

export type ModalContentType = {
  title: string
  actions: JSX.Element[] | never[]
  children: JSX.Element | null
  visible: boolean
}

export const modalContent = atom<ModalContentType>({
  title: "",
  actions: [],
  children: null,
  visible: false,
})
