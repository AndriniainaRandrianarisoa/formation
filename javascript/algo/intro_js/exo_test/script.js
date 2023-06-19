
const resto = ["chinois cesson", "buffalo" ]

const active = () => {
  const choice = getRandomInt(resto.length)
  alert(`votre choix est ${resto[choice]}`)

}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

