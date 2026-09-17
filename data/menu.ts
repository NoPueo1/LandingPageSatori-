export interface RollItem {
  wrapping: string;
  ingredients: string;
}

export interface MenuItem {
  name: string;
  pieces?: number | string;
  price: number;
  description?: string;
  rolls?: RollItem[];
}

export interface MenuCategory {
  id: string;
  label: string;
  conditions?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "clasicas",
    label: "Promos Clásicas",
    conditions:
      "Incluyen salsa de soya o agridulce. Cambio de envoltura, vegetal o proteína: $1.500 c/u.",
    items: [
      {
        name: "Promo 1",
        pieces: 20,
        price: 7990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo, queso, morrón ahumado" },
          { wrapping: "Ciboulette", ingredients: "Kanikama apanado, queso, palta" },
        ],
      },
      {
        name: "Promo 2",
        pieces: 20,
        price: 9990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo, queso, morrón ahumado" },
          { wrapping: "Palta fresca", ingredients: "Camarón apanado, queso, choclo baby" },
        ],
      },
      {
        name: "Promo 3",
        pieces: 30,
        price: 12990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo, queso crema, palta" },
          { wrapping: "Queso nuss", ingredients: "Kanikama apanado, cebollín, choclo baby" },
          { wrapping: "Ciboulette", ingredients: "Palmito, queso crema, choclo" },
        ],
      },
      {
        name: "Promo 4",
        pieces: 40,
        price: 16990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Camarón apanado, queso, palta" },
          { wrapping: "Palta fresca", ingredients: "Pollo, queso, cebollín" },
          { wrapping: "Sésamo tostado", ingredients: "Kanikama apanado, queso, morrón ahumado" },
          { wrapping: "Ciboulette", ingredients: "Choclo baby, queso, palta" },
        ],
      },
      {
        name: "Promo 5",
        pieces: 50,
        price: 20990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo, queso crema, palta" },
          { wrapping: "Panko frito", ingredients: "Camarón apanado, queso crema, cebollín" },
          { wrapping: "Queso flameado", ingredients: "Pollo apanado, queso, pimentón con cebolla crispy" },
          { wrapping: "Ciboulette", ingredients: "Kanikama apanado, queso, choclo" },
          { wrapping: "Sésamo tostado", ingredients: "Palmito, queso, palta" },
        ],
      },
      {
        name: "Promo 6",
        pieces: 70,
        price: 27990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo, queso, palta" },
          { wrapping: "Panko frito", ingredients: "Camarón apanado, queso, morrón" },
          { wrapping: "Panko frito", ingredients: "Palmito, queso, choclo" },
          { wrapping: "Queso nuss", ingredients: "Camarón apanado, queso, cebollín" },
          { wrapping: "Palta fresca", ingredients: "Pollo apanado, queso, ciboulette" },
          { wrapping: "Ciboulette", ingredients: "Kanikama apanado, queso, choclo" },
          { wrapping: "Nori con sésamo", ingredients: "Kanikama apanado, queso" },
        ],
      },
      {
        name: "Promo 7",
        pieces: 100,
        price: 39990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo, queso, palta" },
          { wrapping: "Panko frito", ingredients: "Kanikama apanado, queso, morrón ahumado" },
          { wrapping: "Panko frito", ingredients: "Palmito, queso, choclo" },
          { wrapping: "Panko frito", ingredients: "Camarón apanado, queso, cebollín" },
          { wrapping: "Palta fresca", ingredients: "Pollo apanado, queso, ciboulette" },
          { wrapping: "Ciboulette", ingredients: "Camarón apanado, queso, choclo" },
          { wrapping: "Queso flameado", ingredients: "Kanikama apanado, palmito, cebollín con cebolla crispy" },
          { wrapping: "Sésamo tostado", ingredients: "Camarón apanado, queso, palta" },
          { wrapping: "Nori frito", ingredients: "Kanikama apanado, queso" },
          { wrapping: "Nori con sésamo", ingredients: "Choclo baby, queso, palta" },
        ],
      },
    ],
  },
  {
    id: "premium",
    label: "Promos Premium & Salmón",
    conditions:
      "Incluye salsa de soya, agridulce y palitos. Cambio de envoltura, vegetal o proteína: $1.500 c/u.",
    items: [
      {
        name: "Premium A",
        pieces: 30,
        price: 14990,
        rolls: [
          { wrapping: "Jamón serrano", ingredients: "Camarón apanado, queso crema, ciboulette con salsa acevichada y merkén" },
          { wrapping: "Takis fuego", ingredients: "Pollo apanado, queso crema, palta" },
          { wrapping: "Panko frito", ingredients: "Kanikama apanado, queso, cebollín" },
        ],
      },
      {
        name: "Premium B",
        pieces: 30,
        price: 15990,
        rolls: [
          { wrapping: "Queso nuss", ingredients: "Pollo apanado, queso, ciboulette" },
          { wrapping: "Panko frito", ingredients: "Camarón apanado, queso, palta con salsa maracuyá y camote crocante" },
          { wrapping: "Palta fresca", ingredients: "Kanikama apanado, queso, morrón con salsa acevichada y merkén" },
        ],
      },
      {
        name: "Premium C",
        pieces: 30,
        price: 16990,
        rolls: [
          { wrapping: "Ciboulette", ingredients: "Pollo, queso, choclo con salsa acevichada y aros de cebolla" },
          { wrapping: "Palta fresca", ingredients: "Camarón apanado, queso, palmito con salsa pink y crocante de camote" },
          { wrapping: "Panko frito", ingredients: "Kanikama apanado, queso, cebollín con salsa acevichada y merkén" },
        ],
      },
      {
        name: "Inata Salmon",
        pieces: 20,
        price: 11990,
        rolls: [
          { wrapping: "Nori frito", ingredients: "Salmón, queso crema con salsa acevichada y merkén ahumado" },
          { wrapping: "Ciboulette", ingredients: "Pollo, queso, palta con salsa maracuyá y camote" },
        ],
      },
      {
        name: "Hiroshi Fusion",
        pieces: 20,
        price: 12990,
        rolls: [
          { wrapping: "Jamón serrano", ingredients: "Camarón, queso, ciboulette con salsa acevichada y merkén ahumado" },
          { wrapping: "Queso flameado", ingredients: "Salmón, queso, pimentón ahumado con cebolla crispy" },
        ],
      },
      {
        name: "Satori Nikkei",
        pieces: 20,
        price: 14990,
        rolls: [
          { wrapping: "Salmón fresco", ingredients: "Camarón furay, queso, palta con salsa acevichada y limón" },
          { wrapping: "Palta fresca", ingredients: "Salmón furay, queso, pimentón ahumado con salsa pinky y camote crocante" },
        ],
      },
    ],
  },
  {
    id: "rolls",
    label: "Rolls Individuales",
    conditions:
      "8 a 10 cortes c/u. Incluye salsa de soya o agridulce. Cambios: $1.500 c/u — cambio a salmón: $2.500.",
    items: [
      {
        name: "Roll A",
        pieces: "8-10",
        price: 6500,
        rolls: [
          { wrapping: "Jamón serrano", ingredients: "Pollo, queso crema, ciboulette, salsa acevichada y merkén" },
        ],
      },
      {
        name: "Roll B",
        pieces: "8-10",
        price: 6500,
        rolls: [
          { wrapping: "Palta fresca", ingredients: "Camarón apanado, queso, palmito, salsa pink y crocante de camote" },
        ],
      },
      {
        name: "Roll C",
        pieces: "8-10",
        price: 7000,
        rolls: [
          { wrapping: "Queso flameado", ingredients: "Pollo apanado, palta, choclo baby, camote al hilo" },
        ],
      },
      {
        name: "Roll D",
        pieces: "8-10",
        price: 7000,
        rolls: [
          { wrapping: "Ciboulette", ingredients: "Camarón apanado, queso, choclo, aros de cebolla y salsa acevichada" },
        ],
      },
      {
        name: "Roll F",
        pieces: "8-10",
        price: 7500,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Salmón, queso, palta con topping camarón apanado y salsa maracuyá" },
        ],
      },
      {
        name: "Roll G",
        pieces: "8-10",
        price: 8000,
        rolls: [
          { wrapping: "Salmón flameado", ingredients: "Camarón apanado, queso con salsa acevichada y toque de limón" },
        ],
      },
    ],
  },
  {
    id: "handroll",
    label: "Hand-Rolls & Burger",
    conditions: "Incluye salsa de soya o agridulce.",
    items: [
      {
        name: "Hand-Roll Pollo",
        price: 3800,
        description: "Pollo tradicional · queso crema + 1 vegetal a elección.",
      },
      {
        name: "Hand-Roll Pollo Apanado",
        price: 3800,
        description: "Pollo crujiente apanado · queso crema + 1 vegetal a elección.",
      },
      {
        name: "Hand-Roll Kanikama",
        price: 3800,
        description: "Kanikama apanado · queso crema + 1 vegetal a elección.",
      },
      {
        name: "Hand-Roll Camarón",
        price: 4500,
        description: "Camarón apanado · queso crema + 1 vegetal a elección.",
      },
      {
        name: "Sushi Burger",
        price: 7990,
        description:
          "1 proteína apanada (pollo, kanikama o camarón) + queso crema + 3 vegetales a elección (palta, morrón ahumado, cebollín, ciboullete, choclo baby o palmito).",
      },
    ],
  },
  {
    id: "picoteos",
    label: "Picoteos & Bebidas",
    conditions: "Picoteos incluyen salsa de soya o agridulce.",
    items: [
      {
        name: "Aros de cebolla",
        pieces: 6,
        price: 1990,
        description: "6 unidades crujientes con salsa.",
      },
      {
        name: "Arrollados primavera",
        pieces: 6,
        price: 1990,
        description: "6 unidades doradas al punto.",
      },
      {
        name: "Empanadas de queso",
        pieces: 6,
        price: 1990,
        description: "6 unidades con queso fundido.",
      },
      {
        name: "Bastones de surimi apanado",
        pieces: 6,
        price: 2500,
        description: "6 unidades crocantes de surimi.",
      },
      {
        name: "Onigiris pollo queso crema",
        pieces: 10,
        price: 3990,
        description: "10 unidades triangulares rellenas.",
      },
      {
        name: "Camarones apanados",
        pieces: 6,
        price: 3990,
        description: "6 camarones apanados crocantes.",
      },
      {
        name: "Bocaditos carne mongoliana",
        pieces: 6,
        price: 1990,
        description: "6 unidades sazonadas.",
      },
      {
        name: "Wantán",
        pieces: 5,
        price: 3990,
        description: "5 unidades tradicionales.",
      },
      {
        name: "Fingers chicken + BBQ",
        pieces: 5,
        price: 4990,
        description: "5 bastones de pechuga crujiente con salsa barbecue.",
      },
      {
        name: "Bebida lata 220cc",
        price: 1300,
        description: "Lata fría: Coca-Cola o Fanta.",
      },
    ],
  },
];
