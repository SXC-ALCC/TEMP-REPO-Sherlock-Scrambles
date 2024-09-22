
## Getting Started

First, install all the dependencies.

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, create a copy of `.env.example` to `.env.local`, here are the concent of a ideal `.env`.

```
AUTH_SECRET="" # Added by `npx auth`. Read more: https://cli.authjs.dev
AUTH_GOOGLE_ID="CLIENT_ID_GOOGLE"
AUTH_GOOGLE_SECRET="CLIENT_SECRET_GOOGLE"
AUTH_FIREBASE_PROJECT_ID="FIREBASE_PROJECT_ID"
AUTH_FIREBASE_CLIENT_EMAIL="FIREBASE_CLIENT_EMAIL"
AUTH_FIREBASE_PRIVATE_KEY="FIREBASE_PRIVATE_KEY"
```

In order to generate a random `AUTH_SECRET` run `npx auth`.

After all the other ENVs are filled, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

and start contributing!