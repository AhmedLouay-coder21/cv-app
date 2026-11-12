<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!-- Add repository-specific badges here when the project is published. -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://postimg.cc/NKhQSZ0C">
    <img src="https://i.postimg.cc/T31hL6vx/CV-APP-Logo.png" alt="CV App logo" width="500">
  </a>
  <h1 align="center">CV App</h1>

  <p align="center">
    A responsive React app for creating and downloading a professional CV.
    <br />
    <br />
    <a href="#about-the-project">About</a>
    &middot;
    <a href="#getting-started">Getting Started</a>
    &middot;
    <a href="#usage">Usage</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

CV App helps users build a CV through an easy, multi-step form and preview the
result while they edit it. The generated resume can be downloaded as a PDF.

### Features

- Guided form sections for personal information, experience, education, and skills
- Live CV preview
- Customizable accent colors
- PDF resume download
- Responsive layout for desktop, tablet, and mobile screens
- Date validation for experience entries

### Built With

- [![React][React.js]][React-url]
- [![Vite][Vite.js]][Vite-url]
- [![date-fns][date-fns.js]][date-fns-url]
- [![React PDF][React-PDF.js]][React-PDF-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm

You can check that they are installed with:

```sh
node --version
npm --version
```

### Installation

1. Clone or download this repository.
2. Open a terminal in the `cv-app` directory.
3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open the local URL shown by Vite in your browser.

To create a production build:

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Complete each section of the form using the **Continue** button.
2. Use **Back** to return to a previous section.
3. Review the live preview as you edit your information.
4. Choose an accent color in the skills and styles section.
5. Select **Download PDF** to export the completed CV.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

See the open issues for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are welcome.

1. Fork the project.
2. Create a feature branch:

   ```sh
   git checkout -b feature/your-feature
   ```

3. Make and test your changes.
4. Run the linter:

   ```sh
   npm run lint
   ```

5. Commit your changes and open a pull request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [date-fns](https://date-fns.org/)
- [React PDF](https://react-pdf.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vite.dev/
[date-fns.js]: https://img.shields.io/badge/date--fns-770C56?style=for-the-badge
[date-fns-url]: https://date-fns.org/
[React-PDF.js]: https://img.shields.io/badge/React%20PDF-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-PDF-url]: https://react-pdf.org/
