import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function withRouter( Child ) {
    return ( props ) => {
      const location = useLocation();
      const navigate = useNavigate();
      const URLParams =useParams();
      return <Child { ...props } URLparams={URLParams} navigate={ navigate } location={ location } />;
    }
}