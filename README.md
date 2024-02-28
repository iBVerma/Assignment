# Instructions to Run Locally

1. Download the Repository or Clone it and open it in VS code.
2. Enter cd Assigment in terminal to go into the main repo
3. Type npm install or yarn to install the required node modules
4. Type npm run dev or yarn run dev in terminal to start the development.


# Architecture

This application, TaskManager, is built using React, a popular JavaScript library for building user interfaces. Here's a brief explanation of its architecture:

1. Components: The application is divided into reusable components like TaskInput, TaskList, and TaskItem. These components are responsible for rendering specific parts of the user interface and managing their own state.

2. State Management: React's useState hook is used to manage the application's state. The main state variables include tasks (an array of task objects), newTask (an object representing the task being added), filterStatus (the status filter applied to tasks), and draggingIndex (the index of the task being dragged during drag and drop).

3. Local Storage: The application uses localStorage to persist tasks across page refreshes. When tasks are added, updated, or removed, the localStorage is updated accordingly. This ensures that tasks remain saved even if the user closes or refreshes the browser window.

4. Event Handling: Event handlers are used to capture user interactions such as adding a task, removing a task, changing the status of a task, and dragging tasks to reorder them. These events trigger state updates, causing components to re-render with the updated data.

5. Conditional Rendering: The application conditionally renders components and elements based on certain conditions. For example, an error message is displayed if the user tries to add a task without filling out both the task name and date fields. Similarly, tasks are filtered based on the selected status filter.

6. Styling: Styling is applied using CSS classes and stylesheets to ensure a visually appealing and consistent user interface. Styles are defined for components, elements, and states (e.g., dragging, completed tasks).

Overall, the architecture follows React's component-based approach, with state management, event handling, local storage, and conditional rendering being key aspects of the application's functionality.
