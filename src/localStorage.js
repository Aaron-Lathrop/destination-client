export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    }
    catch (err) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
        localStorage.removeItem('state');
    } catch (err) {}
};

export const storeState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        console.error("Something went oh so wrong");
    }
};

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
};