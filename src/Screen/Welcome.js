import React from "react";
import { View, Text, Pressable, Image , Button} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.color5, COLORS.color4]}
    >
      <View style={{ flex: 1 ,marginTop:60}}>
        <View>
          <Image
            source={require("./image/hero1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />

          <Image
            source={require("./image/hero2.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />

          <Image
            source={require("./image/hero3.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />

          <Image
            source={require("./image/hero2.jpg")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            AppChat
          </Text>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              Chào mừng các bạn đến với AppChat
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.white,
              }}
            >
              Phạm Thành Đạo
            </Text>
          </View>

          <Button
            title="Đăng kí ngay"
            onPress={() => navigation.navigate("Signup")}
            style={{
              color: COLORS.color4,
              marginTop: 10,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Bạn thực sự có tài khoản ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Đăng nhập
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
    
  );
};

export default Welcome;
