import express from 'express';
import mongoose from 'mongoose';

import Question from '../models/question.js';

const router = express.Router();

export const getQuestions = async (req, res) => { 
    // console.log('getComments')

    try {
       // console.log('get comment');
        const question = await Question.find();
       // console.log(comment);
        res.status(200).json(question);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createQuestion = async (req, res) => {
    //console.log('create comment')
    const post = req.body;
    const newQuestion= new Question({ ...post})

    try {
        await newQuestion.save();

        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}