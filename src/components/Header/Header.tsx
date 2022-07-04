import ProfilePhoto from '../../assets/ze1.png'
import { AppBar, Stack, Toolbar } from '@mui/material'

export const Header: React.FC = () => {
  return (
    <AppBar
      position='sticky'
      elevation={4}
      sx={{
        zIndex: 200,
        width: '100vw',
        borderBottom: '10px solid #ffcc00'
      }}
    >
      <Toolbar
        sx={{
          height: { xs: 65, lg: 85 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'secondary.main',
        }}
      >
        <Stack height='70%'>
          <img
            src={ProfilePhoto}
            alt='imagem de perfil'
            style={{ height: '100%' }}
          />
        </Stack>
      </Toolbar>
    </AppBar >
  )
}
