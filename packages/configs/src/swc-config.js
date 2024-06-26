/* eslint-disable import/no-extraneous-dependencies */

/** @type {import("./swc-config.d.ts").swcConfig} */
export const swcConfig = {
  module: {
    type: "nodenext",
  },
  jsc: {
    parser: {
      syntax: "typescript",
      tsx: false,
      dynamicImport: true,
      decorators: false,
    },
    target: "esnext",
    loose: false,
    minify: {
      compress: {
        ecma: 5,
        comparisons: false,
        inline: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        ecma: 5,
        safari10: true,
        comments: false,
        asciiOnly: true,
      },
    },
  },
};
