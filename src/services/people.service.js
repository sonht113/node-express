const httpStatus = require('http-status');
const { People } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a people
 * @param {Object} peopleBody
 * @returns {Promise<People>}
 */
const createPeople = async (peopleBody) => {
  return People.create(peopleBody);
};

/**
 * Query for peoples
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPeoples = async (filter, options) => {
  const peoples = await People.paginate(filter, options);
  return peoples;
};

/**
 * Get people by id
 * @param {ObjectId} id
 * @returns {Promise<people>}
 */
const getPeopleById = async (id) => {
  return People.findById(id);
};

/**
 * Update People by id
 * @param {ObjectId} peopleId
 * @param {Object} updateBody
 * @returns {Promise<people>}
 */

const updatePeopleById = async (peopleId, updateBody) => {
  const people = await getPeopleById(peopleId);
  if (!people) {
    throw new ApiError(httpStatus.NOT_FOUND, 'People not found');
  }
  Object.assign(people, updateBody);   
  await people.save();
  return people;
};

/**
 * Delete people by id
 * @param {ObjectId} peopleId
 * @returns {Promise<People>}
 */
const deletePeopleById = async (peopleId) => {
  const people = await getPeopleById(peopleId);
  if (!people) {
    throw new ApiError(httpStatus.NOT_FOUND, 'People not found');
  }
  await people.remove();
  return people;
};

module.exports = {
  createPeople,
  queryPeople,
  getPeopleById,
  updatePeopleById,
  deletePeopleById,
};