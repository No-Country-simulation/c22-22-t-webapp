import subjects from '../mocks/subjects/getAll.json';

export const getAll = () => {
  return subjects;
}

export const getOne = async (id) => {
  const {default: data} = await import(`../mocks/subjects/getOne/getOne_${id}.json`);
  return data;
}



