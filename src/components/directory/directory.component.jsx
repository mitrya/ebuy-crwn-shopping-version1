import {React}from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from 'reselect'
import { connect } from "react-redux";

const Directory = ({sections}) =>
{
        return (
              <div className="directory-menu">
                  {sections.map(
                    ({ title, imageUrl, id, size, linkUrl }) => (
                      <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} size={size} />
                    )
                  )}
                </div>
        );

}

const mapStateToProps = createStructuredSelector({
 sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);