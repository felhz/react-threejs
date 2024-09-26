import React__default from "react";
import { A as createCache, S as StyleProvider, B as extractStyle } from "./ssg-server.mjs";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-router-dom";
import "dequal";
import "react/jsx-runtime";
import "react-dom";
import "@mdx-js/react";
import "@react-three/drei";
import "@react-three/fiber";
import "@turf/turf";
import "three";
import "d3";
var ssrPlugin = {
  id: "vite-pages-theme-doc-antd-ssr",
  prepare(app) {
    const cache = createCache();
    return {
      app: /* @__PURE__ */ React__default.createElement(StyleProvider, {
        cache
      }, app),
      extractStyle: () => extractStyle(cache)
    };
  }
};
export {
  ssrPlugin as default
};
