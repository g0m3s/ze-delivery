import { Stack } from '@mui/material'
import { useState } from 'react'
import { Header, Container } from '../'
import { DonateMessage } from './components'

export const ApplicationShell: React.FC = () => {
  const [isDonateModalOpen, SetIsDonateModalOpen] = useState(false)

  return (
    <Stack
      sx={{
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Header />
      <Container SetIsDonateModalOpen={SetIsDonateModalOpen} />
      {isDonateModalOpen && (<DonateMessage />)}
    </Stack>
  )
}
