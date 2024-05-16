export default function HomePage(props) {
  const {handleSendForm} = props
const hanleSubmitButton = () => {
  handleSendForm()
}
  return (
        <>
            <h1> Home Page </h1>

            <p> Ceci est la page d'accueil</p>
            <button onClick={hanleSubmitButton}>
              click
            </button>
        </>
    )
}