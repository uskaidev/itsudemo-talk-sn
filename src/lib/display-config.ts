export const DISPLAY_CONFIG = {
  model: "PN-L401C",
  resolution: {
    width: 1920,
    height: 1080,
  },
  physicalSize: {
    width: 878.112, // mm
    height: 485.352, // mm
  },
  refreshRate: 60, // Hz
  touchEnabled: true,
  orientation: "landscape" as const,
  aspectRatio: 16 / 9,
}

export const SAFE_AREA = {
  horizontal: 0.9, // 90% of width
  vertical: 0.9, // 90% of height
}

