import React from "react";
import { View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";

const FixedHeaderTable = () => {
   const state = {
      tableHead: ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"],
      widthArr: [100, 100, 100, 100, 100],
   };

   const generateTableData = (rowCount: number, columnCount: number) => {
      const data = [];

      for (let i = 1; i <= rowCount; i++) {
         const row = [];
         for (let j = 1; j <= columnCount; j++) {
            row.push(`R${i} C${j}`);
         }
         data.push(row);
      }

      return data;
   };

   const data = generateTableData(30, 5);

   return (
      <View style={styles.container}>
         <ScrollView horizontal={true}>
            <View>
               <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                  <Row
                     data={state.tableHead}
                     widthArr={state.widthArr}
                     style={styles.head}
                     textStyle={styles.text}
                  />
               </Table>
               <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                     {data.map((dataRow, index) => (
                        <Row
                           key={index}
                           data={dataRow}
                           widthArr={state.widthArr}
                           style={[styles.row, index % 2 && { backgroundColor: "#ffffff" }]}
                           textStyle={styles.text}
                        />
                     ))}
                  </Table>
               </ScrollView>
            </View>
         </ScrollView>
      </View>
   );
};

const styles = {
   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
   head: { height: 40, backgroundColor: "#f1f8ff" },
   text: { textAlign: "center", fontWeight: "bold" },
   dataWrapper: { marginTop: -1 },
   row: { height: 30 },
};

export default FixedHeaderTable;
