
import { Dispatch, SetStateAction, useEffect } from 'react'
import Lottie from 'react-lottie'
import { useModal } from '../../utils/useModal'
import heartAnimation from '../../assets/heart.json'
import { Link, Stack, Typography } from '@mui/material'
import { WelcomeModal, ProfileSection, DonateSection, Graphic } from './components'

export interface ContainerProps {
  SetIsDonateModalOpen: Dispatch<SetStateAction<boolean>>
}

export const Container: React.FC<ContainerProps> = ({ SetIsDonateModalOpen }) => {
  const [isModalOpen, toggleWelcomeModal] = useModal()

  useEffect(() => {
    toggleWelcomeModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Stack alignItems='center'>
      <WelcomeModal isOpen={isModalOpen} onClose={toggleWelcomeModal} />
      <ProfileSection />
      <Stack direction='row' alignItems='center'>
        <Typography color='primary.main' typography={{ xs: 'h3', lg: 'h2' }}>
          Escolha para quem doar
        </Typography>
        <Lottie
          height={60}
          width={60}
          options={{
            loop: true,
            autoplay: true,
            animationData: heartAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }
          }
        />
      </Stack>
      <DonateSection SetIsDonateModalOpen={SetIsDonateModalOpen} />
      <Graphic />
      <Stack
        mt={4}
        spacing={4}
        paddingY={3}
        width='100vw'
        direction='row'
        alignItems='center'
        justifyContent='center'
        bgcolor='secondary.main'
      >
        <Link target='_blank' sx={{ textDecoration: 'none' }} typography={{ xs: 'text7', lg: 'h4' }} href='https://www.linkedin.com/in/gabriel-gomes-a0681a157/'>Linkedin</Link>
        <Link target='_blank' sx={{ textDecoration: 'none' }} typography={{ xs: 'text7', lg: 'h4' }} href='mailto:gom3s.g@gmail.com'>Gmail</Link>
        <Link target='_blank' sx={{ textDecoration: 'none' }} typography={{ xs: 'text7', lg: 'h4' }} href='https://github.com/g0m3s/ze-delivery'>GitHub</Link>
      </Stack>
    </Stack >
  )
}
