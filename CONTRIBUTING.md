# ICpEP.SE USTP Official Website Contributing Guidelines

As we strive to make this as onboarding-friendly as possible, certain rules must be upheld to ensure that future maintainers and contributors can easily and quickly be acquainted with the code. Below are some of the standards. Note, however, that these may change as the app/website and requirements evolves. Suggestions are always welcome through editing this file.

## Branching

**We never work directly with the production branch** ([see explanation below](#pull-requests-and-general-development-flow)). When preparing to make changes to any code, it is recommended, for documentation purposes, to create a branch using a naming convention that is easy to identify.

Each branch name should be prefixed with a Conventional Commit [tag](#commit-messages). Here's a few examples:

- For new features, use `feat/<ISSUE_NUM-SHORT_TITLE>`. The same applies for bugfixes and hotfixes. Example: `feat/127-add-commenting`.
- For changes related to docs, use `docs/<SCOPE>/<SHORT_TITLE>`. Example: `docs/readme/update-links`.
- For refactors, use `refactor/<SCOPE>/<OPTIONAL_SECTION>`. The same applies to the rest of the tags where appropriate. Example: `refactor/index-page` for whole files or `refactor/index-page/hero-section` for sections of code.

You may omit the issue number if it's a feature or there aren't any issue posted regarding the fix, but it is _highly recommended_ you post it yourself so that a discussion with the team members are started first before any changes are applied, especially if you don't know if your fix will conflict with other pieces of code written by other members. This also doubles as a documentation of every changes made for future reference.

## Commit Messages

The first line of all commit messages must be prepended with a specific tag. A `tag` can be one of the following:

- `feat` - For either an enhancement or a new feature. Append a `!` for a backwards-incompatible enhancement or feature.
- `fix` - For a bug fix. Append a `!` for a backwards-incompatible fix.
- `hotfix` - For a critical fix that needs utmost priority (e.g. bugs/typos in the production branch).
- `style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `docs` - Changes to documentation only.
- `build` - Changes to build process only.
- `chore` - For any other changes that aren't user-facing.
- `refactor` - A code change that doesn't affect APIs or user experience.
- `ci` - Changes to CI configuration files and scripts.
- `perf` - A code change that improves performance.
- `test` - Changes to test suites.
- `revert` - Reverts a previous (known good) commit.

The commit message should be structured as follows:

```text
<tag>([optional scope]): <summary>

[optional body]

[optional footer(s)]
```

If you have multiple commits, please squash any closely-related commits into single (main) commit and include all the squashed commit's summaries in the body of the main commit. If you believe an incorrect tag was used or an erratum was made, correct the error, stage the correct changes, if any, and amend using the following command:

```bash
$ git commit --amend
```

For more information, head over to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Pull Requests and General Development Flow

When the changes are ready to be submitted, create a pull request to branch `qa`. Any PRs to the `main` and `staging` branches will be auto-rejected. This ensures any subsequent bugs (or sudden changes) are caught, fixed, and rebased (where appropriate), before any merge happens and the code goes live. The development flow is basically:

```text
<NEW_BRANCH> -> qa -> staging -> main
```

Each and every PR will go through a rigorous process of reviews and approvals by all team members and concerned individuals before it gets merged to `main` (production).

If the PR becomes stale (e.g. when merge conflicts happen), rebase the PR branch with the latest changes from `qa`, thoroughly review any rebased changes, and force-push. Before submitting a pull request, ensure that there is no code style issues by running `yarn stylecheck`. If there are issues found, run `yarn stylefix`, review the changes, and amend the code style fixes.

**NOTE**: This repo adheres to [Semantic Versioning (SemVer)](https://semver.org/).

---

_As always, don't hesitate to ask your team if you don't know what to do or if you need clarifications!_
