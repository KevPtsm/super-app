import { AsyncStorage } from 'react-native';

const AUTH_TOKEN_KEY = 'authToken';

export const login = async (email: string, password: string) => {
    try {
        const response = await fetch('https://yourapi.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        await AsyncStorage.setItem(AUTH_TOKEN_KEY, data.token);
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const register = async (email: string, password: string) => {
    try {
        const response = await fetch('https://yourapi.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        await AsyncStorage.setItem(AUTH_TOKEN_KEY, data.token);
        return data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    } catch (error) {
        console.error('Logout error:', error);
    }
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
        return token;
    } catch (error) {
        console.error('Error retrieving token:', error);
        return null;
    }
};