module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dhszjtgvw'),
          api_key: env('218593291867378'),
          api_secret: env('Ex2XE9vkYwt537cfM8BjACqqLdE'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });