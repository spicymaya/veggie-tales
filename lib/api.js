export async function getFoods() {
  let url = "http://localhost:3000/foods";
  const response = await fetch(url, {
    method: "GET" // *GET, POST, PUT, DELETE, etc.
  });
  //   console.log(response);
  const data = response.json();
  return data;
}
export async function getSingleFood(id) {
  let url = "http://localhost:3000/foods/" + id;
  const response = await fetch(url, {
    method: "GET" // *GET, POST, PUT, DELETE, etc.
  });
  const data = response.json();
  // console.log(data);
  return data;
}

export async function deleteFood(id) {
  let url = "http://localhost:3000/foods/" + id;
  const response = await fetch(url, {
    method: "DELETE" // *GET, POST, PUT, DELETE, etc.
  });
}
export async function createFood(data) {
  let url = "http://localhost:3000/foods";
  // debugger;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
}
export async function updateFood(data, id) {
  let url = "http://localhost:3000/foods/" + id;
  // debugger;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
}
