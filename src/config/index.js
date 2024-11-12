export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Party Wear" },
      { id: "women", label: "Wedding Wear" },
      { id: "kids", label: "Daily Wear" },
      { id: "accessories", label: "New Arrivals" },
      { id: "footwear", label: "Footwear" },
      
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Organza" },
      { id: "adidas", label: "Silk" },
      { id: "puma", label: "Banarasi" },
      { id: "levi", label: "Tissue" },
      { id: "zara", label: "Ajrakh" },
      { id: "h&m", label: "Ready to Wear" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Party Wear",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Wedding Wear",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Daily Wear",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "New Arrivals",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Party Wear",
  women: "Wedding Wear",
  kids: "Daily Wear",
  accessories: "New arrivals",
  footwear:"Footwear"
  
};

export const brandOptionsMap = {
  nike: "Organza",
  adidas: "Silk",
  puma: "Banarasi",
  levi: "Tissue",
  zara: "Ajrakh",
  "h&m": "Ready to Wear",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Party Wear" },
    { id: "women", label: "Wedding wear" },
    { id: "kids", label: "Daily Wear" },
    { id: "accessories", label: "New Arrivals" },
    { id: "footwear", label: "footwear" },
    
  ],
  brand: [
    { id: "nike", label: "Organza" },
    { id: "adidas", label: "Silk" },
    { id: "puma", label: "Banarasi" },
    { id: "levi", label: "Tissue " },
    { id: "zara", label: "Ajrakh" },
    { id: "h&m", label: "Ready to We" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
