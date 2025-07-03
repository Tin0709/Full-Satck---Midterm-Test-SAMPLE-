Problem 1
For this problem, you must use plain HTML/CSS/JavaScript to solve it. Create a folder p1 and four files inside it: index.html, style.css, script.js, and screenshot.png (explained below). Link to style.css and script.js from index.html.

Create an HTML form with the following fields:

- A text field to store a user's first name

- A button "Check" that has an event listener for the click event. The listener uses the fetch API to access the genderize.io service (the fetch URL is like: api.genderize.io/?name=Alice) and display the gender of the entered name. The gender result must be displayed in an <h2>. If the gender result is "male", display the result in the blue background color. Otherwise, display the result in the pink background color.

Test your work using your real first name. Capture a screenshot showing the result, name it screenshot.png, and place it inside the p1 folder.

-----

For Problem 2 and Problem 3, use a single React app only. The main component of Problem 2 is App2, and the main component of Problem 3 is App3. Ensure you only submit the required files/folders, not the whole app. Inside your app root folder, place two files, screen2.png, and screen3.png, showing the result of Problem 2 and Problem 3 (explained below).

Only the below dependencies are valid in package.json:

react
react-dom
bootstrap

Problem 2
You have an array of students like this. For the last student, use your real first name.

[
  {id: 1, name: 'Alice', GPA: 3.2},
  {id: 2, name: 'Bob', GPA: 2.4},
  {id: 3, name: 'Carol', GPA: 1.8},
  {id: 4, name: 'YourRealFirstName', GPA: 3.9}
]
Create a React component to display all student data in a table. The table has four columns: id, name, GPA, and grade. Grades can be decided from GPAs:

GPA < 2: NN

GPA >= 2 AND GPA < 3: OK

GPA >= 3: HD

Capture a screenshot (with your first name), name it screen2.png, and place it inside the app root folder.

Problem 3
Create a React component to manage the learning results of a student. The learning result of a student consists of several courses and their scores (numbers). Use a table of three columns to display the learning result like this:

Course name	Score	
_____________________________________
Full Stack | Development	| 2	Delete
Algorithms	| 3	Delete
Database | Applications |	4	Delete
_____________________________________
Average Score: 3

-----

The Average score is calculated based on the current scores.

The Delete button on each row lets you remove the corresponding course.

Below the table, display two text fields courseName and courseScore and a button Add. These fields let you enter the information for a new course and add it to the learning result. After adding a new course, the learning result table and the average score must be updated automatically.

There must be a course whose name is your real first name.

Capture a screenshot (with your first name), name it screen3.png, and place it inside the app root folder.

Note: Course names are unique. But you don't need to validate this when inserting a new course.
