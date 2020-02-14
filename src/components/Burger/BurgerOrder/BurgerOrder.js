import React from 'react'
import styles from './BurgerOrder.module.css'


const burgerOrder = (props) => {
   return(
      <div className={styles.BurgerOrder}>
         <div className={styles.Price}>
            Total price order : ${props.totalPrice.toFixed(2)}
         </div>
         <div>
             <button onClick={props.sgihowModal} className={styles.Proceed}>proceed to checkout</button>
         </div>
      </div>
   );
}


export default burgerOrder