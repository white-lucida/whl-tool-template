import {
  json,
  serve,
  validateRequest,
} from 'https://deno.land/x/sift@0.4.0/mod.ts';
import {
  APIInteraction,
  InteractionType,
} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';
import * as Commands from '../commands/mod.ts';

import { verifySignature } from '../utils/verify.ts';

// For all requests to "/" endpoint, we want to invoke home() handler.
serve({
  '/': home,
});

// The main logic of the Discord Slash Command is defined in this function.
async function home(request: Request) {
  // validateRequest() ensures that a request is of POST method and
  // has the following headers.
  const { error } = await validateRequest(request, {
    POST: {
      headers: ['X-Signature-Ed25519', 'X-Signature-Timestamp'],
    },
  });
  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  // verifySignature() verifies if the request is coming from Discord.
  // When the request's signature is not valid, we return a 401 and this is
  // important as Discord sends invalid requests to test our verification.
  const { valid, body } = await verifySignature(request);
  if (!valid) {
    return json(
      { error: 'Invalid request' },
      {
        status: 401,
      },
    );
  }

  const interaction: APIInteraction = JSON.parse(body);

  // Discord performs Ping interactions to test our application.
  // Type 1 in a request implies a Ping interaction.
  if (interaction.type === InteractionType.Ping) {
    return json(Commands.handlePing(), { status: 200 });
  }

  // Type 2 in a request is an ApplicationCommand interaction.
  // It implies that a user has issued a command.
  if (interaction.type === InteractionType.ApplicationCommand) {
    const handler = Commands.handlers[interaction.data.name];
    try {
      return json(handler(interaction), { status: 200 });
    } catch (e) {
      return json({ error: e.message }, { status: 500 });
    }
  }

  // We will return a bad request error as a valid Discord request
  // shouldn't reach here.
  return json({ error: 'bad request' }, { status: 400 });
}
