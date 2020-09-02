# Steps to reproduce:

1. Create your own `env.js` file in the root directory and add your `privateKey`. See `env-example.js` for reference.
2. Check the following commands:
3. `npm run android` - dev mode, we are seeing this command work with no errors
4. `npm run android -- --variant="Release"` - this is production mode, and is failing
