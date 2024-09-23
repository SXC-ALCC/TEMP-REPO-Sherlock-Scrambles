# 🌟 Contribution Guide

Hey there! 🙌 Thanks for your interest in participating and contributing to the **Weave Game Project**! Whether you're a seasoned developer or just starting out, we've made this guide to help you get up to speed quickly and contribute effectively. Let’s break it down step by step. 🛠️

## 📝 Step-by-Step Contribution Guide

### 1. Fork the Repository
First things first, fork this repository to your own GitHub account!

🔗 Need help? [Follow this guide on how to fork a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

### 2. Clone the Forked Repo Locally
Now that you’ve forked the repo, clone it to your local machine.
```bash
git clone https://github.com/YOUR_USERNAME/weave-game.git
```
🔗 New to GitHub? [Check out this video to set up and clone using GitHub Desktop](https://youtu.be/g8lJdYwHraY).

### 3. Create a Branch 
Althought this is not necessarily needed and you can work on your own main branch it's a better practice! 
We follow a branching workflow for any changes. Create your own branch to work on a new feature or bug fix.
```bash
git checkout -b feature-name
```
**Example**:
```bash
git checkout -b add-landing-page
```
### 4. Add a Component
For front-end contributions, use the `.jsx` format when creating React components / pages( for this project ). All new components should go in the `src/app/components` folder. Please use PascalCase for naming files and folders.

**Example file name**:
LandingPage.jsx

**Folder structure**:
src/app/components/LandingPage/LandingPage.jsx

📚 [Learn more about JSX here](https://reactjs.org/docs/introducing-jsx.html).

### 5. Use Tailwind CSS for Styling
We use Tailwind CSS for all our styling. You can easily add classes to your JSX components like so:

```jsx
<div className="bg-blue-500 text-white p-4">
  <h1>Welcome to Weave!</h1>
</div>
```
### 6. Commit Your Changes
After making your changes, stage and commit them.
```bash
git add .
```
```bash
git commit -m "Add Landing Page component"
```
### 7. Push Your Changes
Push your changes to your forked repository:
```bash
git push origin feature-name
```
### 8. Create a Pull Request (PR)
Head over to GitHub and submit a Pull Request from your branch.
Make sure to provide a clear description of your changes!

🔗 Not sure how? [Check this tutorial on how to create a pull request](https://docs.github.com/en/pull-requests).

## 🔄 Naming Convention
- Files and folders should follow **PascalCase**.
- Example: `LandingPage.jsx`
- Keep components modular and reusable.
- Place components in the `src/app/components` folder.

## 🎨 Styling
- All styling should be done using **Tailwind CSS**.
- Follow the design system in place. Refer to existing components for consistency.

## 🛠️ Tech Stack
- **React** (.jsx format)
- **Tailwind CSS**
- **Next.js**
- **Firebase**
- **Auth.js**

## 🤝 Contributing Etiquette
- Be kind and respectful in your contributions and interactions.
- Ensure your code is clean and well-commented.
- Test your components before submitting.
- Collaborate with other members / contributors to avoid duplicate work.

That’s it! 🎉 Now you’re all set to contribute to the **Weave Game Project**! We look forward to your awesome contributions. 🚀 Happy coding! 😎
