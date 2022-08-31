import { battleRepository } from "../repositories/battleRepository.js";

export async function addBattle(firstUser: string, secondUser: string) {
   
  const firstUserRepos = await battleRepository.getUserRepositories(firstUser);
  const secondUserRepos = await battleRepository.getUserRepositories(
    secondUser
  );

  if (!firstUserRepos || !secondUserRepos) {
    throw { code: "NotFound", message: "Este usuário não está cadastrado" };
  }

  const starsFirstUser = await getUserStars(firstUserRepos);
  const starsSecondUser = await getUserStars(secondUserRepos);

  return getBattleResult(
    firstUser,
    starsFirstUser,
    secondUser,
    starsSecondUser
  );
}

async function getUserStars(userRepos: any[]) {
  const starsRepo = userRepos.map((repo) => repo.stargazers_count);
  const starsUser = starsRepo.reduce((previous, current) => previous + current);
  return starsUser;
}

async function getBattleResult(
  firstUser: string,
  starsFirstUser: any,
  secondUser: string,
  starsSecondUser: any
) {
  if (starsFirstUser > starsSecondUser) {
    return {
      winner: firstUser,
      loser: secondUser,
      draw: false,
    };
  }
  if (starsSecondUser > starsFirstUser) {
    return {
      winner: secondUser,
      loser: firstUser,
      draw: false,
    };
  }
  
  return { winner: null, loser: null, draw: true };
}
