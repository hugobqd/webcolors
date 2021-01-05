const PALETTE_MATERIAL = [
  {source: 'material', hex: "#FFEBEE", name: "Red 50"},
  {source: 'material', hex: "#FFCDD2", name: "Red 100"},
  {source: 'material', hex: "#EF9A9A", name: "Red 200"},
  {source: 'material', hex: "#E57373", name: "Red 300"},
  {source: 'material', hex: "#EF5350", name: "Red 400"},
  {source: 'material', hex: "#F44336", name: "Red 500"},
  {source: 'material', hex: "#E53935", name: "Red 600"},
  {source: 'material', hex: "#D32F2F", name: "Red 700"},
  {source: 'material', hex: "#C62828", name: "Red 800"},
  {source: 'material', hex: "#B71C1C", name: "Red 900"},
  {source: 'material', hex: "#FF8A80", name: "Red A100"},
  {source: 'material', hex: "#FF5252", name: "Red A200"},
  {source: 'material', hex: "#FF1744", name: "Red A400"},
  {source: 'material', hex: "#D50000", name: "Red A700"},
  {source: 'material', hex: "#FCE4EC", name: "Pink 50"},
  {source: 'material', hex: "#F8BBD0", name: "Pink 100"},
  {source: 'material', hex: "#F48FB1", name: "Pink 200"},
  {source: 'material', hex: "#F06292", name: "Pink 300"},
  {source: 'material', hex: "#EC407A", name: "Pink 400"},
  {source: 'material', hex: "#E91E63", name: "Pink 500"},
  {source: 'material', hex: "#D81B60", name: "Pink 600"},
  {source: 'material', hex: "#C2185B", name: "Pink 700"},
  {source: 'material', hex: "#AD1457", name: "Pink 800"},
  {source: 'material', hex: "#880E4F", name: "Pink 900"},
  {source: 'material', hex: "#FF80AB", name: "Pink A100"},
  {source: 'material', hex: "#FF4081", name: "Pink A200"},
  {source: 'material', hex: "#F50057", name: "Pink A400"},
  {source: 'material', hex: "#C51162", name: "Pink A700"},
  {source: 'material', hex: "#F3E5F5", name: "Purple 50"},
  {source: 'material', hex: "#E1BEE7", name: "Purple 100"},
  {source: 'material', hex: "#CE93D8", name: "Purple 200"},
  {source: 'material', hex: "#BA68C8", name: "Purple 300"},
  {source: 'material', hex: "#AB47BC", name: "Purple 400"},
  {source: 'material', hex: "#9C27B0", name: "Purple 500"},
  {source: 'material', hex: "#8E24AA", name: "Purple 600"},
  {source: 'material', hex: "#7B1FA2", name: "Purple 700"},
  {source: 'material', hex: "#6A1B9A", name: "Purple 800"},
  {source: 'material', hex: "#4A148C", name: "Purple 900"},
  {source: 'material', hex: "#EA80FC", name: "Purple A100"},
  {source: 'material', hex: "#E040FB", name: "Purple A200"},
  {source: 'material', hex: "#D500F9", name: "Purple A400"},
  {source: 'material', hex: "#AA00FF", name: "Purple A700"},
  {source: 'material', hex: "#EDE7F6", name: "Deep Purple 50"},
  {source: 'material', hex: "#D1C4E9", name: "Deep Purple 100"},
  {source: 'material', hex: "#B39DDB", name: "Deep Purple 200"},
  {source: 'material', hex: "#9575CD", name: "Deep Purple 300"},
  {source: 'material', hex: "#7E57C2", name: "Deep Purple 400"},
  {source: 'material', hex: "#673AB7", name: "Deep Purple 500"},
  {source: 'material', hex: "#5E35B1", name: "Deep Purple 600"},
  {source: 'material', hex: "#512DA8", name: "Deep Purple 700"},
  {source: 'material', hex: "#4527A0", name: "Deep Purple 800"},
  {source: 'material', hex: "#311B92", name: "Deep Purple 900"},
  {source: 'material', hex: "#B388FF", name: "Deep Purple A100"},
  {source: 'material', hex: "#7C4DFF", name: "Deep Purple A200"},
  {source: 'material', hex: "#651FFF", name: "Deep Purple A400"},
  {source: 'material', hex: "#6200EA", name: "Deep Purple A700"},
  {source: 'material', hex: "#E8EAF6", name: "Indigo 50"},
  {source: 'material', hex: "#C5CAE9", name: "Indigo 100"},
  {source: 'material', hex: "#9FA8DA", name: "Indigo 200"},
  {source: 'material', hex: "#7986CB", name: "Indigo 300"},
  {source: 'material', hex: "#5C6BC0", name: "Indigo 400"},
  {source: 'material', hex: "#3F51B5", name: "Indigo 500"},
  {source: 'material', hex: "#3949AB", name: "Indigo 600"},
  {source: 'material', hex: "#303F9F", name: "Indigo 700"},
  {source: 'material', hex: "#283593", name: "Indigo 800"},
  {source: 'material', hex: "#1A237E", name: "Indigo 900"},
  {source: 'material', hex: "#8C9EFF", name: "Indigo A100"},
  {source: 'material', hex: "#536DFE", name: "Indigo A200"},
  {source: 'material', hex: "#3D5AFE", name: "Indigo A400"},
  {source: 'material', hex: "#304FFE", name: "Indigo A700"},
  {source: 'material', hex: "#E3F2FD", name: "Blue 50"},
  {source: 'material', hex: "#BBDEFB", name: "Blue 100"},
  {source: 'material', hex: "#90CAF9", name: "Blue 200"},
  {source: 'material', hex: "#64B5F6", name: "Blue 300"},
  {source: 'material', hex: "#42A5F5", name: "Blue 400"},
  {source: 'material', hex: "#2196F3", name: "Blue 500"},
  {source: 'material', hex: "#1E88E5", name: "Blue 600"},
  {source: 'material', hex: "#1976D2", name: "Blue 700"},
  {source: 'material', hex: "#1565C0", name: "Blue 800"},
  {source: 'material', hex: "#0D47A1", name: "Blue 900"},
  {source: 'material', hex: "#82B1FF", name: "Blue A100"},
  {source: 'material', hex: "#448AFF", name: "Blue A200"},
  {source: 'material', hex: "#2979FF", name: "Blue A400"},
  {source: 'material', hex: "#2962FF", name: "Blue A700"},
  {source: 'material', hex: "#E1F5FE", name: "Light Blue 50"},
  {source: 'material', hex: "#B3E5FC", name: "Light Blue 100"},
  {source: 'material', hex: "#81D4FA", name: "Light Blue 200"},
  {source: 'material', hex: "#4FC3F7", name: "Light Blue 300"},
  {source: 'material', hex: "#29B6F6", name: "Light Blue 400"},
  {source: 'material', hex: "#03A9F4", name: "Light Blue 500"},
  {source: 'material', hex: "#039BE5", name: "Light Blue 600"},
  {source: 'material', hex: "#0288D1", name: "Light Blue 700"},
  {source: 'material', hex: "#0277BD", name: "Light Blue 800"},
  {source: 'material', hex: "#01579B", name: "Light Blue 900"},
  {source: 'material', hex: "#80D8FF", name: "Light Blue A100"},
  {source: 'material', hex: "#40C4FF", name: "Light Blue A200"},
  {source: 'material', hex: "#00B0FF", name: "Light Blue A400"},
  {source: 'material', hex: "#0091EA", name: "Light Blue A700"},
  {source: 'material', hex: "#E0F7FA", name: "Cyan 50"},
  {source: 'material', hex: "#B2EBF2", name: "Cyan 100"},
  {source: 'material', hex: "#80DEEA", name: "Cyan 200"},
  {source: 'material', hex: "#4DD0E1", name: "Cyan 300"},
  {source: 'material', hex: "#26C6DA", name: "Cyan 400"},
  {source: 'material', hex: "#00BCD4", name: "Cyan 500"},
  {source: 'material', hex: "#00ACC1", name: "Cyan 600"},
  {source: 'material', hex: "#0097A7", name: "Cyan 700"},
  {source: 'material', hex: "#00838F", name: "Cyan 800"},
  {source: 'material', hex: "#006064", name: "Cyan 900"},
  {source: 'material', hex: "#84FFFF", name: "Cyan A100"},
  {source: 'material', hex: "#18FFFF", name: "Cyan A200"},
  {source: 'material', hex: "#00E5FF", name: "Cyan A400"},
  {source: 'material', hex: "#00B8D4", name: "Cyan A700"},
  {source: 'material', hex: "#E0F2F1", name: "Teal 50"},
  {source: 'material', hex: "#B2DFDB", name: "Teal 100"},
  {source: 'material', hex: "#80CBC4", name: "Teal 200"},
  {source: 'material', hex: "#4DB6AC", name: "Teal 300"},
  {source: 'material', hex: "#26A69A", name: "Teal 400"},
  {source: 'material', hex: "#009688", name: "Teal 500"},
  {source: 'material', hex: "#00897B", name: "Teal 600"},
  {source: 'material', hex: "#00796B", name: "Teal 700"},
  {source: 'material', hex: "#00695C", name: "Teal 800"},
  {source: 'material', hex: "#004D40", name: "Teal 900"},
  {source: 'material', hex: "#A7FFEB", name: "Teal A100"},
  {source: 'material', hex: "#64FFDA", name: "Teal A200"},
  {source: 'material', hex: "#1DE9B6", name: "Teal A400"},
  {source: 'material', hex: "#00BFA5", name: "Teal A700"},
  {source: 'material', hex: "#E8F5E9", name: "Green 50"},
  {source: 'material', hex: "#C8E6C9", name: "Green 100"},
  {source: 'material', hex: "#A5D6A7", name: "Green 200"},
  {source: 'material', hex: "#81C784", name: "Green 300"},
  {source: 'material', hex: "#66BB6A", name: "Green 400"},
  {source: 'material', hex: "#4CAF50", name: "Green 500"},
  {source: 'material', hex: "#43A047", name: "Green 600"},
  {source: 'material', hex: "#388E3C", name: "Green 700"},
  {source: 'material', hex: "#2E7D32", name: "Green 800"},
  {source: 'material', hex: "#1B5E20", name: "Green 900"},
  {source: 'material', hex: "#B9F6CA", name: "Green A100"},
  {source: 'material', hex: "#69F0AE", name: "Green A200"},
  {source: 'material', hex: "#00E676", name: "Green A400"},
  {source: 'material', hex: "#00C853", name: "Green A700"},
  {source: 'material', hex: "#F1F8E9", name: "Light Green 50"},
  {source: 'material', hex: "#DCEDC8", name: "Light Green 100"},
  {source: 'material', hex: "#C5E1A5", name: "Light Green 200"},
  {source: 'material', hex: "#AED581", name: "Light Green 300"},
  {source: 'material', hex: "#9CCC65", name: "Light Green 400"},
  {source: 'material', hex: "#8BC34A", name: "Light Green 500"},
  {source: 'material', hex: "#7CB342", name: "Light Green 600"},
  {source: 'material', hex: "#689F38", name: "Light Green 700"},
  {source: 'material', hex: "#558B2F", name: "Light Green 800"},
  {source: 'material', hex: "#33691E", name: "Light Green 900"},
  {source: 'material', hex: "#CCFF90", name: "Light Green A100"},
  {source: 'material', hex: "#B2FF59", name: "Light Green A200"},
  {source: 'material', hex: "#76FF03", name: "Light Green A400"},
  {source: 'material', hex: "#64DD17", name: "Light Green A700"},
  {source: 'material', hex: "#F9FBE7", name: "Lime 50"},
  {source: 'material', hex: "#F0F4C3", name: "Lime 100"},
  {source: 'material', hex: "#E6EE9C", name: "Lime 200"},
  {source: 'material', hex: "#DCE775", name: "Lime 300"},
  {source: 'material', hex: "#D4E157", name: "Lime 400"},
  {source: 'material', hex: "#CDDC39", name: "Lime 500"},
  {source: 'material', hex: "#C0CA33", name: "Lime 600"},
  {source: 'material', hex: "#AFB42B", name: "Lime 700"},
  {source: 'material', hex: "#9E9D24", name: "Lime 800"},
  {source: 'material', hex: "#827717", name: "Lime 900"},
  {source: 'material', hex: "#F4FF81", name: "Lime A100"},
  {source: 'material', hex: "#EEFF41", name: "Lime A200"},
  {source: 'material', hex: "#C6FF00", name: "Lime A400"},
  {source: 'material', hex: "#AEEA00", name: "Lime A700"},
  {source: 'material', hex: "#FFFDE7", name: "Yellow 50"},
  {source: 'material', hex: "#FFF9C4", name: "Yellow 100"},
  {source: 'material', hex: "#FFF59D", name: "Yellow 200"},
  {source: 'material', hex: "#FFF176", name: "Yellow 300"},
  {source: 'material', hex: "#FFEE58", name: "Yellow 400"},
  {source: 'material', hex: "#FFEB3B", name: "Yellow 500"},
  {source: 'material', hex: "#FDD835", name: "Yellow 600"},
  {source: 'material', hex: "#FBC02D", name: "Yellow 700"},
  {source: 'material', hex: "#F9A825", name: "Yellow 800"},
  {source: 'material', hex: "#F57F17", name: "Yellow 900"},
  {source: 'material', hex: "#FFFF8D", name: "Yellow A100"},
  {source: 'material', hex: "#FFFF00", name: "Yellow A200"},
  {source: 'material', hex: "#FFEA00", name: "Yellow A400"},
  {source: 'material', hex: "#FFD600", name: "Yellow A700"},
  {source: 'material', hex: "#FFF8E1", name: "Amber 50"},
  {source: 'material', hex: "#FFECB3", name: "Amber 100"},
  {source: 'material', hex: "#FFE082", name: "Amber 200"},
  {source: 'material', hex: "#FFD54F", name: "Amber 300"},
  {source: 'material', hex: "#FFCA28", name: "Amber 400"},
  {source: 'material', hex: "#FFC107", name: "Amber 500"},
  {source: 'material', hex: "#FFB300", name: "Amber 600"},
  {source: 'material', hex: "#FFA000", name: "Amber 700"},
  {source: 'material', hex: "#FF8F00", name: "Amber 800"},
  {source: 'material', hex: "#FF6F00", name: "Amber 900"},
  {source: 'material', hex: "#FFE57F", name: "Amber A100"},
  {source: 'material', hex: "#FFD740", name: "Amber A200"},
  {source: 'material', hex: "#FFC400", name: "Amber A400"},
  {source: 'material', hex: "#FFAB00", name: "Amber A700"},
  {source: 'material', hex: "#FFF3E0", name: "Orange 50"},
  {source: 'material', hex: "#FFE0B2", name: "Orange 100"},
  {source: 'material', hex: "#FFCC80", name: "Orange 200"},
  {source: 'material', hex: "#FFB74D", name: "Orange 300"},
  {source: 'material', hex: "#FFA726", name: "Orange 400"},
  {source: 'material', hex: "#FF9800", name: "Orange 500"},
  {source: 'material', hex: "#FB8C00", name: "Orange 600"},
  {source: 'material', hex: "#F57C00", name: "Orange 700"},
  {source: 'material', hex: "#EF6C00", name: "Orange 800"},
  {source: 'material', hex: "#E65100", name: "Orange 900"},
  {source: 'material', hex: "#FFD180", name: "Orange A100"},
  {source: 'material', hex: "#FFAB40", name: "Orange A200"},
  {source: 'material', hex: "#FF9100", name: "Orange A400"},
  {source: 'material', hex: "#FF6D00", name: "Orange A700"},
  {source: 'material', hex: "#FBE9E7", name: "Deep Orange 50"},
  {source: 'material', hex: "#FFCCBC", name: "Deep Orange 100"},
  {source: 'material', hex: "#FFAB91", name: "Deep Orange 200"},
  {source: 'material', hex: "#FF8A65", name: "Deep Orange 300"},
  {source: 'material', hex: "#FF7043", name: "Deep Orange 400"},
  {source: 'material', hex: "#FF5722", name: "Deep Orange 500"},
  {source: 'material', hex: "#F4511E", name: "Deep Orange 600"},
  {source: 'material', hex: "#E64A19", name: "Deep Orange 700"},
  {source: 'material', hex: "#D84315", name: "Deep Orange 800"},
  {source: 'material', hex: "#BF360C", name: "Deep Orange 900"},
  {source: 'material', hex: "#FF9E80", name: "Deep Orange A100"},
  {source: 'material', hex: "#FF6E40", name: "Deep Orange A200"},
  {source: 'material', hex: "#FF3D00", name: "Deep Orange A400"},
  {source: 'material', hex: "#DD2C00", name: "Deep Orange A700"},
  {source: 'material', hex: "#EFEBE9", name: "Brown 50"},
  {source: 'material', hex: "#D7CCC8", name: "Brown 100"},
  {source: 'material', hex: "#BCAAA4", name: "Brown 200"},
  {source: 'material', hex: "#A1887F", name: "Brown 300"},
  {source: 'material', hex: "#8D6E63", name: "Brown 400"},
  {source: 'material', hex: "#795548", name: "Brown 500"},
  {source: 'material', hex: "#6D4C41", name: "Brown 600"},
  {source: 'material', hex: "#5D4037", name: "Brown 700"},
  {source: 'material', hex: "#4E342E", name: "Brown 800"},
  {source: 'material', hex: "#3E2723", name: "Brown 900"},
  {source: 'material', hex: "#FAFAFA", name: "Grey 50"},
  {source: 'material', hex: "#F5F5F5", name: "Grey 100"},
  {source: 'material', hex: "#EEEEEE", name: "Grey 200"},
  {source: 'material', hex: "#E0E0E0", name: "Grey 300"},
  {source: 'material', hex: "#BDBDBD", name: "Grey 400"},
  {source: 'material', hex: "#9E9E9E", name: "Grey 500"},
  {source: 'material', hex: "#757575", name: "Grey 600"},
  {source: 'material', hex: "#616161", name: "Grey 700"},
  {source: 'material', hex: "#424242", name: "Grey 800"},
  {source: 'material', hex: "#212121", name: "Grey 900"},
  {source: 'material', hex: "#ECEFF1", name: "Blue Grey 50"},
  {source: 'material', hex: "#CFD8DC", name: "Blue Grey 100"},
  {source: 'material', hex: "#B0BEC5", name: "Blue Grey 200"},
  {source: 'material', hex: "#90A4AE", name: "Blue Grey 300"},
  {source: 'material', hex: "#78909C", name: "Blue Grey 400"},
  {source: 'material', hex: "#607D8B", name: "Blue Grey 500"},
  {source: 'material', hex: "#546E7A", name: "Blue Grey 600"},
  {source: 'material', hex: "#455A64", name: "Blue Grey 700"},
  {source: 'material', hex: "#37474F", name: "Blue Grey 800"},
  {source: 'material', hex: "#263238", name: "Blue Grey 900"},
  {source: 'material', hex: "#000000", name: "Black"},
  {source: 'material', hex: "#FFFFFF", name: "White"},
]

export default PALETTE_MATERIAL