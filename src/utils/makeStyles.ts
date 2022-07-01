import { makeStyles as muiMakeStyles, Styles, WithStylesOptions } from '@mui/styles'
import { zéTheme } from './theme'

type MuiMakeStyles = typeof muiMakeStyles
type ZeTheme = typeof zéTheme

const defaultOptions: Omit<WithStylesOptions<ZeTheme>, 'withTheme'> = {
  defaultTheme: zéTheme
}

export const makeStyles = <
  Props extends object = {},
  ClassKey extends string = string
>(styles: Styles<ZeTheme, Props, ClassKey>, options: Omit<WithStylesOptions<ZeTheme>, 'withTheme'> = defaultOptions): ReturnType<MuiMakeStyles> => {
  return muiMakeStyles(styles, options)
}
