# ICpEP.SE USTP Official Website Contributing Guidelines

As we strive to make this as onboarding-friendly as possible, certain rules must be upheld to ensure that future maintainers and contributors can easily and quickly be acquainted with the code. Below are some of the standards. Suggestions are always welcome through editing this file.

## Branching

**We never work directly with the production branch** ([see explanation below](#pull-requests-and-general-development-flow)). When preparing to make changes to any code, create a branch using the naming convention described below:

- For new features, use `feature/<NEW_FEATURE_SHORT_TITLE>`. Example: `feature/add-commenting`.
- For bugfixes, use `fix/<ISSUE_NUM-SHORT_TITLE>`. Example: `fix/127-component-text-overflow`.
- For hotfixes, use `hotfix/<ISSUE_NUM-SHORT_TITLE>`. Example: `hotfix/99-footer-contact-email-typo`.
- For small, minor changes (e.g. increasing the padding a little), use `patch/<SCOPE>/<SHORT_TITLE>`. Example: `patch/blogs-card/increase-border-radius`.
- For refactors, use `refactor/<SCOPE>`. Example: `refactor/home-page` for whole files or `refactor/homepage/hero-section` for sections of code.
- For changes related to docs, use `docs/<SCOPE>`. Example: `docs/readme` for whole files or `docs/utils/data-validation` for sections of code.
- For dependency updates, use `chore/deps/<PACKAGE_NAME-to-VERSION>`. Example: `chore/deps/gatsby-to-4.6.2`.
- For other chore-related changes, use `chore/<SCOPE>/<SHORT_TITLE>`. Example: `chore/ci/update-tests`.

Anything else that doesn't fit the above must use appropriate, descriptive names.

You may omit the issue number if there aren't any issue posted regarding the fix, but it is _highly recommended_ you post it yourself so that a discussion with the team members are started first before any changes are applied, especially if you don't know if your fix will conflict with other pieces of code written by other members.

## Commit Messages

The first line of all commit messages must be prepended with a specific tag. A `tag` can be one of the following:

- `fix` - For a bug fix. Append a `!` for a backwards-incompatible fix.
- `hotfix` - For a critical fix that needs utmost priority (e.g. bugs/typos in the production branch).
- `patch` - For small, minor changes that isn't necessarily a "bug" fix.
- `feat` - For either an enhancement or a new feature. Append a `!` for a backwards-incompatible enhancement or feature.
- `docs` - Changes to documentation only.
- `build` - Changes to build process only.
- `refactor` - A change that doesn't affect APIs or user experience.
- `ci` - Changes to CI configuration files and scripts.
- `perf` - A code change that improves performance.
- `chore` - For any other changes that aren't user-facing.

The commit message should be structured as follows:

```text
<tag>([optional scope]): <summary>

[optional body]

[optional footer(s)]
```

If you have multiple commits, please squash any closely-related commits into single (main) commit and include all the squashed commit's summaries in the body of the main commit. If you believe an incorrect tag was used or an erratum was made, stage the correct changes (if applicable) and amend using the following command:

```bash
$ git commit --amend
```

For more information, head over to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Pull Requests and General Development Flow

When the changes are ready to be submitted, create a pull request to branch `qa`. Any PRs to the `main` and `staging` branches will be auto-rejected. This ensures any subsequent bugs (or sudden changes) are caught, fixed, and rebased (where appropriate), before any merge happens and the code goes live. The development flow is basically:

```text
<NEW_BRANCH> -> qa -> staging -> main
```

Each and every PR will go through a rigorous process of reviews and approvals by all team members and concerned individuals before it gets merged to `main`.

If the PR becomes stale (e.g. when new merges happen), rebase the code with the latest changes and force-push. Before submitting a pull request, ensure that there is no code style issues by running `yarn stylecheck`. If there are issues found, run `yarn stylefix`.

**NOTE**: This repo adheres to [Semantic Versioning (SemVer)](https://semver.org/).

---

_As always, don't hesitate to ask your team if you don't know what to do or if you need clarifications!_
