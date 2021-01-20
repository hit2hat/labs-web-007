const errors = {
    '-1': () => 'Not found',
    '-2': (name) => `Invalid param "${name}"`,
};

module.exports = (id, params) => ({
    code: id,
    message: errors[String(id)](params),
});