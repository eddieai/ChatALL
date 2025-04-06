import LangChainBot from "../LangChainBot";
import { ChatOpenAI } from "@langchain/openai";
import store from "@/store/index";

export default class OpenRouterAPIBot extends LangChainBot {
  static _brandId = "openRouterApi"; // Brand id of the bot, should be unique. Used in i18n.
  static _className = "OpenRouterAPIBot";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.openRouterApi.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }

  _setupModel() {
    const chatModel = new ChatOpenAI({
      configuration: {
        basePath: "https://openrouter.ai/api/v1",
      },
      openAIApiKey: store.state.openRouterApi.apiKey,
      modelName: this.constructor._model ? this.constructor._model : "",
      temperature: store.state.openRouterApi.temperature,
      streaming: true,
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.openRouterApi.pastRounds;
  }
}
