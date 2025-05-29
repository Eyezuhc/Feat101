const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'html')));

// Route for splash screen
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'splash_screen.html'));
});

// Route for sign-in screen
app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'login.html'));
});

// Route for profile screen
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'prof.html'));
});

// Route for home screen
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'home.html'));
});

// Route for search screen
app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'search.html'));
});

// Route for account screen
app.get('/account', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'acc.html'));
});

// Route for Settings screen
app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'appearance.html'));
});

// Route for change password screen
app.get('/change-password', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'change_pass.html'));
});

// Route for gender screen
app.get('/gender', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'gender.html'));
});

// Route for meals screen
app.get('/meals', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'meal_select.html'));
});

// Route for meal plan screen
app.get('/meal plan', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'meal_plan.html'));
});

// Route for security screen
app.get('/security', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'sec.html'));
});

// Route for plan screen
app.get('/plan', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'plans.html'));
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
