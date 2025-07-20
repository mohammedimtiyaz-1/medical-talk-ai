# AI Medical Voice Agent

An AI-powered medical voice assistant that allows users to have real-time voice conversations with specialized AI doctors, generate medical consultation reports, and manage their health sessions.

## 🚀 Features

- **Voice Conversations**: Real-time voice interactions with AI medical specialists
- **Multiple Specialists**: Choose from 10+ medical AI agents (General Physician, Cardiologist, Dermatologist, etc.)
- **Medical Reports**: Automated generation of structured consultation reports
- **Session Management**: Track and review past medical conversations
- **User Authentication**: Secure login/signup with Clerk
- **Credits System**: Manage usage with a credit-based system

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.3.3** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library (Radix UI primitives)
- **Lucide React** - Icon library
- **Motion** - Animation library
- **Sonner** - Toast notifications

### Backend & APIs

- **Next.js API Routes** - Server-side API endpoints
- **OpenAI API** (via OpenRouter) - AI model integration
- **Vapi AI** - Voice AI platform for real-time voice conversations
- **Clerk** - Authentication and user management

### Database

- **PostgreSQL** - Primary database
- **Neon** - Serverless PostgreSQL hosting
- **Drizzle ORM** - Type-safe database queries and migrations

### Development Tools

- **Drizzle Kit** - Database migration and schema management
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 🏗️ Architecture Overview

### Project Structure

```
medical-talk-with-ai/
├── app/
│   ├── (auth)/ - Authentication pages
│   ├── (routes)/ - Protected application routes
│   │   ├── dashboard/ - Main dashboard
│   │   ├── medical-agent/[sessionId]/ - Voice conversation interface
│   │   ├── history/ - Session history
│   │   └── billing/ - Subscription management
│   ├── api/ - Backend API endpoints
│   └── _components/ - Shared UI components
├── components/ - Reusable UI components
├── config/ - Database and AI configurations
├── context/ - React context providers
├── data/ - Static data (doctor agents)
└── lib/ - Utility functions
```

### Data Flow

1. **User Authentication**: Clerk handles login/signup → User data stored in PostgreSQL
2. **Session Creation**: User selects doctor agent → Creates session in database
3. **Voice Conversation**: Vapi AI manages real-time voice interaction → OpenAI processes conversation
4. **Report Generation**: Conversation data sent to OpenAI → Structured medical report generated
5. **Data Storage**: All session data, reports, and user info stored in PostgreSQL

### API Endpoints

- `/api/users` - User management (create/get user)
- `/api/session-chat` - Session management (create/get sessions)
- `/api/medical-report` - Generate medical consultation reports
- `/api/suggest-doctors` - Get available AI doctor agents

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+**
- **npm/yarn/pnpm**
- **PostgreSQL database** (Neon recommended for serverless hosting)
- **API keys** for external services

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# AI Services
OPEN_ROUTER_API_KEY="your_openrouter_api_key"
NEXT_PUBLIC_VAPI_API_KEY="your_vapi_api_key"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_PAID_USER_KEY="your_clerk_paid_user_key"
```

### Getting API Keys

1. **OpenRouter API Key**: Sign up at [OpenRouter](https://openrouter.ai/) to get access to OpenAI models
2. **Vapi API Key**: Sign up at [Vapi](https://vapi.ai/) for voice AI capabilities
3. **Clerk Keys**: Create an account at [Clerk](https://clerk.com/) for authentication
4. **Database URL**: Use [Neon](https://neon.tech/) for serverless PostgreSQL hosting

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd medical-talk-with-ai
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Database

```bash
# Generate Drizzle schema (if needed)
npm run db:generate

# Run database migrations
npm run db:migrate
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate Drizzle schema
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Drizzle Studio
```

## 🏥 Available AI Medical Specialists

The application includes 10+ AI medical specialists:

1. **General Physician** - Everyday health concerns and common symptoms
2. **Pediatrician** - Children's health from babies to teens
3. **Dermatologist** - Skin issues like rashes, acne, or infections
4. **Psychologist** - Mental health and emotional well-being
5. **Nutritionist** - Healthy eating and weight management
6. **Cardiologist** - Heart health and blood pressure issues
7. **ENT Specialist** - Ear, nose, and throat-related problems
8. **Orthopedic** - Bone, joint, and muscle pain
9. **Gynecologist** - Women's reproductive and hormonal health
10. **Dentist** - Oral hygiene and dental problems

## 🔒 Security & Privacy

- **Authentication**: Secure user authentication with Clerk
- **Route Protection**: Middleware-based route protection
- **Database Security**: Type-safe database operations with Drizzle ORM
- **API Security**: Protected API endpoints with authentication
- **Data Privacy**: User data is isolated and protected

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test

# Run tests in watch mode
npm run test:watch
```

## 📊 Database Schema

### Users Table

```sql
users (
  id: integer (primary key)
  name: varchar(255)
  email: varchar(255) (unique)
  credits: integer
)
```

### Session Chat Table

```sql
sessionChatTable (
  id: integer (primary key)
  sessionId: varchar
  notes: text
  selectedDoctor: json
  conversation: json
  report: json
  createdBy: varchar (references users.email)
  createdOn: varchar
)
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

**Note**: This application is for educational and demonstration purposes. It should not be used as a replacement for professional medical advice. Always consult with qualified healthcare professionals for medical concerns.
