# U30222 - Application Engineering ( University Of Portsmouth )
# Online Scheduling Tool

## Table of Contents

- [Requirement](#requirement)
- [Folder Structure](#folder-structure)
- [Features For Planner Management](#features-for-planner-management)
- [Features For Employee](#features-for-employee)
- [Database Connection](#database-connection)
- [Install Dependencies](#install-dependencies)
- [Run Dev](#run-dev)
- [Login](#login)
- [Dependencies For Backend](#dependencies-for-backend)
- [Dependencies For Frontend](#dependencies-for-frontend)

## Requirement
- Install [NodeJS](https://nodejs.org/en/) Latest Version or Update Latest Version
- [How to install MongoDb on Window](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [VisualStudioCode](https://code.visualstudio.com/)

## Folder Structure

> Folder structure options and naming conventions for software projects
```
OnlineScheduling
├── Config                   # Database & Authentication Config  
|   ├── database.js
|   └── passport.js
├── middleware               # Route Authentication
|   └── auth.js
├── Model                    # Moongose Schema
|   ├── Schedule.js
|   ├── ScheduleDetail.js
|   └── Staff.js
├── public                   # Include Public Files Css, js, images...
|   ├── css
|   |   ├── signin.css
|   |   └── style.css
|   └── js
|   |   ├── Helper.js
|   |   ├── Login.js
|   |   ├── ManagePlanner.js
|   |   ├── PlannerTableConfig.js
|   |   ├── SetVariable.js
|   |   ├── StaffView.js
|   |   ├── User.js
|   |   └── utils.css
├── routes                    # Route Files
|   └── index.js
├── views                     # Client Views
|   ├── Login.ejs
|   ├── Planner.ejs    
|   └── Staff.ejs
├── .gitignore
├── package.json
├── app.js
└── readme.md
```
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
## Install Dependencies

- Open terminal (Ctrl + Shitft + `)
- Type command in terminal
```
$ npm install
```

## Run Dev
```
# serve with hot reload at localhost:3000
$ npm start
```
## Login
> Planner Login
```
# If connect with local database, create planner first manually
email : planner@gmail.com
password : password
```
> Staff Login
```
email : ali@gmail.com
password : password
```

## Dependencies For Backend

- [NodeJS](https://nodejs.org/en/)
- Mongodb
- Moongose
- Passport (Authentication middleware for Node.js)
- Ejs


## Dependencies For Frontend

- Bootstrap (UI)
- Fontawesome
- JQuery
- moment (A JavaScript date library for parsing, validating, manipulating, and formatting dates.)
-lodash ( Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.)
- axios ( Promise based HTTP client for the browser and node.js )   
