# Next.js & ShadCN Portfolio

This is a personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI. It's designed to be a clean, modern, and easily deployable static site, perfect for showcasing your skills and projects.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  Install the project dependencies:
    ```bash
    npm install
    ```

## Running Locally

To run the development server, use the following command:

```bash
npm run dev
```

This will start the application in development mode with Turbopack for faster performance. Open [http://localhost:9002](http://localhost:9002) to view it in your browser. The page will auto-update as you make edits to the code.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages using a `gh-pages` branch.

### Step 1: Deploy to the `gh-pages` Branch

Run the deploy script. This command will first build your static site (creating the `out` directory) and then automatically push the contents of the `out` directory to a special `gh-pages` branch in your repository.

```bash
npm run deploy
```
### Step 2: Configure GitHub Pages

1.  In your GitHub repository, go to **Settings** > **Pages**.
2.  Under the "Build and deployment" section, set the **Source** to **Deploy from a branch**.
3.  Under "Branch", select `gh-pages` as the source branch and `/ (root)` as the folder.
4.  Click **Save**.


GitHub will now serve your site from the `gh-pages` branch. It might take a few minutes for the site to become live. You can track the progress in the "Actions" tab of your repository.

### Hosting on `your-username.github.io`

If you want to host your site at your main user URL (`https://your-username.github.io`), you must name your repository `your-username.github.io`. The deployment steps are the same as above. This special repository name tells GitHub to serve the site from the root of your GitHub Pages domain.
