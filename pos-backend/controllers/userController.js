const createHttpError = require("http-errors");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const register = async (req, res, next) => {
    try {
        const { name, phone, email, password, role } = req.body;

        if (!name || !phone || !email || !password || !role) {
            const error = createHttpError(400, "All fields are required!");
            return next(error);
        }

        const isUserPresent = await User.findOne({ where: { email } });
        if (isUserPresent) {
            const error = createHttpError(400, "User already exist!");
            return next(error);
        }

        const newUser = await User.create({ name, phone, email, password, role });

        res.status(201).json({ success: true, message: "New user created!", data: newUser });

    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            const error = createHttpError(400, "All fields are required!");
            return next(error);
        }

        const isUserPresent = await User.findOne({ where: { email } });
        if (!isUserPresent) {
            const error = createHttpError(401, "Invalid Credentials");
            return next(error);
        }

        const isMatch = await isUserPresent.comparePassword(password);
        if (!isMatch) {
            const error = createHttpError(401, "Invalid Credentials");
            return next(error);
        }

        const accessToken = jwt.sign({ id: isUserPresent.id }, config.accessTokenSecret, {
            expiresIn: '1d'
        });

        const isProduction = config.nodeEnv === 'production';

        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
            httpOnly: true,
            sameSite: isProduction ? 'none' : 'lax',
            secure: isProduction,
        });

        res.status(200).json({
            success: true,
            message: "User login successfully!",
            data: isUserPresent
        });

    } catch (error) {
        next(error);
    }
};

const getUserData = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id);
        res.status(200).json({ success: true, data: user });

    } catch (error) {
        next(error);
    }
};

const logout = async (req, res, next) => {
    try {
        res.clearCookie('accessToken');
        res.status(200).json({ success: true, message: "User logout successfully!" });

    } catch (error) {
        next(error);
    }
};

module.exports = { register, login, getUserData, logout };
