import { useAtom } from "jotai"
import { useEffect } from "react"
import { ModalWrapper } from "./styles"
import { modalContent as modalContentAtom } from "./store"

export default function ModalComponent(): JSX.Element {
  const [modalContent, setModalContent] = useAtom(modalContentAtom)
  // when the user press the esc key, the modal will close listening on an useEffect
  const handleEsc = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      setModalContent({ ...modalContent, visible: false })
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (e.target === e.currentTarget) {
      setModalContent({ ...modalContent, visible: false })
    }
  }
  return (
    <ModalWrapper role="dialog" $visible={modalContent.visible} onClick={closeModal}>
      {modalContent.children}
    </ModalWrapper>
  )
}
