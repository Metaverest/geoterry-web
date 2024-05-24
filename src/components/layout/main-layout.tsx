import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Header } from '../header/header'

interface Props {
  children: ReactNode
  excludeHeaderFooter?: boolean
}

const MainLayout: FC<Props> = ({ children, excludeHeaderFooter }) => {
  if (excludeHeaderFooter) return <Box component="main">{children}</Box>

  return (
    <Box component="main">
      <Header />
      {children}
    </Box>
  )
}

export default MainLayout
