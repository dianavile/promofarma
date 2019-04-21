import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cardActions'
import Recipe from './Recipe'

class Cart extends Component{

    //Remove the item 
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //Add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //Substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>{item.price} €</b></p> 
                                        <button to="/" className="waves-effect waves-light btn grey darken-1 add" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add shopping_cart</i></button>
                                    </div>                                    
                                </li>                       
                    )
                })
            ):

             (
                <p> 0 productos.</p>
             )
       return(
           <section className="content-section container">
           <div className="container">
            <h5> MI CESTA:</h5>
            <span style={{ whiteSpace: 'pre-wrap' }}>{}</span>
                <div className="cart">
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
        </section>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
