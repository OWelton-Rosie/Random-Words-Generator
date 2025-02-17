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
    "elephant", "giraffe", "rhinoceros", "hippopotamus", "crocodile", "alligator", "newt", "salamander", "scorpion", "tarantula",
    "stingray", "jellyfish", "seahorse", "parakeet", "cockatoo", "viper", "anaconda", "iguana", "komodo dragon", "piranha",
    "walrus", "sea lion", "caribou", "reindeer", "yak", "emu", "cassowary", "beaver", "weasel", "stoat",
    "lynx", "ocelot", "snow leopard", "mandrill", "orangutan", "chimpanzee", "gorilla", "pangolin", "sloth", "tapir",
    "wolfhound", "mastodon", "megalodon", "firefly", "honeybee", "manta ray", "puffin", "civet", "axolotl", "narwhal",
    
    // Nature & Space
    "asterism", "exosphere", "lithosphere", "biosphere", "cryosphere", "thermosphere", "troposphere", "stratosphere", "mesosphere", "exoplanet",
    "supercluster", "interstellar", "quark", "dark energy", "graviton", "light-year", "event horizon", "singularity", "aurora borealis", "aurora australis",
    "cosmology", "magnetosphere", "thermocline", "ocean trench", "continental shelf", "isthmus", "archipelago", "badlands", "delta", "glacial moraine",
    "gorge", "tidal pool", "sinkhole", "mud volcano", "basin", "mesa", "butte", "karst", "fjord", "atoll",
    
    // Fantasy & Mysticism
    "sigil", "etheric", "phantasmagoria", "eldritch", "wyrm", "sorcerer", "necropolis", "levitation", "arcadia", "chimera",
    "shade", "specter", "eidolon", "shaman", "thaumaturgy", "mana", "ragnarok", "eldritch", "golem", "doppelganger",
    "paladin", "warlock", "summoner", "seer", "oracle", "divination", "ethereal", "eldar", "arcane", "mythic",
    
    // Science & Technology
    "hyperloop", "cybernetics", "antimatter", "exabyte", "qubit", "bioinformatics", "gene editing", "synthetic biology", "bionics", "fusion reactor",
    "blockchain", "nanomaterial", "quantum entanglement", "holographic", "autonomous vehicle", "singularity theory", "deep learning", "augmented reality", "neural network", "optogenetics",
    "supercomputer", "biomechanics", "haptic", "drone", "machine learning", "metaverse", "cryonics", "exoskeleton", "aerodynamics", "transhumanism",
    
    // Colors & Light
    "ultramarine", "cinnabar", "gamboge", "malachite", "coquelicot", "perse", "feldgrau", "glaucous", "smalt", "tyrian purple",
    "amaranth", "bistre", "vermilion", "harlequin", "sanguine", "tawny", "viridian", "wisteria", "xanadu", "zinnwaldite",
    "heliotrope", "carmine", "umber", "sepia", "coral pink", "cadmium yellow", "saffron", "sapphire", "aubergine", "charcoal",
];

// Export the words array (only needed if using ES6 modules)
if (typeof module !== "undefined") {
    module.exports = words;
}
