# Authentication Setup Guide

This guide will walk you through setting up authentication for the Medical Chatbot application.

## Prerequisites

Before starting, make sure you have:
- Node.js 18+ installed
- A MongoDB database (MongoDB Atlas recommended)
- Google Cloud Console account (for Google OAuth - optional)
- GitHub account (for GitHub OAuth - optional)

---

## Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- `next-auth` - Authentication for Next.js
- `mongoose` - MongoDB object modeling
- `bcryptjs` - Password hashing
- `@auth/mongodb-adapter` - MongoDB adapter for NextAuth

---

## Set Up MongoDB

### Option A: MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier available)
4. Click "Connect" and choose "Connect your application"
5. Copy the connection string

### Option B: Local MongoDB

If you have MongoDB installed locally:
```
mongodb://localhost:27017/medical-chatbot
```

---

## Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/medical-chatbot?retryWrites=true&w=majority

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

### Generate NextAuth Secret

Run this command to generate a secure secret:

**Windows (PowerShell):**
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Mac/Linux:**
```bash
openssl rand -base64 32
```

---

## Set Up OAuth Providers (Optional)

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure OAuth consent screen
6. Add authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
7. Copy Client ID and Client Secret to `.env.local`

### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: Medical Chatbot
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env.local`

---

## Test the Authentication

### Start the Development Server

```bash
npm run dev
```

### Test Credentials Authentication

1. Navigate to `http://localhost:3000`
2. You should be redirected to `/auth/signin`
3. Click "Sign up" to create a new account
4. Fill in:
   - Full Name
   - Email
   - Password (minimum 6 characters)
5. Click "Sign Up"
6. You'll be automatically signed in and redirected to the dashboard

### Test OAuth Authentication (if configured)

1. Go to `/auth/signin`
2. Click "Google" or "GitHub" button
3. Authorize the application
4. You'll be redirected back and signed in

---

## Authentication Features

### mplemented Features

1. **Email/Password Authentication**
   - User registration with validation
   - Secure password hashing with bcrypt
   - Login with credentials

2. **OAuth Authentication**
   - Google Sign-In
   - GitHub Sign-In
   - Automatic user creation on first OAuth login

3. **Session Management**
   - JWT-based sessions
   - Secure session storage
   - Automatic session refresh

4. **Route Protection**
   - Middleware-based authentication
   - Automatic redirect to sign-in for unauthenticated users
   - Redirect authenticated users away from auth pages

5. **User Interface**
   - Beautiful sign-in/sign-up forms
   - User menu with profile display
   - Sign-out functionality

---

## Authentication File Structure

```
medicine-chatbot/
├── auth.ts                          # NextAuth configuration
├── auth.config.ts                   # Auth providers & callbacks
├── middleware.ts                    # Route protection
│
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── [...nextauth]/route.ts  # NextAuth API route
│   │       └── signup/route.ts         # User registration
│   └── auth/
│       ├── signin/page.tsx          # Sign-in page
│       └── signup/page.tsx          # Sign-up page
│
├── components/
│   ├── AuthForm.tsx                 # Authentication form
│   ├── SessionProvider.tsx          # Session context provider
│   └── UserMenu.tsx                 # User menu component
│
├── models/
│   └── User.ts                      # User MongoDB model
│
├── lib/
│   └── mongodb.ts                   # MongoDB connection
│
└── types/
    └── next-auth.d.ts              # NextAuth TypeScript types
```

---

## Troubleshooting

### Issue: "MONGODB_URI is not defined"
**Solution**: Make sure you created `.env.local` and added the MongoDB connection string.

### Issue: "Invalid credentials"
**Solution**: 
- Check that the email and password are correct
- Ensure the user exists in the database
- For OAuth, make sure the provider is configured correctly

### Issue: OAuth redirect error
**Solution**:
- Verify the callback URLs in Google/GitHub settings
- Make sure they match exactly: `http://localhost:3000/api/auth/callback/[provider]`

### Issue: Session not persisting
**Solution**:
- Check that NEXTAUTH_SECRET is set in `.env.local`
- Clear browser cookies and try again

### Issue: TypeScript errors
**Solution**: Run `npm install` to ensure all dependencies are installed.

---

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use strong secrets** - Generate with crypto.randomBytes
3. **HTTPS in production** - Always use HTTPS for production
4. **Validate user input** - Already implemented in signup route
5. **Rate limiting** - Consider adding rate limiting for auth endpoints

---

## Next Steps

Now that authentication is set up, you can:

1. **Customize the user profile**
   - Add more user fields
   - Create a profile page
   - Add profile picture upload

2. **Add user-specific features**
   - Save chat history per user
   - Store health metrics per user
   - Personal symptom history

3. **Implement email verification**
   - Send verification emails
   - Verify email before full access

4. **Add password reset**
   - Forgot password flow
   - Email-based password reset

---

## Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Next.js Authentication](https://nextjs.org/docs/authentication)

---

**Authentication is now fully set up! Users can sign up, sign in, and access the Medical Chatbot securely.**
