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
For front-end contributions, use the `.jsx` format when creating React components/pages. Even though you might be working with basic HTML and JavaScript locally in your own development environment (like editing an `index.html` file), **all pull requests to this repository must use JSX**.

- **Locally**: Feel free to experiment with frontend code using simple HTML, CSS, and JavaScript.
- **For Pull Requests**: Ensure your work is submitted in JSX format and follows the structure below. Use PascalCase for naming files and folders.

**Example file name**:  
`LandingPage.jsx`

**Folder structure**:  
`src/app/components/LandingPage.jsx`

**Assets Folder**:  
Place any assets in the `src/app/public/assets` folder. This will keep your assets organized alongside the components.

📚 [Learn more about JSX here](https://reactjs.org/docs/introducing-jsx.html).

### 5. Use Tailwind CSS for Styling
We use Tailwind CSS for styling. You can add classes to your JSX components like this:

```jsx
<div className="bg-blue-500 text-white p-4">
  <h1>Welcome to Weave!</h1>
</div>
```
### 6. Commit Your Changes
After making your changes, you need to stage and commit them.

- **Using Command Line**:
  - Stage your changes:
    ```bash
    git add .
    ```
  - Commit them with a descriptive message:
    ```bash
    git commit -m "Add Landing Page component"
    ```

- **Using GitHub Desktop**:
  - Click on the "Changes" tab in the left sidebar.
  - Add a descriptive summary of your changes and click "Commit to [branch name]."

### 7. Push Your Changes
Now, push your changes to your forked repository.

- **Using Command Line**:
  - Push your changes:
    ```bash
    git push origin feature-name
    ```

- **Using GitHub Desktop**:
  - Click on the "Push origin" button in the top-right corner of the app.

### 8. Create a Pull Request (PR)
Once your changes are pushed to your forked repo, it's time to create a Pull Request (PR) to merge your changes into the main project.

1. Head over to GitHub, open the repository you forked, and you should see an option to "Compare & pull request" next to your branch.
2. Provide a clear description of the changes you made.

🔗 Need help? [Follow this guide to create a Pull Request](https://docs.github.com/en/pull-requests).

---

### 🔄 Naming Convention
- Files and folders should follow **PascalCase**.
- Example: `LandingPage.jsx`
- Keep components modular and reusable.
- Place all components in the `src/app/components` folder.

### 🎨 Styling
- Use **Tailwind CSS** for all styling purposes.
- Ensure that you follow the project's design system. Refer to existing components to maintain consistency.

### 🛠️ Tech Stack
- **React** (.jsx format)
- **Tailwind CSS**
- **Next.js**
- **Firebase**
- **Auth.js**

### 🤝 Contributing Etiquette
- Be kind, respectful, and professional when contributing and interacting with others.
- Make sure your code is clean, readable, and well-commented.
- Test your components thoroughly before submitting them.
- Collaborate with other contributors to avoid overlapping work.

---

### 📢 Important Note: Code in JSX Format for Pull Requests
For this project, while it's perfectly fine to test your components in any environment or framework that you're comfortable with, **all pull requests must be in the `.jsx` format** as outlined in this guide. Make sure your code follows the structure and practices laid out here before submitting any pull requests.

---

That's it! 🎉 You’re all set to contribute to the **Weave Game Project**! We can’t wait to see what you build. 🚀 Happy coding! 😎

