import { Styles } from '@ijstech/components';

Styles.cssRule('.modal-config', {
  $nest: {
    '.i-modal_header': {
      borderBottom: '2px solid #f15e61',
      paddingBottom: 12,
      marginBottom: 16,
      $nest: {
        'span': {
          color: '#f15e61',
          fontWeight: 'bold',
          fontSize: 20,
        },
        'i-icon': {
          height: '20px !important',
          width: '20px !important',
          fill: '#f15e61 !important',
          display: 'none',
        }
      }
    },
    '.modal': {
      background: '#192046',
      width: 800,
      maxWidth: '100%',
      borderRadius: '1rem',
      padding: '1.5rem 1rem',
      color: '#fff'
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
      background: '#59595e !important',
      borderRadius: 0,
      color: '#fff',
      $nest: {
        '&.btn-active': {
          background: '#FF8800 !important',
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
      background: '#0c1234',
      $nest: {
        'textarea': {
          width: '100% !important',
          height: '100% !important',
          background: 'transparent',
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '1rem',
        }
      }
    },
    '.input-text': {
      width: 'calc(100% - 190px) !important',
      height: '40px !important',
      borderRadius: 12,
      paddingInline: 8,
      background: '#0c1234',
      $nest: {
        '&.w-100': {
          width: '100% !important',
        },
        input: {
          border: 'none',
          width: '100% !important',
          height: '100% !important',
          backgroundColor: 'transparent',
          color: '#fff',
          fontSize: '1rem',
          textAlign: 'left'
        },
      }
    },
    '.main-content': {
      $nest: {
        '.lb-title > *': {
          fontSize: '1rem',
          color: '#fff',
        },
      }
    },
    '.network-selection': {
      $nest: {
        '.btn-select:hover': {
          background: '#0c112c !important',
        },
        '.modal': {
          padding: '0.75rem 0',
          background: '#484860',
          borderRadius: 0,
          $nest: {
            '& > i-vstack': {
              maxHeight: '40vh',
              overflow: 'auto',
            },
            'i-button': {
              boxShadow: 'none',
              color: '#fff',
            },
            'i-button:hover': {
              background: '#26262a !important',
            },
          },
        },
      },
    },
    'i-checkbox .checkmark': {
      backgroundColor: '#0c1234',
      border: '1px solid #484860',
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
      backgroundColor: '#FD4A4C'
    },
    '.cursor-pointer': {
      cursor: 'pointer',
    },
    '.custom-scroll *': {
      $nest: {
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#f15e61',
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