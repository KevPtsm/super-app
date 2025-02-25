export interface User {
    id: string;
    name: string;
    email: string;
    friends: string[];
    streaks: Streak[];
    missions: Mission[];
}

export interface Streak {
    activity: string;
    count: number;
    lastActive: Date;
}

export interface Mission {
    id: string;
    title: string;
    description: string;
    participants: string[];
    isCompleted: boolean;
}

export interface LeaderboardEntry {
    userId: string;
    score: number;
}

export interface NutritionPlan {
    meals: Meal[];
    goals: string[];
    allergies: string[];
    fasting: boolean;
}

export interface Meal {
    name: string;
    ingredients: string[];
    calories: number;
}

export interface FitnessActivity {
    type: string;
    duration: number; // in minutes
    caloriesBurned: number;
}

export interface MentalHealthActivity {
    type: string;
    duration: number; // in minutes
    date: Date;
}