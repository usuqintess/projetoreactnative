// jest.config.js
module.exports = {
    // ...outras configurações...
    reporters: [
      "default",
      [
        "jest-junit",
        {
          outputDirectory: ".",
          outputName: "jest-junit.xml",
        },
      ],
    ],
  };
  