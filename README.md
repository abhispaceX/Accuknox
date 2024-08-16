# CNAPP Dashboard

## Description
CNAPP Dashboard is a React-based web application that provides a customizable dashboard for Cloud Native Application Protection Platform (CNAPP) data visualization. It allows users to view and manage various widgets displaying cloud security information across different categories.

## Features
- Dynamic dashboard with customizable widgets
- Multiple categories for organizing widgets (CSPM, CWPP, Registry Scan)
- Add, remove, and customize widgets
- Search functionality for quick widget access
- Various chart types including pie charts, donut charts, and bar charts


## Tools and Technologies

- **React**: Front-end JavaScript library for building user interfaces
- **Redux**: State management library for JavaScript apps
- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development
- **React Router**: Declarative routing for React applications
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces
- **Chart.js**: Simple yet flexible JavaScript charting library
- **React-Chartjs-2**: React wrapper for Chart.js
- **Axios**: Promise-based HTTP client for the browser and Node.js
- **ESLint**: Static code analysis tool for identifying problematic patterns in JavaScript code
- **Prettier**: Code formatter to ensure consistent code style
- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Start the development server:


## Usage

1. The main dashboard displays widgets organized by category.
2. Use the "Add Widget" button to add new widgets to a category.
3. Customize widget names and content when adding new widgets.
4. Use the search bar to filter widgets by name.
5. Remove widgets using the "×" button on each widget.

## Components

- `Dashboard`: Main component that renders the entire dashboard
- `CategorySection`: Renders a section of widgets for a specific category
- `Widget`: Individual widget component that renders different types of charts or custom content
- `AddWidgetModal`: Modal for adding new widgets to the dashboard
- `Charts`: used Recharts in Charts we have pie charts bar charts doughnt charts
## State Management

This project uses Redux for state management. The main slice is `dashboardSlice`, which handles actions for:
- Adding widgets
- Removing widgets
- Opening/closing the Add Widget modal

## Styling

The project uses Tailwind CSS for styling. Ensure you have Tailwind CSS properly configured in your project.

## Testing

Run the test suite with:

## Screenshots
![dashboard](/image1.png)