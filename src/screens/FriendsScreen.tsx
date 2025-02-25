import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FriendsScreen = () => {
    const navigation = useNavigation();
    const [friends, setFriends] = React.useState([]);

    React.useEffect(() => {
        // Fetch friends data from API or local storage
        const fetchFriends = async () => {
            try {
                // Placeholder for API call
                const response = await fetch('https://api.example.com/friends');
                const data = await response.json();
                setFriends(data);
            } catch (error) {
                console.error('Error fetching friends:', error);
            }
        };

        fetchFriends();
    }, []);

    const handleFriendPress = (friendId) => {
        navigation.navigate('FriendDetail', { friendId });
    };

    const renderFriendItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleFriendPress(item.id)}>
            <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                <Text style={{ color: '#666' }}>{item.activityStatus}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Friends</Text>
            <FlatList
                data={friends}
                renderItem={renderFriendItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default FriendsScreen;