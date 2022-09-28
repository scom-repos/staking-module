import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('.staking-rewards', {
  $nest: {
    '.staking-layout': {
      width: '100%',
      maxWidth: '1420px',
      minHeight: 'calc(100vh - 10rem)',
      margin: '1rem auto',
      padding: '0 1rem',
    },
    // '.header': {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   alignItems: 'center',
    //   padding: '1rem',
    // },
    '.custom-switch--box': {
      display: 'flex',
      width: 'fit-content',
      cursor: 'pointer',
      padding: '0',
      transition: 'all .3s ease-in-out',
      borderRadius: '12px',
      border: '1px solid #a7a9ac',
      $nest: {
        'i-label': {
          padding: '0.25rem 0.6rem',
          margin: '3px',
          borderRadius: '10px',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'all .25s ease-in-out',
          height: '34px',
          lineHeight: '28px',
        },
        '.tab-active': {
          background: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
          transition: 'all .2s ease-in',
        },
      },
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
    '.content-help': {
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'center',
      margin: '0.5rem',
      $nest: {
        'i-link > a': {
          textDecoration: 'none'
        }
        // 'i-link': {
        //   marginLeft: '0.25rem',
        //   $nest: {
        //     'a': {
        //       display: 'flex',
        //       alignItems: 'center',
        //     },
        //     'a:hover': {
        //       $nest: {
        //         '*': {
        //           color: 'var(--colors-info-main)',
        //         },
        //         'i-icon': {
        //           fill: 'var(--colors-info-main)',
        //         },
        //       },
        //     },
        //     'i-icon': {
        //       display: 'flex',
        //       marginLeft: '0.25rem',
        //       fill: 'var(--colors-primary-main)'
        //     },
        //   },
        // },
      },
    },
    '.search-box': {
      position: 'relative',
      marginLeft: 'auto',
      $nest: {
        'i-icon': {
          fill: `${Theme.text.primary} !important`,
          zIndex: 1,
          opacity: 0.7,
          left: '10px',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '18px',
          height: '18px',
        },
        'input': {
          background: '#252a49 0 0 no-repeat padding-box',
          border: 'none',
          borderRadius: '12px',
          color: Theme.text.primary,
          fontSize: '1rem',
          padding: '10px 10px 10px 40px',
          boxShadow: 'none',
          outline: 'none',
          $nest: {
            '&::placeholder': {
              color: Theme.text.primary,
              opacity: 0.5,
            },
            '&:focus::placeholder': {
              opacity: 0,
            },
          },
        },
      },
    },
    '.ml-auto': {
      marginLeft: 'auto',
    },
    '.mr-025': {
      marginRight: '0.25rem',
    },
    '#loadingElm.i-loading--active': {
      marginTop: '2rem',
      position: 'initial',
      $nest: {
        '#stakingPanel': {
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
              borderRadius: '26px',
              minHeight: 'auto',
              height: 'auto'
            },
            '.row-custom': {
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'flex-start',
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
    '@media (max-width: 480px)': {
      $nest: {
        '.search-box': {
          width: '100%',
          $nest: {
            'input': {
              width: '100% !important',
            },
            'i-input': {
              width: '100% !important',
            },
          }
        },
      },
    },
  }
})
