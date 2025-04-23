import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to MyWorld</Text>
			<Button
				title="Go to Profile"
				onPress={() => navigation.navigate('Profile')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
});

export default HomeScreen;
