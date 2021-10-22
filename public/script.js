const usersEl = document.querySelector(".users")

fetch("http://localhost:3001/users")
.then((res) => res.json())
.then((data) => {
  console.log(data.items)
  for (let user of data.items) {
    const userEl = document.createElement("div")
    userEl.classList.add("user")
    userEl.innerHTML = `
      <h2>${user.name}</h2>
      <p>${user.email}</p>
    `
    usersEl.append(userEl)
  }
})