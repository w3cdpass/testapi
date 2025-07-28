const replicax = require('replicax')
const app = replicax();

const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // proceed to the next middleware or route
};
app.get('/',loggerMiddleware,  async (req, res) => {
    try {
        // const users = await User.find({}); // Get all documents from users collection
        res.json({
            count: 23,
            users: {name: 'John Doe', age: 30, email:'df@gmail.com'}
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});