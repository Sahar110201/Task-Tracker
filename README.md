TASK TRACKER APP

A minimal task management web application built with Next.js. It allows users to add, complete, delete, and filter tasks, while also displaying motivational quotes.

Features:
-Add and delete tasks
-Mark tasks as completed
-Filter tasks (All/Active/Completed)
-Storage using localStorage

Components:

TaskInput.js
-Handles user input for adding new tasks. It manages its own input state and sends task text to the parent component when submitted.

TaskList.js
-Displays the list of tasks. It receives tasks as props and maps them into individual taskItem components.

TaskItem.js
-It allows users to toggle completion and delete a task.

Pages/Routes

Homepage - Main page of the application. It includes:
-Task input
-Task list
-Filter buttons
-Quote API integration

About - displays information about the app and the development team.

Layout includes:
-Navigation bar
-Page container structure

State Management - managed using React hooks in page.js
- tasks: stores all tasks with properties: id, text, and completed.
- filter: controls which tasks are displayed (all, active, completed)
- quote, loading, error: handles API data fetching for motivational quotes.

