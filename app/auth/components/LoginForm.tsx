import { AuthenticationError, PromiseReturnType } from "blitz"
import Link from "next/link"
import login from "app/auth/mutations/login"
import getExistUserByEmail from "../mutations/getExistUserByEmail"
import { ForgotPassword, Login } from "app/auth/validations"
import { useMutation } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"
import { ErrorChecker, FormTitleWrapper, LoginButton, LoginButtonWrapper, LoginTitle, LoginWrapper, PopupFollowMe, SignUpTitle } from "app/projects/components/Login/styles"
import { Form } from "app/projects/components/Login/styles"
import LabeledTextField from "app/projects/components/Login/LabeledTextField"
import { useEffect, useState } from "react"
import { FORM_ERROR } from "final-form"
import { ZodError } from "zod"
import { motion, useMotionValue } from "framer-motion"
import { FaCheck } from "react-icons/fa"
import { ImCross } from "react-icons/im";
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import LoaderSpinner, { Colors } from "app/core/components/LoaderSpinner"
import { useRouter } from "next/router"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
  onError?: (error: any) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const translations = {
    login: useGetTextByLng("authLogin"),
    email: useGetTextByLng("authEmail"),
    password: useGetTextByLng("authPassword"),
    forgotPassword: useGetTextByLng("authForgotPassword"),
    signup: useGetTextByLng("authSignUp"),
    userNotExist: useGetTextByLng("errorUserDoesntExist"),
    emailInvalid: useGetTextByLng("errorInvalidEmail"),
    passwordInvalid: useGetTextByLng("errorInvalidPassword"),
  }
  const [loginMutation, {isLoading: loadingLogin}] = useMutation(login)
  const router = useRouter()
  const [validForm, setValidForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const [showPopupError, setPopupError] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, []);

  const handleChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
    if(Login.safeParse(loginForm).success){
      setErrorMessage("")
      setValidForm(true);
    } else {
      try {
        Login.parse(loginForm);
      } catch (error) {
        if(error instanceof ZodError) {
          console.log(error.issues)
          setErrorMessage(error.issues.map((issue) => issue.message).join(". "))
        }
        setValidForm(false);
      }
    }
  }

  const handleLogin = async () => {
    try {
      const userSanitized = Login.parse(loginForm)
      console.log(userSanitized)
      const user = await loginMutation(userSanitized)
      console.log(user)
      props.onSuccess?.(user)
    } catch (error: any) {
      console.log(error);
      if (error instanceof AuthenticationError) {
        return props.onError?.({ [FORM_ERROR]: error.message || "Sorry, those credentials are invalid" })
      }
      if(error instanceof ZodError) {
        return props.onError?.({ [FORM_ERROR]: error.issues.map((issue) => issue.message).join("\n") })
      }
        return props.onError?.({
          [FORM_ERROR]:
            "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
        })
    }
  }

  return (
    <LoginWrapper>
      {showPopupError && errorMessage.length ?
      <PopupFollowMe style={{
        translateX: cursorX,
        translateY: cursorY,
      }}>
        {errorMessage}
      </PopupFollowMe>
       : null}
      <ErrorChecker
      onMouseOver={() => setPopupError(true)}
      onMouseLeave={() => setPopupError(false)}
      onMouseOut={() => setPopupError(false)}
      onMouseUp={() => setPopupError(false)}
      validForm={validForm}>
        <motion.div
            key={validForm ? "check" : "cross"}
            animate={{rotate: [360, 0], opacity: [0, 1], scale: [0, 1]}}
            transition={{ duration: 0.3 }}
            >
          {validForm ? <FaCheck size="30"/> : <ImCross size="30"/>}
        </motion.div>
      </ErrorChecker>
      <FormTitleWrapper>
        <LoginTitle>{translations.login}</LoginTitle>
        <SignUpTitle onClick={() => router.push("/auth/signup")}>{translations.signup}</SignUpTitle>
      </FormTitleWrapper>
      <Form>
        <LabeledTextField onChange={handleChangeInput} name="email" label={translations.email} placeholder={translations.email} />
        <LabeledTextField onChange={handleChangeInput} name="password" label={translations.password} placeholder={translations.password} type="password" />
        <LoginButtonWrapper
          key={loadingLogin ? "loading" : "loaded"}
          animate={{ width: [0, 100], opacity: [0, 1], scale: [0, 1]}}
          transition={{ duration: 0.7 }}
          >
          {!loadingLogin ?
          <LoginButton role="button" onClick={handleLogin}>{translations.login}</LoginButton>
          :
          <LoaderSpinner color={Colors.white}></LoaderSpinner>}
        </LoginButtonWrapper>
      </Form>
    </LoginWrapper>
  )
}

export default LoginForm
