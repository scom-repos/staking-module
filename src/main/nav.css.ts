import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export default Styles.style({
  backgroundColor: Theme.background.default,
  $nest: {
    '::-webkit-scrollbar-track': {
      borderRadius: '12px',
      border: '1px solid transparent',
      backgroundColor: 'unset'
    },
    '::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: 'unset'
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.2) 0% 0% no-repeat padding-box'
    },
    '.nav': {
      padding: '.2rem 1rem',
      fontWeight: '600',
      letterSpacing: '.015em',
      lineHeight: '19px',
      minHeight: 80,
      display: 'block',
      alignItems: 'center',
      borderBottom: `2px solid ${Theme.colors.primary.main}`,
      position: 'relative'
    },
    '#desktopMenu': {
      minWidth: '80px'
    },
    '.desktop-wrap': {
      flexWrap: 'nowrap'
    },
    '.os-mobile': {
      backgroundColor: '#252a48',
      position: 'absolute',
      left: -999,
      top: '62px',
      transition: 'all .3s ease-out',
      minWidth: '290px',
      zIndex: '9999',
      $nest: {
        '&.show-menu': {
          left: 0,
          transition: 'all .5s ease-in'
        },
        'i-menu-item': {
          color: Theme.colors.primary.main,
          whiteSpace: 'nowrap',
          width: '100%',
          $nest: {
            '> .desktop': {
              padding: '.75rem 1rem',
              borderLeft: `2px solid transparent`,
              // transition: 'all .2s ease-out',
            },
            // '> .desktop.dropdown': {
            //   backgroundColor: '#252a48',
            // },
            // '.show-dropdown .dir-icon': {
            //   transform: 'rotate(90deg)'
            // }
          }
        },
        'i-menu-item.menu-active > .desktop': {
          borderLeft: `2px solid ${Theme.colors.primary.main}`,
          background: '#464b65'
        },
        'i-menu-item:hover > .desktop': {
          background: '#303552'
        },
        '.heading, .heading i-label *': {
          fontWeight: 'normal',
          fontSize: '1rem',
          color: Theme.colors.primary.main
        },
        '> nav > div > i-menu-item .title .heading': {
          width: '100%',
          $nest: {
            '*': {
              fontWeight: 400,
              fontSize: 20
            }
          }
        },
        '> nav > div > i-menu-item.menu-active .title .heading *': {
          fontWeight: 700,
        }
      }
    },
    '.btn-hamburger': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      $nest: {
        '&:not(.disabled):hover': {
          backgroundColor: 'transparent',
          background: 'transparent',
          boxShadow: 'none'
        }
      }
    },
    'i-menu.i-menu--horizontal > .desktop > .align': {
      alignItems: 'stretch !important',
      gridGap: '5px !important'
    },
    '.ml-0-5': {
      marginLeft: '.5rem'
    },
    '.ml-0-7-5': {
      marginLeft: '.75rem'
    },
    '.mr-1-2-5': {
      marginRight: '1.25rem'
    },
    '.left-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      maxWidth: 'calc(100% - 640px)',
      // width: '70rem'
    },
    '.right-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    '.dir-icon': {
      transition: 'transform .24s'
    },
    '.menu-icon': {
      display: 'inline-block'
    },
    '.btn': {
      height: 'auto !important',
      cursor: 'pointer',
      fontWeight: 600,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      backgroundColor: 'transparent',
      $nest: {
        '&:hover': {
          transition: 'all .2s ease-out'
        }
      }
    },
    '.btn-network': {
      padding: '6px 12px',
      backgroundColor: '#101026',
      border: '1px solid #101026',
      color: Theme.text.primary,
      borderRadius: 6,
      fontWeight: 400,
      $nest: {
        '&:hover': {
          backgroundColor: '#101026',
          border: '1px solid #101026'
        }
      }
    },
    '.btn-connect': {
      padding: '.375rem .5rem',
      border: 'none',
      transition: 'all .2s ease-out',
      $nest: {
        '&:hover': {
          opacity: '.9',
          transition: 'all .2s ease-out',
        }
      }
    },
    '.my-wallet': {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#192046',
      borderRadius: 6,
      height: 36,
      textAlign: 'center',
      padding: '6px 10px',
      position: 'relative'
    },
    '.address-info': {
      display: 'flex',
      gap: '.5rem',
      lineHeight: '30px',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: '.25rem'
    },
    '.os-modal': {
      borderRadius: 20,
      boxSizing: 'border-box',
      fontSize: '.875rem',
      fontWeight: 400,
      $nest: {
        'i-icon': {
          display: 'inline-block'
        },
        '.mr-2-5': {
          marginRight: '2.5rem'
        },
        '&.connect-modal > div > div': {
          width: 440,
          maxWidth: '100%',
          height: 'auto'
        },
        '&.connect-modal .i-modal_content': {
          padding: '0 1.5rem'
        },
        '&.account-modal .i-modal_content': {
          padding: '1rem 1.5rem'
        },
        '&.account-modal > div > div': {
          height: 'auto',
          minHeight: 200,
          width: 440,
          maxWidth: '100%',
        },
        '> div > div': {
          backgroundColor: '#252a48',
          height: 'calc(100% - 200px)',
          borderRadius: 15,
          lineHeight: 1.5,
          wordWrap: 'break-word',
          padding: 0,
          minHeight: 400,
          width: 360
        },
        '.i-modal_content': {
          padding: '0 1.25rem'
        },
        '.i-modal_header': {
          borderRadius: '20px 20px 0 0',
          background: 'unset',
          borderBottom: `2px solid ${Theme.divider}`,
          padding: '16px 24px',
          $nest: {
            'span': {
              fontWeight: 500,
              fontSize: '1rem',
              color: Theme.colors.secondary.main
            }
          }
        },
        '.networkSection': {
          marginLeft: '-1.25rem',
          marginRight: '-1.25rem',
        },
        '.list-view': {
          $nest: {
            '.list-item:hover': {
              $nest: {
                '> *': {
                  opacity: 1
                }
              }
            },
            '.list-item:not(:first-child)': {
              marginTop: '.5rem'
            },
            '.list-item': {
              backgroundColor: Theme.background.default,
              position: 'relative',
              borderRadius: 10,
              cursor: 'pointer',
              border: 'none',
              transition: 'all .3s ease-in',
              overflow: 'unset',
              $nest: {
                '&.disabled-network-selection': {
                  cursor: 'default',
                  $nest: {
                    '&:hover > *': {
                      opacity: '0.5 !important',
                    }
                  }
                },
                '> *': {
                  opacity: .5
                }
              }
            },
            '.list-item i-image': {
              height: 'auto'
            },
            '.list-item.is-actived': {
              $nest: {
                '> *': {
                  opacity: 1
                },
                '&:after': {
                  content: "''",
                  top: '50%',
                  left: 9,
                  position: 'absolute',
                  background: '#20bf55',
                  borderRadius: '50%',
                  width: 10,
                  height: 10,
                  transform: 'translate3d(-50%,-50%,0)'
                },
                '.custom-label': {
                  paddingLeft: '.75rem'
                }
              }
            }
          }
        },
        '.networks': {
          color: '#f05e61',
          marginTop: '1.5rem',
          height: 'calc(100% - 160px)',
          overflowY: 'auto',
          width: '100% !important',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          $nest: {
            '.list-item': {
              padding: '.65rem .5rem'
            }
          }
        },
        '.wallets': {
          marginTop: '.5rem',
          $nest: {
            '.list-item': {
              padding: '.5rem',
              position: 'relative',
              justifyContent: 'space-between'
            },
            '.list-item .image-container': {
              order: 2
            }
          }
        },
        '.small-label > *': {
          fontSize: '.875rem'
        },
        '.large-label > *': {
          fontSize: '1.25rem',
          lineHeight: 1.5
        },
        '.wallet-learn': {
          padding: '1.5rem 0'
        },
        '.learn-more a': {
          color: '#f15e61',
          textDecoration: 'none',
        },
        '.custom-link *': {
          color: Theme.text.primary
        },
        '.custom-link a': {
          display: 'inline-flex',
          alignItems: 'center'
        }
      }
    },
    '@media screen and (max-width: 760px)': {
      $nest: {
        '#walletContainer': {
          marginLeft: 'auto',
        },
        '#networkBalanceContainer': {
          $nest: {
            'i-label': {
              display: 'none',
            },
            'i-image': {
              width: '2rem !important',
              height: '2rem',
            },
            '.btn-network': {
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: 0,
              marginRight: '0.5rem !important'
            },
            '.my-wallet': {
              display: 'none',
            },
          },
        },
      },
    }
  }
})
