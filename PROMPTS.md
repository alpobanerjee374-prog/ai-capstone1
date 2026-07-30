# AI Prompts

## Prompt 1

The React + TypeScript Vite project has already been created.

Help me set up the initial project structure for a Movie Explorer application.

Requirements:
- Use functional components only.
- Do not install any UI library.
- Do not implement any movie functionality yet.
- Create a clean and scalable folder structure.
- Create placeholder files only.

---

## Prompt 2

The React + TypeScript project is already set up.

Create the MVVM file structure for the Home screen.

Create:

- src/pages/Home/HomeModel.ts
- src/pages/Home/useHomeViewModel.ts
- src/pages/Home/HomeView.tsx

Requirements:
- HomeModel.ts will later contain Home-specific data and business logic.
- useHomeViewModel.ts will later contain React state and actions.
- HomeView.tsx will later render the Home interface.
- Create only minimal placeholder exports so the application compiles.
- Do not add API requests.
- Do not add React state.
- Do not add movie UI.
- Do not modify any existing components unless necessary for compilation.

---

## Prompt 3

Implement movie search using the OMDb API. Create a service layer for API requests and connect it to the Home MVVM structure. Display movie cards with title, poster, year, and type. Handle loading, empty results, and API errors.

---

## Prompt 4

Implement Firebase Authentication using Email and Password. Create authentication services, an AuthContext, login and registration pages, and protect routes so only authenticated users can access favourites.

---

## Prompt 5

Implement the favourites feature using Cloud Firestore. Store each user's favourite movies under their own document. Allow users to add and remove favourites and keep the UI synchronized with Firestore.

---

## Prompt 6

Improve the user interface. Add a responsive header and footer, modern movie cards, hover effects, favourite button animations, and responsive layouts while keeping the MVVM architecture unchanged.

---

## Prompt 7

Review the application. Improve code quality, organize files, remove unused code, ensure TypeScript compilation succeeds, and prepare the project for GitHub by updating the README and documentation.