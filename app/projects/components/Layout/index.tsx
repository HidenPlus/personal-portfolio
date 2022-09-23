import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import styled from 'styled-components'

type Props = {
    children: ReactNode
    title: string
    description: string
    side?: string
}

const LayoutWrapper = styled.div`
  width: 100%;
  padding-top: calc(var(--nav-height) + 2rem);
`

export const Layout = ({ children, title, description, side = "right" }: Props): JSX.Element => {
  const variants = {
    hidden: { opacity: 0, x: side === 'left' ? 400 : -400, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  return(
  <LayoutWrapper>
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
        >
            {children}
        </motion.main>
  </LayoutWrapper>
)}
