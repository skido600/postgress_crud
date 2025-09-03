import {
  CreateUserService,
  getALLuserService,
  getUserByIdservice,
  updateUsserService,
  deleteUserService,
} from "../models/usermodel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await CreateUserService(name, email);
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (_req, res, next) => {
  try {
    const users = await getALLuserService();

    handleResponse(res, 200, "Users fetched successfully", users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdservice(req.params.id);
    if (!user) {
      return handleResponse(res, 404, "User not found");
    }
    handleResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUsserService(req.params.id, name, email);
    if (!updatedUser) {
      return handleResponse(res, 404, "User not found");
    }
    handleResponse(res, 200, "User updated successfully", updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUserService(req.params.id);
    if (!deletedUser) {
      return handleResponse(res, 404, "User not found");
    }
    handleResponse(res, 200, "User deleted successfully", deletedUser);
  } catch (error) {
    next(error);
  }
};
