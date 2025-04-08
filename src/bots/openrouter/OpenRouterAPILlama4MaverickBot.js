import OpenRouterAPIBot from "./OpenRouterAPIBot";

export default class OpenRouterAPILlama4MaverickBot extends OpenRouterAPIBot {
  static _className = "OpenRouterAPILlama4MaverickBot";
  static _model = "meta-llama/llama-4-maverick:free";
  static _logoFilename = "meta-logo.svg";
  static _isDarkLogo = false;

  constructor() {
    super();
  }
}
