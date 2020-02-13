import React from 'react'
import styles from './BurgerOrder.module.css'


const burgerOrder = (props) => {
   return(
      <div className={styles.BurgerOrder}>
         <div className={styles.Price}>
            Total price order : ${props.totalPrice.toFixed(2)}
         </div>
         <div>
             <button>proceed</button>
         </div>
      </div>
   );
}


export default burgerOrder