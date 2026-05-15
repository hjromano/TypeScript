type Feature = "compilleOnSave" | "autoSave" | "autoUpdate"

type Features = Record<Feature, boolean>

const config: Features = {
    autoSave: true,
    autoUpdate: false,
    compilleOnSave: false,
}

