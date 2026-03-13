# React Cards Practice Project

This is a small React project built to practice creating reusable components and implementing modern CSS effects like hover animations and backdrop blur.  
The project is **not production-level**, but it's a fun playground to explore React, CSS Grid, and interactive UI elements.

---

## Features

- **Reusable Card Component**: Each card displays an image, title, description, price, and additional info.
- **Hover Effects**: Smooth lift and scale animation on hover.
- **Backdrop Blur on Info**: Card information has a blur effect for a modern UI feel.
- **Responsive Layout**: Cards are arranged using CSS Grid for a clean layout.
- **Custom Styling**: Rounded corners, shadows, and subtle animations.

---

## Demo

Here’s a preview of a card with hover effect:

<img src="./docs/preview.png">

---

## Getting Started

### Prerequisites

- Node.js installed
- Basic knowledge of React

### Installation

1. Clone this repository:

```bash
git clone https://github.com/Yashkamal-dev/Travel-UI-Cards.git
```

2. Navigate into the project folder:

```bash
cd Travel-UI-Cards
```

3. Install dependencies:

```bash
npm install
```

## Folder Structure

```bash
├── src/
├── App.css
├── Content/
│ ├── contentBox.module.css
│ └── contentBox.jsx
├── main.jsx
├── App.jsx
├── header/
│ ├── header.module.css
│ └── header.jsx
├── index.css
├── Components/
│ ├── card.jsx
│ └── card.module.css
└── Data/
│ └── data.jsx
├── vite.config.js
├── README.md
├── .gitignore
├── index.html
├── package.json
└── eslint.config.js
```

## Technologies Used

- **React** - for building reusable components
- **CSS Grid** - for layout
- **CSS Transitions & Transform** - for hover animations
- **Backdrop Filter** - for blur effects on card info

## Notes

- This project was mainly for **practice**, so features are minimal.
- Hover animations and blur effects were added to **explore interactive UI techniques**.
- Cards are easily **extendable** to any dataset.
