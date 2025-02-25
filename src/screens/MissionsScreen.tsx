import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { fetchMissions } from '../services/api';

const MissionsScreen = () => {
    const [missions, setMissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMissions = async () => {
            try {
                const data = await fetchMissions();
                setMissions(data);
            } catch (err) {
                setError('Failed to load missions. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadMissions();
    }, []);

    const renderMissionItem = ({ item }) => (
        <View style={styles.missionItem}>
            <Text style={styles.missionTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Button title="Join Mission" onPress={() => {/* Handle join mission */}} />
        </View>
    );

    if (loading) {
        return <Text>Loading missions...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <FlatList
            data={missions}
            renderItem={renderMissionItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    missionItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    missionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MissionsScreen;