// require("typeface-roboto");
const React = require('react');
const Layout = require("./src/components/layout").default;

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  const is404 = props.pageResources.page.path.includes("404")
  return is404 ? (
    <>
      {element}
    </>
  ) :  (
    <Layout {...props}>{element}</Layout>
  )
}
