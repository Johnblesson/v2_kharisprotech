const Message = require('../models/msg.js')

exports.createMessage = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                newMessage
            }
        })
        
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// Get all contact forms
exports.getAllContactForms = async (req, res) => {
    try {
        const contactForms = await Message.find();
        res.status(200).json({
            status: 'success',
            results: contactForms.length,
            data: {
                contactForms
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}