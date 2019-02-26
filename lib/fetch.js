export function getFoods() { 
    let url = "http://localhost:3000/foods";
    const response = fetch(url, {
        method: "GET" // *GET, POST, PUT, DELETE, etc.
    });
    // console.log(response);
    return response;   
}
export function getSingleFood(id) { 
    let url = "http://localhost:3000/foods/"+ id;
    const response = fetch(url, {
        method: "GET" // *GET, POST, PUT, DELETE, etc.
    });
    // console.log(response);
    return response;   
}


   
    
