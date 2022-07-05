import { useState } from 'react'
import { Stack, Typography, Slider as MuiSlider, SliderThumb } from '@mui/material'

export const Slider: React.FC = () => {
  const [donationValue, setDonationValue] = useState(10)

  return (
    <Stack ml={{ xs: 2, lg: 4 }} spacing={2} direction='row' alignItems='center'>
      <Typography mr={{ xs: 3, lg: 4 }} typography={{ xs: 'text8', lg: 'text1' }}>Valor da doação:</Typography>
      <MuiSlider
        marks
        min={10}
        step={5}
        max={100}
        value={donationValue}
        onChange={(_, value) => setDonationValue(value as number)}
        sx={{
          width: '200px',
          color: 'secondary.main',
          '& .MuiSlider-thumb': {
            width: '70px',
            height: '20px',
            paddingX: 1.5,
            display: 'flex',
            alignItems: 'center',
            borderRadius: '100px',
            justifyContent: 'center',
            color: 'common.white',
            bgcolor: 'secondary.main',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
              boxShadow: 'inherit',
            },
          }
        }}
        components={{
          Thumb: (props) => (
            <SliderThumb {...props}>
              {props.children}
              <Typography variant='text8'>R$ {donationValue}</Typography>
            </SliderThumb>
          )
        }}
      />
    </Stack>
  )
}
