import { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class Shop extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            collections:SHOP_DATA,
        };
    }

    render(){

        const collections = this.state.collections;
        
        return (
            <div className="shopPage">
            {
                
                collections.map(  ({id,...otherCollectionProps}) => (
                    <CollectionPreview id={id} {...otherCollectionProps}/>
                ) )
                
            }   
            </div>
        );
    }
}

export default Shop;