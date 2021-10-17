const httpStatus = require('http-status');
const { WorkFor } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a WorkFor
 * @param {Object} workForBody
 * @returns {Promise<WorkFor>}
 */
const createWorkFor = async (workForBody) => {
  return WorkFor.create(workForBody);
};

/**
 * Query for WorkFor
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWorkFors = async (filter, options) => {
  const worksFor = await WorkFor.paginate(filter, options);
  return worksFor;
};

/**
 * Get works for by id
 * @param {ObjectId} id
 * @returns {Promise<WorkFor>}
 */
const getWorkForById = async (id) => {
  return WorkFor.findById(id);
};

/**
 * Update WorkFor by id
 * @param {ObjectId} workForId
 * @param {Object} updateBody
 * @returns {Promise<workfor>}
 */

const updateWorkForById = async (workForId, updateBody) => {
  const workFor = await getWorkForById(workForId);
  if (!workFor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work not found');
  }
  Object.assign(workFor, updateBody);   
  await workFor.save();
  return workFor;
};

/**
 * Delete workFor by id
 * @param {ObjectId} workForId
 * @returns {Promise<workfor>}
 */
const deleteWorkForById = async (workForId) => {
  const workFor = await getCompanyById(workForId);
  if (!workFor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work not found');
  }
  await workFor.remove();
  return workFor;
};

module.exports = {
  createWorkFor,
  queryWorkFors,
  getWorkForById,
  updateWorkForById,
  deleteWorkForById,
};