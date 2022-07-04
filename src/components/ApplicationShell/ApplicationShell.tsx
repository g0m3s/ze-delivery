import Lottie from 'react-lottie'
import { Stack, Typography } from '@mui/material'
import { Header, Container } from '../'
import donateAnimation from '../../assets/donateAnimation2.json'

export const ApplicationShell: React.FC = () => {
  return (
    //maybe change to mui container
    <Stack
      sx={{
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Header />
      <Container />
      {/* <Stack
        width='100%'
        height='100%'
        zIndex={1000}
        bgcolor='#decdac'
        position='absolute'
        alignItems='center'
        justifyContent='center'
      >
        <Stack
          bgcolor='#FFF'
          borderRadius={2}
          alignItems='center'
          justifyContent='center'
          padding={{ xs: 3, lg: 4 }}
          width={{ xs: '85%', lg: '50%' }}
        >
          <Stack width='100vw' alignItems='center'>
            <Typography textAlign='center' color='black' variant='h2'>Obrigado por doar!</Typography>
            <Typography width='90%' textAlign='center' color='grey.500' variant='text7'>
              Sua doação é muito importante para a instituição e vai ajudar muitas pessoas!
            </Typography>
          </Stack>
          <Stack>
            <Lottie
              height={200}
              width={200}
              options={{
                loop: true,
                autoplay: true,
                animationData: donateAnimation,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
            />
          </Stack>
        </Stack>
      </Stack> */}
    </Stack>
  )
}
