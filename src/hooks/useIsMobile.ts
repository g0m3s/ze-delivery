import { useMediaQuery, Breakpoint } from '@mui/material'

// /**
//  * @deprecated you should use useDeviceDetect() instead.
//  * 
//  * This hook will return true if the device is mobile. This hook uses the
//  * useMediaQuery hook using theme.down(breakpoint). breakpoint has a default
//  * value of 'lg'
//  * @param breakpoint 
//  */
export const useIsMobile = (breakpoint: Breakpoint = 'lg') => {
  // Fix this string later
  return useMediaQuery('@media (max-width:1199.95px)')
}
