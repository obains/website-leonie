const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ollie/Documents/leonie/gatsby-startbootstrap-agency/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/ollie/Documents/leonie/gatsby-startbootstrap-agency/src/pages/404.jsx"))),
  "component---src-templates-top-index-jsx": hot(preferDefault(require("/home/ollie/Documents/leonie/gatsby-startbootstrap-agency/src/templates/top-index.jsx")))
}

