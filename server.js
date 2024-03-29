const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  // cookie: {},
  resave: false,
  saveUninitialized: false,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

app.use(session(sess));


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
  sequelize.sync({ force: false });
});
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });