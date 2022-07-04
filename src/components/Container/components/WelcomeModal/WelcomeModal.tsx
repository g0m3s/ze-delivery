import React from 'react'
import Lottie from 'react-lottie'
import { Button } from '../../../Button'
import { TransitionProps } from '@mui/material/transitions'
import * as beerAnimation from '../../../../assets/beer2.json'
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

  return (
    <Dialog
      fullWidth
      open={isOpen}
      maxWidth='sm'
      PaperProps={{
        sx: {
          borderRadius: 5,
        }
      }}
      onClose={onClose}
      sx={{ borderRadius: 5 }}
      TransitionComponent={TransitionSlide}
    >
      <Stack spacing={2} position='relative' padding={4}>

        <Typography variant='h2' textAlign='center'>Olá! Bem vindo(a)</Typography>
        <Typography sx={{ textIndent: '1.5rem' }}>Bom, estou realmente muito muito animado para ter uma oportunidade no zé e por isso resolvi fazer algo de diferente ao invés de só mandar meu currículo.</Typography>
        <Typography sx={{ textIndent: '1.5rem' }}>Trouxe aqui uma "ideia de um novo produto". A ideia aqui seria que, o usuário do zé delivery ganharia pontos ao realizar compras dentro da plataforma e poderia ajudar instituições usando estes pontos</Typography>
        <Typography sx={{ textIndent: '1.5rem' }}>Sei que ajudar está bem dentro do "Jeito Zé de Ser" e por isso achei que essa ideia serial legal :)</Typography>

        <Button
          onClick={onClose}
          variant='secondary'
          endIcon={(
            <Lottie
              height={35}
              width={35}
              options={{
                loop: true,
                autoplay: true,
                animationData: beerAnimation,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }
              }
            />
          )}
        >
          Vamos lá
        </Button>
      </Stack>
    </Dialog>
  )
}
