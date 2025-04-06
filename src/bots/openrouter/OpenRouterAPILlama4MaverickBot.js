import OpenRouterAPIBot from "./OpenRouterAPIBot";

export default class OpenRouterAPILlama4MaverickBot extends OpenRouterAPIBot {
  static _className = "OpenRouterAPILlama4MaverickBot";
  static _model = "mistralai/llama-4-maverick";
  static _logoFilename = "llama-huggingchat-logo.png";
  static _isDarkLogo = false;

  constructor() {
    super();
  }
}
