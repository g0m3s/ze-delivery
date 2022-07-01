import { Stack } from '@mui/material'
import { keyframes } from '@emotion/react'

export const BeerAnimation = () => {

  const bubbleAnimation = keyframes`
    0% {
      bottom: 0;
    }
    50% {
      background-color: rgba(255, 255, 255, 0.2);
      bottom: 80px;
    }
    100% {
      background-color: rgba(255, 255, 255, 0);
      bottom: 160px;
    }
  `

  const Foam = (props: { top: number, left: number }) => (
    <Stack
      sx={{
        float: 'left',
        zIndex: '999',
        width: '50px',
        height: '50px',
        position: 'absolute',
        borderRadius: '30px',
        top: `${props.top}px`,
        left: `${props.left}px`,
        backgroundColor: '#f5f2eb',
        // backgroundColor: '#fefefe',
      }}
    />
  )

  const Bubble = (props: { delay: number, left: number }) => (
    <Stack
      sx={{
        bottom: 0,
        zIndex: 2,
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        position: 'absolute',
        left: `${props.left}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        animation: `${bubbleAnimation} ${props.delay}ms infinite linear`
      }}
    />
  )

  return (
    <Stack
      position='relative'
      sx={{

      }}
    >
      <Stack direction='row' sx={{
        // border: '3px solid black',
      }}>
        <Stack sx={{
          zIndex: 2,
          bottom: 0,
          width: '180px',
          height: '150px',
          overflow: 'hidden',
          backgroundColor: '#edaf32',
          border: '10px solid #edaf32',
          borderRadius: '0 0 20px 20px',
          '&::after': {
            left: '-40px',
            content: '""',
            width: '110px',
            bottom: '-10px',
            height: '200px',
            position: 'absolute',
            transform: 'rotate(30deg)',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
          },
          '&::before': {
            border: '3px solid black',
          }
        }} />
          <Bubble delay={1000} left={10} />
          <Bubble delay={1100} left={50} />
          <Bubble delay={1200} left={100} />
          <Bubble delay={700} left={130} />
          <Bubble delay={800} left={170} />
        <Stack
          sx={{
            top: 0,
            // bottom: '10px',
            position: 'absolute',
          }}
        >
          <Foam top={-30} left={-10} />
          <Foam top={-35} left={20} />
          <Foam top={-25} left={50} />
          <Foam top={-35} left={80} />
          <Foam top={-30} left={110} />
          <Foam top={-20} left={140} />
          <Foam top={-30} left={160} />
        </Stack>
        <Stack
        alignItems='center'
        justifyContent='center'
        sx={{
          ml: -5,
          mt: 3,
          zIndex: 1,
          height: '60%',
          width: '80px',
          bgcolor: 'black',
          borderRadius: '50%',
        }}
      >
        <Stack
          sx={{
            bgcolor: 'white',
            height: '75%',
            width: '60px',
            borderRadius: '50%',
          }}
        />
      </Stack>
      </Stack>
    </Stack>
  )
}
