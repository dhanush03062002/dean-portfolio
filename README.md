# Dean — Premium Website Design Portfolio (React.js)

An exact, pixel-accurate clone and end-to-end recreation of the **Dean** Framer website ([aboutdean.framer.website](https://aboutdean.framer.website/)).

Built with **React 18**, **Tailwind CSS**, and **Framer Motion**, featuring modern brutalist/editorial grid aesthetics, fluid physics micro-interactions, rolling character typography, interactive showcases, accordions, and responsive technical borders.

---

## 🚀 Quick Start

### 1. Navigate to the project directory
```bash
cd "C:\Users\dhaka\.gemini\antigravity\scratch\dean-portfolio"
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port indicated in your terminal).

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 File Structure

```
dean-portfolio/
├── index.html                   # HTML template with Google Fonts (Big Shoulders, Host Grotesk, Inter)
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Custom theme colors, fonts, keyframes, and animations
├── vite.config.js               # Vite bundler configuration
├── src/
│   ├── main.jsx                 # React root DOM entry
│   ├── App.jsx                  # Main application assembly & modal state
│   ├── styles/
│   │   └── index.css            # Custom CSS utilities, borders, and typography
│   ├── assets/
│   │   └── constants.js         # Complete content data (Projects, Stats, Stack, Services, FAQs, etc.)
│   └── components/
│       ├── CornerCross.jsx      # Technical '+' bracket corners matching Framer design
│       ├── Navbar.jsx           # Fixed header with rolling character links, online status & CTA
│       ├── Hero.jsx             # Giant "GRAPHICS [Cutout Portrait] DESIGNER" headline & bio
│       ├── Projects.jsx         # 2x2 showcase grid (Habitate, Pixel store, Shipit, Hifi Store)
│       ├── Stats.jsx            # 6-metric technical counter grid with subtle border lines
│       ├── Stack.jsx            # My Stack (Framer, Figma, Photoshop, Contra) with 3D icons
│       ├── Experience.jsx       # Career timeline (Google, Base, Sero) with dates and roles
│       ├── Services.jsx         # 01-04 Expandable capabilities accordion with deliverables
│       ├── Process.jsx          # 3-step structured methodology (Let's Talk, Create & Refine, Deliver & Launch)
│       ├── VideoShowcase.jsx    # Fluid 3D UI interaction video showcase cards
│       ├── Testimonials.jsx     # Interactive quote carousel with 5-star ratings and avatars
│       ├── FAQ.jsx              # Expandable accordion for turnaround, pricing, revisions, onboarding
│       ├── CTA.jsx              # "Ready to Get Started?" 24-hour turnaround call-to-action
│       ├── Contact.jsx          # 1-click email copy with "Copied!" feedback, phone, and socials
│       ├── ContactModal.jsx     # Interactive project inquiry drawer modal
│       └── Footer.jsx           # Infinite marquee ticker ("CONTACT US LET'S TALK ★") and navigation
```

---

## ✨ Features & Micro-Interactions

1. **Exact Typography & Styling:**
   - Giant high-impact display headers powered by **Big Shoulders Display** and **Big Shoulders Text**.
   - Clean, highly readable body typography using **Host Grotesk** and **Inter**.
   - Subtle brutalist border grid (`rgba(224, 224, 224, 0.63)`).

2. **Rolling Hover Text Effect:**
   - Navigation links feature custom rolling character animations that slide up smoothly on hover.

3. **Fluid Micro-Interactions:**
   - Glowing and pulsing cyan status indicators (`#02d4f5`) on CTA buttons.
   - Smooth 3D card lift and image zoom on project cards.
   - Expandable accordions with smooth height transitions for **Services** and **FAQs**.

4. **Interactive 1-Click Copy:**
   - Email in the contact and footer section can be copied with one click, providing instant visual feedback (`Copied!`).

5. **Full Responsiveness:**
   - Seamlessly responsive across mobile, tablet, laptop, and ultra-wide desktop monitors.
   - Mobile hamburger menu drawer with animated transitions.
