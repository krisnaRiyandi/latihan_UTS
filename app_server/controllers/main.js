//Controller index
const index = (req, res) => {
 	res.render('index', { title: 'Express MVC123' }); 
}; 

module.exports = { index }; 