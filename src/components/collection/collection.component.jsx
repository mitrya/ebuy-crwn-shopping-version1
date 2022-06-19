import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import './collection.styles.scss'
import { useParams} from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "../../withRouterHOC";

const CollectionPage = ({collection}) => {

    const {title,items} =collection
    const {collectionId} = useParams();
    console.log(collection)
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div> 
    )
}

const mapStateToProps = (state,ownProps)=>({
    collection: selectCollection(ownProps.URLparams.collection)(state)
})

// const mapStateToProps = (state,ownProps)=> {
// //    console.log(ownProps.URLparams.collection)
// //    console.log(selectCollection(ownProps.URLparams.collection)(state))
//     return {    
//             collection: selectCollection(ownProps.URLparams.collection)(state)
//         }
    
// }

export default withRouter(connect(mapStateToProps)(CollectionPage));