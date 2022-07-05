import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '../../../../../Button'
import { Stack, Typography } from '@mui/material'

export const Slider: React.FC = () => {
  const [donationValue, setDonationValue] = useState(0)

  return (
    <Stack spacing={2} direction='row' alignItems='center'>

      <Button
        icon={<AddIcon />}
        onClick={() => setDonationValue(value => value -= 1)}
        sx={{ bgcolor: 'secondary.main', color: '#FFF', borderRadius: '50%' }}
      />

      <Typography>{donationValue}</Typography>

      <Button
        icon={<AddIcon />}
        onClick={() => setDonationValue(value => value += 1)}
        sx={{ bgcolor: 'secondary.main', color: '#FFF', borderRadius: '50%' }}
      />

    </Stack>
  )
}
