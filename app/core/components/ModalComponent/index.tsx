/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai"
import { useEffect } from "react"
import { GrClose } from "react-icons/gr"
import {
  ModalClose,
  ModalContent,
  ModalFooterWrapper,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from "./styles"
import { modalContent as modalContentAtom } from "./store"

export default function ModalComponent(): JSX.Element {
  const [modalContent, setModalContent] = useAtom(modalContentAtom)

  const variants = {
    hidden: { opacity: 0, x: 0, y: 400 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 400 },
  }

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

  const handleCloseModal = (): void => {
    setModalContent({ ...modalContent, visible: false })
  }

  return (
    <ModalWrapper $visible={modalContent.visible} onClick={closeModal}>
      <ModalContent
        key={modalContent.visible ? "visible" : "hidden"}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        role="dialog"
      >
        <ModalHeader>
          <ModalTitle>{modalContent.title}</ModalTitle>
          <ModalClose onClick={handleCloseModal} id="close-modal" role="button">
            <GrClose />
          </ModalClose>
        </ModalHeader>
        {modalContent.children}
        <ModalFooterWrapper>
          {modalContent.actions.map((action: any) => action.element)}
        </ModalFooterWrapper>
      </ModalContent>
    </ModalWrapper>
  )
}
