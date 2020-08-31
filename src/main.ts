import * as core from '@actions/core';
import * as github from '@actions/github';
import { sealGifs } from './constants';

async function run(): Promise<void> {
  try {
    const randomSealGif = sealGifs[Math.floor(Math.random() * sealGifs.length)]
    const message = `![Seal Gif](${randomSealGif})`;
    const githubToken = core.getInput('GITHUB_TOKEN')

    const context = github.context
    if (context.payload.pull_request == null) {
      core.setFailed('No pull request found.')
      return
    }
    const pullRequestNumber = context.payload.pull_request.number

    const octokit = new github.GitHub(githubToken);

    octokit.issues.createComment({
      ...context.repo,
      issue_number: pullRequestNumber,
      body: message
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()