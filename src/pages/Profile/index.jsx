import React from "react";
import { Text, View, Modal, Pressable, Picker } from "react-native";

// icons
import { AntDesign } from "@expo/vector-icons";

// components
import Layout from "../../components/Layout";

// utils
import { color, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function Profile() {
  const [accountData, setAccountData] = React.useState([
    { type: "First Name", value: "Akhsan" },
    { type: "Last Name", value: "Bayu" },
    { type: "Email", value: "loram@gmail.com" },
    { type: "Address", value: "Lorem" },
    { type: "Gender", value: "Male" },
  ]);

  return (
    <Layout>
      <Text style={styles.heading}>Settings Page</Text>
      <View style={styles.card}>
        <View style={styles.title_container}>
          <Text style={styles.card_title}>My Account</Text>
          <Pressable>
            {({ pressed }) => (
              <AntDesign
                name="edit"
                size={windowWidth * 0.07}
                color={pressed ? color.red : color.whitePrimary}
              />
            )}
          </Pressable>
        </View>
        {accountData.map((item, index) => (
          <View key={index} style={styles.account_data}>
            <Text style={{ color: color.whitePrimary }}>{item.type}</Text>
            <Text style={{ color: color.whitePrimary }}>{item.value}</Text>
          </View>
        ))}
        <Pressable style={({ pressed }) => styles.logout(pressed)}>
          {({ pressed }) => (
            <Text style={styles.text_logout(pressed)}>Logout</Text>
          )}
        </Pressable>
      </View>
    </Layout>
  );
}

function Hr() {
  return <View style={styles.horizontal_line} />;
}

function GenderPicker() {
  const [selectedValue, setSelectedValue] = React.useState("male");

  return (
    <View style={{ flexDirection: "column" }}>
      <Text>Gender</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
    </View>
  );
}
