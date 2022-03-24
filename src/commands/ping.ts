import {
  APIInteractionResponsePong,
  InteractionResponseType,
} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';

const handlePing = (): APIInteractionResponsePong => {
  return {
    type: InteractionResponseType.Pong,
  };
};

export { handlePing };
