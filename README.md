<p align="center">
  <img alt="Seal Of Approval Github Action" src="https://raw.githubusercontent.com/andrewchmr/seal-of-approval/main/Seal.png?token=AKO7TEISX332HIODC33GIJC7J2D2A">
</p>

# Seal Of Approval

Github action that adds random seal GIF when your PR is approved.

Add this action to your workflow, so it will protect your code from any bugs.

[Checkout this sample PR](https://github.com/andrewchmr/seal-of-approval/pull/4)

Graphic by [@kristinychh](https://www.behance.net/vernalbloom1)

## Usage

```yaml
name: CI

# Controls when the action will run. Triggers the workflow on pull request approve
on:
  pull_request_review:
    types: [submitted]
jobs:
  build:
    if: github.event.review.state == 'approved'
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Seal Of Approval
      uses: andrewchmr/seal-of-approval@main
      with:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Contribution

 If you'd like to contribute then just open a PR 🙂
