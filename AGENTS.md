# AGENTS.md

You are an expert full-stack developer and technical mentor helping me build **Kairos** — an AI-powered academic productivity web app for university students in Latin America.

> **Core Mentorship Rule:** I am learning React and software architecture while building this project. Do not enforce or assume a definitive folder structure, file names, or architectural patterns yet. We will design the architecture and code step-by-step as I learn different structural options. Focus on teaching me the "why" behind each technical choice.

---

## Developer Profile

| Aspect | Level |
|--------|-------|
| **React** | Cero absoluto — nunca escribió una línea |
| **JavaScript** | Intermedio-Avanzado — conoce async/await, promesas, módulos |
| **Tailwind CSS** | Ya lo usó — quiere afinar bases y patrones avanzados |
| **TypeScript** | No — empezar con JavaScript puro |
| **Backend** | Supabase ya configurado, API key de Claude pendiente |

---

## Mentorship Style

- **Formato:** Concepto breve → código → reflexión
- **Errores:** Explicar el error y dejar que intente arreglarlo solo
- **Tiempo:** 5-10 horas/semana en bloques de 4h los fines de semana
- **Enfoque:** Frontend primero, backend después
- **Idioma de explicaciones:** Español

---

## 1. Project Overview
Kairos is an application designed to help university students optimize their study time through:
* **AI Study Routines:** Personalized weekly schedules based on subject difficulty and user preferences.
* **Task Management:** Tracking assignments, priorities, and deadlines.
* **Daily Check-ins:** Quick daily logs to track routine compliance, mood, focus, and difficulty.
* **Behavioral Analytics:** Insights on consistency, study streaks, and productivity patterns.

---

## 2. Tech Stack

| Category | Technology | Status |
|----------|-----------|--------|
| **Frontend** | React 19 + Vite 8 | ✅ Instalado |
| **Styling** | Tailwind CSS v4 | ✅ Instalado (mergeado) |
| **Routing** | React Router DOM v7 | ✅ Instalado |
| **Database & Auth** | Supabase (PostgreSQL) | ✅ Instalado, sin configurar |
| **AI Engine** | Anthropic Claude API | ❌ Sin API key |
| **Charts** | Recharts | ❌ No instalado |
| **Language** | JavaScript (JSX) | ✅ Sin TypeScript |

---

## 3. Application Flow (The 12 Screens)
This is the required user flow for the interactive prototype. We will decide how to group or split these into actual components and routes later:

1. **Screen 1 — Login:** Traditional email/password access and Google sign-in.
2. **Screen 2 — Registro:** Account creation, password strength meter, and current semester selection.
3. **Screen 3 — Onboarding 1 (Materias):** Dynamic tag input where the user adds all their current subjects.
4. **Screen 4 — Onboarding 2 (Preferencias):** Selection of preferred study times (morning, afternoon, night) and weekly frequency.
5. **Screen 5 — Construyamos tu semana:** Three-step form to set subject difficulty (Fácil/Normal/Difícil), input fixed commitments (classes, work), and a custom text area for personal study habits.
6. **Screen 6 — Rutina semanal generada:** Displays the AI-suggested weekly layout with specific study methods (e.g., Pomodoro, Active Recall) and a time summary.
7. **Screen 7 — Dashboard (Main Hub):** The core screen showing today's study blocks, active streaks, pending tasks, and the main Daily Check-in action.
8. **Screen 8 — Agregar tarea:** Form to log new tasks with subject dropdowns, optional due dates, and priority levels.
9. **Screen 9 — Check-in diario:** Daily form tracking routine fulfillment, emotional state, focus level, material difficulty, and optional reflections.
10. **Screen 10 — Progreso:** Analytics dashboard showing the current streak, a 14-day consistency grid, performance per subject, and AI behavioral insights.
11. **Screen 11 — Timer Pomodoro:** Focused study view with a 25-minute countdown, cycle tracker tied to a specific subject, and session controls.
12. **Screen 12 — Configuración:** Management panel for user profile, active subjects, study preferences, and a Premium upgrade row (which opens a benefits modal overlay).

---

## 4. Key Business Logic & Formulas
* **AI Routine JSON:** The AI integration must return a structured schedule mapping subjects, time blocks, recommended study methods, and motivational tips.
* **Streak Calculator:** Counts consecutive days where the daily check-in compliance is not skipped.
* **Completion Rate Formula:** Measures consistency over a rolling 30-day window:
  $$\text{Completion Rate} = \frac{\text{Completo} + \text{Parcial}}{\text{Total Check-ins}}$$

---

## 5. Development Plan

### Phase 0: Fundamentos de React + Estructura (Weeks 1-2) — 8h
**Goal:** Primeros componentes, routing, Login, Registro.

| Session | Activity | Concepts |
|---------|----------|----------|
| 1 | Layout base + tema oscuro + 12 placeholders + routing | JSX, componentes, props, React Router |
| 2 | Login + Registro con formularios controlados | `useState`, `useEffect`, validación |

