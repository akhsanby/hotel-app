import React, { Fragment } from "react";
import { Text, View, Pressable, TextInput } from "react-native";

// components
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";

// utils
import { color, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function EditProfile({ navigation }) {
  const [profile, setProfile] = React.useState([
    { type: "First Name", placeholder: "Akhsan" },
    { type: "Last Name", placeholder: "Bayu" },
    { type: "Email", placeholder: "loram@gmail.com" },
    { type: "Address", placeholder: "Gunung gede" },
  ]);

  const [gender, setGender] = React.useState("");

  const handleRedirectBackToProfile = () => {
    return navigation.navigate("Profile");
  };

  return (
    <Layout>
      {profile.map((item, index) => (
        <Fragment key={index}>
          <Text style={styles.label}>{item.type}</Text>
          <TextInput
            style={styles.input}
            placeholder={item.placeholder}
            placeholderTextColor={color.whiteSecondary}
          />
          <Gap height={15} />
        </Fragment>
      ))}
      <Text style={styles.label}>Gender</Text>
      <Gap height={10} />
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={styles.btn_gender_male(gender)}
          onPress={() => setGender("Male")}
        >
          <Text style={styles.label}>Male</Text>
        </Pressable>
        <Gap width={10} />
        <Pressable
          style={styles.btn_gender_female(gender)}
          onPress={() => setGender("Female")}
        >
          <Text style={styles.label}>Female</Text>
        </Pressable>
      </View>
      <Gap height={20} />
      <Pressable
        style={({ pressed }) => styles.btn_save(pressed)}
        onPress={handleRedirectBackToProfile}
      >
        {({ pressed }) => <Text style={styles.label_save(pressed)}>Save</Text>}
      </Pressable>
    </Layout>
  );
}
