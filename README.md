# Cypress E2E Testing Starter Project

This project is a starter template for end-to-end testing using Cypress. It's designed to quickly set up and run tests for web applications, basing some tests on the Sauce Demo site (https://www.saucedemo.com/).

## Features

- Pre-configured Cypress setup
- Environment-specific configurations (dev, qa, prod)
- Page Object Model implementation
- Custom commands and utilities
- Example tests for login, cart, and checkout functionalities
- Visual regression testing with cypress-visual-regression

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/v3cypress.git
   cd v3cypress
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running Tests

To run tests in different environments:

- Development: `npm run test:dev`
- QA: `npm run test:qa`
- Production: `npm run test:prod`

To open Cypress Test Runner:

- Default (QA): `npm run test:open`
- Development: `npm run test:open:dev`
- QA: `npm run test:open:qa`
- Production: `npm run test:open:prod`

To run visual regression tests:

- Generate base images: `npm run test:visual -- --env type=base`
- Run comparison tests in terminal: `npm run test:visual`

Visual Tests can also be executed normally from cypress UI by selecting the corresponding spec file

## Project Structure

cypress/
├── e2e/
│ ├── tests/
│ │ ├── login.cy.js
│ │ ├── cart.cy.js
│ │ └── login.visual.cy.js
│ └── Cypress Examples/
├── fixtures/
│ ├── login.json
│ └── example.json
├── pages/
│ └── LoginPage.js
└── support/
├── commands.js
├── e2e.js
└── visual-commands.js

## Configuration

The main Cypress configuration is in `cypress.config.js`. Environment-specific settings are defined within this file. Visual regression settings are also configured here.

## Custom Commands

Custom commands can be added in `cypress/support/commands.js`. Visual regression commands are imported in this file.

## Page Objects

Page objects are located in the `cypress/pages/` directory. For example, the `LoginPage` is defined in `cypress/pages/LoginPage.js`.

## Writing Tests

Tests are located in the `cypress/e2e/tests/` directory. Examples of test files include login tests, cart and checkout tests, and visual regression tests.

## Fixtures

Test data is stored in JSON format in the `cypress/fixtures/` directory.

## Visual Regression Testing

Visual regression tests are implemented using the `cypress-visual-regression` plugin. Base images are generated and stored in the `cypress/snapshots/base` directory. Comparison tests generate images in the `cypress/snapshots/actual` directory and compare them with the base images.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Cypress.io for their excellent testing framework
- Sauce Demo for providing a sample application to test against
- cypress-visual-regression for visual regression testing capabilities

For more information on using Cypress, please refer to the [official Cypress documentation](https://docs.cypress.io/).
