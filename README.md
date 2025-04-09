# 🌤️ Weather App

A responsive weather app built using **React**, **Webpack**, and **Material UI**. It fetches live weather data using Axios and displays it in a clean, styled UI.

---

## 📁 Project Structure

```bash
weather-app/
├── dist/                   # Production build output (generated)
├── node_modules/           # Dependencies
├── public/                 # Static HTML template
│   └── index.html
├── src/                    # Source code
│   ├── api/                # API logic (e.g., OpenWeather API)
│   ├── components/         # Reusable UI components
│   ├── styles/             # CSS and styling
│   ├── App.jsx             # Main App component
│   └── index.js            # Entry point
├── .babelrc                # Babel config for JSX and ESNext
├── .gitignore              # Files to ignore in Git
├── package.json            # Project metadata and scripts
├── vercel.json             # Vercel config for SPA routing
└── webpack.config.mjs      # Webpack config using ESM


🚀 Hosting
✅ Live Demo on Vercel
Hosted at: https://weather-app-pinkesh-kumars-projects.vercel.app/


🛠️ Run Locally
1. Clone the repository
git clone https://github.com/pinkeshroy/weather-app.git
cd weather-app

2. Install dependencies
npm install

3. Start the development server
npm start
This will run the app locally at http://localhost:3000/.

📦 Build for Production
npm run build
The built files will be output to the /dist folder.

▶️ Vercel
Just push your code to GitHub and connect your repo to Vercel.
Vercel will auto-deploy every commit on the main or master branch.

💡 Tech Stack
React
Webpack + Babel
Material UI for UI components
Axios for API requests
