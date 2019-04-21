import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cardActions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <section className="card" key={item.id}>
                        <div className="card-content">
                            <p>{item.desc}{item.price}€</p>
                            <span className="card-title">{item.title}</span>
                            <button to="/" className="waves-effect waves-light btn light-green add" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add shopping_cart</i></button>
                        </div>
                </section>
            )
        })

        return(
            <section className="container">
                <h4 className="center">Productos</h4>
                <div className="box">
                    {itemList}
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
