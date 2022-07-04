import React from 'react'
import { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Card, Typography, Stack } from '@mui/material'

let width: number, height: number, gradient: any

const getGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
  const chartWidth = chartArea.right - chartArea.left
  const chartHeight = chartArea.bottom - chartArea.top
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
    gradient.addColorStop(1, 'rgb(14, 201, 81)')
    gradient.addColorStop(0.5, 'rgb(255, 205, 86)')
    gradient.addColorStop(0, 'rgb(255, 99, 132)')
  }
  return gradient
}

const GRAPHIC_DATA = [null, null, 60, 58, 46, 75, 80, 80, 83, 100, 89, 75]

const GRAPHIC_DATA_CONFIG = {
  labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
  datasets: [{
    fill: true,
    label: 'Total',
    visible: false,
    showLine: true,
    borderWidth: 3,
    borderColor(context: any) {
      const chart = context.chart
      const { ctx, chartArea } = chart
      if (!chartArea) { return }
      return getGradient(ctx, chartArea)
    },
    backgroundColor: 'rgba(255, 204, 0, .1)',
    data: GRAPHIC_DATA,
    radius: 5,
    pointBackgroundColor: 'white',
  }]
}

const GRAPHIC_CONFIG: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { intersect: false },
  scales: {
    y: {
      beginAtZero: false,
    },
    x: {
      grid: {
        display: true,
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: true,
      },
      ticks: { padding: 20 },
      beginAtZero: false
    },
  },
  plugins: {
    legend: {
      labels: {
        boxWidth: 0,
        color: 'white',
        usePointStyle: true
      },
    }
  }
}

export const Graphic: React.FC = () => (
  <Stack width='100vw' mt={3}>
    <Typography
      ml={3}
      color='primary.main'
      typography={{ xs: 'h3', lg: 'h2' }}
    >
      Suas últimas doações:
    </Typography>

    <Stack width='100%' alignItems='center'>
      <Card
        elevation={2}
        sx={{
          marginY: 4,
          paddingX: 4,
          width: '90%',
          height: '50vh',
          justifyContent: 'center',
          paddingY: { xs: 2, lg: 4 },
        }}
      >
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h4' >Doações realizadas nos últimos meses</Typography>
        </Stack>
        <Line data={GRAPHIC_DATA_CONFIG} options={GRAPHIC_CONFIG} height='80%' />
      </Card>
    </Stack>
  </Stack>
)
