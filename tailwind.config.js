module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        fontSize: {
          '48': [
            '48px', {
              lineHeight: 'normal',
              letterSpacing: '4.8px'
            }
          ],
          '28': [
            '28px', {
              lineHeight: 'normal'
            }
          ],
          '24': [
            '24px', {
              lineHeight: 'normal'
            }
          ],
          '16': [
            '16px', {
              lineHeight: 'normal'
            }
          ],
          '14': [
            '14px', {
              lineHeight: '150%'
            }
          ],
        },
        fontFamily: {
          'Libre-Baskerville': ['Libre Baskerville']
        }
      },
    },
    plugins: [],
  }