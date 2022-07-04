
import { useEffect } from 'react'
import Lottie from 'react-lottie'
import { useModal } from '../../utils/useModal'
import { Stack, Typography } from '@mui/material'
import heartAnimation from '../../assets/heart.json'
import { WelcomeModal, ProfileSection, DonateSection, Graphic } from './components'

export const Container: React.FC = () => {
  const [isModalOpen, toggleWelcomeModal] = useModal()

  useEffect(() => {
    toggleWelcomeModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Stack alignItems='center'>
      {/* <WelcomeModal isOpen={isModalOpen} onClose={toggleWelcomeModal} /> */}
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
      <DonateSection />
      <Graphic />
    </Stack >
  )
}
