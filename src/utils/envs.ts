const _getEnv = (name: string) => {
  const env = Deno.env.get(name);
  if (env === undefined) throw new TypeError(`${name} is must be not empty`);
  return env;
};

const envNames = ['DISCORD_BOT_TOKEN', 'DISCORD_PUBLIC_KEY'] as const;
type EnvNameType = typeof envNames[number];

const getEnv = () => {
  const envObjects = envNames.map((
    name,
  ) => ({ [name]: _getEnv(name) } as { [key in EnvNameType]: string }));
  return Object.assign({}, ...envObjects) as {
    [key in EnvNameType]: string;
  };
};

const setEnv = (name: EnvNameType, value: string) => {
  Deno.env.set(name, value);
};

export { getEnv, setEnv };
