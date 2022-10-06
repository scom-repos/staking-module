import { Styles } from '@ijstech/components';

Styles.cssRule('.token-selection', {
  $nest: {
    'i-icon': {
      display: 'inline-block'
    },
    'i-modal > .i-modal_header': {
      display: 'none',
    },
    '::-webkit-scrollbar-track': {
      background: '#FFB82F',
    },
    '::-webkit-scrollbar': {
      width: '5px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#f7d063',
      borderRadius: '5px',
    },
    '#btnToken': {
      alignItems: 'center',
      justifyContent: 'start',
      boxShadow: 'none',
      $nest: {
        '&:hover': {
          background: '#0c1234',
          opacity: .9
        },
        '&.disabled': {
          background: '#0c1234',
          opacity: 0.6
        },
        'span': {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        },
        'i-icon': {
          marginLeft: 'auto',
        },
      },
    },
    '#tokenSelectionModal': {
      $nest: {
        '&> div': {
          height: 'auto !important',
        },
        '.i-modal_header': {
          display: 'none',
        },
        '.modal': {
          width: 450,
          maxWidth: '100%',
          minWidth: 'auto',
          background: '#484860',
          padding: '0.5rem 0',
        },
        '#tokenList': {
          maxHeight: '33vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          $nest: {
            '.token-item': {
              $nest: {
                'i-label': {
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: 'calc(100% - 40px)',
                },
                '&:hover': {
                  background: '#26262a'
                }
              }
            }
          }
        }
      }
    }
  }
})