# ICpEP.SE USTP Official Website

![node-current](https://img.shields.io/node/v/gatsby) ![yarn-current](https://img.shields.io/badge/Yarn-v1-blue)

## Preparation

### Prerequisites

- Uses [Node.js](https://nodejs.org/en/download/) (minimum version indicated above) and [Yarn v1](https://classic.yarnpkg.com/lang/en/docs/install/). **Make sure they are installed before cloning**.

- A good IDE such as [VSCode](https://code.visualstudio.com/), [Fleet](https://www.jetbrains.com/fleet/), [Sublime Text](https://www.sublimetext.com/), or [Atom](https://atom.io/).

### Cloning

Use the following command to clone:

```bash
$ git clone https://github.com/icpepseustp/official-website.git icpepseustp-official-website
# Cloning into 'icpepseustp-official-website'...
# ...
```

### Dependencies Installation

To install dependencies on a fresh clone, navigate to the folder and run the following:

```bash
$ yarn install
# ...
# [1/4] Resolving packages...
# [2/4] Fetching packages...
# [3/4] Linking dependencies...
# [4/4] Building fresh packages...
# ...
```

Depending on your hardware and internet speed, it may take a while. You may safely ignore any deprecated and vulnerability warnings.

## Running the Web App for Local Development

If the prerequisites were done correctly, running the command below should start the app:

```bash
$ yarn start
# ...
# $ gatsby develop
# ...
```

Wait for the processes to finish. Depending on your hardware, it may take a while.

## Footnotes

For development flow and other related information, please refer to the [contributing guidelines](CONTRIBUTING.md).

### References

- **Frontend** - [GatsbyJS](https://www.gatsbyjs.com/docs) (powered by [React.js](https://reactjs.org/docs/getting-started.html))
- **Frontend Data Layer** - [GraphQL](https://graphql.org/learn/)
- **Backend and API** - [Netlify CMS](https://www.netlifycms.org/docs/intro/)
- **Package Manager** - [Yarn v1](https://classic.yarnpkg.com/en/docs)
- **Runtime Environment** - [Node.js](https://nodejs.org/en/docs/)
- **Codestyle Enforcement** - [Prettier](https://prettier.io/docs/en/index.html) and [ESLint](https://eslint.org/docs/user-guide/getting-started)
- **Styling Engine** - [TailwindCSS](https://tailwindcss.com/docs/)
