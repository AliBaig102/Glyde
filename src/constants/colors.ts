export interface ColorScheme {
  glydeOrange: string;
  glydeDarkGrey: string;
  glydeWhite: string;
  glydeBlue: string;
  glydeLightGrey: string;
  glydeVeryLightGrey: string;
  glydeDarkBlue: string;
  glydeRatingYellow: string;
  glydeGrey: string;
  glydeRed: string;
  glydeSuccessGreen: string;
  glydeLightBlue: string;
  glydePaleBlue: string;
  glydeBlack: string;
}

export interface Colors {
  light: ColorScheme;
  dark: ColorScheme;
}

export const colors: Colors = {
  light: {
    glydeOrange: '#FF8B06FF',
    glydeDarkGrey: '#303030FF',
    glydeWhite: '#FFFFFFFF',
    glydeBlue: '#0465AAFF',
    glydeLightGrey: '#F5F5F5FF',
    glydeVeryLightGrey: '#FAFAFAFF',
    glydeDarkBlue: '#061B38FF',
    glydeRatingYellow: '#F7DB32FF',
    glydeGrey: '#EFEFEFFF',
    glydeRed: '#FF4F4FFF',
    glydeSuccessGreen: '#5CB85CFF',
    glydeLightBlue: '#5BBBFFFF',
    glydePaleBlue: '#B6E1FFFF',
    glydeBlack: '#000000FF',
  },
  dark: {
    glydeOrange: '#FFB266FF',
    glydeDarkGrey: '#4A4A4AFF',
    glydeWhite: '#1A1A1AFF',
    glydeBlue: '#3B82F6FF',
    glydeLightGrey: '#3A3A3AFF',
    glydeVeryLightGrey: '#2D2D2DFF',
    glydeDarkBlue: '#60A5FAFF',
    glydeRatingYellow: '#FACC15FF',
    glydeGrey: '#4B4B4BFF',
    glydeRed: '#EF4444FF',
    glydeSuccessGreen: '#34D058FF',
    glydeLightBlue: '#3B82F6FF',
    glydePaleBlue: '#60A5FAFF',
    glydeBlack: '#FFFFFFFF',
  },
};
