import GitHubAPIBot from "./GitHubAPIBot";

export default class GitHubAPIMistralLargeBot extends GitHubAPIBot {
  static _className = "GitHubAPIMistralLargeBot";
  static _model = "Mistral-Large-2411";
  static _logoFilename = "mistral-large-github-logo.png";

  constructor() {
    super();
  }
}
