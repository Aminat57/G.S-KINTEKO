# G.S KINTEKO Primary School Website

This is a React-based school website with a structured component layout, including pages for Welcome, Admissions, Academics, Contact, and a NotFound page. The project uses modern UI libraries for styling and interactivity.

---

## 📌 Prerequisites

Ensure you have the following installed before running the project:

- **Node.js** (LTS version recommended) – [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** for package management
- **Git** for version control – [Download here](https://git-scm.com/)

---

## 🚀 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo-url.git
   cd your-project-folder
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```
   or if using yarn:
   ```sh
   yarn install
   ```

---

## 📦 Dependencies

The project uses the following key dependencies:

| Package              | Description |
|----------------------|------------|
| `react`             | JavaScript library for building UI components |
| `react-router-dom`  | Enables navigation between different pages |
| `@shadcn/ui`        | Pre-styled UI components |
| `lucide-react`      | Icon set for UI elements |
| `tailwindcss`       | Utility-first CSS framework for styling |
| `react-icons`       | Collection of popular icons (e.g., social media) |

### 🔹 **Install all dependencies manually (if needed):**
```sh
npm install react react-router-dom @shadcn/ui lucide-react tailwindcss react-icons
```
or with yarn:
```sh
yarn add react react-router-dom @shadcn/ui lucide-react tailwindcss react-icons
```

---

## 🎨 Tailwind CSS Setup

1. **Initialize Tailwind:**
   ```sh
   npx tailwindcss init -p
   ```
2. **Configure `tailwind.config.js`:**
   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
3. **Add Tailwind to `index.css`:**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## 🏃 Running the Project

To start the development server:
```sh
npm start
```
or
```sh
yarn start
```

The website should now be accessible at `http://localhost:3000`.

---

## 🛠 Features

- **Modular Component Design**: Components for Admissions, Academics, Contact, Footer, etc.
- **Styled with Tailwind CSS**: Responsive and modern UI
- **Navigation with React Router**: Ensures smooth page transitions
- **404 Page Handling**: Unimplemented pages lead to the NotFound page

---

## 🎯 Future Improvements

- Implement actual links for social media and quick navigation.
- Add more pages like School Events, Staff Directory, and Parent Portal.
- Improve accessibility and mobile responsiveness.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Feel free to fork this repository, make improvements, and submit a pull request!

---

🚀 **Happy Coding!**
