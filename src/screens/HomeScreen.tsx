import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LearningModule from '../components/Learning';
import WorkModule from '../components/Work';
import SportsModule from '../components/Sports';
import NutritionModule from '../components/Nutrition';
import MentalHealthModule from '../components/MentalHealth';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome to Your Super-App</Text>
            <Text style={styles.subtitle}>Overview of Your Progress</Text>
            <LearningModule />
            <WorkModule />
            <SportsModule />
            <NutritionModule />
            <MentalHealthModule />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 16,
    },
});

export default HomeScreen;