import React, { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <PageContainer>
      <Navbar />
      <AnimatePresence mode='wait'>
        {children}
      </AnimatePresence>
      <Footer />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  background-color: var(--mainBg);
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`