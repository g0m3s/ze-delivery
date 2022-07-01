import React from 'react'
import { Button } from '../../../Button'
import { keyframes } from '@emotion/react'
import { BeerAnimation } from './components'
import { TransitionProps } from '@mui/material/transitions'
import { Dialog, Slide, Typography, Stack } from '@mui/material'

type slideProps = TransitionProps & {
  children: React.ReactElement<any, any>
}

const TransitionSlide = React.forwardRef((props: slideProps, ref: any) => <Slide direction='up' {...props} ref={ref} />)

interface DebitDialogProps {
  onClose: () => void
  isOpen: boolean
}
export const WelcomeModal: React.FC<DebitDialogProps> = (props) => {
  const { onClose, isOpen } = props

  const bub = keyframes`
    0% { bottom: 0; }
  
     50% {
       background-color: rgba(255, 255, 255, 0.2);
        bottom: 80px;
     }
  
     100% {
       background-color: rgba(255, 255, 255, 0);
        bottom: 160px;
     }
  `

  return (
    <Dialog
      fullWidth
      open={isOpen}
      maxWidth='sm'
      PaperProps={{
        sx: {
          borderRadius: 5,
          // bgcolor: 'red'
        }
      }}
      onClose={onClose}
      sx={{ borderRadius: 5 }}
      TransitionComponent={TransitionSlide}
    >
      <Stack spacing={2} textAlign='center' position='relative' padding={4} height='600px'>

        <Typography variant='h2'>Olá! Bem vindo(a)</Typography>
        <Typography sx={{ textIndent: '1.5rem' }}>Bom, estou realmente muito muito animado para começar a trabalhar no zé e por isso resolvi fazer algo de diferente ao invés de só mandar meu currículo.</Typography>
        <Typography sx={{ textIndent: '1.5rem' }}>Trouxe aqui uma "ideia de um novo produto". A ideia aqui seria que, o usuário do zé delivery ganharia pontos ao realizar compras dentro da plataforma e poderia ajudar instituições usando estes pontos</Typography>
        <Typography sx={{ textIndent: '1.5rem' }}>Sei que ajudar está bem dentro do "Jeito Zé de Ser" e por isso achei que essa ideia serial legal :)</Typography>

        <BeerAnimation />


        {/* 

        <Button
          onClick={onClose}
          variant='primary'
        >
          Vamos lá
        </Button> */}
        {/* <Stack sx={{
          left: '50%',
          bottom: -80,
          width: '100%',
          height: '100px',
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: '#ffcc00',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}>
          <Stack
            sx={{
              width: '120%',
              bgcolor: 'white',
              border: '1px solid #d1b12e',
              height: '300px',
              position: 'absolute',
              left: '70%',
              bottom: 85,
              marginLeft: '-500px',
              marginTop: '-500px',
              borderRadius: '35%',
              // background: 'rgba(255, 255, 255, .75)',
              animation: `${waveAnimation} 15s infinite linear`,
              // animation: `${waveAnimation} 5s infinite linear`,
            }}
          />
        </Stack> */}
        
      </Stack>
    </Dialog>
  )
}
