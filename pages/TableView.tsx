import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const TableView = () => {
    const onPress = () => {
       console.log('press');
    }

    return (
        <View style={styles.container}>
            <DataTable>
                <DataTable.Header style={styles.head}>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title numeric>Age</DataTable.Title>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title numeric>Age</DataTable.Title>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title numeric>Age</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={styles.row} onPress={onPress}>
                    <DataTable.Cell>Nabendu</DataTable.Cell>
                    <DataTable.Cell>nabendu@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>33</DataTable.Cell>
                    <DataTable.Cell>Nabendu</DataTable.Cell>
                    <DataTable.Cell>nabendu@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>33</DataTable.Cell>
                    <DataTable.Cell>Nabendu</DataTable.Cell>
                    <DataTable.Cell>nabendu@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>33</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Shikha</DataTable.Cell>
                    <DataTable.Cell>shikha@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>105</DataTable.Cell>
                    <DataTable.Cell>Shikha</DataTable.Cell>
                    <DataTable.Cell>shikha@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>105</DataTable.Cell>
                    <DataTable.Cell>Shikha</DataTable.Cell>
                    <DataTable.Cell>shikha@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>105</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Hriday</DataTable.Cell>
                    <DataTable.Cell>hriday@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                    <DataTable.Cell>Hriday</DataTable.Cell>
                    <DataTable.Cell>hriday@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                    <DataTable.Cell>Hriday</DataTable.Cell>
                    <DataTable.Cell>hriday@gmail.com</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 100, paddingHorizontal: 30,backgroundColor: '#fff' },
    head: { height: 44, backgroundColor: 'lavender' },
    row: { height: 40, backgroundColor: 'lightyellow' },
})
export default TableView