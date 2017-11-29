// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: {
    quiz: {
      save: 'http://localhost:3000/admin/tests',
      get: 'http://localhost:3000/admin/tests',
      getOne: 'http://localhost:3000/tests'
    },
    activation: {
      getOne: 'http://localhost:3000/respondent/activation'
    },
    respondents: {
      get: 'http://localhost:3000/admin/respondents',
      save: 'http://localhost:3000/admin/respondents',
    },
    auth: {
      facebook: {
        user: 'http://localhost:3000/auth/facebook/user',
        respondent: 'http://localhost:3000/auth/facebook/respondent',
      }
    }
  },
  facebookAppId: '1933937986877300'
};
