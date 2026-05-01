
## Repository shape
- `server/`: Django 6 backend with DRF, JWT auth, allauth, and Channels websocket chat.
- `client/`: React + TypeScript + Vite frontend using Redux Toolkit and RTK Query.
- Root `README.md` is the project-specific setup reference; `client/README.md` is mostly Vite template material.

## Environment and setup
- Copy environment template before first run:
  - `cp .env.example server/.env`
  - `cp .env.example client/.env`
- Backend reads environment via `python-dotenv` in `server/config/settings.py`.
- Frontend API base URL comes from `VITE_URL_API` (used in `client/src/store/Api/AsyncFunction/BaseQueryRefreshToken.ts`).

## Common commands
Run commands from the indicated directory.

### Backend (`server/`)
- Install deps: `pip install -r requirements.txt`
- Apply migrations: `python manage.py migrate`
- Run dev server: `python manage.py runserver`
- Run all tests: `python manage.py test`
- Run a single app test module: `python manage.py test users.tests`
- Run a single test case/method: `python manage.py test users.tests.YourTestCase.test_method`

### Frontend (`client/`)
- Install deps: `pnpm install`
- Run dev server: `pnpm dev`
- Production build: `pnpm build`
- Lint: `pnpm lint`
- Preview production build: `pnpm preview`

### Notes on test/lint coverage
- No dedicated frontend test script is currently defined in `client/package.json`.
- Backend test execution uses Django’s built-in test runner (`manage.py test`).

## High-level architecture
## Backend request flow
- Entry point routes are mounted at `/api/` in `server/config/urls.py`, then delegated to DRF router registration in `server/api/urls.py`.
- API is organized by domain in `server/api/{users,posts,chat}/`:
  - `resourceview.py` / `resurceview.py` files define DRF `ModelViewSet` logic and custom actions.
  - `serializer.py` files encode API contracts and include domain side effects (for example, verification/punishment notifications in `api/users/serializer.py`).
- Domain models live in Django apps:
  - `server/users/models.py`: custom user model, profile, verification requests, notifications, punishments.
  - `server/posts/models.py`: posts/comments with like relations.
  - `server/chat/models.py`: chat rooms and messages.

## Backend auth, profile, and notifications
- Auth model is `users.CustomUser` (`AUTH_USER_MODEL`), with JWT auth configured in `server/config/settings.py`.
- User lifecycle side effects are wired in Django signals (`server/users/signals.py`, loaded via `users/apps.py`):
  - auto-create `Profile` on user creation
  - send verification email with `email_verification_code`
- API auth endpoints come from `UserViewSet` actions (`register`, `login`, `verify-email`) and SimpleJWT token endpoints in `server/api/urls.py`.

## Websocket chat path
- ASGI is configured in `server/config/asgi.py` with `ProtocolTypeRouter` for HTTP + websocket.
- Websocket route pattern is in `server/chat/routing.py`: `ws/chat/<room_id>/`.
- `PrivateChatConsumer` in `server/chat/consumers.py` handles group subscribe/broadcast and persists messages to `Message`.
- Channel layer is currently `InMemoryChannelLayer` in `server/config/settings.py` (single-process dev setup).

## Frontend composition and data flow
- Bootstrapping (`client/src/index.tsx`) composes `Provider(store)`, `BrowserRouter`, and passes a component registry into `App`.
- Route map lives in `client/src/router/Router.tsx` and renders pages through `PageTemplate` + `RootLayout`.
- Global state is configured in `client/src/store/store.ts`:
  - UI slices in `client/src/store/Slices/`
  - auth/email slices in `client/src/store/Api/*.ts`
  - RTK Query API slice reducer/middleware (`api.reducerPath`).
- `client/src/store/Api/ApiSlice.ts` defines API endpoints; all requests go through `BaseQueryWithRefreshToken` to attach access tokens and attempt token refresh on 401.
- Auth tokens are persisted in localStorage by `AuthSlice` and used by `App.tsx` for initial redirect behavior.

## Integration contract between client and server
- Frontend expects backend endpoints such as:
  - `users/register/`, `users/login/`, `users/verify-email/`
  - JWT refresh endpoint aligned with backend token URLs.
- Because backend routes are mounted under `/api/`, `VITE_URL_API` should include that prefix (for example, `http://localhost:8000/api/`).
