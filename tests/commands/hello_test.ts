import { assertEquals } from 'https://deno.land/std@0.83.0/testing/asserts.ts';
import { commandInteraction } from './default/interaction.ts';
import { Hello } from '../../src/commands/hello.ts';

Deno.test('handlePing returns type 1 response', () => {
  const res = Hello(commandInteraction);
  assertEquals(res.data, {
    content: `Hello ${commandInteraction.user?.username}`,
  });
});
