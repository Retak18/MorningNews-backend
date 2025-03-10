require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const cors = require('cors');
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://morning-news-frontend-phi.vercel.app',
        'https://morning-news-fontend-phi.vercel.app',
        ],
    methods: ['GET,POST,PUT,DELETE'],
    allowedHeaders: ['Content-Type,Authorization']
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
