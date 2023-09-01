module.exports = {
  kanban: {
    output: {
      mode: "split",
      target: "src/api/endpoints/kanban.ts",
      schemas: "src/api/model",
      client: "react-query",
      mock: false,
      override: {
        mutator: {
          path: "./src/api/mutator/custom-instance.ts",
          name: "customInstance",
        },
      },
    },
    input: {
      target: "http://localhost:3333/api-json",
    },
  },
};
