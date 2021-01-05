const PALETTE_BOOTSTRAP = [
  { source: "bootstrap", name: "blue-100", hex: "#cfe2ff" },
  { source: "bootstrap", name: "blue-200", hex: "#9ec5fe" },
  { source: "bootstrap", name: "blue-300", hex: "#6ea8fe" },
  { source: "bootstrap", name: "blue-400", hex: "#3d8bfd" },
  { source: "bootstrap", name: "blue-500", hex: "#0d6efd" },
  { source: "bootstrap", name: "blue-600", hex: "#0a58ca" },
  { source: "bootstrap", name: "blue-700", hex: "#084298" },
  { source: "bootstrap", name: "blue-800", hex: "#052c65" },
  { source: "bootstrap", name: "blue-900", hex: "#031633" },
  { source: "bootstrap", name: "indigo-100", hex: "#e0cffc" },
  { source: "bootstrap", name: "indigo-200", hex: "#c29ffa" },
  { source: "bootstrap", name: "indigo-300", hex: "#a370f7" },
  { source: "bootstrap", name: "indigo-400", hex: "#8540f5" },
  { source: "bootstrap", name: "indigo-500", hex: "#6610f2" },
  { source: "bootstrap", name: "indigo-600", hex: "#520dc2" },
  { source: "bootstrap", name: "indigo-700", hex: "#3d0a91" },
  { source: "bootstrap", name: "indigo-800", hex: "#290661" },
  { source: "bootstrap", name: "indigo-900", hex: "#140330" },
  { source: "bootstrap", name: "purple-100", hex: "#e2d9f3" },
  { source: "bootstrap", name: "purple-200", hex: "#c5b3e6" },
  { source: "bootstrap", name: "purple-300", hex: "#a98eda" },
  { source: "bootstrap", name: "purple-400", hex: "#8c68cd" },
  { source: "bootstrap", name: "purple-500", hex: "#6f42c1" },
  { source: "bootstrap", name: "purple-600", hex: "#59359a" },
  { source: "bootstrap", name: "purple-700", hex: "#432874" },
  { source: "bootstrap", name: "purple-800", hex: "#2c1a4d" },
  { source: "bootstrap", name: "purple-900", hex: "#160d27" },
  { source: "bootstrap", name: "pink-100", hex: "#f7d6e6" },
  { source: "bootstrap", name: "pink-200", hex: "#efadce" },
  { source: "bootstrap", name: "pink-300", hex: "#e685b5" },
  { source: "bootstrap", name: "pink-400", hex: "#de5c9d" },
  { source: "bootstrap", name: "pink-500", hex: "#d63384" },
  { source: "bootstrap", name: "pink-600", hex: "#ab296a" },
  { source: "bootstrap", name: "pink-700", hex: "#801f4f" },
  { source: "bootstrap", name: "pink-800", hex: "#561435" },
  { source: "bootstrap", name: "pink-900", hex: "#2b0a1a" },
  { source: "bootstrap", name: "red-100", hex: "#f8d7da" },
  { source: "bootstrap", name: "red-200", hex: "#f1aeb5" },
  { source: "bootstrap", name: "red-300", hex: "#ea868f" },
  { source: "bootstrap", name: "red-400", hex: "#e35d6a" },
  { source: "bootstrap", name: "red-500", hex: "#dc3545" },
  { source: "bootstrap", name: "red-600", hex: "#b02a37" },
  { source: "bootstrap", name: "red-700", hex: "#842029" },
  { source: "bootstrap", name: "red-800", hex: "#58151c" },
  { source: "bootstrap", name: "red-900", hex: "#2c0b0e" },
  { source: "bootstrap", name: "orange-100", hex: "#ffe5d0" },
  { source: "bootstrap", name: "orange-200", hex: "#fecba1" },
  { source: "bootstrap", name: "orange-300", hex: "#feb272" },
  { source: "bootstrap", name: "orange-400", hex: "#fd9843" },
  { source: "bootstrap", name: "orange-500", hex: "#fd7e14" },
  { source: "bootstrap", name: "orange-600", hex: "#ca6510" },
  { source: "bootstrap", name: "orange-700", hex: "#984c0c" },
  { source: "bootstrap", name: "orange-800", hex: "#653208" },
  { source: "bootstrap", name: "orange-900", hex: "#331904" },
  { source: "bootstrap", name: "yellow-100", hex: "#fff3cd" },
  { source: "bootstrap", name: "yellow-200", hex: "#ffe69c" },
  { source: "bootstrap", name: "yellow-300", hex: "#ffda6a" },
  { source: "bootstrap", name: "yellow-400", hex: "#ffcd39" },
  { source: "bootstrap", name: "yellow-500", hex: "#ffc107" },
  { source: "bootstrap", name: "yellow-600", hex: "#cc9a06" },
  { source: "bootstrap", name: "yellow-700", hex: "#997404" },
  { source: "bootstrap", name: "yellow-800", hex: "#664d03" },
  { source: "bootstrap", name: "yellow-900", hex: "#332701" },
  { source: "bootstrap", name: "green-100", hex: "#d1e7dd" },
  { source: "bootstrap", name: "green-200", hex: "#a3cfbb" },
  { source: "bootstrap", name: "green-300", hex: "#75b798" },
  { source: "bootstrap", name: "green-400", hex: "#479f76" },
  { source: "bootstrap", name: "green-500", hex: "#198754" },
  { source: "bootstrap", name: "green-600", hex: "#146c43" },
  { source: "bootstrap", name: "green-700", hex: "#0f5132" },
  { source: "bootstrap", name: "green-800", hex: "#0a3622" },
  { source: "bootstrap", name: "green-900", hex: "#051b11" },
  { source: "bootstrap", name: "teal-100", hex: "#d2f4ea" },
  { source: "bootstrap", name: "teal-200", hex: "#a6e9d5" },
  { source: "bootstrap", name: "teal-300", hex: "#79dfc1" },
  { source: "bootstrap", name: "teal-400", hex: "#4dd4ac" },
  { source: "bootstrap", name: "teal-500", hex: "#20c997" },
  { source: "bootstrap", name: "teal-600", hex: "#1aa179" },
  { source: "bootstrap", name: "teal-700", hex: "#13795b" },
  { source: "bootstrap", name: "teal-800", hex: "#0d503c" },
  { source: "bootstrap", name: "teal-900", hex: "#06281e" },
  { source: "bootstrap", name: "cyan-100", hex: "#cff4fc" },
  { source: "bootstrap", name: "cyan-200", hex: "#9eeaf9" },
  { source: "bootstrap", name: "cyan-300", hex: "#6edff6" },
  { source: "bootstrap", name: "cyan-400", hex: "#3dd5f3" },
  { source: "bootstrap", name: "cyan-500", hex: "#0dcaf0" },
  { source: "bootstrap", name: "cyan-600", hex: "#0aa2c0" },
  { source: "bootstrap", name: "cyan-700", hex: "#087990" },
  { source: "bootstrap", name: "cyan-800", hex: "#055160" },
  { source: "bootstrap", name: "cyan-900", hex: "#032830" },
  { source: "bootstrap", name: "gray-100", hex: "#f8f9fa" },
  { source: "bootstrap", name: "gray-200", hex: "#e9ecef" },
  { source: "bootstrap", name: "gray-300", hex: "#dee2e6" },
  { source: "bootstrap", name: "gray-400", hex: "#ced4da" },
  { source: "bootstrap", name: "gray-500", hex: "#adb5bd" },
  { source: "bootstrap", name: "gray-600", hex: "#6c757d" },
  { source: "bootstrap", name: "gray-700", hex: "#495057" },
  { source: "bootstrap", name: "gray-800", hex: "#343a40" },
  { source: "bootstrap", name: "gray-900", hex: "#212529" },
  { source: "bootstrap", name: "white", hex: "#ffffff" },
  { source: "bootstrap", name: "black", hex: "#000000" }
]

export default PALETTE_BOOTSTRAP