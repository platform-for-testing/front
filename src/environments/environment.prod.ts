export const environment = {
  production: true,
  api: {
    quiz: {
      save: 'http://95.85.54.211:3002/admin/tests',
      get: 'http://95.85.54.211:3002/tests'
    },
    respondents: {
      get: 'http://95.85.54.211:3002/admin/respondents',
      save: 'http://95.85.54.211:3002/admin/respondents',
    },
    auth: {
      facebook: 'http://95.85.54.211:3002/auth/facebook'
    }
  }
};
