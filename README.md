# 🕸️ Weave Game Project

Welcome to the **Weave Game** project! This guide will help you get started with the codebase, install dependencies, set up your environment, and begin contributing to the project. Let's weave something awesome together! 🕹️

## 📖 Contributing

### Front-end Developers 

If you're new to Next.js or open-source contributions, don’t worry! Follow the contribution guide [HERE](./CONTRIBUTION.md) to get started.

### 🚀 Getting Started

#### 1. Fork the Repository & Set Up the Repo Locally

Before you start, fork the repository to your GitHub account and clone it locally.  
Not sure how to fork and clone? [Check out this guide](https://www.youtube.com/watch?v=nT8KGYVurIU) or this [GitHub Desktop tutorial](https://www.youtube.com/watch?v=UGokwtIn1Hk).

#### 2. Install Dependencies

After cloning, install the required packages using one of the following commands:
```bash
npm install  
or  
yarn install  
or  
pnpm install  
or  
bun install  
```
#### 3. Set Up Environment Variables

Copy the `.env.example` file to `.env.local`. Here's a sample of what your `.env.local` should look like:
```
AUTH_SECRET="" # Added by npx auth. Learn more: Auth.js CLI
AUTH_GOOGLE_ID="CLIENT_ID_GOOGLE"
AUTH_GOOGLE_SECRET="CLIENT_SECRET_GOOGLE"

FIREBASE_PROJECT_ID="FIREBASE_PROJECT_ID"
FIREBASE_CLIENT_EMAIL="FIREBASE_CLIENT_EMAIL"
FIREBASE_PRIVATE_KEY="FIREBASE_PRIVATE_KEY"
```
To generate a random `AUTH_SECRET`, simply run:

npx auth

#### 4. Run the Development Server

Once your environment variables are set, you can start the development server using one of these commands:
```bash
npm run dev  
or  
yarn dev  
or  
pnpm dev  
or  
bun dev  
```
## 🛠️ Tech Stack

This project uses the following technologies:

- **Next.js** 🖥️: A React framework for building server-side rendered applications.
- **Auth.js** 🔐: Authentication solutions like Google OAuth.
- **Firebase** 🔥: Backend for managing authentication, real-time data, and more.

## 🧑‍💻 Useful Commands

- **Install Dependencies:**
```bash
npm install  
or  
yarn install  
```
- **Start Development Server:**
```bash
npm run dev  
or  
yarn dev  
```
Feel free to explore, jump in, and contribute! Happy coding! 😎
