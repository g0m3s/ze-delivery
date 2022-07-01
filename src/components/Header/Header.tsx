import { AppBar, IconButton, Toolbar } from "@mui/material"

export const Header: React.FC = () => {
  return (
    <AppBar
      position='sticky'
      elevation={2}
      sx={{
        zIndex: 200,
        width: '100vw',
      }}
    >
      <Toolbar
        sx={{
          height: 75,
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'common.white'
        }}
      >
        <IconButton onClick={()=>alert('open menu')}>
          {/* <Menu /> */}
          menu
        </IconButton>

        {/* <Box sx={{ display: 'flex' }}>
          <AccountMenu />
        </Box> */}
      </Toolbar>
    </AppBar>
  )
}
