export const getUsers = (count = 100) => {
    const url =`https://randomuser.me/api/?results=5000=${count}`;
   return fetch(url)
    .then((response)=> response.json());
}