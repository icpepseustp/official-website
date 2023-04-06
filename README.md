# ICpEP.SE USTP Official Website

![node-current](https://img.shields.io/node/v/gatsby) ![yarn-current](https://img.shields.io/badge/Yarn-v1-blue)

## Preparation

### Prerequisites

- Uses [Node.js](https://nodejs.org/en/download/) (minimum version indicated above) and [Yarn v1](https://classic.yarnpkg.com/lang/en/docs/install/). **Make sure they are installed before cloning**.

- A good IDE such as [VSCode](https://code.visualstudio.com/), [Fleet](https://www.jetbrains.com/fleet/), [Sublime Text](https://www.sublimetext.com/), or [Atom](https://atom.io/).

### Pulling The Repository From Remote

Use the following command to pull the codebase to your local machine:

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

Depending on your hardware and internet speed, it may take a while. You may safely ignore any peer dependency, deprecation, and vulnerability warnings.

## Running the Web App for Local Development

If the prerequisites were done correctly, running the command below should start the app:

```bash
$ yarn start
# ...
# You can now view ustp-icpepse-website in the browser.
# ...
```

Wait for the processes to finish. Depending on your hardware, it may take a while.

### Cleaning Up

Sometimes, _though rarely_, stale data, intermittent errors, and other mean things crop up overtime as you develop even when there is nothing wrong with the code. This is most likely a result of files slowly bloating and clogging up your local repository. If this ever happens, you may have to do a manual cleanup of all cached data:

```bash
$ yarn clean
# ...
# info Successfully deleted directories
# ...
```

## Footnotes

For development flow and other related information, please refer to the [contributing guidelines](CONTRIBUTING.md).

### References

- **Frontend** - [GatsbyJS](https://www.gatsbyjs.com/docs) (powered by [React.js](https://react.dev/learn))
- **Frontend Data Layer** - [GraphQL](https://graphql.org/learn/)
- **Backend and API** - [Decap CMS](https://decapcms.org/docs/intro/) (formerly [Netlify CMS](https://www.netlifycms.org/docs/intro/))
- **Package Manager** - [Yarn v1](https://classic.yarnpkg.com/en/docs)
- **Runtime Environment** - [Node.js](https://nodejs.org/en/docs/)
- **Codestyle Enforcement** - [Prettier](https://prettier.io/docs/en/index.html) and [ESLint](https://eslint.org/docs/user-guide/getting-started)
- **Styling Engine** - [TailwindCSS](https://tailwindcss.com/docs/)

### VSCode Essentials

If you're using VSCode, here are some essential plugins to boost your productivity and efficiency to its full potential when developing for this site:

<details>
  <summary>Click me!</summary>

#### Named as found.

- Babel Javascript
- Better Comments
- Bundle Size
- Code Spell Checker
- Conventional Commits
- EditorConfig for VS Code
- ESLint
- Github Actions, Pull Requests and Issues, Markdown Preview<sup>1</sup>
- GitLens &mdash; Git supercharged
- GraphQL: Inline Operation Execution, Language Feature Support, Syntax Highlighting<sup>1</sup>
- Inline Fold
- IntelliCode
- npm Intellisense
- Output Colorizer
- Path Intellisense
- PostCSS Language Support
- Prettier
- Rewrap
- Tailwind CSS Intellisense
- Todo Tree
- YAML

#### Notes

1. Multiple, separate plugins.

</details>

The entire site was made and configured with these plugins in mind.
