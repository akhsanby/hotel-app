import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// components
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

// utils
import { color, windowWidth, windowHeight } from "../../utils";

// styles
import styles from "./styles";

export default function Booking() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirm = (date) => {
    setCheckOutDate(date);
    setDatePickerVisibility(false); // hide date picker
  };

  return (
    <Layout>
      <Text style={styles.label}>Booking Infomation</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={styles.wrapper_input_date}>
          <FontAwesome5
            name="calendar-alt"
            size={windowWidth * 0.05}
            color={color.whitePrimary}
          />
          <Text style={styles.input_date}>
            {checkInDate?.toLocaleDateString() ?? "CheckIn Date"}
          </Text>
        </Pressable>
        <Gap width={10} />
        <Pressable
          style={styles.wrapper_input_date}
          onPress={() => setDatePickerVisibility(true)}
        >
          <FontAwesome5
            name="calendar-alt"
            size={windowWidth * 0.05}
            color={color.whitePrimary}
          />
          <Text style={styles.input_date}>
            {checkOutDate?.toLocaleDateString() ?? "CheckOut Date"}
          </Text>
        </Pressable>
      </View>
      <View style={styles.wrapper_total_guest}>
        <FontAwesome5
          name="user"
          size={windowWidth * 0.05}
          color={color.whitePrimary}
        />
        <TextInput
          style={styles.input_guest}
          keyboardType="numeric"
          placeholder="How many guest?"
          placeholderTextColor={color.whiteSecondary}
          maxLength={2}
        />
      </View>
      <View style={styles.wrapper_rooms_rent}>
        <FontAwesome5
          name="bed"
          size={windowWidth * 0.05}
          color={color.whitePrimary}
        />
        <TextInput
          style={styles.input_contact}
          keyboardType="numeric"
          maxLength={2}
          placeholder="How many rooms?"
          placeholderTextColor={color.whiteSecondary}
        />
      </View>
      <Gap height={20} />
      <Text style={styles.label}>Contact Infomation</Text>
      <View style={styles.wrapper_contact_info}>
        <FontAwesome5
          name="user-alt"
          size={windowWidth * 0.05}
          color={color.whitePrimary}
        />
        <TextInput
          style={styles.input_contact}
          placeholder="John Bayu"
          placeholderTextColor={color.whiteSecondary}
        />
      </View>
      <View style={styles.wrapper_contact_info}>
        <FontAwesome5
          name="envelope"
          size={windowWidth * 0.05}
          color={color.whitePrimary}
        />
        <TextInput
          style={styles.input_contact}
          placeholder="example@mail.com"
          placeholderTextColor={color.whiteSecondary}
        />
      </View>
      <View style={styles.wrapper_contact_info}>
        <FontAwesome5
          name="phone"
          size={windowWidth * 0.05}
          color={color.whitePrimary}
        />
        <TextInput
          style={styles.input_contact}
          keyboardType="numeric"
          placeholder="082140120417"
          placeholderTextColor={color.whiteSecondary}
        />
      </View>
      <Gap height={20} />
      <Pressable style={({ pressed }) => styles.btn_next(pressed)}>
        {({ pressed }) => (
          <Text style={styles.label_btn_next(pressed)}>Continue</Text>
        )}
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
    </Layout>
  );
}
