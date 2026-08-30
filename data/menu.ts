export interface MenuItem {
  name: string;
  pieces?: number | string;
  price: number;
  description: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
  conditions?: string;
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
        description:
          "Pollo · queso · morrón ahumado envuelto en panko — kanikama apanado · queso · palta envuelto en ciboullete.",
      },
      {
        name: "Promo 2",
        pieces: 20,
        price: 9990,
        description:
          "Pollo · queso · morrón ahumado envuelto en panko — camarón apanado · queso · choclo baby envuelto en palta.",
      },
      {
        name: "Promo 3",
        pieces: 30,
        price: 12990,
        description:
          "Pollo · queso crema · palta envuelto en panko — kanikama apanado · cebollín · choclo baby envuelto en queso nuss — palmito · queso crema · choclo envuelto en ciboullete.",
      },
      {
        name: "Promo 4",
        pieces: 40,
        price: 16990,
        description:
          "Camarón apanado · queso · palta envuelto en panko — pollo · queso · cebollín envuelto en palta — kanikama apanado · queso · morrón ahumado envuelto en sésamo blanco tostado — choclo baby · queso · palta envuelto en ciboullete.",
      },
      {
        name: "Promo 5",
        pieces: 50,
        price: 20990,
        description:
          "Pollo · queso crema · palta envuelto en panko — camarón apanado · queso crema · cebollín envuelto en panko — pollo apanado · queso · pimentón envuelto en queso con topping cebolla crispy — kanikama apanado · queso · choclo envuelto en ciboullete — palmito · queso · palta envuelto en sésamo tostado blanco.",
        tag: "Popular",
      },
      {
        name: "Promo 6",
        pieces: 70,
        price: 27990,
        description:
          "Pollo · queso · palta en panko — camarón apanado · queso · morrón en panko — palmito · queso · choclo en panko — camarón apanado · queso · cebollín en queso nuss — pollo apanado · queso · ciboullete en palta — kanikama apanado · queso · choclo en ciboullete — kanikama apanado · queso en nori con topping sésamo tostado.",
      },
      {
        name: "Promo 7",
        pieces: 100,
        price: 39990,
        description:
          "La experiencia completa: 10 variedades distintas de rolls incluyendo pollo, kanikama, camarón y palmito con envolturas de panko, palta, ciboullete, queso nuss, sésamo, nori frito y más.",
        tag: "Mega",
      },
    ],
  },
  {
    id: "premium",
    label: "Premium",
    conditions:
      "Incluye salsa de soya o agridulce. Cambio de envoltura, vegetal o proteína: $1.500 c/u.",
    items: [
      {
        name: "Premium A",
        pieces: 30,
        price: 14990,
        description:
          "Camarón apanado · queso crema · ciboullete en jamón serrano con salsa acevichada y merkén ahumado — pollo apanado · queso crema · palta en takis fuego — kanikama apanado · queso · cebollín en panko.",
      },
      {
        name: "Premium B",
        pieces: 30,
        price: 15990,
        description:
          "Pollo apanado · queso · ciboullete en queso nuss — camarón apanado · queso · palta en panko con salsa maracuyá y camote crocante — kanikama apanado · queso · morrón ahumado en palta con salsa acevichada y merkén.",
      },
      {
        name: "Premium C",
        pieces: 30,
        price: 16990,
        description:
          "Pollo · queso · choclo en ciboullete con salsa acevichada y aros de cebolla — camarón apanado · queso · palmito en palta con salsa pink y crocante de camote — kanikama apanado · queso · cebollín en panko con salsa acevichada y merkén.",
        tag: "Top",
      },
    ],
  },
  {
    id: "rolls",
    label: "Rolls",
    conditions:
      "Incluye salsa de soya o agridulce. Cambios: $1.500 c/u — cambio a salmón: $2.500.",
    items: [
      {
        name: "Roll A",
        price: 6500,
        description:
          "Pollo · queso crema · ciboullete en jamón serrano, salsa acevichada y merkén.",
      },
      {
        name: "Roll B",
        price: 6500,
        description:
          "Camarón apanado · queso · palmito en palta, salsa pink y crocante de camote.",
      },
      {
        name: "Roll C",
        price: 7000,
        description:
          "Pollo apanado · palta · choclo baby en queso flameado, topping camote al hilo.",
      },
      {
        name: "Roll D",
        price: 7000,
        description:
          "Camarón apanado · queso · choclo en ciboullete, aros de cebolla & salsa acevichada.",
      },
      {
        name: "Roll F",
        price: 7500,
        description:
          "Salmón · queso · palta en panko, topping camarón apanado y salsa maracuyá.",
        tag: "Especial",
      },
      {
        name: "Roll G",
        price: 8000,
        description:
          "Camarón apanado · queso en salmón flameado, salsa acevichada y limón.",
        tag: "Premium",
      },
    ],
  },
  {
    id: "salmon",
    label: "Signature Salmon",
    conditions: "Incluye salsa de soya, agridulce y palitos.",
    items: [
      {
        name: "Inata Salmon",
        pieces: 20,
        price: 11990,
        description:
          "Salmón · queso crema en nori frito con topping salsa acevichada y merkén ahumado — pollo · queso · palta en ciboullete con salsa maracuyá y camote.",
      },
      {
        name: "Hiroshi Fusion",
        pieces: 20,
        price: 12990,
        description:
          "Camarón · queso · ciboullete en jamón serrano, salsa acevichada y merkén ahumado — salmón · queso · pimentón ahumado en queso flameado con topping cebolla crispy.",
      },
      {
        name: "Satori Nikkei",
        pieces: 20,
        price: 14990,
        description:
          "Camarón furay · queso · palta en salmón, salsa acevichada y toque de limón — salmón furay · queso · pimentón ahumado en palta con salsa pinky y crocantes de camote.",
        tag: "Signature",
      },
    ],
  },
  {
    id: "handroll",
    label: "Hand-Roll & Burger",
    conditions: "Incluye salsa de soya o agridulce.",
    items: [
      {
        name: "Hand-Roll Pollo",
        price: 3800,
        description: "Pollo · queso crema + 1 vegetal a elección.",
      },
      {
        name: "Hand-Roll Pollo Apanado",
        price: 3800,
        description: "Pollo apanado · queso crema + 1 vegetal a elección.",
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
          "1 proteína apanada (pollo, kanikama o camarón) + queso crema + 3 vegetales. Opciones: palta, morrón ahumado, cebollín, ciboullete, choclo baby y palmito.",
        tag: "Estrella",
      },
    ],
  },
  {
    id: "picoteos",
    label: "Picoteos",
    conditions: "Incluye salsa de soya o agridulce.",
    items: [
      {
        name: "Aros de cebolla",
        pieces: 6,
        price: 1990,
        description: "6 unidades crujientes.",
      },
      {
        name: "Arrollados primavera",
        pieces: 6,
        price: 1990,
        description: "6 unidades.",
      },
      {
        name: "Empanadas de queso",
        pieces: 6,
        price: 1990,
        description: "6 unidades.",
      },
      {
        name: "Bastones de surimi apanado",
        pieces: 6,
        price: 2500,
        description: "6 unidades.",
      },
      {
        name: "Onigiris pollo queso crema",
        pieces: 10,
        price: 3990,
        description: "10 unidades.",
      },
      {
        name: "Camarones",
        pieces: 6,
        price: 3990,
        description: "6 unidades.",
      },
      {
        name: "Bocaditos carne mongoliana",
        pieces: 6,
        price: 1990,
        description: "6 unidades.",
      },
      {
        name: "Wantán",
        pieces: 5,
        price: 3990,
        description: "5 unidades.",
      },
      {
        name: "Fingers chicken",
        pieces: 5,
        price: 4990,
        description: "5 unidades con salsa BBQ.",
      },
      {
        name: "Bebida lata 220cc",
        price: 1300,
        description: "Fanta o Coca-Cola.",
      },
    ],
  },
];
