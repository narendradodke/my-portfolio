# Narendra Dodke - Personal Portfolio Website

A modern, responsive, and performance-optimized personal portfolio built using **React 19**, **Vite**, and **CSS3**. Highlights software projects, mini-apps, technical skills, certificates, and an interactive timeline.

![Portfolio Preview](/public/portfolio.png)

---

## 🚀 Features

- **⚡ Lightning-Fast Performance**: Built on Vite with code-splitting (`React.lazy` + `Suspense`) for optimal bundle sizes and fast initial loads.
- **🎨 Dark & Light Theme**: Toggle seamlessly between dark and light modes with custom CSS design tokens.
- **📱 Fully Responsive**: Tailored grid and flex layouts built to adapt from 320px mobile screens to large desktop monitors.
- **💎 Interactive Modals & Filters**: Filter skills by domain, inspect detailed project modals, and search mini-projects dynamically.
- **♿ Accessibility & SEO Compliant**: Formatted semantic HTML elements (`h1` → `h3`), `aria-label` attributes on icon links, and `loading="lazy"` on media assets.
- **✉️ Direct Email Integration**: Built-in contact form powered by `@emailjs/browser`.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, JavaScript (ES6+)
- **Build Tooling & Bundler**: Vite 8
- **Icons & Visuals**: `react-icons`, `react-type-animation`
- **Email Service**: EmailJS
- **Linting & Code Quality**: ESLint 10 with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

---

## 📁 Project Structure

```text
my-portfolio/
├── public/                # Static assets (images, icons, resume.pdf)
├── src/
│   ├── assets/            # Component media assets
│   ├── components/        # Section components
│   │   ├── MiniProjects/  # Mini-projects section & modal
│   │   ├── About.jsx      # Split profile card & highlight cards
│   │   ├── Hero.jsx       # Hero header & social links
│   │   ├── Projects.jsx   # Featured projects section
│   │   ├── Skills.jsx     # Tabbed skill showcase
│   │   ├── Timeline.jsx   # Experience timeline
│   │   └── Contact.jsx    # EmailJS contact form
│   ├── data/              # Portfolio project data records
│   ├── useScrollAnimation.js # Scroll observer custom hook
│   ├── App.jsx            # Root application component
│   └── App.css            # Global CSS styles & design tokens
└── package.json
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/narendradodke/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Run linter checks:
   ```bash
   npm run lint
   ```

---

## 🌐 Live Demo

- **Live URL**: [https://my-portfolio-ecru-mu-86.vercel.app/](https://my-portfolio-ecru-mu-86.vercel.app/)
- **GitHub Repository**: [https://github.com/narendradodke/my-portfolio](https://github.com/narendradodke/my-portfolio)
