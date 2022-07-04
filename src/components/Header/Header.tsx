import ProfilePhoto from '../../assets/ze1.png'
import MenuIcon from '@mui/icons-material/Menu'
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
          display: 'flex',
          alignItems: 'center',
          height: { xs: 65, lg: 85 },
          justifyContent: 'space-between',
          backgroundColor: 'secondary.main',
        }}
      >
        <Stack sx={{ cursor: 'pointer' }} onClick={() => alert('Menu')}>
          <MenuIcon sx={{ color: '#FFF' }} />
        </Stack>
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
