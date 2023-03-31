// import axios from 'axios';


// // export const h = "hello";

// const options = {
//   method: 'GET',
//   url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
//   headers: {
//     'X-RapidAPI-Key': 'f26fb09eb3msh3d4336d79d9cef6p1d60b9jsnf70a1205ee86',
//     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//   }
// };

// var cNames = [];

// // axios.request(options).then(function (response) {
   
// //     const dataLength = response.data.data.length;
// //     const dataNeeded = response.data.data;
// // 	for (let i = 0 ; i < dataLength ; i++){
// //         // console.log(dataNeeded[i]["name"]);
// //         name.push(dataNeeded[i]["name"])
// //         // name[i] = dataNeeded[i]["name"];
// //     }

// // }).catch(function (error) {
// // 	console.error(error);
// // });

// // const dataNeed = axios.request(options);

// // console.log(dataNeed);





// function axiosTest() {
//   // create a promise for the axios request
//   const promise = axios.request(options);

//   // using .then, create a new promise which extracts the data
//   const dataPromise = promise.then((response) => response.json())

//   // return it
//   return dataPromise
// }

// // now we can use that data from the outside!
// axiosTest().
// // axiosTest()
// //   .then(data => {
// //       response.data({ message: 'Request received!', data })
// //   })
// //   .catch(err => console.log(err))