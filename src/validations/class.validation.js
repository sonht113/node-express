const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createClass = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        numberStudent: Joi.number().required(),
    }),
};

const getClass = {
    params: Joi.object().keys({
        classId: Joi.string().custom(objectId),
    }),
};

const updateClass = {
    params: Joi.object().keys({
        classId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            numberStudent: Joi.number()
        })
        .min(1),
};

const deleteClass = {
    params: Joi.object().keys({
        classId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createClass,
    getClass,
    updateClass,
    deleteClass,
};