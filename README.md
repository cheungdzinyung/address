# Address Book Application

![Address Book Image](./src/assets/images/address-book-thumbnail.png)

This is an address book application to allow users to:

- View a list of persons from the address book on the landing page
- Select a person from the list and navigate to the details page
- View the following of the selected person's on the details page:
  - First name
  - Last name
  - Phone number

The data used in the application is generated using the https://randomuser.me/ api.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project will require the following software to be installed to function:
- [Node.js](https://nodejs.org/en/)

To install, please clone this repository into your local computer by running the following command in your terminal: 

1.  
```markdown 
git clone https://github.com/cheungdzinyung/address.git` 
```
2. `cd address`
3. `yarn install`

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Assignment Summary

### Overall Approach

The overall approach to the project was to first understand the minimum requirements of the challenge.

### Implemented Features

Other than the suggested UX hints provided, the additional features implemented included:

- Automatic sorting of data (ascending order by last name)
- Search and filter of summary list (by first or last name)
- Loading screen when fetching data

### Given more time, what else would you have liked to complete and how long it would have taken you?

Given more time I would have liked to complete the following:

- Allow users to custom sort the retrieved list (i.e. by gender, location, nationality, etc.)
  - time to completed (0.5 days)
- Allow users to choose ascending or descending order for sorts
  - time to complete (0.5 days)
- Infinite scroll
  - time to complete (1 day)
- Separate contacts into section grouping by the first letter of the last name
  - time to complete (1 day)
- Include a scrolling side bar to quickly access contacts with the first letter of the last name
  - time to complete (1 day)
- Integrate CI/CD (1 day)

### Given more time, what else would you have done to make the project more robust?

Given more time, I would have like to include the following to make the project more robust:

- Allow the users to manually insert data rather than fetching data from https://randomuser.me/
- Implement a user login/logout function to ensure that only the intended user can access these personal information
- Implement voice search
- A settings menu to allow users to choose and save preferences:
  - Choose to sort contacts by different attributes
  - Choose to sort contacts by ascending or descending order
  - Choose what information to be displayed
