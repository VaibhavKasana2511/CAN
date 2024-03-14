module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@utils': ['./src/utils'],
          '@components': ['./src/components'],
          '@assets': ['./src/assets'],
          '@screens': ['./src/screens'],
          '@navigation': ['./src/navigation'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
