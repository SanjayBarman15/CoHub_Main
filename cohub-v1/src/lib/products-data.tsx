export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  imageStyle?: {
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    objectPosition?: string;
    aspectRatio?: string;
    borderRadius?: string;
    padding?: string;
    backgroundColor?: string;
  };
};

export const products: Product[] = [
  {
    id: "tshirt-black",
    name: "CoHub Logo T-Shirt",
    description: "Comfortable cotton t-shirt with the CoHub logo",
    price: 9.99,
    image: "/shirt.svg",
    category: "Apparel",
    imageStyle: {
      objectFit: "contain",
      padding: "1rem",
      backgroundColor: "#f8f9fa",
    },
  },
  {
    id: "hoodie-gray",
    name: "Developer Hoodie",
    description: "Stay warm while coding with our premium hoodie",
    price: 22.99,
    image: "/Hoodie.jpg",
    category: "Apparel",
    imageStyle: {
      objectFit: "contain",
      objectPosition: "center",
      borderRadius: "0.5rem",
    },
  },
  {
    id: "tote-bag",
    name: "Canvas Tote Bag",
    description:
      "Eco-friendly canvas bag perfect for your laptop and essentials",
    price: 16.99,
    image: "/Tote.jpg",
    category: "Bags",
    imageStyle: {
      objectFit: "cover",
    //   padding: "1.5rem",
    //   backgroundColor: "#f1f3f5",
    },
  },
  {
    id: "water-bottle",
    name: "Insulated Water Bottle",
    description: "Keep your drinks hot or cold during long coding sessions",
    price: 13.99,
    image: "/Bottle.jpg",
    category: "Accessories",
    imageStyle: {
      objectFit: "cover",
    //   padding: "0.5rem",
    //   backgroundColor: "#ffffff",
    },
  },
  {
    id: "laptop-sleeve",
    name: "Padded Laptop Sleeve",
    description: "Protect your laptop with our padded sleeve",
    price: 25.99,
    image: "/laptop.jpg",
    category: "Accessories",
    imageStyle: {
      objectFit: "contain",
    //   padding: "1rem",
    //   backgroundColor: "#f8f9fa",
    },
  },
  {
    id: "sticker-pack",
    name: "Developer Sticker Pack",
    description: "Decorate your laptop with our tech-themed stickers",
    price: 1.99,
    image: "/sticker.jpg",
    category: "Accessories",
    imageStyle: {
      objectFit: "contain",
      padding: "1rem",
      backgroundColor: "#ffffff",
    },
  },
  {
    id: "cap-black",
    name: "CoHub Cap",
    description: "Stylish cap with embroidered CoHub logo",
    price: 7.99,
    image: "/cap.jpg",
    category: "Apparel",
    imageStyle: {
      objectFit: "contain",
    //   padding: "1rem",
    //   backgroundColor: "#f8f9fa",
    },
  },
  {
    id: "notebook",
    name: "Coder's Notebook",
    description: "Premium notebook for your ideas and code snippets",
    price: 12.99,
    image: "/notebook.jpg",
    category: "Accessories",
    imageStyle: {
      objectFit: "contain",
      padding: "1rem",
      backgroundColor: "#ffffff",
    },
  },
];
