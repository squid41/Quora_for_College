import express from 'express';
import mongoose from 'mongoose';

import Notification from '../models/notification.js'
const router = express.Router();

export const getNotifications = async (req, res) => { 

    try {
        const notif = await Notification.find();
       // console.log(comment);
      // console.log(notif);
        res.status(200).json(notif);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createNotification= async (req, res) => {
    const post = req.body;
    const newComment= new Notification({ ...post})

    try {
        await newComment.save();

        res.status(201).json(newComment );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateNotification = async (req, res) => {

    const { id } = req.params;
    const { type, message} = req.body;
    // console.log('updatepost');
    // console.log(id);
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { type, message,  _id: id };
    // console.log(updatedPost);

    await Notification.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}