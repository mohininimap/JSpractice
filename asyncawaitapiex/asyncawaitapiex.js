
// function fetchFromAPI() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("API data");
//       }, 1000); 
//     });
//   }
 
//   async function fetchDataFromAPI() {
//     try {
//       console.log("Fetching data from API...");
//       const apiData = await fetchFromAPI(); 
//       console.log("API data:", apiData);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   fetchDataFromAPI();
  
// ------------------------------------------------
async function fetchUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function main() {
    const users = await fetchUsers();
    console.log("Users:", users);
  }
  
  main();
  