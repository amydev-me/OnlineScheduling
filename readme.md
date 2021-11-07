# Online Scheduling Tool

## Folder Structure

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── docs                    # Documentation files (alternatively `doc`)
    ├── src                     # Source files (alternatively `lib` or `app`)
    ├── test                    # Automated tests (alternatively `spec` or `tests`)
    ├── tools                   # Tools and utilities
    ├── LICENSE
    └── README.md

## Features For Planner Management

- Management Login
- Add Employee By Using Drag & Drop
- Can swap assigned Employee
- Can delete Employee
- Calendar Can Choose StartingWeek Monday Only
- Add in employee profile with their trained status (AC, F&B and GAS)
- For any new week schedule,
  - Block out the excess manpower slots
  - Assign the manpower according to the rules of the company and the trained status of the employee.
- Alert any job assignments that are illogical, for example
  - allocated both shift 1 and 2 on the same day
  - assign AC trained staff to F&B and vice versa.
- Save the work copy with version control
- Allow the planner a “view only” option for older versions of work copies.
- Published the week schedule and achieve all work copies.
- Allow schedule to be published for employees viewing (work copy is not accessible)
- Display published schedule for a chosen week for all employees by management
- Remembering the published and planning schedules after rebooting the user's computer

## Features For Employee

- Employee Login
- View Published Schedule By Date
- Display published schedule for individual by each employee.


## Database Connection

```
# Can Change Connection in ./config/database.js
# Can connect with another mongodb server, Default connection alredy setup in ./config/database.js
mongoose.connect("mongodb+srv://USERNAME:PASSWORD@cluster0.ogfnn.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority")
```

## Opening Project in VisualStudio Code
```
- Step 1 : Open VisualStudio Code
- Step 2 : Open OnlineSchedulingTool
```

## Install Dependencies

- Open terminal (Ctrl + Shitft + `)
- Type command in terminal
```
# install dependencies
$ npm install
```

## Run Dev
```
# serve with hot reload at localhost:3000
$ npm start
```


## Dependendies For Backend

- Mongodb
- NodeJS
- Ejs
- Passport (Authentication middleware for Node.js)

## Dependendies For Frontend

- Bootstrap (UI)
- Fontawesome
- JQuery
- moment (A JavaScript date library for parsing, validating, manipulating, and formatting dates.)
-lodash ( Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.)
- axios ( Promise based HTTP client for the browser and node.js )   