# ⚡ Quick Start Checklist

Follow this checklist to get your Medical Chatbot up and running quickly!

## ✅ Step-by-Step Setup

### 1. Install Dependencies
```bash
npm install
```
**Status:** ⬜ Not started | ✅ Completed

---

### 2. Set Up MongoDB

**Choose one option:**

#### Option A: MongoDB Atlas (Recommended - Free)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create account / Sign in
3. Create a free cluster
4. Click "Connect" → "Connect your application"
5. Copy connection string

#### Option B: Local MongoDB
Use: `mongodb://localhost:27017/medical-chatbot`

**Status:** ⬜ Not started | ✅ Completed

---

### 3. Get Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with Google
3. Click "Create API Key"
4. Copy the key

**Status:** ⬜ Not started | ✅ Completed

---

### 4. Generate NextAuth Secret

**Windows (PowerShell):**
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Mac/Linux:**
```bash
openssl rand -base64 32
```

Copy the generated secret.

**Status:** ⬜ Not started | ✅ Completed

---

### 5. Create `.env.local` File

Create a file named `.env.local` in the root directory:

```bash
# Google Gemini API Key
GEMINI_API_KEY=paste_your_gemini_key_here

# MongoDB Connection
MONGODB_URI=paste_your_mongodb_connection_string_here

# NextAuth Configuration
NEXTAUTH_SECRET=paste_your_generated_secret_here
NEXTAUTH_URL=http://localhost:3000
```

**Status:** ⬜ Not started | ✅ Completed

---

### 6. (Optional) Set Up OAuth

#### Google OAuth
1. [Google Cloud Console](https://console.cloud.google.com/)
2. Create project → Enable Google+ API
3. Create OAuth 2.0 Client ID
4. Add redirect: `http://localhost:3000/api/auth/callback/google`
5. Add to `.env.local`:
```bash
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

#### GitHub OAuth
1. [GitHub Developer Settings](https://github.com/settings/developers)
2. New OAuth App
3. Callback URL: `http://localhost:3000/api/auth/callback/github`
4. Add to `.env.local`:
```bash
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

**Status:** ⬜ Skipped | ⬜ Not started | ✅ Completed

---

### 7. Start Development Server
```bash
npm run dev
```

You should see:
```
▲ Next.js 16.0.1
- Local:        http://localhost:3000
- Ready in 2.5s
```

**Status:** ⬜ Not started | ✅ Completed

---

### 8. Test the Application

1. Open browser: `http://localhost:3000`
2. You'll be redirected to `/auth/signin`
3. Click "Sign up"
4. Create an account:
   - Name: Test User
   - Email: test@example.com
   - Password: test123
5. Click "Sign Up"
6. You should be signed in and see the dashboard

**Status:** ⬜ Not started | ✅ Completed

---

## 🎉 You're All Set!

If all steps are completed, you now have:
- ✅ Working authentication system
- ✅ AI-powered chat with Gemini
- ✅ Health tracking dashboard
- ✅ Symptom checker

---

## 🐛 Troubleshooting

### Issue: Dependencies not installing
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
npm install
```

### Issue: "MONGODB_URI is not defined"
- Check that `.env.local` exists in root directory
- Verify the variable name is exactly `MONGODB_URI`
- Restart the dev server after creating `.env.local`

### Issue: "Invalid credentials"
- Make sure you created an account first
- Check email and password are correct
- Try signing up again with a different email

### Issue: OAuth not working
- Verify callback URLs match exactly
- Check client ID and secret are correct
- Make sure OAuth is enabled in provider settings

### Issue: Port 3000 already in use
```bash
# Run on different port
npm run dev -- -p 3001
```

---

## 📚 Documentation

- **Main README**: [README.md](./README.md)
- **Authentication Setup**: [AUTH_SETUP.md](./AUTH_SETUP.md)
- **Setup Guide**: [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Features**: [FEATURES.md](./FEATURES.md)

---

## 💡 Tips

1. **Use MongoDB Atlas free tier** - No credit card required
2. **OAuth is optional** - Email/password works without it
3. **Keep `.env.local` secret** - Never commit to Git
4. **Test with different browsers** - Ensure compatibility

---

## 🚀 What's Next?

After setup, you can:
1. **Explore the chat** - Ask health questions
2. **Check health dashboard** - View sample metrics
3. **Try symptom checker** - Add symptoms and get analysis
4. **Customize the app** - Modify code to your needs

---

**Need help?** Check the detailed guides or open an issue!

**Happy coding! 🎉**
