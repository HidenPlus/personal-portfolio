import { useAtom } from "jotai"
import { useEffect } from "react"
import { FaExclamationTriangle, FaBell } from "react-icons/fa"
import { alertDialogAtom } from "./store"
import {
  AlertDialogWrapper,
  Dialog,
  DialogActions,
  DialogButton,
  DialogContent,
  DialogTitle,
  IconContainer,
} from "./styles"

const IconsAlert = {
  error: (
    <IconContainer>
      <FaExclamationTriangle />
    </IconContainer>
  ),
  warning: (
    <IconContainer>
      <FaBell />
    </IconContainer>
  ),
}

export default function AlertDialog(): JSX.Element {
  const [alertDialog, setAlertDialog] = useAtom(alertDialogAtom)
  const variants = {
    hidden: { opacity: 0, x: 400, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -400, y: 0 },
  }

  useEffect(() => {
    if (alertDialog.visible) {
      const refTimeout = setTimeout(() => {
        setAlertDialog({
          visible: false,
          title: "",
          message: "",
          buttons: [],
          timeout: 0,
          type: "",
        })
      }, alertDialog.timeout)
      return () => clearTimeout(refTimeout)
    }
  }, [alertDialog.visible])

  return (
    <AlertDialogWrapper
      style={{
        display: alertDialog.visible ? "flex" : "none",
      }}
    >
      {alertDialog.visible && (
        <Dialog
          key={alertDialog.visible ? "active" : "disabled"}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
          role="alertdialog"
        >
          {alertDialog.title && (
            <DialogTitle>
              {alertDialog.title} {IconsAlert[alertDialog.type]}
            </DialogTitle>
          )}
          {alertDialog.message && <DialogContent>{alertDialog.message}</DialogContent>}
          {alertDialog.buttons.map((button: any) => (
            <DialogActions key={button.text}>
              <DialogButton
                onClick={() => {
                  button.onClick()
                }}
              >
                {button.text}
              </DialogButton>
            </DialogActions>
          ))}
        </Dialog>
      )}
    </AlertDialogWrapper>
  )
}