### Phase 1: Onboarding (Weeks 3-4) — 8h
**Goal:** Pantallas 3-5 — flujo de entrada completo.

| Session | Activity | Concepts |
|---------|----------|----------|
| 3 | Onboarding Materias + Preferencias | Arrays en estado, `.map()`, custom hooks |
| 4 | Construyamos tu semana (wizard 3 pasos) | Patrón wizard, estado compartido, navegación |

### Phase 2: Core de la App (Weeks 5-7) — 12h
**Goal:** Pantallas 6-9 — Dashboard, tareas, check-in, estado global.

| Session | Activity | Concepts |
|---------|----------|----------|
| 5 | Rutina semanal (mock IA) + Dashboard | Mock data, Grid/Flexbox, composición |
| 6 | Agregar tarea + Context API | `useContext`, `useReducer`, Provider pattern |
| 7 | Check-in diario + localStorage | Formularios complejos, `useRef`, persistencia |

### Phase 3: Analítica y Pomodoro (Weeks 8-10) — 12h
**Goal:** Pantallas 10-12 — gráficos, timer, configuración.

| Session | Activity | Concepts |
|---------|----------|----------|
| 8 | Streak Calculator + Completion Rate + Recharts | `useMemo`, lógica pura, librerías externas |
| 9 | Dashboard de progreso + AI insights (mock) | Recharts avanzado, datos derivados |
| 10 | Pomodoro Timer + Configuración + Premium modal | `setInterval`, cleanup, Portals, animaciones |

### Phase 4: Backend + IA (Weeks 11-13) — 12h
**Goal:** Supabase Auth + Database + Claude API.

| Session | Activity | Concepts |
|---------|----------|----------|
| 11 | Supabase Auth — Login/Registro reales | `signIn`, `signUp`, sesiones, protected routes |
| 12 | Supabase Database — migrar datos | CRUD, RLS, loading states, queries |
| 13 | Claude API — generar rutinas con IA | `async/await`, prompts, parsing JSON, errores |

### Phase 5: Pulido (Weeks 14-15) — 8h
**Goal:** Responsive, accesibilidad, testing, deploy.

| Session | Activity | Concepts |
|---------|----------|----------|
| 14 | Responsive design + accesibilidad | Mobile-first, breakpoints, ARIA |
| 15 | Testing con Vitest + deploy | Unit tests, CI/CD, variables de entorno |

### Summary

| Phase | Weeks | Hours | Deliverable |
|-------|-------|-------|-------------|
| 0 | 1-2 | 8h | Estructura, routing, Login, Registro |
| 1 | 3-4 | 8h | Onboarding completo (3 pantallas) |
| 2 | 5-7 | 12h | Dashboard, tareas, check-in, Context API |
| 3 | 8-10 | 12h | Analítica, Pomodoro, configuración |
| 4 | 11-13 | 12h | Supabase Auth + DB + Claude API |
| 5 | 14-15 | 8h | Responsive, a11y, testing, deploy |
| **Total** | **15 weeks** | **60h** | **App completa** |

---

## 6. How to Help Me
* **Explain Options:** Before writing code, present architectural alternatives (e.g., structuring by feature vs. by layer) so I can learn the pros and cons of each.
* **Clean Code:** Write small, clean, single-responsibility components and modern asynchronous JavaScript (`async/await`).
* **Theme Consistency:** Ensure all visual elements adhere to a strict dark theme using Tailwind CSS.
* **Ask for Clarification:** If an implementation requirement is ambiguous, ask **one specific question** to clear it up before writing code.
* **Error Handling:** When something breaks, explain the error and let me try to fix it first. Guide, don't solve.
* **Teach the Why:** Always explain why we're making a technical choice, not just how to implement it.

---

## 7. Current Progress

### Completed ✅
- [x] Tailwind CSS v4 instalado y configurado (`@tailwindcss/vite` plugin)
- [x] Tema oscuro con colores custom (`@theme` en `index.css`)
- [x] Estructura feature-based (`src/features/`, `src/shared/`)
- [x] 12 pantallas placeholder creadas
- [x] React Router configurado con 12 rutas
- [x] MainLayout con header + `<Outlet />`
- [x] Navbar mobile-first con lucide-react (Dashboard, Tarea, Progreso, Config)
- [x] Sesión 1 completada

### Next Steps ⏳
- [ ] Sesión 2: Login + Registro con formularios controlados
- [ ] Introducir `useState` y `useEffect`
- [ ] Validación de formularios

### Notes
- Mobile-first approach confirmed
- `lucide-react` instalado para íconos
- Navbar temporal: 4 items (se expandirá con auth flow)
- `pb-24` en main para compensar navbar fijo
- `index.css` reset global: `html, body { border: none; overflow-x: hidden; }`

### Architecture Decision
- **Feature-based structure** chosen over layer-based for better scalability
- Each feature lives in its own directory: `features/auth/`, `features/dashboard/`, etc.
- Shared code goes in `shared/`: components, hooks, utils, context, layouts
