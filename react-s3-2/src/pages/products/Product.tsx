import { useState } from "react";
import Burger from "../../components/burger/Burger";
import './product.css'

const Product = () => {
    const burgers: string[] = ['Le new yorker', 'Le chicken', 'Le veggie']

    const [burgerChosen, setBurgerChosen] = useState<string>('')

    const [sauce, setSauce] = useState<string[]>([])
   
    const handleOrder = (MyBurger: string) => {
        setBurgerChosen(MyBurger)
    }

    const handleSauce = (mySauce: string): void => {
        // const newSauce = [...sauce]
        // newSauce.push(mySauce)
        // setSauce(newSauce)
        if (!sauce.includes(mySauce)) {
            setSauce([...sauce, mySauce])
        } 
    }

    return (
        <div>
            Je suis le composant parent (page)
            <h4>Vous avez choisi le burger:{burgerChosen}</h4>
            <h4>choisissez une sauce: { sauce.join(', ') }</h4>
            <button onClick={() => handleSauce('ketchup')}>Ketchup</button>
            <button onClick={() => handleSauce('mayo')}>Mayo</button>
            <section>
                {
                burgers.length > 0 && burgers.map((burger, index) => (
                    <>
                        <Burger key={index} burgerName={burger} handleParentClick={handleOrder} />
                    </>
                    ))
                } 
            </section>
            
        </div>
    );
};

export default Product;