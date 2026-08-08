import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Copy user uploaded profile picture & certificates into public directory
const srcPhoto = "C:\\Users\\Arjun\\.gemini\\antigravity\\brain\\335c47c2-7e82-40ed-859b-1586358b8b44\\.user_uploaded\\media_1786117604130.jpg";
const srcAwsCert = "C:\\Users\\Arjun\\.gemini\\antigravity\\brain\\335c47c2-7e82-40ed-859b-1586358b8b44\\.user_uploaded\\media_1786163801278.pdf";
const srcGenAiCert = "C:\\Users\\Arjun\\.gemini\\antigravity\\brain\\335c47c2-7e82-40ed-859b-1586358b8b44\\.user_uploaded\\media_1786166288173.png";

const publicDir = path.resolve(__dirname, 'public');

try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (fs.existsSync(srcPhoto)) {
    fs.copyFileSync(srcPhoto, path.resolve(publicDir, 'arjun-profile.jpg'));
    console.log('Synced arjun-profile.jpg');
  }
  if (fs.existsSync(srcAwsCert)) {
    fs.copyFileSync(srcAwsCert, path.resolve(publicDir, 'aws-certificate.pdf'));
    console.log('Synced aws-certificate.pdf');
  }
  if (fs.existsSync(srcGenAiCert)) {
    fs.copyFileSync(srcGenAiCert, path.resolve(publicDir, 'genai-certificate.png'));
    console.log('Synced genai-certificate.png');
  }
} catch (e) {
  console.error('File sync error:', e);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2018',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons-vendor': ['lucide-react'],
        },
      },
    },
  },
})
