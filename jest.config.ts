import type { Config } from 'jest';

const config: Config = {
  verbose: false,
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest',
  },
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  forceExit: true,
  detectOpenHandles: true,
};

export default config;
