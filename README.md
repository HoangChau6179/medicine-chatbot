# Medical Chatbot - AI Healthcare Assistant

An AI-powered healthcare assistant built with Next.js and Google Gemini AI. This application provides users with a seamless platform for health-related inquiries, symptom checks, and personalized health tracking.

## Features

### 1. User Authentication
- **Email/Password Authentication**: Secure registration and login
- **OAuth Integration**: Sign in with Google or GitHub
- **Session Management**: JWT-based secure sessions
- **Route Protection**: Automatic authentication checks
- **User Profile**: Display user information and avatar

### 2. AI Chat Interface
- Real-time chat with Gemini AI for health-related questions
- Context-aware conversations with chat history
- Audio input support (placeholder for future implementation)
- Professional medical context and disclaimers

### 3. Health Tracking Dashboard
- Interactive charts for health metrics visualization
- Track multiple health parameters:
  - Heart rate monitoring
  - Blood pressure (systolic/diastolic)
  - Weight tracking
  - Daily step count
  - Sleep duration
- Historical data visualization with Recharts
- Persistent data storage using Zustand

### 4. Symptom Checker
- Add multiple symptoms with severity levels (mild, moderate, severe)
- Specify symptom duration
- AI-powered symptom analysis
- Educational health recommendations
- Clear medical disclaimers

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas) recommended)
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))
- OAuth credentials (optional - for Google/GitHub sign-in)

### Installation

1. **Clone the repository** (or use your existing project)

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```bash
# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/medical-chatbot

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

You can use the `env.example` file as a template.

**For detailed authentication setup, see [AUTH_SETUP.md](./AUTH_SETUP.md)**

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: NextAuth.js v5
- **Database**: MongoDB with Mongoose
- **AI**: Google Gemini AI
- **State Management**: Zustand
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Project Structure

```
medicine-chatbot/
├── app/
│   ├── api/
│   │   ├── chat/route.ts          # Chat API endpoint
│   │   └── symptom-check/route.ts # Symptom analysis endpoint
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page with tabs
├── components/
│   ├── ChatInterface.tsx           # Chat UI component
│   ├── HealthDashboard.tsx         # Health metrics dashboard
│   └── SymptomChecker.tsx          # Symptom checker UI
├── store/
│   ├── chatStore.ts                # Chat state management
│   └── healthStore.ts              # Health data state management
├── types/
│   └── index.ts                    # TypeScript type definitions
├── lib/
│   └── utils.ts                    # Utility functions
└── public/                         # Static assets
```

## Usage

### Chat Interface
1. Navigate to the "Chat" tab
2. Type your health-related question
3. Press Enter or click Send
4. The AI assistant will provide helpful information

### Health Tracking
1. Navigate to the "Health Tracking" tab
2. View your health metrics in interactive charts
3. Monitor trends over time
4. Sample data is pre-loaded for demonstration

### Symptom Checker
1. Navigate to the "Symptom Checker" tab
2. Add symptoms with severity and duration
3. Click "Analyze Symptoms" for AI-powered insights
4. Review recommendations and when to seek medical attention

## Important Disclaimers

- This application is for **educational purposes only**
- It is **NOT a replacement** for professional medical advice
- Always consult healthcare professionals for:
  - Proper diagnosis
  - Treatment plans
  - Medication prescriptions
  - Medical emergencies
- For serious symptoms or emergencies, seek immediate medical attention

## Privacy & Security

- No user data is stored on external servers
- Health metrics are stored locally in browser storage
- Chat history is maintained in-memory during the session
- API calls are made securely to Google Gemini AI

## Future Enhancements

- [ ] Actual audio recording and transcription
- [ ] User authentication and cloud data sync
- [ ] Medication reminders
- [ ] Appointment scheduling
- [ ] Integration with wearable devices
- [ ] Multi-language support
- [ ] Export health reports as PDF
- [ ] Doctor consultation booking

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome!

## Support

For support, please open an issue in the repository.

---

**Built with using Next.js and Google Gemini AI**
