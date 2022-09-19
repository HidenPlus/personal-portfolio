import { useGetTextByLng } from "app/core/hooks/useGetTextByLng";
import { ArrowImg, ContactDescription, ContactTitle } from "app/projects/components/Contact/styles";
import { Layout } from "app/projects/components/Layout";
import { motion } from "framer-motion";


export default function Contact(): JSX.Element {
  const title = useGetTextByLng("contactTitle")
  const description = useGetTextByLng("contactDescription")
  return (
    <Layout side="left" title="Portfolio | Contact" description="Home page Yojhan Atuesta portfolio">
      <ContactTitle>
        {title}
      </ContactTitle>
      <ContactDescription>
        {description}
      </ContactDescription>
      <motion.div
      initial={{ scale: 1, rotate: 160 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      <ArrowImg src="/vectorpaint.png"></ArrowImg>
    </motion.div>
    </Layout>
  )
}
