const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const parsedId = parseInt(userId);
  if (isNaN(parsedId)) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === parsedId);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});