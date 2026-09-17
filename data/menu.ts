export interface RollItem {
  wrapping: string;
  ingredients: string;
}

export interface DetailItem {
  label: string;
  text: string;
}

export interface MenuItem {
  name: string;
  pieces?: number | string;
  unit?: string;
  price: number;
  description?: string;
  rolls?: RollItem[];
  details?: DetailItem[];
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
        unit: "Cortes",
        price: 7990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo, queso, morrón ahumado" },
          { wrapping: "Ciboulette", ingredients: "Kanikama apanado, queso, palta" },
        ],
      },
      {
        name: "Promo 2",
        pieces: 20,
        unit: "Cortes",
        price: 9990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo, queso, morrón ahumado" },
          { wrapping: "Palta fresca", ingredients: "Camarón apanado, queso, choclo baby" },
        ],
      },
      {
        name: "Promo 3",
        pieces: 30,
        unit: "Cortes",
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
        unit: "Cortes",
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
        unit: "Cortes",
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
        unit: "Cortes",
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
        unit: "Cortes",
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
        unit: "Cortes",
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
        unit: "Cortes",
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
        unit: "Cortes",
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
        unit: "Cortes",
        price: 11990,
        rolls: [
          { wrapping: "Nori frito", ingredients: "Salmón, queso crema con salsa acevichada y merkén ahumado" },
          { wrapping: "Ciboulette", ingredients: "Pollo, queso, palta con salsa maracuyá y camote" },
        ],
      },
      {
        name: "Hiroshi Fusion",
        pieces: 20,
        unit: "Cortes",
        price: 12990,
        rolls: [
          { wrapping: "Jamón serrano", ingredients: "Camarón, queso, ciboulette con salsa acevichada y merkén ahumado" },
          { wrapping: "Queso flameado", ingredients: "Salmón, queso, pimentón ahumado con cebolla crispy" },
        ],
      },
      {
        name: "Satori Nikkei",
        pieces: 20,
        unit: "Cortes",
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
        unit: "Cortes",
        price: 6500,
        rolls: [
          { wrapping: "Jamón serrano", ingredients: "Pollo, queso crema, ciboulette, salsa acevichada y merkén" },
        ],
      },
      {
        name: "Roll B",
        pieces: "8-10",
        unit: "Cortes",
        price: 6500,
        rolls: [
          { wrapping: "Palta fresca", ingredients: "Camarón apanado, queso, palmito, salsa pink y crocante de camote" },
        ],
      },
      {
        name: "Roll C",
        pieces: "8-10",
        unit: "Cortes",
        price: 7000,
        rolls: [
          { wrapping: "Queso flameado", ingredients: "Pollo apanado, palta, choclo baby, camote al hilo" },
        ],
      },
      {
        name: "Roll D",
        pieces: "8-10",
        unit: "Cortes",
        price: 7000,
        rolls: [
          { wrapping: "Ciboulette", ingredients: "Camarón apanado, queso, choclo, aros de cebolla y salsa acevichada" },
        ],
      },
      {
        name: "Roll F",
        pieces: "8-10",
        unit: "Cortes",
        price: 7500,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Salmón, queso, palta con topping camarón apanado y salsa maracuyá" },
        ],
      },
      {
        name: "Roll G",
        pieces: "8-10",
        unit: "Cortes",
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
        pieces: 1,
        unit: "Roll",
        price: 3800,
        details: [
          { label: "Base", text: "Pollo tradicional y queso crema" },
          { label: "Vegetal", text: "+ 1 vegetal a elección" },
        ],
      },
      {
        name: "Hand-Roll Pollo Apanado",
        pieces: 1,
        unit: "Roll",
        price: 3800,
        details: [
          { label: "Base", text: "Pollo crujiente apanado y queso crema" },
          { label: "Vegetal", text: "+ 1 vegetal a elección" },
        ],
      },
      {
        name: "Hand-Roll Kanikama",
        pieces: 1,
        unit: "Roll",
        price: 3800,
        details: [
          { label: "Base", text: "Kanikama apanado y queso crema" },
          { label: "Vegetal", text: "+ 1 vegetal a elección" },
        ],
      },
      {
        name: "Hand-Roll Camarón",
        pieces: 1,
        unit: "Roll",
        price: 4500,
        details: [
          { label: "Base", text: "Camarón apanado y queso crema" },
          { label: "Vegetal", text: "+ 1 vegetal a elección" },
        ],
      },
      {
        name: "Sushi Burger",
        pieces: 1,
        unit: "Unidad",
        price: 7990,
        details: [
          { label: "Proteína", text: "Pollo, kanikama o camarón apanado" },
          { label: "Relleno", text: "Queso crema + 3 vegetales a elección" },
          { label: "Opciones", text: "Palta, morrón, cebollín, ciboulette, choclo baby o palmito" },
        ],
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
        unit: "Unidades",
        price: 1990,
        details: [
          { label: "Porción", text: "Aros de cebolla dorados y crujientes" },
          { label: "Salsas", text: "Incluye salsa de soya o agridulce" },
        ],
      },
      {
        name: "Arrollados primavera",
        pieces: 6,
        unit: "Unidades",
        price: 1990,
        details: [
          { label: "Porción", text: "Arrollados primavera crocantes" },
          { label: "Salsas", text: "Incluye salsa de soya o agridulce" },
        ],
      },
      {
        name: "Empanadas de queso",
        pieces: 6,
        unit: "Unidades",
        price: 1990,
        details: [
          { label: "Porción", text: "Empanaditas de queso fundido crujientes" },
          { label: "Salsas", text: "Incluye salsa de soya o agridulce" },
        ],
      },
      {
        name: "Bastones de surimi apanado",
        pieces: 6,
        unit: "Unidades",
        price: 2500,
        details: [
          { label: "Porción", text: "Bastones apanados en panko crujiente" },
          { label: "Salsas", text: "Incluye salsa de soya o agridulce" },
        ],
      },
      {
        name: "Onigiris pollo queso crema",
        pieces: 10,
        unit: "Unidades",
        price: 3990,
        details: [
          { label: "Relleno", text: "Pollo sazonado con queso crema" },
          { label: "Formato", text: "10 bocados triangulares de arroz" },
        ],
      },
      {
        name: "Camarones apanados",
        pieces: 6,
        unit: "Unidades",
        price: 3990,
        details: [
          { label: "Porción", text: "Camarones apanados al panko" },
          { label: "Salsas", text: "Incluye salsa de soya o agridulce" },
        ],
      },
      {
        name: "Bocaditos carne mongoliana",
        pieces: 6,
        unit: "Unidades",
        price: 1990,
        details: [
          { label: "Sabor", text: "Carne sazonada en salsa mongoliana" },
          { label: "Salsas", text: "Incluye salsa de soya o agridulce" },
        ],
      },
      {
        name: "Wantán",
        pieces: 5,
        unit: "Unidades",
        price: 3990,
        details: [
          { label: "Porción", text: "Wantanes crujientes tradicionales" },
          { label: "Salsas", text: "Incluye salsa de soya o agridulce" },
        ],
      },
      {
        name: "Fingers chicken + BBQ",
        pieces: 5,
        unit: "Unidades",
        price: 4990,
        details: [
          { label: "Porción", text: "Tiras de pechuga crujientes" },
          { label: "Salsa", text: "Acompañado con salsa barbecue" },
        ],
      },
      {
        name: "Bebida lata 220cc",
        pieces: 220,
        unit: "cc",
        price: 1300,
        details: [
          { label: "Formato", text: "Lata individual 220cc bien fría" },
          { label: "Variedad", text: "Coca-Cola o Fanta (según stock)" },
        ],
      },
    ],
  },
];
