# Medical Chatbot - Quick Setup Guide

Follow these steps to get your Medical Chatbot up and running!

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 16
- Google Gemini AI SDK
- Zustand (state management)
- Recharts (data visualization)
- Lucide React (icons)
- Tailwind CSS 4
- And more...

## Step 2: Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

## Step 3: Configure Environment Variables

1. Create a new file named `.env.local` in the root directory
2. Add your API key:

```
GEMINI_API_KEY=your_actual_api_key_here
```

**Important**: Replace `your_actual_api_key_here` with your real API key from Step 2.

## Step 4: Run the Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 16.0.1
- Local:        http://localhost:3000
- Ready in 2.5s
```

## Step 5: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

## You're Ready!

You should now see the Medical Chatbot interface with three tabs:

### Chat Tab
- Ask health-related questions
- Get AI-powered responses from Gemini
- View chat history

### Health Tracking Tab
- View sample health metrics
- Interactive charts for:
  - Heart rate
  - Blood pressure
  - Weight
  - Steps
  - Sleep duration

### Symptom Checker Tab
- Add symptoms with severity levels
- Get AI-powered symptom analysis
- Receive health recommendations

## Troubleshooting

### Issue: "API key not configured" error
**Solution**: Make sure your `.env.local` file exists and contains the correct API key.

### Issue: Dependencies not installing
**Solution**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

### Issue: Port 3000 already in use
**Solution**: Either stop the other process using port 3000, or run on a different port:
```bash
npm run dev -- -p 3001
```

### Issue: TypeScript errors
**Solution**: These will resolve after running `npm install`. If they persist, try:
```bash
npm run build
```

## Next Steps

1. **Test the Chat**: Ask a health question like "What are the symptoms of flu?"
2. **Explore Health Dashboard**: Check out the interactive charts
3. **Try Symptom Checker**: Add a few symptoms and get analysis
4. **Customize**: Modify the code to add your own features!

## Security Reminder

- Never commit your `.env.local` file to version control
- Keep your API key private
- The `.gitignore` file already excludes `.env.local`

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Google Gemini AI Documentation](https://ai.google.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/)

---

**Need help?** Check the main README.md or open an issue in the repository.
