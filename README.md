# Speech-to-Text Recognition App

A modern React application with real-time speech recognition capabilities, built with TypeScript and Chakra UI. This app allows users to convert spoken words into text with support for multiple languages and customizable transcript styling.

![Speech Recognition App](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF?logo=vite)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.8.0-319795?logo=chakra-ui)

## ✨ Features

- **Real-time Speech Recognition**: Convert speech to text in real-time
- **Multi-language Support**: Support for 10+ languages including English, French, Italian, Japanese, Korean, Chinese, and more
- **Customizable UI**: Adjust font size and weight of transcriptions
- **Copy to Clipboard**: Easy one-click copying of transcribed text
- **Browser Compatibility Check**: Automatic detection of browser speech recognition support
- **Debug Panel**: Built-in troubleshooting tools for development
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite

## 🌐 Supported Languages

- 🇺🇸 English (en-US)
- 🇫🇷 French (fr-FR)
- 🇮🇹 Italian (it-IT)
- 🇯🇵 Japanese (ja)
- 🇰🇷 Korean (ko)
- 🇷🇴 Latin (la)
- 🇨🇳 Chinese (zh-CN)
- 🇲🇾 Malaysian (ms-MY)
- 🇵🇹 Portuguese (pt-PT)
- 🇪🇸 Spanish (es-US)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.0.2
- **Build Tool**: Vite 7.1.3
- **UI Library**: Chakra UI 2.8.0
- **Speech Recognition**: react-speech-recognition 3.10.0
- **Animations**: Framer Motion 10.16.1
- **Icons**: React Icons 4.10.1
- **Styling**: Emotion (CSS-in-JS)

## 🔧 Requirements

### Browser Compatibility

This app requires a modern browser with Web Speech API support:

#### ✅ **Fully Supported Browsers:**

- **Chrome/Chromium**: 33+ (Recommended)
- **Microsoft Edge**: 79+
- **Opera**: 20+
- **Samsung Internet**: 4.0+

#### ⚠️ **Limited Support:**

- **Safari**: 14.1+ (macOS/iOS - requires user interaction)
- **Firefox**: Limited support, experimental features need to be enabled

#### ❌ **Not Supported:**

- Internet Explorer (all versions)
- Older browser versions

### System Requirements

- **Node.js**: 16.0.0 or higher
- **npm**: 7.0.0 or higher (or yarn/pnpm equivalent)
- **Operating System**: Windows 10+, macOS 10.15+, or Linux

### HTTPS Requirement

⚠️ **Important**: Speech recognition requires HTTPS in production. The Web Speech API only works on:

- `https://` domains
- `localhost` (for development)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/RedDotz20/speech-to-text-recognition.git
cd speech-to-text-recognition
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

Using pnpm:

```bash
pnpm install
```

### 3. Development Server

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```text
speech-to-text-recognition/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Images, flags, icons
│   ├── components/        # React components
│   │   ├── MainControls/  # Control panel components
│   │   ├── DebugPanel.tsx
│   │   ├── SimpleSpeechTest.tsx
│   │   ├── SpeechRecognitionTroubleshoot.tsx
│   │   └── Transcription.tsx
│   ├── constants/         # App constants
│   │   └── languageSupport.ts
│   ├── context/          # React contexts
│   │   ├── LanguageContext.tsx
│   │   ├── SpeechRecognitionContext.tsx
│   │   └── TranscriptContext.tsx
│   ├── hooks/            # Custom hooks
│   │   ├── useLanguageContext.ts
│   │   ├── useSpeechRecognitionContext.ts
│   │   ├── useTranscriptContext.ts
│   │   └── index.ts
│   ├── types/            # TypeScript type definitions
│   │   ├── languageContextType.ts
│   │   ├── languageTypes.ts
│   │   ├── speechRecognitionContextType.ts
│   │   └── transcriptContextType.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Usage

### Basic Usage

1. **Grant Microphone Permission**: Click "Allow" when prompted for microphone access
2. **Select Language**: Choose your preferred language from the dropdown
3. **Start Recording**: Click the microphone button to start speech recognition
4. **Speak Clearly**: Talk into your microphone
5. **View Transcript**: Your speech will appear as text in real-time
6. **Copy Text**: Click the copy button to copy the transcribed text

### Customization

- **Font Weight**: Adjust the text weight (Thin, Normal, Medium, Bold)
- **Font Size**: Choose from different text sizes (sm, md, lg, xl)
- **Language**: Switch between 10+ supported languages

## 🐛 Troubleshooting

### Common Issues

1. **Microphone Not Working**

   - Ensure microphone permissions are granted
   - Check if other applications are using the microphone
   - Try refreshing the page

2. **Speech Not Recognized**

   - Speak clearly and at a moderate pace
   - Ensure you're in a quiet environment
   - Check if the selected language matches your speech

3. **Browser Not Supported**

   - Use a Chromium-based browser (Chrome, Edge, Opera)
   - Update your browser to the latest version
   - Enable experimental features in Firefox

4. **HTTPS Issues in Production**
   - Deploy to HTTPS domain
   - Use services like Netlify, Vercel, or GitHub Pages

### Debug Mode

The app includes a built-in debug panel that shows:

- Browser compatibility status
- Microphone access status
- Current transcript state
- Technical information

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm start` - Build and preview (production mode)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [react-speech-recognition](https://github.com/JamesBrill/react-speech-recognition) - React hook for speech recognition
- [Chakra UI](https://chakra-ui.com/) - Modular and accessible component library
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - Browser speech recognition API

## 📞 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#-troubleshooting)
2. Look at existing [issues](https://github.com/RedDotz20/speech-to-text-recognition/issues)
3. Create a new issue with detailed information

---

Made with ❤️ by [RedDotz20](https://github.com/RedDotz20)
