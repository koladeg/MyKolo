import { Dimensions } from "react-native";

const { height, width} = Dimensions.get("window")

export const HEIGHT = height;

export const WIDTH = width;

export const percentage = (Dimensions, percentage) => {
    return ( Dimensions / 100) * percentage;
}

export const topHeight