# Jacob Tech Info Blog

A modern, production-ready blog platform built with Next.js 15, React 19, and Turso (SQLite). Designed for web development agencies and tech companies to share insights, tutorials, and industry updates.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Frontend:** [React 19](https://react.dev/)
- **Database:** [Turso](https://turso.tech/) (SQLite with edge support) via Prisma
- **Authentication:** [Auth.js v5](https://authjs.dev/) (Next-Auth) with Google & GitHub OAuth
- **Storage:** Firebase Storage for images
- **Styling:** CSS Modules with dark/light theme support
- **Validation:** Zod for input sanitization

## Features

- **Modern Auth:** Google & GitHub OAuth with secure session management
- **Content Management:** Rich text editor for posts, categories, comments
- **SEO Optimized:** Dynamic sitemap, robots.txt, Open Graph, structured metadata
- **Legal Compliance:** Privacy Policy, Terms of Service, Cookie Policy, Disclaimer pages
- **Security:** Input validation, security headers, XSS protection
- **Dark/Light Theme:** Full theme support with system preference detection
- **Responsive Design:** Mobile-first approach

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Turso account (or SQLite for local dev)
- Google Cloud Console account (for OAuth)
- GitHub account (for OAuth)
- Firebase project (for image storage)

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd jacob-tech-info-blog
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Turso Database (Production)
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-turso-token

# Or SQLite (Local Development)
# DATABASE_URL="file:./dev.db"

# Auth.js Secret (generate with: openssl rand -base64 32)
AUTH_SECRET=your-secret-key

# Google OAuth
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

# Firebase
FIREBASE=your-firebase-api-key
```

### 3. Database Setup

#### Option A: Turso (Production)

1. Install Turso CLI: `curl -sSfL https://get.tur.so/install.sh | bash`
2. Login: `turso auth login`
3. Create database: `turso db create jacob-tech-info`
4. Get connection URL: `turso db show jacob-tech-info`
5. Get auth token: `turso db tokens create jacob-tech-info`

#### Option B: SQLite (Local Development)

```bash
# No setup needed, file will be created automatically
```

### 4. Generate Prisma Client & Push Schema

```bash
npm run db:generate
npm run db:push
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## OAuth Configuration

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Configure consent screen:
   - User Type: External
   - App name: "Jacob Tech Info"
   - User support email: your-email
   - Developer contact: your-email
6. Add authorized domains: `localhost`, `jacobtechinfo.com`
7. Create OAuth client ID:
   - Application type: Web application
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
8. Copy Client ID and Secret to `.env.local`

### GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Application name: "Jacob Tech Info"
4. Homepage URL: `http://localhost:3000`
5. Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
6. Register application
7. Generate a new client secret
8. Copy Client ID and Secret to `.env.local`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel Dashboard
4. Deploy!

#### Vercel Environment Variables

```
NEXT_PUBLIC_BASE_URL=https://jacobtechinfo.com
TURSO_DATABASE_URL=libsql://your-db.turso.io
TURSO_AUTH_TOKEN=your-token
AUTH_SECRET=your-secret
GOOGLE_ID=your-google-id
GOOGLE_SECRET=your-google-secret
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret
FIREBASE=your-firebase-key
```

### Update OAuth Redirect URIs for Production

Don't forget to update your OAuth app redirect URIs:
- Google: `https://jacobtechinfo.com/api/auth/callback/google`
- GitHub: `https://jacobtechinfo.com/api/auth/callback/github`

## Database Commands

```bash
# Generate Prisma Client
npm run db:generate

# Push schema changes
npm run db:push

# Open Prisma Studio
npm run db:studio
```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # API Routes
│   │   ├── blog/            # Blog listing page
│   │   ├── posts/           # Individual post pages
│   │   ├── write/           # Create post page
│   │   ├── login/           # Login page
│   │   ├── privacy/         # Privacy Policy
│   │   ├── terms/           # Terms of Service
│   │   ├── cookies/         # Cookie Policy
│   │   ├── disclaimer/      # Disclaimer
│   │   ├── sitemap.xml/     # Dynamic sitemap
│   │   ├── layout.js        # Root layout
│   │   └── page.jsx         # Home page
│   ├── components/          # React components
│   ├── context/             # React context
│   ├── providers/           # Auth & Theme providers
│   └── utils/               # Utilities (auth, db, firebase)
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
└── .env.example             # Environment template
```

## Security Features

- **Input Validation:** Zod schemas for all API inputs
- **XSS Protection:** Security headers via Next.js config
- **CSRF Protection:** Built into Auth.js
- **Secure Headers:** X-Frame-Options, X-Content-Type-Options, etc.
- **Rate Limiting:** Recommended to add Vercel Edge Config for production

## Legal Pages

The following compliance pages are included:
- `/privacy` - Privacy Policy (GDPR/CCPA compliant)
- `/terms` - Terms of Service
- `/cookies` - Cookie Policy
- `/disclaimer` - Content Disclaimer

## SEO Features

- Dynamic sitemap generation at `/sitemap.xml`
- Robots.txt with crawl directives
- Open Graph and Twitter card metadata
- Structured JSON-LD schema ready
- Canonical URLs
- Semantic HTML

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please contact:
- Email: support@jacobtechinfo.com
- Website: https://jacobtechinfo.com

---

Built with by Jacob Tech Info
