# Yadav_Nandish_ui_garden: Assignment 12 Web Component Library

A UI component library built with Create React App (TypeScript), Storybook 8, and styled-components. The production build is served with Docker on localhost:8083.

## Prerequisites

- Node.js 20 or newer, and npm
- Docker Desktop (or Docker Engine) for the container step

## 1. Project setup

```bash
cd Yadav_Nandish_ui_garden
npm install
```

## 2. Run Storybook

```bash
npm run storybook
```

Open http://localhost:6006. Every component has a **Default** and a **Disabled** story. Use the Controls panel to change the text (`text`, `title`) and the background color (`backgroundColor`), and to toggle `disabled`.

## 3. Component testing

```bash
npm test
```

Each component has two tests in `Component.tests.tsx`:
1. The component is visible on the page.
2. The background color changes when the component is disabled.

Expected result: 13 suites, 26 tests, all passing.

## 4. Production build (local)

```bash
npm run build
```

## 5. Docker build and deployment

Build the image (the Dockerfile runs the production build and serves it):

```bash
docker build -t yadav_nandish_coding_assignment12 .
```

Run the container, named `Yadav_Nandish_coding_assignment12`, on port 8083:

```bash
docker run -d --name Yadav_Nandish_coding_assignment12 -p 8083:8083 yadav_nandish_coding_assignment12
```

Open http://localhost:8083 (or http://127.0.0.1:8083).

Stop and remove the container when finished:

```bash
docker stop Yadav_Nandish_coding_assignment12
docker rm Yadav_Nandish_coding_assignment12
```

The site files are hosted in the working directory `/Yadav_Nandish_ui_garden` inside the container.

## Project structure

```
src/
  components/
    Button/      Button.tsx, Button.stories.tsx, Button.types.tsx, Button.tests.tsx, index.ts
    Label/       ...same five files
    Text/        ...
    Table/       ...
    TableHeader/ ...
    TableRow/    ...
    TableCell/   ...
    TableFooter/ ...
    Dropdown/    ...
    RadioButton/ ...
    Img/         ...
    HeroImage/   ...
    Card/        ...
  shared/        Shared colors and the disabled-state styles
  App.tsx        Demo page that shows every component
  index.ts       Library exports
.storybook/      Storybook configuration
Dockerfile       Production build and static server on port 8083
```

## Assignment 12 requirements

- **Setup:** Create React App and Storybook are both set up and running.
- **Components:** Button, Label, Text, Table (with Table header, Table row, Table cell, Table footer), Dropdown, Radio button, Img, Hero Image, and Card.
- **Folder structure:** each component folder contains `Component_name.tsx`, `Component_name.stories.tsx`, `Component_name.types.tsx`, `Component_name.tests.tsx`, and `index.ts`.
- **Styling:** every component is styled with styled-components. Layouts use fluid widths and media queries, so they are responsive.
- **Storybook:** controls for default text and background color, plus a default state and a disabled state. A disabled component is greyed out, and its cursor shows `not-allowed`.
- **Tests:** every component has at least two tests (visibility and the disabled background color change).
- **Docker:** the Dockerfile hosts the production build, the container is named `Yadav_Nandish_coding_assignment12`, and the site files are in the `Yadav_Nandish_ui_garden` working directory.
