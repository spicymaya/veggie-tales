export default {
  getFoods: async function() {
    let url = "http://localhost:3000/foods";
    const response = await fetch(url, {
      method: "GET"
    });
    //   console.log(response);
    const data = response.json();
    return data;
  },
  getSingleFood: async function(id) {
    let url = "http://localhost:3000/foods/" + id;
    const response = await fetch(url, {
      method: "GET"
    });
    const data = response.json();
    // console.log(data);
    return data;
  },

  deleteFood: async function(id) {
    let url = "http://localhost:3000/foods/" + id;
    const response = await fetch(url, {
      method: "DELETE"
    });
  },
  createFood: async function(data) {
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
  },
  updateFood: async function(data, id) {
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
};
