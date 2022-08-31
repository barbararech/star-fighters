import { connection } from "../dbStrategy/postgres";
import axios from "axios";

async function getUserRepositories(user: string) {
  
  const response = await axios.get(`http://api.github.com/users/${user}/repos`);
  return response.data;
}

// async function findUser(user:string) {
//     return connection.query(
//       `
//       SELECT
//     `,
//       objectValues
//     );
//   }


export const battleRepository = {
  //   findUser,
  getUserRepositories,
};
