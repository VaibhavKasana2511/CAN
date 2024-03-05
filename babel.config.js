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
          '@utils': './src/utils',
          '@components': './src/Components',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@naviagtion': './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
