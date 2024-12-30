const User = require('../models/models.js');

exports.findAll = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.render('index', { users: users });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }     
}

exports.findOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('update', { user: user });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}


exports.create = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    };
}

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedUser) {
            res.status(200).json({ message: 'User updated successfully', user: updatedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
