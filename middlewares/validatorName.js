const validatorName = (req, res, next) => {
  try {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  return next();
} catch (error) {
  return res.status(500).end();
}
};

module.exports = {
  validatorName,
};