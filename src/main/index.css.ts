import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;
import Assets from '@staking/assets';

Styles.Theme.darkTheme.background.default = '#0c1234';
Styles.Theme.darkTheme.background.paper = '#1f1e4f';
Styles.Theme.darkTheme.colors.primary.dark = '#F05E61';
Styles.Theme.darkTheme.colors.primary.light = '#f15e60e7';
Styles.Theme.darkTheme.colors.primary.main = '#f15e61';
Styles.Theme.darkTheme.colors.secondary.dark = '#f7d063';
Styles.Theme.darkTheme.colors.secondary.light = '#f7d063b6';
Styles.Theme.darkTheme.colors.secondary.main = '#f7d063';
Styles.Theme.darkTheme.text.secondary = 'hsla(0, 0%, 100%, 0.55)';
Styles.Theme.darkTheme.typography.fontFamily = 'Proxima Nova';
Styles.Theme.darkTheme.colors.warning.dark = '#f57c00';
Styles.Theme.darkTheme.colors.warning.light = '#F6C958';
Styles.Theme.darkTheme.colors.warning.main = '#ffa726';
Styles.Theme.darkTheme.divider = '#0E132E';
Styles.Theme.darkTheme.typography.fontSize = '16px';

const colorVar = {
  primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
  primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
  darkBg: '#181E3E 0% 0% no-repeat padding-box',
  primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box'
}

export default Styles.style({
  $nest: {
    '#pageWrap': {
      zIndex: 1,
    },
    '.overflow-inherit': {
      overflow: 'inherit',
    },
    '::selection': {
      color: '#fff',
      background: '#1890ff'
    },
    '.template-layout': {
      maxWidth: '1420px',
      marginInline: 'auto',
    },
    '.btn-os': {
      background: colorVar.primaryButton,
      height: 'auto !important',
      color: '#fff',
      transition: 'background .3s ease',
      fontSize: '1rem',
      $nest: {
        'i-icon.loading-icon': {
          marginInline: '0.25rem',
          width: '16px !important',
          height: '16px !important',
        },
      },
    },
    '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
      background: colorVar.primaryGradient,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      opacity: .9
    },
    '.btn-os:not(.disabled):not(.is-spinning):focus': {
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
    },
    '.btn-os.disabled, .btn-os.is-spinning': {
      background: colorVar.primaryDisabled,
      opacity: 1
    },
    '.dark-bg, .dark-modal > div > div': {
      background: colorVar.darkBg,
      borderRadius: 5
    },
    '.btn-transparent, .btn-transparent:not(.disabled):focus, .btn-transparent:not(.disabled):hover': {
      background: 'transparent',
      boxShadow: 'none',
      backgroundColor: 'transparent'
    },
    '.mr-0-5': {
      marginRight: '.5rem'
    },
    '.ml-0-5': {
      marginLeft: '.5rem'
    },
    '.mb-0-5': {
      marginBottom: '.5rem'
    },
    '.hidden': {
      display: 'none !important'
    },
    '.no-wrap': {
      whiteSpace: 'nowrap'
    },
    '.flex-nowrap': {
      flexWrap: 'nowrap',
    },
    '.py-1': {
      paddingTop: '1rem',
      paddingBottom: '1rem'
    },
    '.px-1': {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    },
    '.align-middle': {
      alignItems: 'center'
    },
    '.text-secondary *': {
      color: Theme.colors.secondary.dark
    },
    '.btn-default': {
      background: '#eaecef',
      height: 'auto !important',
      transition: 'background .3s ease',
      fontSize: '1rem',
      color: Theme.background.default
    },
  }
});
  
Styles.fontFace({
  fontFamily: "Proxima Nova",
  src: `url("${Assets.fullPath('fonts/proxima_nova/ProximaNovaBold.ttf')}") format("truetype")`,
  fontWeight: 'bold',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Proxima Nova",
  src: `url("${Assets.fullPath('fonts/proxima_nova/ProximaNovaBoldIt.ttf')}") format("truetype")`,
  fontWeight: 'bold',
  fontStyle: 'italic'
})

Styles.fontFace({
  fontFamily: "Proxima Nova",
  src: `url("${Assets.fullPath('fonts/proxima_nova/ProximaNovaLight.ttf')}") format("truetype")`,
  fontWeight: '300',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Proxima Nova",
  src: `url("${Assets.fullPath('fonts/proxima_nova/ProximaNovaLightIt.ttf')}") format("truetype")`,
  fontWeight: '300',
  fontStyle: 'italic'
})

Styles.fontFace({
  fontFamily: "Proxima Nova",
  src: `url("${Assets.fullPath('fonts/proxima_nova/ProximaNovaReg.ttf')}") format("truetype")`,
  fontWeight: 'normal',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Proxima Nova",
  src: `url("${Assets.fullPath('fonts/proxima_nova/ProximaNovaRegIt.ttf')}") format("truetype")`,
  fontWeight: 'normal',
  fontStyle: 'italic'
})

Styles.fontFace({
  fontFamily: "Proxima Nova",
  src: `url("${Assets.fullPath('fonts/proxima_nova/ProximaNovaBold.ttf')}") format("truetype")`,
  fontWeight: 'bold',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Apple SD Gothic Neo",
  src: `url("${Assets.fullPath('fonts/FontsFree-Net-Apple-SD-Gothic-Neo-Bold.ttf')}") format("truetype")`,
  fontWeight: 'bold',
  fontStyle: 'normal'
})