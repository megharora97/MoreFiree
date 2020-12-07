import React, { Component } from 'react';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const margin = height / 80;
const borderradius = height / 150
const UpArror = 'chevron-up'
const DownArror = 'chevron-down'
const TypeArrow = 'entypo'
const SideArror = 'chevron-right'
const MaxPickerHeight = height / 1.5
const HeaderFontSize = height / 32
const TitleBigFontSize = height / 43
const HeaderMediumFontSize = height / 35
const TitleSemiBigFontSize = height / 48
const TitleMediumFontSize = height / 55
const TitleSmallFontSize = height / 60
const TitleSemiSmallFontSize = height / 73
const TitleVerySmallFontSize = height / 80
const PriceFontSize = height / 52
const PickerFontSize = height / 50


export default {
      margin: margin,
      borderradius: borderradius,
      UpArror: UpArror,
      DownArror: DownArror,
      TypeArrow: TypeArrow,
      SideArror: SideArror,
      MaxPickerHeight: MaxPickerHeight,
      HeaderFontSize: HeaderFontSize,
      TitleBigFontSize: TitleBigFontSize,
      TitleSemiBigFontSize: TitleSemiBigFontSize,
      TitleMediumFontSize: TitleMediumFontSize,
      TitleSmallFontSize: TitleSmallFontSize,
      PriceFontSize: PriceFontSize,
      PickerFontSize: PickerFontSize,
      TitleSemiSmallFontSize: TitleSemiSmallFontSize,
      HeaderMediumFontSize: HeaderMediumFontSize,
      TitleVerySmallFontSize: TitleVerySmallFontSize,

}