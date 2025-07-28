# 🚀 React Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and seamless user experience across all devices.

![Portfolio Preview](https://samsulalomlaskar.github.io/portfolio/)

## ✨ Features

- **🎨 Modern Design** - Clean, professional UI with smooth animations
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🌙 Dark/Light Mode** - Toggle between themes with smooth transitions
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **📧 Contact Form** - Integrated with EmailJS for seamless communication
- **🎯 Interactive Sections** - Hero, About, Skills, Projects, Experience, Resume, Contact
- **🔄 State Management** - Redux Toolkit for efficient state handling
- **📄 Resume Viewer** - Built-in PDF viewer and download functionality

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Icons:** Lucide React, React Icons
- **Email Service:** EmailJS
- **Build Tool:** Vite
- **Deployment:** Vercel/Netlify Ready

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/samsulalomlasakr/portfolio.git
   cd react-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env
   \`\`\`
   
   Update `.env` with your EmailJS credentials:
   \`\`\`env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   \`\`\`

4. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── sections/       # Page sections (Hero, About, etc.)
│   ├── ui/            # UI components (Skeletons, Transitions)
│   └── Navigation.tsx  # Main navigation component
├── store/              # Redux store configuration
│   └── slices/        # Redux slices
├── services/          # External services (EmailJS)
├── lib/               # Utility functions
└── App.tsx            # Main application component
\`\`\`

## 🎨 Customization

### Personal Information
Update your details in the following files:
- `src/components/sections/Hero.tsx` - Name, title, description
- `src/components/sections/About.tsx` - Bio, location, interests
- `src/components/sections/Skills.tsx` - Technical skills and proficiency
- `src/components/sections/Projects.tsx` - Portfolio projects
- `src/components/sections/Experience.tsx` - Work experience

### Resume
Place your resume PDF in `public/resume.pdf` or update the path in `src/components/sections/Resume.tsx`

### Styling
- Colors and themes: `tailwind.config.js`
- Global styles: `src/index.css`
- Component-specific styles: Individual component files

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update your `.env` file with these credentials


### Manual Deployment
npm run build
# Upload the 'dist' folder to your hosting provider


## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Lucide React](https://lucide.dev/) - Icon Library
- [EmailJS](https://www.emailjs.com/) - Email Service
- [Vercel](https://vercel.com/) - Deployment Platform

## 📞 Contact

**Samsul Alom Laskar** - [itsmesamsulalom@gmail.com](mailto:itsmesamsulalom@gmail.com)

Project Link: [https://github.com/samsulalomlaskar/portfolio](https://github.com/samsulalomlaskar/portfolio)

Live Demo: [https://samsulalomlaskar.github.io/portfolio/](https://samsulalomlaskar.github.io/portfolio/)

---

⭐ **Star this repository if you found it helpful!**
