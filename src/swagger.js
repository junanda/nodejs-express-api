const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger-output.json";

const doc = {
  info: {
    title: "My API",
    description:
      "Documentation automatically generated by the <b>Swagger-autogen</b>",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Endpoints User Management",
    },
  ],
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header",
    },
    petstore_auth: {
      type: "oauth2",
      authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
      flow: "implicit",
      scopes: {
        read_pets: "read your pets",
        write_pets: "modify pets in your account",
      },
    },
  },
};

const endPointFiles = ["./src/index.mjs"];

swaggerAutogen(outputFile, endPointFiles, doc);