import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const StreaksScreen = () => {
    const streaksData = [
        { id: '1', activity: 'Learning', streak: 5 },
        { id: '2', activity: 'Exercise', streak: 3 },
        { id: '3', activity: 'Meditation', streak: 7 },
        // Add more streaks as needed
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.activityText}>{item.activity}</Text>
            <Text style={styles.streakText}>Streak: {item.streak} days</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Streaks</Text>
            <FlatList
                data={streaksData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    activityText: {
        fontSize: 18,
    },
    streakText: {
        fontSize: 14,
        color: '#666',
    },
});

export default StreaksScreen;