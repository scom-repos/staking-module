import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('.panel-config', {
  background: Theme.background.main,
  padding: '1rem',
  margin: 'auto',
  $nest: {
    '.modal': {
      width: 800,
      maxWidth: '100%',
      borderRadius: '1rem',
      padding: '1.5rem 1rem',
    },
    'i-button': {
      padding: '6px 12px',
      textAlign: 'center',
    },
    '.pnl-label': {
      $nest: {
        'i-icon': {
          display: 'none',
          cursor: 'pointer'
        },
        '&:hover i-icon': {
          display: 'block',
        },
      }
    },
    '.btn-item': {
      background: `${Theme.colors.secondary.main} !important`,
      borderRadius: 0,
      color: Theme.colors.primary.contrastText,
      $nest: {
        '&.btn-active': {
          background: `${Theme.colors.primary.main} !important`,
          cursor: 'default',
        }
      }
    },
    'input': {
      $nest: {
        '&::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        '&::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        '&:focus::placeholder': {
          opacity: 0,
        }
      }
    },
    '.input-area': {
      width: 'calc(100% - 190px) !important',
      height: '80px !important',
      borderRadius: 12,
      padding: 8,
      background: Theme.background.paper,
      $nest: {
        'textarea': {
          width: '100% !important',
          height: '100% !important',
          background: 'transparent',
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
          color: Theme.colors.primary.contrastText,
          fontSize: '1rem',
        }
      }
    },
    '.input-text': {
      width: 'calc(100% - 190px) !important',
      height: '40px !important',
      borderRadius: 12,
      paddingInline: 8,
      background: Theme.background.paper,
      $nest: {
        '&.w-100': {
          width: '100% !important',
        },
        input: {
          border: 'none',
          width: '100% !important',
          height: '100% !important',
          backgroundColor: 'transparent',
          color: Theme.colors.primary.contrastText,
          fontSize: '1rem',
          textAlign: 'left'
        },
      }
    },
    '.network-selection': {
      $nest: {
        '.btn-select:hover': {
          background: `${Theme.action.active} !important`,
        },
        '.modal': {
          padding: '0.75rem 0',
          background: Theme.background.paper,
          borderRadius: 0,
          $nest: {
            '& > i-vstack': {
              maxHeight: '40vh',
              overflow: 'auto',
            },
            'i-button': {
              boxShadow: 'none',
              color: Theme.colors.primary.contrastText,
            },
            'i-button:hover': {
              background: `${Theme.action.hover} !important`,
            },
          },
        },
      },
    },
    'i-checkbox .checkmark': {
      backgroundColor: Theme.background.paper,
      border: `1px solid ${Theme.colors.primary.light}`,
      borderRadius: 6,
      width: 20,
      height: 20,
      $nest: {
        '&:after': {
          borderWidth: 2,
          top: 3
        }
      }
    },
    'i-checkbox.is-checked .checkmark': {
      backgroundColor: Theme.colors.secondary.light
    },
    '.cursor-pointer': {
      cursor: 'pointer',
    },
    '&.custom-scroll *': {
      $nest: {
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: Theme.colors.primary.main,
          borderRadius: '5px',
        }
      }
    },
    '#loadingElm.i-loading--active': {
      marginTop: '2rem',
      position: 'initial',
      $nest: {
        '.i-loading-spinner': {
          marginTop: '2rem',
        },
      },
    },
  }
})