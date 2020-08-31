# Seal Of Approval

Github action that adds random seal GIF when your PR is approved.

Add this action to your workflow, so it will protect your code from any bugs.

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
