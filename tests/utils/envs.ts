import { getEnv, setEnv } from '../../src/utils/envs.ts';
import {
  assert,
  assertThrows,
} from 'https://deno.land/std@0.83.0/testing/asserts.ts';

Deno.test('getEnv throws TypeError when envs are not set but getEnv is called', () => {
  assertThrows(() => getEnv(), TypeError, 'is must be not empty');
});

Deno.test('setEnv sets env', () => {
  setEnv('DISCORD_BOT_TOKEN', 'hoge');
  assert(Deno.env.get('DISCORD_BOT_TOKEN') === 'hoge');
});

Deno.test('doesn\'t throw TypeError', () => {
  setEnv('DISCORD_BOT_TOKEN', 'hoge');
  setEnv('DISCORD_PUBLIC_KEY', 'huga');

  const env = getEnv();
  assert(env.DISCORD_BOT_TOKEN === 'hoge');
  assert(env.DISCORD_PUBLIC_KEY === 'huga');
});
