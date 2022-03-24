import {
  APIApplicationCommandInteraction,
  ApplicationCommandType,
  InteractionType,
} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';
import { getSnowFlake } from './snowflake.ts';

const commandInteraction: APIApplicationCommandInteraction = {
  id: getSnowFlake(),
  application_id: getSnowFlake(),
  type: InteractionType.ApplicationCommand,
  token: '',
  version: 1,
  data: {
    type: ApplicationCommandType.ChatInput,
    name: '',
    id: getSnowFlake(),
  },
  user: {
    id: getSnowFlake(),
    username: 'deno-test',
    discriminator: '0000',
    avatar: null,
  },
  locale: 'ja',
  channel_id: getSnowFlake(),
};

export { commandInteraction };
