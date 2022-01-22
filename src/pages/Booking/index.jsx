import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";

// redux
import { useDispatch } from "react-redux";
import { addToHistory } from "../../redux/userSlice";

// components
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

// utils
import { color, windowWidth, windowHeight } from "../../utils";

// styles
import styles from "./styles";

export default function Booking({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { hotel } = route.params;

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState();
  const [guest, setGuest] = useState();
  const [room, setRoom] = useState();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const handleConfirm = (date) => {
    setCheckOutDate(date);
    setDatePickerVisibility(false); // hide date picker
  };

  function handleBooking() {
    dispatch(
      addToHistory({
        hotelId: hotel.hotelId,
        hotelName: hotel.name,
        starRating: hotel.starRating,
        images: hotel.images[0].url,
        hotelAddress: hotel.address,
        checkInDate,
        checkOutDate,
        guest,
        room,
        fullname,
        email,
        phoneNumber,
      })
    );
    return navigation.navigate("History");
  }

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
          onChangeText={(text) => setGuest(text)}
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
          onChangeText={(text) => setRoom(text)}
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
          onChangeText={(text) => setFullname(text)}
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
          onChangeText={(text) => setEmail(text)}
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
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <Gap height={20} />
      <Pressable
        style={({ pressed }) => styles.btn_next(pressed)}
        onPress={handleBooking}
      >
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
