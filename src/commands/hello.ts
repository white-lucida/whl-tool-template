import {
  APIApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  InteractionResponseType,
} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';

const Hello = (
  interaction: APIApplicationCommandInteraction,
): APIInteractionResponseChannelMessageWithSource => {
  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: `Hello ${interaction.user?.username}`,
    },
  };
};

export { Hello };
