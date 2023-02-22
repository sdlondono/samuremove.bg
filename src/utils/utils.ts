import { Color } from "@cloudinary/url-gen/qualifiers/color";
export const randomColor = (): keyof typeof Color => {
  const colors = Color;
  const keys = Object.keys(colors);
  return colors[keys[(keys.length * Math.random()) << 0]];
};
