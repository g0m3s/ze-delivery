import { useEffect } from 'react'
import { Stack } from '@mui/material'
import { WelcomeModal } from './components'
import { useModal } from '../../utils/useModal'

export const Container: React.FC = () => {

  const [isModalOpen, toggleWelcomeModal] = useModal()

  useEffect(() => {
    toggleWelcomeModal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Stack sx={{ color: 'white' }}>
      <WelcomeModal isOpen={isModalOpen} onClose={toggleWelcomeModal} />
    </Stack>
  )
}
