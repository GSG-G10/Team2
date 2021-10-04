exports.logoutRouter = (req, res) => {
  res.clearCookie('authToken').json({ statusCode: 200, message: 'Logged out successfully' });
};
