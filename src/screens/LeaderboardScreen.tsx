import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchLeaderboardData } from '../services/api';

const LeaderboardScreen = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLeaderboardData = async () => {
            try {
                const data = await fetchLeaderboardData();
                setLeaderboardData(data);
            } catch (err) {
                setError('Failed to load leaderboard data');
            } finally {
                setLoading(false);
            }
        };

        loadLeaderboardData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leaderboard</Text>
            <FlatList
                data={leaderboardData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.rank}>{item.rank}</Text>
                        <Text style={styles.username}>{item.username}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    rank: {
        fontSize: 18,
    },
    username: {
        fontSize: 18,
    },
    points: {
        fontSize: 18,
    },
});

export default LeaderboardScreen;