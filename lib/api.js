import NewFood from "../src/js/components/NewFood.jsx";
//Use when need to try catch an exception
const customPromise = response =>
  new Promise(async (resolve, reject) => {
    if (response.ok) {
      const data = await response.json();
      resolve(data);
    } else {
      // debugger;
      let error = await response.json();
      reject(error.message);
    }
  });

export default {
  getFoods: async function() {
    let url = "http://localhost:3000/foods";
    const response = await fetch(url, {
      method: "GET"
    });
    const data = response.json();
    return data;
  },
  getSingleFood: async function(id) {
    let url = "http://localhost:3000/foods/" + id;
    const response = await fetch(url, {
      method: "GET"
    });
    const data = response.json();
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
      redirect: "follow",
      credentials: "same-origin",
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return customPromise(response);
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
