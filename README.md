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

This project will require [Node.js](https://nodejs.org/en/) to be installed to run. Please ensure you have installed the latest stable version onto your computer before running the application.

To install the project, please clone this repository into your local computer by running the following command in your terminal:

```
git clone https://github.com/cheungdzinyung/address.git
cd address
yarn install
```

## Development

### Available Scripts

#### Development Mode

In the project directory, you can run:

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### Unit Testing

In the project directory, you can run:

```
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### End-to-End Testing

In the project directory, you can run:

```
yarn e2e-gui
```

Launches cypress test runner for e2e testing. Please see the section about [test runner](https://docs.cypress.io/guides/core-concepts/test-runner) for more information.

#### Production Build

In the project directory, you can run:

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

The application is currently deployed using [Netlify](https://www.netlify.com/) at the following address:
https://address-book-nuvalence-acdy.netlify.app/. The deployment process utilizes CI/CD and is triggered by GitHub repository updates. The production application is distributed using Netlify's CDN. To implement update to the live production site, push the production-ready application to the "Main" branch of the GitHub repository.

## Assignment Summary

### Overall Approach

The overall approach to the project was to first understand the minimum requirements of the challenge which was listed in the `Suggested UX Hint` and `Deliverables` section:

- User should see the list of persons from the address book
- User should be able to select a person from the list and navigate to the details page
- User should be able to see the first name, last name, phone number on the details page
- A README file containing:
  - Deployment/running instructions
  - Assignment summary

After understanding the requirements, a simple mockup was created using [Figma](https://www.figma.com/) in order to understand the various visual and functional components required for the application. The components were divided using the Atomic Design Pattern (atoms, molecules, organisms, etc.).

### Implemented Features

Other than the suggested UX hints provided, the additional features implemented included:

- Automatic sorting of data (ascending order by last name)
- Search and filter of summary list (by first or last name)
- Loading screen when fetching data
- Unit testing with Jest
- E2E testing with Cypress
- CI/CD deployment with Netlify

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

### Given more time, what else would you have done to make the project more robust?

Given more time, I would have like to include the following to make the project more robust:

- CSS theming
- Use additional linting tools (style/commit)
- Implement TypeScript into project to provide stricter type checking and reduce errors
- Implement [Storybook](https://storybook.js.org/) in order to provide designer(s) and client(s) a visual tool to better understand the various levels of components
- Allow the users to manually insert data rather than fetching data from https://randomuser.me/
- Implement a user login/logout function to ensure that only the intended user can access these personal information ([OAuth2](https://oauth.net/2/) and [JWT](https://jwt.io/))
- A settings menu to allow users to choose and save preferences:
  - Choose to sort contacts by different attributes
  - Choose to sort contacts by ascending or descending order
  - Choose what information to be displayed
- Implement voice search
- Separate out the different branches of the GitHub repo to include:
  - Development
  - Main
  - QA
  - Feature
  - Bug Fix
- Implement self-managed cloud infrastructure using AWS giving more control over different functionalities and features such as database integration and integrating test checking before deployment
- A11y implementation to increase accessibility to all people, including those with disabilities or impairments
- i18n implementation to allow for internationalization of contents
