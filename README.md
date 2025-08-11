# Vlad Tsigler - Personal Site

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. Features analytics projects, AI demos, and professional information.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark mode support
- **Responsive**: Mobile-first approach with responsive navigation
- **Performance**: Optimized with Next.js 15 and modern build tools
- **SEO**: Comprehensive metadata and Open Graph tags
- **Analytics**: Google Tag Manager integration for tracking
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Google Tag Manager
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── projects/          # Analytics projects showcase
│   ├── apps/              # AI applications demos
│   ├── resume/            # Professional resume
│   └── privacy/           # Privacy policy
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── site-header.tsx   # Navigation header
│   ├── Gtm.tsx          # Google Tag Manager
│   └── RouteChangeTracker.tsx # Analytics tracking
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## 🎨 Pages

### Homepage (`/`)
- Hero section with introduction
- Quick links to projects and apps
- Skills showcase
- Contact information

### Projects (`/projects`)
- Analytics and data science projects
- Technology stack badges
- GitHub links and demos
- Featured project highlighting

### AI Apps (`/apps`)
- Interactive AI demos and tools
- Status indicators (Live, Beta, Development)
- Feature lists and descriptions
- Demo links and documentation

### Resume (`/resume`)
- Professional experience timeline
- Education and certifications
- Skills organized by category
- Downloadable PDF version

### Privacy (`/privacy`)
- Comprehensive privacy policy
- GDPR compliance information
- Contact details for data requests

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tsiglev74/personal-site.git
cd personal-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Add your Google Tag Manager ID:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Next.js Config
- React Strict Mode enabled
- Image optimization with WebP/AVIF support
- Security headers
- SEO redirects

### Tailwind CSS
- Custom color scheme
- Responsive breakpoints
- Dark mode support
- Component-based design system

## 📊 Analytics

The site includes Google Tag Manager for:
- Page view tracking
- User behavior analysis
- Performance monitoring
- Custom event tracking

## 🎯 SEO Features

- Meta tags for all pages
- Open Graph and Twitter cards
- Structured data markup
- Sitemap generation
- Robots.txt configuration

## 🔒 Privacy & Security

- Privacy policy page
- Cookie consent management
- Data minimization practices
- Secure headers configuration
- HTTPS enforcement

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: contact@example.com
- **GitHub**: [@tsiglev74](https://github.com/tsiglev74)
- **LinkedIn**: [Vlad Tsigler](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
