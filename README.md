
# 🕸️ Weave Game Project

Welcome to the **Weave Game** project! This guide will help you get started with the codebase, install dependencies, set up your environment, and begin contributing to the project. Let's weave something awesome together! 🕹️

## 🚀 Getting Started

### Install Dependencies
Run one of the following commands to install the required packages:
```bash
npm install  
or  
yarn install  
or  
pnpm install  
or  
bun install
```
### Set Up Environment Variables

Copy the `.env.example` file to `.env.local`. Here's a sample of what your `.env.local` should look like:
```
AUTH_SECRET=""  # Added by `npx auth`. Learn more: [Auth.js CLI](https://cli.authjs.dev)  
AUTH_GOOGLE_ID="CLIENT_ID_GOOGLE"  
AUTH_GOOGLE_SECRET="CLIENT_SECRET_GOOGLE"  
AUTH_FIREBASE_PROJECT_ID="FIREBASE_PROJECT_ID"  
AUTH_FIREBASE_CLIENT_EMAIL="FIREBASE_CLIENT_EMAIL"  
AUTH_FIREBASE_PRIVATE_KEY="FIREBASE_PRIVATE_KEY"
```
To generate a random `AUTH_SECRET`, simply run:

```bash
npx auth
```
### Run the Development Server

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
## 📖 Contributing

New to open-source contributions? No worries! Follow these steps to start contributing:

### Fork the Repository & Create a Pull Request

Check out this [guide on creating a fork and submitting a pull request](https://www.youtube.com/watch?v=nT8KGYVurIU). It covers the entire process!

### Set Up the Repo Locally

If you're new to GitHub Desktop, this [tutorial](https://www.youtube.com/watch?v=UGokwtIn1Hk) will help you set up and clone the repo.

### Submit Your Changes

After making your contributions, push them to your fork and submit a pull request. 🎉

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
