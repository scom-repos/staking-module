import { Styles } from '@ijstech/components';
import Assets from '@staking/assets';

const colorVar = {
  primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
  primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
  darkBg: '#181E3E 0% 0% no-repeat padding-box',
  primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
}

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

Styles.cssRule('.staking-component', {
  $nest: {
    '*': {
      fontFamily: 'Proxima Nova',
    },
    '#stakingElm': {
      background: '#0c1234',
    },
    '.i-loading-overlay': {
      background: '#0c1234',
    },
    '.overflow-inherit': {
      overflow: 'inherit',
    },
    '::selection': {
      color: '#fff',
      background: '#1890ff'
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
    '.staking-layout': {
      width: '100%',
      marginInline: 'auto',
    },
    'i-link': {
      display: 'flex',
      $nest: {
        '&:hover *': {
          color: '#fff',
          opacity: 0.9,
        },
      },
    },
    '.wrapper': {
      $nest: {
        'i-label:not(.duration) > *': {
          fontSize: '0.875rem',
          color: '#FFFFFF'
        },
        '.sticker': {
          position: 'absolute',
          top: '-8px',
          right: '-33px',
          borderInline: '50px solid transparent',
          borderBottom: '50px solid #20bf55',
          transform: 'rotate(45deg)',
          $nest: {
            '&.sold-out': {
              borderBottomColor: '#ccc',
            },
            '&.closed': {
              borderBottomColor: '#0c1234',
              $nest: {
                'i-label > *': {
                  color: '#f7d064 !important',
                },
                'i-icon': {
                  fill: '#f7d064',
                },
              }
            },
            '.sticker-text': {
              position: 'absolute',
              right: '-1.6rem',
              top: '0.75rem',
              width: '50px',
              lineHeight: '1rem',
            },
            'i-label': {
              display: 'flex',
              justifyContent: 'center',
            },
            'i-label > *': {
              color: '#3f3f42 !important',
              fontSize: '0.75rem',
            },
            'i-icon': {
              width: '14px',
              height: '14px',
              display: 'block',
              margin: 'auto',
            },
          },
        },
        '.banner': {
          position: 'relative',
          height: '100%',
          minHeight: '485px',
          padding: '2.5rem 0.75rem',
        },
        '.campaign-name': {
          $nest: {
            'i-image': {
              marginRight: '0.25rem',
            },
            'i-label': {
              overflow: 'hidden',
              overflowWrap: 'break-word'
            },
            'i-label > *': {
              fontSize: '1.25rem',
              fontWeight: '700',
            },
          },
        },
        '.campaign-description': {
          paddingBlock: '2.5rem',
          overflow: 'hidden',
          overflowWrap: 'break-word'
        },
        '.staking-description': {
          overflow: 'hidden',
          overflowWrap: 'break-word',
          paddingInline: '0.75rem',
        },
        '.row-item': {
          marginBlock: '0.15rem',
        },
        '.col-item': {
          display: 'flex',
          alignItems: 'flex-start',
          marginRight: '0.25rem',
          width: 'auto',
          $nest: {
            '.custom-icon': {
              display: 'flex',
              width: '14px',
              height: '14px',
              marginRight: '0.15rem',
              marginTop: '0.1rem',
            },
          },
        },
        '.simplified': {
          marginTop: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          $nest: {
            '.simplified-description': {
              display: 'flex',
              alignItems: 'center',
              marginInline: 'auto',
              $nest: {
                'i-image': {
                  display: 'flex',
                  marginLeft: '0.25rem',
                },
              },
            },
            '.simplified-link': {
              textAlign: 'center',
              $nest: {
                'a': {
                  color: '#fff',
                  fontWeight: 'bold',
                  fontFamily: 'Proxima Nova',
                  marginInline: '0.25rem',
                  textDecorationLine: 'underline',
                },
              },
            },
          },
        },
        '.get-token': {
          cursor: 'pointer',
          justifyContent: 'center',
          marginBlock: '1rem',
          marginInline: 'auto',
          width: 'fit-content',
          $nest: {
            'i-label': {
              marginRight: '0.25rem',
            },
            'i-image': {
              marginRight: '0.25rem',
            },
          },
        },
        '.custom-timer': {
          display: 'flex',
          $nest: {
            '.timer-value': {
              padding: '0.5rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
            },
            '.timer-unit': {
              marginInline: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
            },
          },
        },
        '.bg-color': {
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
          minHeight: '485px',
          height: '100%',
          borderRadius: '15px',
          paddingBottom: '1rem',
          position: 'relative',
        },
        '.header-info': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '1rem',
          $nest: {
            'i-hstack i-label > *': {
              fontSize: '1.25rem',
              marginLeft: '0.25rem',
              lineHeight: '1.875rem',
            },
          },
        },
        '.container-custom': {
          display: 'flex',
          alignItems: 'stretch',
        },
        '.row-custom': {
          width: '100%',
        },
        '.column-custom': {
          width: '25%',
          padding: '0',
          height: '100%'
        },
        '.img-custom': {
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '1.5rem',
          marginBottom: '0.75rem',
        },
        '.info-stake': {
          width: '100%',
          padding: '0.5rem 0.75rem',
          $nest: {
            'i-hstack': {
              padding: '0.175rem 0',
            },
            'i-label:first-child': {
              display: 'flex',
            },
            'i-label:last-child': {
              fontWeight: 700,
              textAlign: 'right',
            },
          },
        },
        '.btn-stake': {
          width: '100%',
          padding: '0.625rem 0',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
        },
        '.no-campaign': {
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          $nest: {
            'i-label > *': {
              fontSize: '1.5rem',
              marginTop: '1rem',
            }
          }
        },
        '.slider-arrow': {
          fill: '#f15e61',
        }
      },
    },
    '.ml-auto': {
      marginLeft: 'auto',
    },
    '.mr-025': {
      marginRight: '0.25rem',
    },
    '.input-disabled': {
      opacity: 0.4,
      cursor: 'default',
      $nest: {
        '*': {
          cursor: 'default',
        }
      }
    },
    '#importFileErrModal': {
      $nest: {
        '.modal': {
          borderRadius: 12,
        },
        '.i-modal_header': {
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid #F15E61`,
          color: '#F15E61',
          fontSize: '1.25rem',
          fontWeight: 700,
        },
        '.i-modal_header > i-icon': {
          fill: `#F15E61 !important`
        },
        '#importFileErr span': {
          fontSize: '16px !important'
        }
      }
    },
    '#loadingElm.i-loading--active': {
      marginTop: '2rem',
      position: 'initial',
      $nest: {
        '#stakingElm': {
          display: 'none !important',
        },
        '.i-loading-spinner': {
          marginTop: '2rem',
        },
      },
    },
    '.connect-wallet': {
      display: 'block',
      textAlign: 'center',
      paddingTop: '1rem',
    },
    '@media (max-width: 1240px)': {
      $nest: {
        '.wrapper': {
          $nest: {
            '.banner': {
              minHeight: 'auto',
              height: 'auto'
            },
            '.column-custom': {
              width: '100%',
              height: 'auto',
              margin: '1rem 0'
            },
          },
        },
      },
    },
    '@media (max-width: 992px)': {
      $nest: {
        '.header': {
          flexDirection: 'column',
        },
      },
    },
  }
})
