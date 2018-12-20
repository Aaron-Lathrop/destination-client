export const CREATE_USER = 'CREATE_USER';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const createUser = (username, password, name, email) => ({
    type: CREATE_USER,
    username,
    password,
    name,
    email
});

export const logIn = (user) => ({
    type: LOG_IN,
    user
});

export const logOut = () => ({
    type: LOG_OUT
});