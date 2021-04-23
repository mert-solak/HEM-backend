import { Op } from 'sequelize';

export const createSearchQuery = (fields: string[], searchStrings: string[]) => {
  return fields.map((field) => {
    const query = {};

    query[field] = {
      [Op.like]: {
        [Op.any]: searchStrings.map((searchString) => `%${searchString}%`),
      },
    };

    return query;
  });
};

export const createSortQuery = (sortBy: string, sortOrder: string) => {
  const query = [];

  query.push([sortBy, sortOrder]);

  return query;
};
