import React, { Fragment } from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";

// components
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";

// icons
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// utils
import { color, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function Detail() {
  const facilities = [
    { text: "Parking", nameIcon: "parking" },
    { text: "Wifi", nameIcon: "wifi" },
    { text: "Food", nameIcon: "utensils" },
    { text: "24 h support", nameIcon: "headset" },
  ];

  return (
    <Fragment>
      <Image style={styles.image} />
      <ScrollView>
        <Layout paddingHorizontal={20}>
          {/* section hotel name */}
          <View>
            <Text style={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </Text>
            <Gap height={13} />
            <View style={styles.icon_star_wrapper}>
              {[1, 2, 3, 4, 5].map((index) => (
                <AntDesign
                  key={index}
                  name="star"
                  size={windowWidth * 0.05}
                  color={color.orange}
                />
              ))}
            </View>
            <Gap height={9} />
            <Text style={styles.text_price}>$ 290 / night</Text>
          </View>
          {/* end section hotel name */}

          <Gap height={25} />

          {/* section about place */}
          <View>
            <Text style={styles.subtitle}>About Place</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              optio, eaque sint eligendi sed inventore neque ut doloribus porro
              reprehenderit maiores eveniet nobis! Illum impedit molestias
              adipisci cum alias odio.
            </Text>
          </View>
          {/* end section about place */}

          <Gap height={25} />

          {/* section facilities */}
          <View>
            <Text style={styles.subtitle}>Facilities</Text>
            <ScrollView horizontal={true}>
              {facilities.map((item, index) => (
                <View style={styles.icon_facility_wrapper} key={index}>
                  <FontAwesome5
                    name={item.nameIcon}
                    size={24}
                    color={color.red}
                  />
                  <Gap width={5} />
                  <Text style={styles.text_facility}>{item.text}</Text>
                  <Gap width={15} />
                </View>
              ))}
            </ScrollView>
          </View>
          {/* end section facilities */}
        </Layout>
      </ScrollView>

      {/* section button */}
      <View style={styles.btn_wrapper}>
        <Pressable style={({ pressed }) => styles.btn_back(pressed)}>
          {({ pressed }) => <Text style={styles.text_back(pressed)}>Back</Text>}
        </Pressable>
        <Pressable style={({ pressed }) => styles.btn_booking(pressed)}>
          {({ pressed }) => (
            <Text style={styles.text_booking(pressed)}>Book Now</Text>
          )}
        </Pressable>
      </View>
      {/* end section button */}
    </Fragment>
  );
}
