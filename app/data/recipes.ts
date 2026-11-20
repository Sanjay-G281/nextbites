export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup crushed tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "1 tbsp olive oil and pinch of salt",
    ],
    steps: [
      "Preheat the oven to its highest setting.",
      "Stretch the dough into a thin round base and spread tomato sauce.",
      "Tear fresh mozzarella over the top and drizzle with olive oil.",
      "Bake for 8 to 10 minutes until the crust blisters, then garnish with fresh basil.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Indian",
    ingredients: [
      "250g paneer cubes",
      "1/2 cup thick yogurt",
      "1 tsp garam masala",
      "1 tsp Kashmiri chili powder",
      "1 diced bell pepper and 1 diced onion",
    ],
    steps: [
      "Whisk yogurt with garam masala, chili powder, ginger-garlic paste, and salt.",
      "Coat the paneer cubes, bell pepper, and onion in the marinade for 15 minutes.",
      "Thread onto skewers and grill or pan-sear until charred on the edges.",
      "Serve hot with mint chutney and lemon wedges.",
    ],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Drinks",
    ingredients: [
      "1 cup coarsely ground coffee beans",
      "4 cups cold filtered water",
      "Ice cubes",
      "Splash of milk or simple syrup (optional)",
    ],
    steps: [
      "Combine coarse coffee grounds and cold filtered water in a jar.",
      "Stir gently, cover, and steep in the fridge for 12 to 16 hours.",
      "Strain through a fine mesh sieve or coffee filter.",
      "Pour over ice and customize with milk or sweetener.",
    ],
  },
  {
    id: "ramen-bowl",
    title: "Spicy Miso Ramen",
    emoji: "🍜",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: [
      "2 packs fresh ramen noodles",
      "4 cups vegetable or chicken broth",
      "2 tbsp red miso paste",
      "1 tbsp chili garlic sauce",
      "2 soft-boiled eggs, sliced scallions, and nori",
    ],
    steps: [
      "Simmer broth in a pot and whisk in miso paste and chili garlic sauce.",
      "Cook ramen noodles separately according to package instructions and drain.",
      "Divide noodles into bowls and ladle the hot miso broth over them.",
      "Top with halved soft-boiled eggs, sliced scallions, and nori sheets.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}