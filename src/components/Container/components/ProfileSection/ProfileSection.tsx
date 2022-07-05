import { useEffect, useState } from 'react'
import ProfilePhoto from '../../../../assets/ze2.png'
import { useIsMobile } from '../../../../hooks/useIsMobile'
import { Typography, Stack, LinearProgress } from '@mui/material'

export const ProfileSection: React.FC = () => {

  const isMobile = useIsMobile()

  const [progressBarValue, setProgressBarValue] = useState(0)

  useEffect(() => {
    if (progressBarValue < 70) {
      setTimeout(() => {
        const timeToAdd = Math.floor(Math.random() * (10 - 3 + 1)) + 3
        setProgressBarValue(value => value += timeToAdd)
      }, 300)
    }
  }, [progressBarValue])

  const HelperMessage = () => (
    <Stack width='90%' bgcolor='grey.50' padding={1} borderRadius={2}>
      <Typography
        variant='text7'
        color='grey.500'
        sx={{ textIndent: '1.5rem' }}
      >
        Quanto mais você compra no zé delivery mais pontos você acumula e pode usar esses pontos para ajudar pessoas!.
        Mil pontos equivalem a R$100 disponíveis para doação.
      </Typography>
    </Stack>
  )

  return (
    <>
      <Stack width={{ xs: '95vw', lg: '90vw' }} direction='row' padding={{ lg: 3 }}>
        <Stack
          padding={1}
          borderRadius='50%'
          alignItems='center'
          justifyContent='center'
        >
          <img
            alt='imagem de perfil'
            src={ProfilePhoto}
            style={{
              borderRadius: '50%',
              width: isMobile ? '80px' : '250px',
              height: isMobile ? '80px' : '250px',
            }}
          />
        </Stack>
        <Stack
          paddingY={5}
          ml={{ xs: 2.5, lg: 4 }}
          justifyContent='space-between'
          width={{ xs: '100%', lg: 'auto' }}
        >
          <Typography
            mb={2}
            color='black'
            typography={{ xs: 'h4', lg: 'h2' }}
          >
            Jozé da silva Pereira
          </Typography>
          <Stack>
            <Stack width={{ xs: '100%', lg: '500px' }}>
              <LinearProgress
                variant='determinate'
                value={progressBarValue}
                sx={{
                  height: '12px',
                  borderRadius: 2,
                  '&.MuiLinearProgress-root': {
                    span: { borderRadius: 3 },
                  },
                }}
              />
              <Stack direction='row' justifyContent='space-between'>
                <Typography variant='text7' color='grey.200'>Seus pontos:</Typography>
                <Typography variant='text7' color='grey.200'>{progressBarValue * 10} xp</Typography>
              </Stack>
            </Stack>
          </Stack>
          {!isMobile && <HelperMessage />}
        </Stack>
      </Stack>
      {isMobile && <HelperMessage />}
    </>
  )
}
