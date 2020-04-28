# PPE Guide Web App

react repo for the Medic Bleep PPE Guide App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Development

## Running the app locally

1. Install js dependencies: `yarn install`
2. Run the project: `yarn start`

## Structure

We're using `redux` for state management and `redux-saga` for asynchronous actions e.g. api requests.

The bulk of the code is in the `app` directory.

| location       | contents                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| src/App.js     | Entrypoint for the app                                                                                                       |
| src/api        | API interaction                                                                                                              |
| src/components | lower level components, e.g. buttons                                                                                         |
| src/screens    | components representing entire screens within the app, where integration with redux would happen                             |
| src/config     | app-wide config - things like an api host, colors, etc. Configuration of the redux store and, in dev, tools like Reactotron. |
| src/state      | redux reducers/actions/selectors. Combined in `index.js`                                                                     |
| src/sagas      | `redux-saga` sagas, forked from the root saga in `index.js` to run in parallel.                                              |

## Config

Global app config is in `app/config/index.js`. There are some defaults which are overridden by the contents of `local.js` and either `development.js` or `production.js`, in that order, depending on if the app is being run locally or built as a release.

`local.js` is intended for overriding config values without committing them. Things like enabling/disabling storybook locally or secret tokens.

`production.js` is applied last, so local values for these won't have an effect.

#### Possible config values

**TODO** Update these as config values are established

| value              | purpose                                           |
| ------------------ | ------------------------------------------------- |
| `colors`           | The colors used throughout the app                |
| `storybookEnabled` | Should storybook run? (not currently implemented) |

## Redux

**TODO** Setup redux

Our typical redux setup would be done in `config/store.js`. This would setup the redux store, add middleware (such as redux-saga and redux-persist).

We would then add the react-redux `Provider` to `app/App.js`.

We have included `@reduxjs/toolkit` which speeds up development by allowing us to abstract away most of the typical boilerplate code associated with setting up and using redux. For example:

- Includes a convenience function for configuring the store
- Has the concept of a `slice` which incorporates reducers and action creators

It's worth reading through the [toolkit docs](https://redux-toolkit.js.org/) for more details

## Storybook

**TODO** Implement

[Storybook](https://storybook.js.org/) allows us to list example usages of our components with various props so that we can quickly iterate on them without manually navigating to get the app into a useful state.

Run the storybook server using `yarn storybook`, then start the app with `storybookEnabled` set to `true` in `app/config/local.js`. Storybook takes over the app UI with a component browser.

## Dev Tools

**TODO** Implement

Add a suitable suggested develompent tool or tools. List what you use and why you use it.

## Tests

Run the tests with `yarn test`. We use a mixture of snapshot tests for making sure we don't make any unintentional changes to components or redux state mutations, and unit tests elsewhere.

## Code style

We use `prettier` for code formatting.

## Git Flow

The branching model used in this repo is based on [git
flow](https://nvie.com/posts/a-successful-git-branching-model/)

# Build & Deploy

**TODO** document how to build and deploy
