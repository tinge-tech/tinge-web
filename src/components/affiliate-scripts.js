import React from "react"
import { Helmet } from "react-helmet"

const AffiliateScripts = () => {
  return (
    <Helmet>
      {/* American Eagle - via sovrn */}
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
      </script>
    </Helmet>
  )
}

export default AffiliateScripts
