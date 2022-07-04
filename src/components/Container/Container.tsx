
import { useEffect } from 'react'
import { useModal } from '../../utils/useModal'
import { Stack, Typography } from '@mui/material'
import { WelcomeModal, ProfileSection, DonateSection } from './components'

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
      <Typography color='primary.main' typography={{ xs: 'h3', lg: 'h2' }}>Escolha para quem doar :)</Typography>
      <DonateSection />
    </Stack >
  )
}
