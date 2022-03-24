import {
  APIInteraction,
  APIInteractionResponse,
} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';
import { Hello } from './hello.ts';

const handlers = {
  hello: Hello,
} as {
  [key in string]: (interaction: APIInteraction) => APIInteractionResponse;
};

export { handlePing } from './ping.ts';
export { handlers };
