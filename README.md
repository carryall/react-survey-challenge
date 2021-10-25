# Nimble Survey

This project is for Nimble React Internal Certification. It was bootstrapped with [Nimble React template](https://github.com/nimblehq/react-templates).

## Development

### Install Dependencies

`yarn`

### Set Up Environment Variables

Create a `.env.local` file from the example file `.env.example` and fill the variable values

### Runs the App

`yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

### Linting

#### Runs All Linting

Run ESLint and Stylelint together in the project.

`yarn codebase:lint`

Fix auto-correctable ESLint and Stylelint errors together in the project.

`yarn codebase:fix`

#### ESLint

Run ESLint in the project.

`yarn lint`

Fix auto-correctable ESLint errors in the project.

`yarn lint:fix`

#### Stylelint

Run Stylelint in the project.

`yarn stylelint`

Fix auto-correctable Stylelint errors in the project.

`yarn stylelint:fix`

### Unit Test (Jest)

To launch, the test runner in the interactive watch mode runs the following command. See the section about 
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn test`

### UI Test (Cypress)

#### Set Up Cypress Environment Variables

Create a `cypress.env.json` file from the example file `cypress.env.json.example` and fill the variable values

#### Run Cypress Test

Before running Cypress test, the server needed to be run.

`yarn start`

To run Cypress tests run the following command. By default, cypress run will run all tests headlessly in the Electron browser. [Check options](https://docs.cypress.io/guides/guides/command-line#cypress-run)

`yarn cypress:run`

To open the Cypress Test Runner run the following command. [Check options](https://docs.cypress.io/guides/guides/command-line#cypress-open)

`yarn cypress:open`

## Other Useful Scripts

In the project directory, you can run:

`yarn build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and
optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn eject`: If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This
command will remove the single build dependency from your project. Instead, it will copy all the configuration files
and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them.
All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
