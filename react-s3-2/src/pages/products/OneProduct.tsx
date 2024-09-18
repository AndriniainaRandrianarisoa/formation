import { NavLink, useParams } from "react-router-dom";


const OneProduct = () => {
  const {name} = useParams()

  console.log("🚀 ~ OneProduct ~ burgerName:", name)


    return (
        <div>
            <div>
            <i>Detail d'un burger</i>
            <img className="w-56" src="https://www.biofournil.com/wp-content/uploads/2021/02/BRIOCHE-BIOFOURNIL_web.jpg" alt="" />
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit.</p>
            <NavLink to={`/product`}><button>Retour</button></NavLink>

        </div>
        </div>
    );
};

export default OneProduct;