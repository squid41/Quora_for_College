import express from 'express';
import mongoose from 'mongoose';

import Comment from '../models/comment.js';

const router = express.Router();

export const getComments = async (req, res) => { 
    // console.log('getComments')

    try {
       // console.log('get comment');
        const comment = await Comment.find();
       // console.log(comment);
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createComment = async (req, res) => {
    //console.log('create comment')
    const post = req.body;
    const newComment= new Comment({ ...post})

    try {
        await newComment.save();

        res.status(201).json(newComment );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}