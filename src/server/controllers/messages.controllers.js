const mongoose = require('mongoose');
const express = require('express');
const Comment = require('../data/db.js').Comment;
const User = require('../data/db.js').User;

function handleError(res, err) {
    console.log(err);

    return res.send(500, { error: 'Ops, something went wrong!' });
}

module.exports.getComments = function getComments(req, res) {

};

module.exports.postComment = function postComment(req, res) {


    res.send(200);
};
