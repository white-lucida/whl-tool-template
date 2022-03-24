import { assert } from 'https://deno.land/std@0.83.0/testing/asserts.ts';
import {
  InteractionResponseType,
} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';
import { handlePing } from '../../src/commands/ping.ts';

Deno.test('handlePing returns type 1 response', () => {
  const res = handlePing();
  assert(res.type === InteractionResponseType.Pong);
});
