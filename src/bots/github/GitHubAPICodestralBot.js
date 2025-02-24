import GitHubAPIBot from "./GitHubAPIBot";

export default class GitHubAPICodestralBot extends GitHubAPIBot {
  static _className = "GitHubAPICodestralBot";
  static _model = "Codestral-2501";
  static _logoFilename = "mistral-nemo-github-logo.png";

  constructor() {
    super();
  }
}
