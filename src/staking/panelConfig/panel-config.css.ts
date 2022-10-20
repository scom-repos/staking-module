import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('.panel-config', {
  background: "#192046",
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
    '.w-input': {
      width: 'calc(100% - 190px) !important',
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
      height: '80px !important',
      borderRadius: 12,
      padding: 8,
      background: Theme.input.background,
      $nest: {
        'textarea': {
          width: '100% !important',
          height: '100% !important',
          background: 'transparent',
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
          fontSize: '1rem',
        }
      }
    },
    '.input-text': {
      height: '40px !important',
      borderRadius: 12,
      paddingInline: 8,
      background: Theme.input.background,
      $nest: {
        '&.w-100': {
          width: '100% !important',
        },
        input: {
          border: 'none',
          width: '100% !important',
          height: '100% !important',
          backgroundColor: 'transparent',
          fontSize: '1rem',
          textAlign: 'left'
        },
      }
    },
    '#lbMinLockTime': {
      opacity: 0.8
    },
    'token-selection.disabled #btnToken': {
      cursor: 'default !important',
    },
    '.network-selection': {
      $nest: {
        '.btn-select:hover': {
          background: `${Theme.action.active} !important`,
        },
        '.btn-select.disabled': {
          color: `${Theme.text.primary} !important`,
          cursor: 'default !important',
        },
        '.modal': {
          padding: '0.75rem 0',
          background: Theme.background.paper,
          borderRadius: 6,
          border: `1px solid ${Theme.colors.primary.dark}`,
          $nest: {
            '& > i-vstack': {
              maxHeight: '40vh',
              overflow: 'auto',
            },
            'i-button': {
              boxShadow: 'none',
            },
            'i-button:hover': {
              background: `${Theme.action.hover} !important`,
            },
          },
        },
      },
    },
    'i-checkbox .checkmark': {
      backgroundColor: Theme.input.background,
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
    '.cs-upload': {
      maxWidth: 300,
      minHeight: '150px !important',
      height: '150px !important',
      borderRadius: 12,
      padding: 4,
      $nest: {
        '.i-upload-wrapper': {
          margin: 4,
          height: '100%',
        },
        '.i-upload_preview': {
          minHeight: 'auto',
        },
        'i-image': {
          display: 'flex',
        },
        'i-image img': {
          margin: 'auto',
          objectFit: 'contain',
          width: 300,
          height: 150,
        },
      }
    },
    '.cs-datepicker': {
      background: Theme.input.background,
      borderRadius: 12,
      maxWidth: 300,
      $nest: {
        'input[type="text"]': {
          background: 'transparent',
          height: '40px !important',
          width: '100% !important',
          border: 'none',
          padding: '1rem',
          fontSize: '1rem',
          textAlign: 'center',
          color: Theme.text.primary,
        },
        'input::placeholder': {
          //@ts-ignore
          color: Theme.docs.text,
        },
        '.datepicker-toggle': {
          display: 'flex',
          width: '100% !important',
          maxWidth: 300,
          height: '40px !important',
          padding: 0,
          position: 'absolute',
          top: 0,
          margin: 0,
          background: 'transparent',
        },
        'i-icon': {
          width: '100%',
        },
        'svg': {
          display: 'none',
        }
      },
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
    '@media screen and (max-width: 525px)': {
      $nest: {
        '.main-content': {
          $nest: {
            '.w-input': {
              width: '100% !important'
            },
            '.row-mobile': {
              flexWrap: 'nowrap',
              $nest: {
                '.lb-title': {
                  whiteSpace: 'nowrap',
                }
              }
            },
            '.network-selection': {
              $nest: {
                'i-button': {
                  maxWidth: 'inherit !important',
                },
                'i-modal': {
                  width: '100%',
                  maxWidth: 'inherit !important',
                  $nest: {
                    '.modal': {
                      maxWidth: 'inherit !important',
                    }
                  }
                }
              }
            },
            'i-hstack': {
              flexWrap: 'wrap',
            },
          }
        }
      }
    }
  }
})