import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Button } from '@mui/material'
import { Navigation, Pagination } from 'swiper'
import { Typography, Stack } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useIsMobile } from '../../../../hooks/useIsMobile'
import { institutions } from '../../../../utils/institutions'

export const DonateSection: React.FC = () => {
  const isMobile = useIsMobile()

  return (
    <Stack position='relative' width='100vw' mt={{ xs: 0, lg: 3 }} >
      <Swiper
        grabCursor
        autoHeight
        autoplay
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        slidesPerView={isMobile ? 1.1 : 2.2}
        onSwiper={(swiper) => swiper.animating = true}
        style={{
          padding: 10,
          width: '95%',
          display: 'flex',
          alignItems: 'stretch',
          transition: 'ease-in-out'
        }}
      >
        {institutions.map(item => (
          <SwiperSlide key={item.title}>
            <Stack
              p={4}
              py={2}
              color='black'
              my={2}
              borderRadius={2}
              justifyContent='space-between'
              height={{ xs: '400px', lg: '300px' }}
              boxShadow='0px 0px 8px rgba(0,0,0,.15)'
            >
              <Stack>
                <Typography typography={{ xs: 'h3', lg: 'h2' }}>{item.title}</Typography>
                <Typography
                  mt={1}
                  color='grey.500'
                  typography={{ xs: 'text8', lg: 'text7' }}
                  sx={{ textIndent: '1.5rem' }}
                >
                  {item.description}
                </Typography>
              </Stack>
              <Stack mt={2} width='100%' alignItems='flex-end'>
                <Button
                  size='large'
                  variant='contained'
                  onClick={() => alert('nada')}
                  sx={{ boxShadow: 2, color: '#FFF' }}
                >
                  Fazer Doação
                </Button>
              </Stack>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  )
}
