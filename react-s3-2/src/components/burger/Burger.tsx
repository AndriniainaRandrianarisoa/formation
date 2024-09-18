import { NavLink } from "react-router-dom";

interface BurgerInterface {
    burgerName: string,
    handleParentClick: (burger: string) => void
} 

const Burger = ({ burgerName, handleParentClick }: BurgerInterface) => {
    const orderBurger = () => {
        handleParentClick(burgerName)
    }
    return (
        <div>
            <i>Je suis le composant enfant</i>
            <img className="w-56" src="https://www.biofournil.com/wp-content/uploads/2021/02/BRIOCHE-BIOFOURNIL_web.jpg" alt="" />
            <h3>{burgerName}</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button onClick={() => orderBurger()}>order</button>
            <NavLink to={`/product/${burgerName}`}><button onClick={() => orderBurger()}>Voir</button></NavLink>
        </div>
    );
};

export default Burger;