import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Button } from '../../../Button'
import { Navigation, Pagination } from 'swiper'
import { Typography, Stack } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useIsMobile } from '../../../../hooks/useIsMobile'
import { institutions } from '../../../../utils/institutions'

export const DonateSection: React.FC = () => {

  const isMobile = useIsMobile()

  return (
    <Stack width='100vw' mt={{ xs: 0, lg: 3 }} >
      <Swiper
        grabCursor
        spaceBetween={20}
        slidesPerView={isMobile ? 1.1 : 2.2}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => swiper.animating = true}
        style={{
          padding: 10,
          width: '95%',
          transition: 'ease-in-out',
        }}
      >
        {institutions.map(item => (
          <SwiperSlide key={item.title}>
            <Stack
              py={2}
              p={4}
              my={2}
              color='black'
              borderRadius={2}
              sx={{
                boxShadow: '0px 0px 8px rgba(0,0,0,.15)'
              }}
            >
              <Typography variant='h2'>{item.title}</Typography>
              <Typography mt={1} sx={{ textIndent: '1.5rem' }} color='grey.500' variant='text7'>{item.description}</Typography>
              <Stack mt={2} width='100%' alignItems='flex-end'>
                <Button variant='secondary' sx={{ width: '300px' }}>
                  Fazer Doação
                </Button>
              </Stack>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack >)
}
