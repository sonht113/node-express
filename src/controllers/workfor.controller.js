const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { workForService } = require('../services');

const createWorkFor = catchAsync(async (req, res) => {
  const workFor = await workForService.createWorkFor(req.body);
  res.status(httpStatus.CREATED).send(workFor);
});

const getWorkFors = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await workForService.queryWorkFors(filter, options);
  res.send(result);
});

const getWorkFor = catchAsync(async (req, res) => {
  const workFor = await workForService.getWorkForById(req.params.workForId);
  if (!workFor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'WorkFor not found');
  }
  res.send(workFor);
});

const updateWorkFor = catchAsync(async (req, res) => {
  const workFor = await workForService.updateWorkForById(req.params.workForId, req.body);
  res.send(workFor);
});

const deleteWorkFor = catchAsync(async (req, res) => {
  await workForService.deleteWorkForById(req.params.workForId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createWorkFor,
  getWorkFors,
  getWorkFor,
  updateWorkFor,
  deleteWorkFor,
};
