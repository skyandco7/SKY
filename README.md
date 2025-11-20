# 🚀 SKY - Vibe Coders

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/sky-vibe-coders)

## 💙 About SKY

**SKY** - *Sarthak, Krushna, Yash* - We're three college students who turned our passion for coding into a startup that delivers premium AI-powered web solutions.

Built by vibe coders, powered by cutting-edge AI technologies, we create functional, scalable websites that don't just look good – they perform exceptionally.

---

## ✨ Features

- 🎨 **Cyberpunk Dark Theme** - Stunning neon-lit UI with glassmorphism effects
- ⚡ **Lightning Fast** - Optimized performance with smooth animations powered by Framer Motion
- 📱 **Fully Responsive** - Perfect on all devices from mobile to desktop
- 🤖 **AI-Powered** - Showcasing our premium AI technology capabilities
- 🎭 **Interactive Animations** - Matrix rain, glitch effects, typing animations
- ⚛️ **Modern Stack** - React 18 + Vite for blazing fast development and production builds
- 🎨 **Component-Based Architecture** - Reusable, maintainable React components
- 🎯 **Custom Hooks** - useInView, useCountUp for advanced functionality

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher) installed on your machine
- Git installed
- GitHub account
- Vercel account (free tier works great!)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/sky-vibe-coders.git
   cd sky-vibe-coders
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install:
   - React 18.3.1
   - Vite 5.3.4
   - Framer Motion 11.5.4
   - React Icons 5.3.0

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will automatically open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   
   This creates an optimized production build in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📦 Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

Vercel offers the easiest deployment with automatic HTTPS and global CDN.

#### Method A: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SKY website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sky-vibe-coders.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live 🎉

#### Method B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   
3. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **sky-vibe-coders**
   - In which directory is your code located? **./**
   
4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy to GitHub Pages

1. **Push to GitHub** (same as above)

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch
   - Branch: main / root
   - Click "Save"

3. **Access your site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/sky-vibe-coders/`

### Option 3: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Click "Deploy site"

---

## 🛠️ Customization

### Update Team Information

Edit the team member details in `index.html`:

```html
<!-- Find the team section and update -->
<h3 class="member-name">YOUR_NAME</h3>
<p class="member-role">YOUR_ROLE</p>
<p class="member-bio">Your bio here...</p>
```

### Change Colors

Modify the color scheme in `src/index.css`:

```css
:root {
    --neon-blue: #00f3ff;      /* Primary neon color */
    --neon-pink: #ff006e;      /* Accent color */
    --neon-purple: #8338ec;    /* Secondary color */
    --neon-green: #06ffa5;     /* Success color */
}
```

### Update Contact Information

Edit contact details in `src/components/Contact/Contact.jsx`:

```jsx
const contactItems = [
  {
    title: 'Email',
    content: <a href="mailto:YOUR_EMAIL">your.email@example.com</a>
  },
  // ... more items
]
```

### Modify Typing Effect Text

Change the phrases in `src/components/Hero/Hero.jsx`:

```javascript
const phrases = [
    "YOUR CUSTOM TEXT HERE",
    "ANOTHER PHRASE",
    "ADD MORE AS NEEDED"
]
```

### Edit Team Members

Update team information in `src/components/Team/Team.jsx`:

```jsx
const teamMembers = [
  {
    name: 'YOUR_NAME',
    letter: 'Y',
    role: 'YOUR_ROLE',
    bio: 'Your bio...',
    skills: ['Skill1', 'Skill2']
  }
]
```

---

## 📁 Project Structure

```
sky-vibe-coders/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar/          # Navigation component
│   │   ├── Hero/            # Hero section with typing effect
│   │   ├── About/           # About section with code window
│   │   ├── Team/            # Team member cards
│   │   ├── Services/        # Services grid
│   │   ├── Contact/         # Contact form
│   │   ├── Footer/          # Footer component
│   │   └── MatrixRain/      # Animated background
│   ├── hooks/               # Custom React hooks
│   │   ├── useInView.js     # Intersection observer hook
│   │   └── useCountUp.js    # Counter animation hook
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   └── App.css              # App-specific styles
├── public/                  # Static assets
├── index_react.html         # HTML template for React
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── README.md                # This file
└── .gitignore              # Git ignore rules
```

---

## 🎨 Features Breakdown

### Animations
- ✨ Matrix rain background effect
- 🎭 Glitch text effect on hero title
- ⌨️ Auto-typing text animation
- 📊 Animated counters
- 🎪 Card tilt effects on hover
- 🌊 Smooth scroll with parallax

### Sections
- 🏠 **Hero** - Eye-catching landing with animated stats
- 📖 **About** - Company story with code window display
- 👥 **Team** - Interactive team member cards
- 💼 **Services** - Comprehensive service offerings
- 📧 **Contact** - Functional contact form
- 🦶 **Footer** - Links and information

### Technologies Showcased
- **React 18** - Latest React with concurrent features
- **Vite** - Next-generation frontend tooling
- **Framer Motion** - Production-ready motion library
- **React Icons** - Popular icon library
- **CSS Grid & Flexbox** - Modern layouts
- **CSS Custom Properties** - Themeable design system
- **Intersection Observer API** - Scroll animations
- **Canvas API** - Matrix rain effect
- **Custom React Hooks** - Reusable logic
- **Modern ES6+ JavaScript** - Latest language features

---

## 🔗 Connect with SKY

- **LinkedIn:** [Add your LinkedIn]
- **GitHub:** [Add your GitHub]
- **Twitter:** [Add your Twitter]
- **Email:** hello@skyvibecoders.com

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

We're always open to collaboration! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💡 Tips for LinkedIn

When sharing on LinkedIn:

1. **Create a post with:**
   - Screenshot/GIF of the website
   - Brief description of the project
   - Tech stack used
   - Link to live site and GitHub repo

2. **Sample LinkedIn Post:**
   ```
   🚀 Excited to share our latest project - SKY Website!
   
   Built by three college students (Sarthak, Krushna & Yash), we created 
   this cyberpunk-themed promotional site showcasing our AI-powered web 
   development services.
   
   ✨ Features:
   • Dark cyberpunk theme with neon effects
   • Fully responsive design
   • Interactive animations (Matrix rain, glitch effects)
   • Pure HTML/CSS/JavaScript - no frameworks!
   
   🔗 Live Demo: [Your Vercel URL]
   💻 GitHub: [Your GitHub URL]
   
   #WebDevelopment #Coding #AI #StartupJourney #TechStudent
   ```

3. **Use relevant hashtags:**
   - #WebDevelopment
   - #FullStackDeveloper
   - #AI #MachineLearning
   - #CollegeStartup
   - #CodingLife
   - #TechInnovation

---

## 🎯 Roadmap

Future enhancements we're planning:

- [ ] Backend API integration
- [ ] Blog section
- [ ] Portfolio showcase
- [ ] Client testimonials
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced 3D effects

---

## 🙏 Acknowledgments

- Google Fonts for Orbitron & Rajdhani
- Inspiration from cyberpunk aesthetics
- The amazing developer community

---

## 📞 Support

Need help? Have questions?

- 📧 Email: hello@skyvibecoders.com
- 💬 Open an issue on GitHub
- 🐦 DM us on Twitter

---

<div align="center">

**Built with 💙 by SKY - Vibe Coders**

*Transforming ideas into digital reality*

⭐ Star this repo if you like it! ⭐

</div>
#   S K Y  
 