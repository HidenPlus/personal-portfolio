import { atom } from "jotai"

export const alertDialogAtom = atom({
  title: "",
  message: "",
  buttons: [],
  visible: false,
  timeout: 0,
  type: "",
})
