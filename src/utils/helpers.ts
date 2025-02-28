export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const calculateStreak = (lastActiveDate: Date, currentDate: Date): number => {
    const timeDiff = currentDate.getTime() - lastActiveDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff <= 1 ? 1 : 0; // Returns 1 if active within the last day, otherwise 0
};

export const generateRandomId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};