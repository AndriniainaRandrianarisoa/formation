const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com"
  },
  {
    id: 4,
    firstName: "Lisa",
    lastName: "Williams",
    email: "lisa.williams@example.com"
  },
  {
    id: 5,
    firstName: "Robert",
    lastName: "Brown",
    email: "robert.brown@example.com"
  }
];

function remove() {
  let idToRemove = Number(prompt("indiquer l id du user a supprimer"));
  console.log("🚀 ~ file: script.js:39 ~ remove ~ idToRemove:", idToRemove);
  if (!idToRemove) {
    alert("veuillez resneigner un chiffre valide");
  } else if (idToRemove == 0) {
    alert("veuillez ne pas laisser le champs vide");
  } else {
    const index = users.findIndex((element) => element.id == idToRemove);
    console.log("🚀 ~ file: script.js:43 ~ remove ~ index:", index);
    if (index == -1) {
      alert(" le user n existe pas ");
    } else {
      users.splice(index, 1);
      console.log("prout", users);
    }
  }
}

function add() {
  let [lastElement] = users.slice(-1);
  let infos = {
    firstName: "",
    lastName: "",
    email: "",
    id: ""
  };
  infos.firstName = prompt("firstName");
  infos.lastName = prompt("lastName");
  infos.email = prompt("email");
  infos.id = lastElement.id + 1;
  users.push(infos);
  alert(`Ajout de ${infos.firstName} ${infos.lastName} reussi `);
}

function update() {
  let idToUpdate = Number(prompt("indiquer l id du user a supprimer"));
  if (!idToUpdate) {
    alert("veuillez resneigner un chiffre valide");
  } else if (idToUpdate == 0) {
    alert("veuillez ne pas laisser le champs vide");
  } else {
    // const element = users.find(element => element.id == idToUpdate)
    // console.log("coucou", element)
    // element.firstName = prompt("firstName")
    // element.lastName = prompt("lastName")
    // element.email = prompt("email")
    // alert(`Ajout de ${element.firstName} ${element.lastName} reussi `);

    const index = users.findIndex((element) => element.id == idToUpdate);
    let infos = {
      firstName: "",
      lastName: "",
      email: ""
    };
    infos.firstName = prompt("firstName");
    infos.lastName = prompt("lastName");
    infos.email = prompt("email");
    users.splice(index, 1, infos);
  }
}

function show() {
  // for(let element of users) {
  //   document.write(users)
  // }
  for (let element of users) {
    document.write(element);
  }
}

{/* <div>
  <h1>Liste des utilisateurs</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>; */}



