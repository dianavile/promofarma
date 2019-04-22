import Item1 from '../../images/lajusticia-colageno.jpg'
import Item2 from '../../images/xhekpon-crema.jpg'
import Item3 from '../../images/cerave-crema.jpg'
import Item4 from '../../images/hyabak-solucion.jpg'
import Item5 from '../../images/fotoprotector-isdin.jpg'
import Item6 from '../../images/piz-buin.jpg'
import { ADD_TO_CART, REMOVE_ITEM} from '../actions/action-types/cart-actions'

const initState = {
    cart: [
        {id: 1, quantity: 1},
        {id: 2, quantity: 1},
        {id: 3, quantity: 1},
        {id: 4, quantity: 1},
        {id: 5, quantity: 1},
        {id: 6, quantity: 1}
       ],
    items: [
        {id:1,desc: "Lajusticia colágeno con magnesio 450comp", price:14.35,img:Item1,inventory: 1},
        {id:2,desc: "Xhekpon crema facial 40 mg", price:6.49,img: Item2,inventory: 1},
        {id:3,desc: "Cerave Crema Hidratante 340 ml",price:11.70,img: Item3,inventory: 1},
        {id:4,desc: "Hyabak solución 10 ml", price:9.48,img:Item4,inventory: 1},
        {id:5,desc: "Fotoprotector Isdin Fusion Water SFP 50+ 50ml", price:19.74,img: Item5,inventory: 1},
        {id:6,desc: "Piz Buin Allergy SFP 50+ loción 200ml",price:8.65,img: Item6,inventory: 1}
    ],
    addedItems:[],
    total: 0

}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity = 1 
            return{
                ...state,
                total: state.total + addedItem.price 
                }
        }
  
    else{
            //addedItem.quantity > 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 

       /* function quantityUp(id, val){
            return {type: 'QTY_UP', id, up: val}
          }
          function quantityDown(id, val){
            return {type: 'QTY_DOWN', id, down: val}
          }*/


            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    //INSIDE CART COMPONENT
     /* if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }*/

    /* if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    } */

    /* if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + productos
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - productos
        }
  } */

    return state
}

export default cartReducer
