# YakkunLabs Website

Welcome to **YakkunLabs**, a futuristic gaming platform where players can explore, connect, and engage with exclusive content. This repository contains the **Next.js** application for YakkunLabs, featuring interactive pages, animations, and a dynamic user experience.

## 🚀 Features
- **Home Page** – Introduction to YakkunLabs with animated elements.
- **Lore Page** – Deep dive into the game’s universe, characters, and cutscenes.
- **More Page** – Developer diaries, game expansions, and exclusive content previews.
- **Social Page** – Community discussions, live events, and social media feeds.
- **Buy Page** – Marketplace for game purchases, in-game items, and merchandise.
- **Login Page** – Secure login with social authentication and user profile access.

## 📂 Project Structure
```
src/
 ├── app/
 │   ├── page.tsx      # Home Page
 │   ├── lore.tsx      # Lore Page
 │   ├── more.tsx      # More Page
 │   ├── social.tsx    # Social Page
 │   ├── buy.tsx       # Buy Page
 │   ├── login.tsx     # Login Page
 │   ├── layout.tsx    # Layout & Navbar
 │   ├── globals.css   # Global Styles
 ├── public/
 │   ├── images/       # Image assets
 │   ├── loading.gif   # Loading animation
```

## 🛠 Installation & Setup
To run this project locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/santhushii/YakkunLabs.git

# Navigate to the project folder
cd YakkunLabs/frontend

# Install dependencies (including Tailwind CSS)
npm install

# Initialize Tailwind CSS (if not already set up)
npx tailwindcss init -p

# Build the project
npm run build

# Start the development server
npm run dev
```

The website will be accessible at **http://localhost:3000**.

## ✨ Technologies Used
- **Next.js 15** – Fast & scalable React framework
- **Tailwind CSS** – Modern styling with utility-first approach
- **Framer Motion** – Smooth animations and interactive elements
- **TypeScript** – Strongly typed JavaScript for better maintainability

## 🔧 Troubleshooting
If you encounter issues, try the following:
1. **Clear Next.js cache:**
   ```sh
   rmdir /s /q .next  # Windows
   rm -rf .next  # Mac/Linux
   ```
2. **Ensure Tailwind CSS is installed:**
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   ```
3. **Make sure `tailwind.config.js` is correctly configured:**
   ```js
   module.exports = {
     content: ["./src/**/*.{js,ts,jsx,tsx}"],
     theme: { extend: {} },
     plugins: [],
   };
   ```
4. **Restart the server:**
   ```sh
   npm run dev
   ```







