
# Personal Website

This is a personal website built using HTML, CSS, and JavaScript, showcasing my portfolio, projects, experience, and interests. The site features multiple pages for different sections (e.g., home, projects, experience), user-friendly navigation, and multimedia elements like images and a video. It is designed to reflect my skills and personality, with contributions tracked via GitHub.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [How It Works](#how-it-works)
- [Limitations](#limitations)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Multi-Page Navigation**: Includes home (`index.html`), projects (`projects.html`), and experience (`experience.html`) pages.
- **Portfolio Showcase**: Displays personal projects and skills.
- **Visual Media**: Incorporates images (`coolvidgame.jpg`, `githublogo.png`, `linkedindlogo.png`, etc.) and a video (`stock.avi`) for engagement.
- **Interactive Elements**: JavaScript enhances functionality (e.g., `projects.html` updates).
- **Custom Styling**: CSS files provide unique designs and layouts.
- **GitHub Workflows**: Automated deployment via GitHub Actions (`jekyll-gh-pages.yml`).
- **Resume Highlight**: Features a resume section with an updated description (`better resume{...}`).

## Prerequisites
Before running this website, ensure you have the following:
- **Web Browser**: A modern browser (e.g., Chrome, Firefox, Edge) to view the site.
- **Text Editor**: Optional, for editing files (e.g., VS Code, Sublime Text).
- **Web Server (Optional)**: For local testing with dynamic content, use a simple server (e.g., Python’s `http.server` or Node.js).

## Installation
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Verify Files**:
   - Ensure all listed files (e.g., `index.html`, `projects.html`, `styles.css`, images, etc.) are present.
   - Check for multimedia files (`coolvidgame.jpg`, `stock.avi`) in the project folder.

3. **Run the Application**:
   - Open any HTML file (e.g., `index.html`) directly in a web browser by double-clicking or using:
     ```bash
     open index.html  # On macOS
     start index.html  # On Windows
     ```
   - For dynamic features or GitHub Pages deployment, set up a local server:
     - Using Python: `python -m http.server 8000` and visit `http://localhost:8000`.
     - Using Node.js: Install `http-server` (`npm install -g http-server`) and run `http-server`.

4. **Deploy to GitHub Pages** (Optional):
   - Ensure `jekyll-gh-pages.yml` is configured in `.github/workflows/`.
   - Push changes to the `main` branch to trigger deployment.

## Usage
1. **Access the Site**:
   - Open `index.html` for the homepage, `projects.html` for project details, or `experience.html` for my background.

2. **Navigate Pages**:
   - Use links or buttons (if implemented) to switch between sections.

3. **View Media**:
   - Explore images (e.g., `mmmlogo.png`, `pokerpic.jpg`) and watch the `stock.avi` video.

4. **Interact**:
   - JavaScript-driven features (e.g., `projects.html` updates) enhance user experience.

5. **Exit**:
   - Close the browser tab or window to end the session.

## Code Structure
- **HTML Files**:
  - `index.html`: Homepage.
  - `projects.html`: Project portfolio.
  - `experience.html`: Professional background.
  - `README.md`: Project documentation.
- **CSS Files**: Styling (e.g., `styles.css` if present, inferred from context).
- **JavaScript Files**: Dynamic functionality (e.g., updates in `projects.html`).
- **Workflows**:
  - `.github/workflows/jekyll-gh-pages.yml`: Automates deployment.
- **Images**:
  - `coolvidgame.jpg`, `githublogo.png`, `linkedindlogo.png`, `mmmlogo.png`, `pokerpic.jpg`, `resumelogo.png`: Visual assets.
- **Video**:
  - `stock.avi`: Multimedia content.
- **Other**:
  - `better resume{...}`: Updated resume text (file nature unclear, treated as documentation).

## How It Works
1. **Page Loading**:
   - HTML files load the structure, styled by CSS.
2. **Interaction**:
   - JavaScript enhances interactivity (e.g., `projects.html` updates).
3. **Media Display**:
   - Images and the `stock.avi` video are embedded for visual appeal.
4. **Deployment**:
   - GitHub Actions deploys the site via `jekyll-gh-pages.yml`.

## Limitations
- **Static Nature**: Lacks a backend for dynamic data (e.g., real-time updates).
- **Browser Dependency**: Relies on client-side execution.
- **Limited Styling**: Assumes `styles.css` exists; may need expansion.
- **Video Format**: `stock.avi` compatibility varies by browser.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request with a description.

Follow web development best practices and include comments.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or support, contact Narasimha at [naci@ad.unc.edu] or open an issue on the repository.

---


