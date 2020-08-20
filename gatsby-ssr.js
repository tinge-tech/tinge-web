const React = require("react")
const wrapRootElement = require("./src/components/wrap-root-element")
const wrapPageElement = require("./src/components/wrap-page-element")

exports.wrapRootElement = wrapRootElement
exports.wrapPageElement = wrapPageElement

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script type="text/javascript">
      {`var vglnk = {key: '5af7419e0265b7d7bda6a92cee94d0f2'};
        (function(d, t) {
            var s = d.createElement(t);
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//cdn.viglink.com/api/vglnk.js';
            var r = d.getElementsByTagName(t)[0];
                r.parentNode.insertBefore(s, r);
        }(document, 'script'));`}
    </script>,
    <meta
      name="fo-verify"
      content="3501b278-79d9-4451-9dee-70e22090600d"
    ></meta>,
  ])
}
