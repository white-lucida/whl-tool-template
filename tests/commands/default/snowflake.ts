import Snowflake from 'https://deno.land/x/snowflake@v1/mod.ts';

const getSnowFlake = () => {
  const snowflake = new Snowflake();

  return snowflake.generate();
};

export { getSnowFlake };
