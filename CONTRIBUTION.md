# 🌟 Welcome to the Weave Game Project!

Hey there, fellow ALCC members! 🙌  
We’re excited that you’re here to help us enhance the **Weave Game Project**. Whether you’re a coding pro or just starting, this guide will help you contribute easily and effectively. Let’s get started! 🛠️

## 📝 Step-by-Step Contribution Guide

### 1. Fork the Repository
First things first, fork this repository to your own GitHub account!

🔗 Need help? [Follow this guide on how to fork a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

### 2. Clone the Forked Repo Locally
Now that you’ve forked the repo, clone it to your local machine.

- **Using Command Line**:
```bash 
  git clone https://github.com/YOUR_USERNAME/weave-game.git
```
- **Using GitHub Desktop**: 
  - Open GitHub Desktop.
  - Click on "File" > "Clone Repository."
  - Select your forked repository and click "Clone."

### 3. Create a Branch
Creating a separate branch is a best practice! This keeps our work organized.

- **Using Command Line**:  
```bash
  git checkout -b feature-name
```
  **Example**:  
```bash
  git checkout -b add-landing-page
```
- **Using GitHub Desktop**: 
  - Go to the "Current Branch" menu and select "New Branch."
  - Name your branch (e.g., `add-landing-page`).

### 4. Add a Component
For front-end contributions, use the `.jsx` format for creating React components/pages. New components should go in the `src/app/components` folder. Use PascalCase for naming files and folders.

**Example file name**:  
LandingPage.jsx

**Folder structure**:  
src/app/components/LandingPage/LandingPage.jsx

📚 [Learn more about JSX here](https://reactjs.org/docs/introducing-jsx.html).

### 5. Use Tailwind CSS for Styling
We use Tailwind CSS for styling. You can add classes to your JSX components like this:

```jsx
<div className="bg-blue-500 text-white p-4">
  <h1>Welcome to Weave!</h1>
</div>
```
### 6. Commit Your Changes
After making your changes, stage and commit them.

- **Using Command Line**:  
 ```bash
 git add .
```
```bash
  git commit -m "Add Landing Page component"
```

- **Using GitHub Desktop**: 
  - Click on "Changes" in the left sidebar.
  - Add a summary of your changes and click "Commit to [branch name]."

### 7. Push Your Changes
Push your changes to your forked repository:

- **Using Command Line**:
```bash
    git push origin feature-name
```
- **Using GitHub Desktop**: 
  - Click on "Push origin" in the top right corner.

### 8. Create a Pull Request (PR)
Submit a Pull Request from your branch. Provide a clear description of your changes!

🔗 Not sure how? [Check this tutorial on how to create a pull request](https://docs.github.com/en/pull-requests).

## 🔄 Naming Convention
- Use **PascalCase** for files and folders.
- Example: LandingPage.jsx
- Keep components modular and reusable.
- Place components in the `src/app/components` folder.

## 🎨 Styling
- All styling should use **Tailwind CSS**.
- Follow the design system. Refer to existing components for consistency.

## 🛠️ Tech Stack
- **React** (.jsx format)
- **Tailwind CSS**
- **Next.js**
- **Firebase**
- **Auth.js**

## 🤝 Contributing Etiquette
- Be kind and respectful in your contributions.
- Ensure your code is clean and well-commented.
- Test your components before submitting.
- Collaborate with other members to avoid duplicate work.

That’s it! 🎉 Now you’re all set to contribute to the **Weave Game Project**! We can’t wait to see what you create. 🚀 Happy coding! 😎
