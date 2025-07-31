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

This project is configured for static export, making it easy to deploy on GitHub Pages.

### Step 1: Build the Static Site

Run the build script. This will generate a static version of your site in the `out` directory.

```bash
npm run build
```

### Step 2: Push to GitHub

Commit and push the entire project, including the newly created `out` directory, to your GitHub repository.

### Step 3: Configure GitHub Pages

1.  In your GitHub repository, go to **Settings** > **Pages**.
2.  Under the "Build and deployment" section, set the **Source** to **Deploy from a branch**.
3.  Under "Branch", select the branch you pushed your code to (e.g., `main`).
4.  Change the folder from **/(root)** to **/out**.
5.  Click **Save**.

GitHub will now build and deploy your site from the `/out` directory. It might take a few minutes for the site to become live. You can track the progress in the "Actions" tab of your repository.

### Hosting on `your-username.github.io`

If you want to host your site at your main user URL (`https://your-username.github.io`), you must name your repository `your-username.github.io`. The deployment steps are the same as above. This special repository name tells GitHub to serve the site from the root of your GitHub Pages domain.
