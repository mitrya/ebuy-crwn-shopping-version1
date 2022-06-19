import React from "react";
import './collections-overview.styles.scss'
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import CollectionPreview from "../collection-preview/collection-preview";
import { selectCollections } from "../../redux/shop/shop.selector";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
const CollectionsOverview = ({collections}) => 
{
    return(
        <div>
                {
                    collections.map(  ({id,...otherCollectionProps}) => (
                        <CollectionPreview key={id} id={id} {...otherCollectionProps}/>
                    ) )
                }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
