// filepath: /c:/Users/kpiet/Desktop/Startup/super-app/src/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to handle GET requests
export const get = async (endpoint: string) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to handle POST requests
export const post = async (endpoint: string, data: any) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to handle PUT requests
export const put = async (endpoint: string, data: any) => {
    try {
        const response = await apiClient.put(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to handle DELETE requests
export const del = async (endpoint: string) => {
    try {
        const response = await apiClient.delete(endpoint);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Error handling function
const handleError = (error: any) => {
    console.error('API call error:', error);
    // You can implement additional error handling logic here, such as logging to an external service
};