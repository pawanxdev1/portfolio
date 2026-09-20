# Pawan Prajapati — Java Full Stack Developer Portfolio

A production-ready portfolio built with **React (Vite) + Tailwind CSS + Framer Motion** on the
frontend and **Express-style Vercel serverless functions + MongoDB (Mongoose)** on the backend.

Everything editable — name, bio, skills, experience, projects, education, certifications, socials
— lives in `client/src/data/`. You never need to touch component code to update content.

---

## 1. Project structure

```
pawan-portfolio/
├── api/                      # Vercel serverless functions (backend)
│   ├── contact.js            # POST /api/contact
│   ├── lib/
│   │   ├── db.js             # cached MongoDB connection
│   │   └── validate.js       # server-side input validation
│   └── models/
│       └── Contact.js        # Mongoose schema
├── client/                   # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/       # Navbar, Footer, ProjectCard, Reveal, etc.
│   │   ├── sections/         # Hero, About, Skills, Experience, Projects, ...
│   │   ├── pages/            # Home, ProjectDetails, NotFound
│   │   ├── data/             # <-- EDIT THESE to personalize the site
│   │   ├── context/          # ThemeContext (dark/light mode)
│   │   ├── hooks/
│   │   ├── services/         # axios client + contact API call
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
├── package.json               # root deps for /api functions (mongoose)
├── vercel.json                 # deployment config
└── .env.example
```

---

## 2. Run it locally

### Option A — frontend only (no contact form backend)

```bash
cd client
npm install
npm run dev
```

Opens at `http://localhost:5173`. Every section works except submitting the contact form
(there's no API server running yet).

### Option B — frontend + working contact API (recommended)

Install the Vercel CLI once, then run the whole project (frontend + `/api` functions) together,
exactly as it will behave in production:

```bash
npm install -g vercel
cd pawan-portfolio
vercel dev
```

This serves the client and the `/api/contact` function on the same local port. Create a `.env`
file at the project root first (see step 4).

---

## 3. Production build

```bash
cd client
npm run build     # outputs client/dist
npm run preview   # sanity-check the production build locally
```

---

## 4. Environment variables

Copy `.env.example` to `.env` at the **project root** (used by the `/api` functions):

```
MONGODB_URI=your_mongodb_atlas_connection_string
MONGO_DB_NAME=portfolio
CLIENT_ORIGIN=https://your-portfolio.vercel.app
```

Copy `client/.env.example` to `client/.env` (used by the frontend build):

```
VITE_API_URL=/api
```

**Never commit real `.env` files** — both are already in `.gitignore`. On Vercel, add these same
variables under Project Settings → Environment Variables instead.

---

## 5. Connect MongoDB Atlas

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Under **Database Access**, create a user with a strong password.
3. Under **Network Access**, allow access from `0.0.0.0/0` (or Vercel's IP ranges) so serverless
   functions can connect.
4. Under **Database → Connect → Drivers**, copy the connection string — it looks like:
   `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
5. Paste it into `MONGODB_URI` in your `.env` (locally) and in Vercel's environment variables
   (production). Set `MONGO_DB_NAME` to whatever database name you want (it's created automatically
   on first write).

Contact form submissions are stored in the `contacts` collection of that database.

---

## 6. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel will read `vercel.json` automatically:
   - Build command: `cd client && npm install && npm run build`
   - Output directory: `client/dist`
   - `/api/*.js` files are deployed automatically as serverless functions.
4. Add the environment variables from step 4 under **Settings → Environment Variables**
   (`MONGODB_URI`, `MONGO_DB_NAME`, `CLIENT_ORIGIN`, and `VITE_API_URL=/api`).
5. Deploy. Your site will be live at `https://<your-project>.vercel.app`.

---

## 7. Add your real resume

Place your resume PDF at `client/public/resume.pdf`. The navbar and hero "Download Resume"
buttons already point to `/resume.pdf` via `profile.resumeUrl` in `src/data/profile.js` — no code
changes needed.

---

## 8. Add your real projects

Open `client/src/data/projects.js`. Each project object looks like this:

```js
{
  placeholder: true,   // set to false once this is real
  id: 'employee-management-system',   // used in the URL /projects/:id
  title: 'Employee Management System',
  category: 'Full Stack',             // used by the filter buttons
  description: '...',
  problem: '...',                     // what problem it solves
  technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
  features: ['...'],
  github: 'https://github.com/you/repo',
  demo: 'https://your-demo-url.com',
  image: '/projects/employee-management.png',  // add the image to client/public/projects/
}
```

Set `placeholder: false` once you've filled in real details — this removes the "placeholder"
badge shown on the card and detail page.

---

## 9. Change your profile information

Everything else — name, role, tagline, email, phone, location, stats, About paragraphs, skill
highlights, and services — lives in `client/src/data/profile.js`. Edit the values there; the whole
site updates automatically. Similarly:

- `src/data/skills.js` — technical skills by category
- `src/data/experience.js` — work history timeline
- `src/data/education.js` — academic background
- `src/data/certifications.js` — certifications

Every placeholder entry is marked with `placeholder: true` — set it to `false` once it reflects
real information, so the "placeholder" badges disappear from the UI.

---

## 10. Connect GitHub and LinkedIn

In `client/src/data/profile.js`, update:

```js
socials: {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  email: 'mailto:your@email.com',
},
```

These links are used in the Hero section, Navbar (mobile), and Footer.

---

## 11. Dark / light mode

The site defaults to dark mode and remembers the visitor's choice in `localStorage`. The toggle
lives in the navbar (desktop and mobile). Colors for both themes are defined as design tokens in
`client/tailwind.config.js`.

---

## 12. Notes on the contact form

- Frontend validation (React Hook Form): required fields, email format, minimum message length.
- Backend validation (`api/lib/validate.js`) re-checks everything server-side — never trust the
  client alone.
- Basic per-IP rate limiting (5 requests/minute per warm serverless instance) blunts naive spam.
- Errors are never leaked to the client — internal errors are logged server-side and a generic
  message is returned instead.

---

## 13. Before going live, double-check

- [ ] Replaced every `placeholder: true` entry in `src/data/` with real information (or removed it)
- [ ] Added a real resume at `client/public/resume.pdf`
- [ ] Added real GitHub/LinkedIn/email in `profile.js`
- [ ] Set `MONGODB_URI` and `MONGO_DB_NAME` in Vercel's environment variables
- [ ] Set `CLIENT_ORIGIN` to your production domain for stricter CORS
- [ ] Added a real Open Graph image at `client/public/og-image.png` (1200×630px recommended)
- [ ] Ran `npm run build` locally with no errors before deploying
