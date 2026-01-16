
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'lucide-react@0.487.0': 'lucide-react',
        'figma:asset/f422c911ec06450953a867d6206398135341a3ad.png': path.resolve(__dirname, './src/assets/f422c911ec06450953a867d6206398135341a3ad.png'),
        'figma:asset/f420ca07a80ef1226d639d558f7ff6fb36acae0e.png': path.resolve(__dirname, './src/assets/f420ca07a80ef1226d639d558f7ff6fb36acae0e.png'),
        'figma:asset/e7427f43803a10e9bcef0961d8e09b265944af27.png': path.resolve(__dirname, './src/assets/e7427f43803a10e9bcef0961d8e09b265944af27.png'),
        'figma:asset/d0b1fae3c3bf0c48586aada8a5a99b1d28a509d7.png': path.resolve(__dirname, './src/assets/d0b1fae3c3bf0c48586aada8a5a99b1d28a509d7.png'),
        'figma:asset/99a0387c45b1ff19877b19fee367364d69de21d0.png': path.resolve(__dirname, './src/assets/99a0387c45b1ff19877b19fee367364d69de21d0.png'),
        'figma:asset/963acebd463df57ea547082719ca5d18f798d0ce.png': path.resolve(__dirname, './src/assets/963acebd463df57ea547082719ca5d18f798d0ce.png'),
        'figma:asset/909a7f60284cdc6965b098f6e0ace0d70152fd00.png': path.resolve(__dirname, './src/assets/909a7f60284cdc6965b098f6e0ace0d70152fd00.png'),
        'figma:asset/86e24625edc544d61f0dd2557eec5c1c1384510f.png': path.resolve(__dirname, './src/assets/86e24625edc544d61f0dd2557eec5c1c1384510f.png'),
        'figma:asset/78563d5e6d9bddb29c348aa823332bc72a9072f9.png': path.resolve(__dirname, './src/assets/78563d5e6d9bddb29c348aa823332bc72a9072f9.png'),
        'figma:asset/347d318c00986e488e5e95be846e16f005b73f91.png': path.resolve(__dirname, './src/assets/347d318c00986e488e5e95be846e16f005b73f91.png'),
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });