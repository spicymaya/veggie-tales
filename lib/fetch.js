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
