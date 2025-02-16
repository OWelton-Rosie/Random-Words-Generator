const words = [
    // Fruits & Foods
    "apple", "banana", "orange", "grape", "mango", "pear", "peach", "cherry", "strawberry", "blueberry",
    "kiwi", "lemon", "lime", "pineapple", "watermelon", "coconut", "fig", "papaya", "plum", "pomegranate",
    "avocado", "broccoli", "carrot", "lettuce", "tomato", "cucumber", "pumpkin", "radish", "zucchini", "asparagus",
    "cheese", "bacon", "butter", "yogurt", "chocolate", "vanilla", "caramel", "honey", "marshmallow", "almond",
    "croissant", "bagel", "waffle", "pancake", "donut", "macaron", "pretzel", "sushi", "taco", "burrito",
    "cereal", "oatmeal", "spaghetti", "lasagna", "steak", "hamburger", "hotdog", "pudding", "gelato", "sorbet",
    "pomegranate", "plum", "blackberry", "raspberry", "cranberry", "apricot", "boysenberry", "date", "elderberry", "gooseberry",
    "avocado", "mushroom", "spinach", "brussels sprout", "artichoke", "garlic", "onion", "cabbage", "ginger", "chili",
    "coconut water", "kiwi fruit", "watercress", "okra", "fennel", "asparagus", "celery", "beetroot", "acorn squash", "butternut squash",
    "cantaloupe", "blackberry", "fruitcake", "cinnamon", "saffron", "pepper", "oregano", "cilantro", "sage", "thyme",
    "chili pepper", "peppercorn", "fennel seed", "clove", "bay leaf", "rosemary", "basil", "garlic clove", "ginger root", "turmeric",
    "salmon", "pasta", "vegan", "smoothie", "syrup", "tofu", "tapioca", "shrimp", "sauerkraut", "peanut butter",
    "poppy seed", "balsamic", "ketchup", "mustard", "mayonnaise", "sweet potato", "avocado toast", "mango salsa", "gouda", "brie",

    // Animals
    "tiger", "lion", "cheetah", "panther", "wolf", "falcon", "eagle", "serpent", "griffin", "phoenix",
    "dragon", "unicorn", "pegasus", "kraken", "hydra", "chimera", "basilisk", "leviathan", "minotaur", "centaur",
    "dolphin", "whale", "octopus", "jaguar", "lynx", "hawk", "raven", "fox", "bear", "otter",
    "gazelle", "mongoose", "coyote", "badger", "meerkat", "koala", "kangaroo", "armadillo", "platypus", "stingray",
    "penguin", "peacock", "zebra", "polar bear", "chameleon", "hummingbird", "firefly", "tarantula", "salamander", "bobcat",
    "moose", "buffalo", "ferret", "hyena", "lemur", "mammoth", "narwhal", "owl", "parrot", "quail",
    "roadrunner", "squirrel", "tortoise", "vulture", "wolverine", "yak", "anteater", "beetle", "caterpillar", "dung beetle",
    "wombat", "platypus", "toucan", "wallaby", "gecko", "hornet", "kangaroo rat", "chinchilla", "armadillo", "pelican",
    "crab", "lobster", "shrimp", "snail", "mole", "rabbit", "hare", "bat", "raccoon", "otter",

    // Nature & Space
    "ocean", "river", "waterfall", "mountain", "valley", "glacier", "canyon", "galaxy", "nebula", "comet",
    "quasar", "blackhole", "supernova", "meteor", "satellite", "asteroid", "cosmos", "gravity", "pulsar", "eclipse",
    "horizon", "zenith", "twilight", "aurora", "rainbow", "sunbeam", "moonlight", "thunder", "cyclone", "whirlwind",
    "tornado", "hurricane", "storm", "mist", "cloudburst", "tidalwave", "tsunami", "geyser", "volcano", "landslide",
    "prairie", "desert", "fjord", "cavern", "savanna", "tundra", "meadow", "rainforest", "blizzard", "sandstorm",
    "sunset", "sunrise", "cloudburst", "equator", "hemisphere", "stratosphere", "tropics", "cumulus", "monsoon", "permafrost",
    "lunar", "solar", "stellar", "satellite", "pulsar", "telescope", "subterranean", "crater", "plasma", "milkyway",
    "equinox", "aerosol", "greenhouse", "earthquake", "volcanic", "constellation", "hydrology", "gravitation", "biome", "bioluminescence",
    "hydroponics", "crystal", "neutron star", "zodiac", "meteorite", "reflection", "blackout", "satellite", "nebulae", "stardust",

    // Fantasy & Mysticism
    "whisper", "shadow", "flame", "echo", "labyrinth", "mirage", "illusion", "phantom", "paradox", "epiphany",
    "alchemy", "riddle", "puzzle", "serendipity", "enigma", "orchestra", "symphony", "rhapsody", "resonance", "crescendo",
    "mythos", "legend", "oracle", "prophecy", "destiny", "fate", "charm", "curse", "hex", "omen",
    "mystique", "elixir", "mantra", "zen", "nirvana", "utopia", "transcendence", "ether", "aura", "infinity",
    "sorcery", "witchcraft", "rune", "sigil", "talisman", "grimoire", "fae", "elf", "druid", "warlock",
    "spellbound", "timewarp", "shapeshifter", "conjuration", "illusionist", "metamorphosis", "potion", "teleport", "spectral", "arcane",
    "arcana", "glyph", "mysticism", "coven", "crystal ball", "demon", "phantasm", "witchcraft", "mystical", "enchanted",
    "familiar", "visionary", "enchantment", "pantomime", "glyph", "elemental", "conjurer", "summoner", "meditation", "charm",
    "trance", "moonlit", "meditative", "lunar", "seance", "spirit", "charmed", "timeless", "fae queen", "exorcism",
    "necronomicon", "astral projection", "incantation", "vortex", "alchemy", "fey", "legendary", "enchanter", "necromancy", "arcane",

    // Science & Technology
    "quantum", "nebulous", "momentum", "velocity", "inertia", "thermodynamics", "spectrum", "chromatic", "prism", "resonant", "chemistry",
    "radiation", "synthesis", "catalyst", "oscillation", "amplitude", "frequency", "sonar", "infrared", "ultraviolet", "algorithm",
    "parity", "fractal", "molecule", "particle", "neutron", "proton", "electron", "nucleus", "fusion", "fission",
    "telescope", "microscope", "cybernetic", "artificial", "hologram", "laser", "biomechanics", "metronome", "automation", "singularity",
    "circuit", "data", "encryption", "nanobot", "processor", "synthetic", "biotechnology", "interface", "quantum computing", "dark matter",
    "exoplanet", "superconductor", "genome", "aerodynamics", "anomaly", "neural", "bioluminescence", "holography", "macrocosm", "microchip",
    "exabyte", "dataverse", "robotics", "autonomous", "cognitive", "hacker", "quantum computer", "vortex", "artificial intelligence", "techno", "computer",
    "circuitry", "biometric", "geodesic", "cloud storage", "5G", "connectivity", "applied physics", "supercomputer", "cryptography", "nanotech",

    // Colors & Light
    "crimson", "scarlet", "vermillion", "indigo", "sapphire", "emerald", "jade", "amber", "topaz", "turquoise",
    "obsidian", "onyx", "pearl", "opal", "garnet", "amethyst", "citrine", "coral", "bronze", "azure",
    "chartreuse", "cerulean", "periwinkle", "lavender", "vermilion", "heliotrope", "alabaster", "ebony", "silvery", "gilded",
    "prismatic", "moonlit", "iridescent", "luminescent", "incandescent", "phosphorescent", "opaline", "eclipsed", "glowing", "shimmering",
    "neon", "pastel", "sepia", "gradient", "monochrome", "holographic", "translucent", "opaque", "fluorescent", "radiant",
    "diffuse", "frosted", "vibrant", "metallic", "celestial", "reflected", "stained", "transparent", "dazzling", "blinding",
    "glistening", "colorburst", "pearlescent", "glimmer", "sparkling", "transcendent", "vivid", "luminous", "bright", "flickering"
];

// Export the words array (only needed if using ES6 modules)
if (typeof module !== "undefined") {
    module.exports = words;
}
