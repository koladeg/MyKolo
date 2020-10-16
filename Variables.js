import { Dimensions } from "react-native";

const { height, width} = Dimensions.get("window")

export const HEIGHT = height;

export const WIDTH = width;

export const percentage = (Dimensions, percentage) => {
    return ( Dimensions / 100) * percentage;
}

export const TEXT_INPUT_HEIGHT = 120;
export const FOOTER_HEIGHT = 70;

export const LOGIN_VIEW_HEIGHT = TEXT_INPUT_HEIGHT + FOOTER_HEIGHT;
