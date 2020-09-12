import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Datepicker_5: new Date("09/12/2020") }

  render = () => (
    <View
      style={{
        width: 0,
        height: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        overflow: "visible",
        fontSize: 12,
        color: "#000000",
        backgroundColor: "#2245c3",
        fontFamily: "Roboto-Regular",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <Text
        style={{
          marginLeft: -13,
          marginRight: 0,
          marginTop: 70,
          marginBottom: 5,
          paddingLeft: 11,
          paddingRight: 5,
          paddingTop: 15,
          paddingBottom: 23,
          overflow: "visible",
          alignSelf: "center",
          fontSize: 46,
          color: "#000000",
          backgroundColor: "#243ec2",
          fontFamily: "PlayfairDisplay-Bold",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
      >
        Top Gun
      </Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
        <Button
          textStyle={{
            fontSize: 20,
            color: "#000000",
            textAlign: "center",
            fontFamily: "Roboto-Regular"
          }}
          style={{
            width: "54%",
            marginLeft: 60,
            marginTop: 5,
            marginBottom: 5,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 15,
            paddingBottom: 15,
            overflow: "hidden",
            alignSelf: "center",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#c42121",
            fontFamily: "Roboto-Regular",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            textAlign: "center",
            textAlignVertical: "center",
            textDecorationLine: "underline",
            textTransform: "none",
            lineHeight: 12,
            letterSpacing: 0
          }}
          onPress={() => alert("Pressed!")}
        >
          Push To Play!
        </Button>
      </TouchableOpacity>
      <Datepicker
        style={{
          width: "18%",
          height: 40,
          marginLeft: 0,
          marginRight: 15,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingTop: 9,
          paddingBottom: 10,
          overflow: "visible",
          fontSize: 16,
          color: "#000000",
          backgroundColor: "#3cb52c",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        date={this.state.Datepicker_5}
        onSelect={nextValue => this.setState({ Datepicker_5: nextValue })}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
