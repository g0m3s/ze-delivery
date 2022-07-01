import { Stack } from '@mui/material'
import { Header, Container } from '../'

export const ApplicationShell: React.FC = () => {
  return (
    //maybe change to mui container
    <Stack
      sx={{
        width: '100vw',
        // bgcolor: 'black',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container />
    </Stack>
  )
}
