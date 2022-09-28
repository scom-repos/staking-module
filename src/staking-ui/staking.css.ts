import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('.staking-component', {
  $nest: {
    '.staking-layout': {
      width: '100%',
      maxWidth: '1420px',
      minHeight: 'calc(100vh - 10rem)',
      margin: '1rem auto',
      padding: '0 1rem',
    },
    'i-link': {
      display: 'flex',
      $nest: {
        '&:hover *': {
          color: Theme.text.primary,
          opacity: 0.9,
        },
      },
    },
    '.wrapper': {
      $nest: {
        'i-label > *': {
          color: Theme.text.primary,
          fontSize: '0.875rem',
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
          backgroundColor: 'var(--colors-primary-main)',
          borderTopLeftRadius: '26px',
          borderBottomLeftRadius: '26px',
          padding: '2.5rem 0.75rem',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'space-between',
        },
        '.campaign-name': {
          $nest: {
            'i-image': {
              marginRight: '0.25rem',
            },
            'i-label > *': {
              fontSize: '1.25rem',
              fontWeight: '700',
            },
          },
        },
        '.campaign-description': {
          display: 'flex',
          paddingBlock: '2.5rem',
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
                  color: Theme.text.primary,
                  fontWeight: 'bold',
                  fontFamily: Theme.typography.fontFamily,
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
              backgroundColor: '#b14781',
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
          background: 'hsla(0,0%,100%,0.03) 0% 0% no-repeat padding-box',
          color: Theme.text.primary,
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
              color: 'var(--colors-primary-main) !important',
            },
          },
        },
        '.container-custom': {
          display: 'flex',
          alignItems: 'stretch',
          marginBottom: '1rem',
        },
        '.row-custom': {
          margin: '1rem',
          background: 'hsla(0,0%,100%,0.15) 0% 0% no-repeat padding-box',
          borderRadius: '26px',
          width: '100%',
        },
        '.column-custom': {
          width: '25%',
          padding: '0 1rem',
          height: '100%',
          $nest: {
            '&:first-child': {
              marginLeft: '-30px'
            },
          },
        },
        '.img-custom': {
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '1.5rem',
          marginBottom: '0.75rem',
        },
        '.group-img': {
          display: 'flex',
          justifyContent: 'center',
          $nest: {
            'i-icon': {
              margin: 'auto 0.25rem',
              fill: 'var(--colors-primary-main)',
            },
          },
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
        '.custom-divider': {
          borderTop: '2px solid var(--colors-primary-main)',
          marginBlock: '1rem',
        },
        '.btn-stake': {
          width: '100%',
          padding: '0.625rem 0',
          marginBottom: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
        },
        '.view-contract': {
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
          $nest: {
            'a': {
              display: 'flex',
              alignItems: 'center',
            },
            'i-label': {
              marginRight: '0.25rem',
            },
          },
        },
        '.no-campaign': {
          margin: '2rem 1rem',
          padding: '3rem 2rem',
          background: Theme.background.modal,
          borderRadius: '26px',
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
        }
      },
    },
    '.ml-auto': {
      marginLeft: 'auto',
    },
    '.mr-025': {
      marginRight: '0.25rem',
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
              borderRadius: '26px',
              minHeight: 'auto',
              height: 'auto'
            },
            '.row-custom': {
              maxWidth: '520px',
              margin: '1rem auto',
            },
            '.column-custom': {
              width: '100%',
              height: 'auto',
              margin: '1rem 0',
              $nest: {
                '&:first-child': {
                  margin: '0',
                  padding: '0',
                },
              },
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
