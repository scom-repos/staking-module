import { Styles } from '@ijstech/components';

Styles.cssRule('.manage-stake', {
  $nest: {
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
      }
    },
    '.ml-auto': {
      marginLeft: 'auto',
    },
    '.cursor-pointer': {
      cursor: 'pointer',
    },
    '.manage-wrapper': {
      width: '480px',
    },
    '.question-icon': {
      border: `2px solid #fff`,
      borderRadius: '50%',
      padding: '3px',
      opacity: '0.8'
    },
    '.manage-header': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '1rem',
      marginBottom: '1rem',
      borderBottom: `2px solid #fff`,
    },
    '.main-content': {
      fontSize: '.875rem',
      $nest: {
        'i-label > *': {
          fontSize: '1rem',
          wordBreak: 'normal'
        },
        '.section-info': {
          $nest: {
            'i-panel': {
              display: 'flex',
              flexWrap: 'wrap',
            },
            'i-vstack': {
              alignItems: 'flex-start',
              marginBottom: '2rem',
            },
          },
        },
        '.description': {
          background: 'linear-gradient(255deg,#f15e61,#b52082)',
          padding: '0.75rem 1rem',
          marginBottom: '1rem',
          $nest: {
            'i-label': {
              display: 'block',
              padding: '0.5rem 0',
            }
          }
        },
        '.input--token-box': {
          border: `1px solid #fff`,
          borderRadius: '5px',
          padding: '0.75rem',
        },
        '.input--token-box *': {
          fontSize: '1rem',
        },
        '.img-token': {
          marginRight: '0.25rem',
        },
        '.text-normal > *': {
          fontWeight: 'normal',
          fontSize: '1rem',
        },
        '.btn-max': {
          display: 'flex',
          alignItems: 'center',
          paddingInline: '0.5rem',
          marginRight: '0.5rem',
        },
        '.btn-approve': {
          padding: '1rem 0.25rem',
          textAlign: 'center',
          marginBlock: '.25rem'
        },
        '.w-50': {
          width: '50%',
        },
        '.w-100': {
          width: '100%',
        },
        '.token-input > input': {
          border: 'none',
          width: '100% !important',
          backgroundColor: 'transparent',
          color: '#fff',
          fontSize: '1.25rem',
          textAlign: 'left'
        },
      }
    },
    '.text-yellow': {
      color: '#f6c958',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    '.mr-025': {
      marginRight: '0.25rem',
    },
    '.mb-025': {
      marginBottom: '0.25rem',
    },
    '.mb-075': {
      marginBottom: '0.75rem',
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
    '.stake-modal': {
      $nest: {
        '.i-modal_header': {
          display: 'none',
        },
        '.modal': {
          background: '#192046',
          width: 480,
          maxWidth: '100%',
          borderRadius: '1rem',
          padding: '1.5rem 1rem',
          color: '#fff'
        },
      }
    },
    '.custom-modal': {
      $nest: {
        '.i-modal_header': {
          display: 'none',
        },
        '.modal': {
          background: '#192046',
          width: 480,
          maxWidth: '100%',
          padding: '0.75rem 1rem',
          borderRadius: '1rem',
          color: '#fff'
        },
        '.manage-header': {
          marginTop: '0.5rem',
          marginBottom: 0,
          paddingBottom: 0,
          border: 'none',
          justifyContent: 'flex-end',
          $nest: {
            'i-icon': {
              fill: '#f15e61',
            },
          },
        },
        'i-label > *': {
          fontSize: '.875rem',
          wordBreak: 'normal'
        },
        '.i-modal_content': {
          padding: '0 1rem 1rem',
        },
        '.description-time': {
          display: 'inline-block',
          $nest: {
            'i-label': {
              marginRight: '0.25rem',
            },
            'i-label > *': {
              color: '#f15e61',
              display: 'inherit',
            }
          },
        },
        '.group-btn': {
          marginTop: '2rem',
        },
        'i-button': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '150px',
          height: '50px !important',
          fontWeight: 600,
          borderRadius: 5,
          margin: '0.5rem',
        },
        '.btn-cancel': {
          background: '#eaecef',
          color: '#0c1234',
        },
        '.btn-submit': {
          textAlign: 'center',
        },
        '.btn-submit > *': {
          color: `${'#fff'} !important`,
        },
      }
    },
  }
})