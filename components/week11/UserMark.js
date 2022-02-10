import React, { useEffect,useLayoutEffect, useState } from "react";
import { Dimensions,Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import UserMarker from "./UserMarker";
import LocationLaravel from "../../services/LocationLaravel";
export default function UserMark(props) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;  
  const [usermark, setUserMark] = useState([]);
  const loadUserMark = async () => {
    setRefresh(true);
    let usermark = await LocationLaravel.getItems();
    setUserMark(usermark);
    setRefresh(false);
  };
    useEffect(() => { loadUserMark(); }, []);
const [refresh, setRefresh] = useState(false);
if (props.location) {
    return (
        <MapView
            style={{ width: width, height: height }}
                initialRegion={{
                latitude: props.location.coords.latitude,
                longitude: props.location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}   
            showsUserLocation={true}
        >
            <UserMarker items={usermark} />
        </MapView>
    );
} else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}
