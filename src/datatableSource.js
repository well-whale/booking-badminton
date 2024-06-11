import { Password } from "@mui/icons-material";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const datacourt = [
  {
    courtId: 1,
    courtName: "Central District Court",
    district: "Central District",
    courtAddress: "123 Main Street, Central City",
    courtQuanity: 5
  },
  {
    courtId: 2,
    courtName: "Northern District Court",
    district: "Northern District",
    courtAddress: "456 North Avenue, North City",
    courtQuanity: 3
  },
  {
    courtId: 3,
    courtName: "Southern District Court",
    district: "Southern District",
    courtAddress: "789 South Road, South City",
    courtQuanity: 4
  },
  {
    courtId: 4,
    courtName: "Eastern District Court",
    district: "Eastern District",
    courtAddress: "101 East Boulevard, East City",
    courtQuanity: 6
  },
  {
    courtId: 5,
    courtName: "Western District Court",
    district: "Western District",
    courtAddress: "202 West Drive, West City",
    courtQuanity: 2
  },
  {
    courtId: 6,
    courtName: "Mountain District Court",
    district: "Mountain District",
    courtAddress: "303 Mountain Pass, Mountain City",
    courtQuanity: 3
  },
  {
    courtId: 7,
    courtName: "Valley District Court",
    district: "Valley District",
    courtAddress: "404 Valley Street, Valley City",
    courtQuanity: 4
  },
  {
    courtId: 8,
    courtName: "Coastal District Court",
    district: "Coastal District",
    courtAddress: "505 Beach Road, Coastal City",
    courtQuanity: 5
  },
  {
    courtId: 9,
    courtName: "Lake District Court",
    district: "Lake District",
    courtAddress: "606 Lake Avenue, Lake City",
    courtQuanity: 3
  },
  {
    courtId: 10,
    courtName: "Forest District Court",
    district: "Forest District",
    courtAddress: "707 Forest Lane, Forest City",
    courtQuanity: 4
  }
];

export const dataEX = [
  {
    id: 1,  
    firstname:"viet",
    lastname: "hoi",
    password:"123456",
    phone: "111111111",
    email: "olivia@gmail.com",
    role : "user"
  },
  {
    id: 2,  
    firstname : "gia",
    lastname: "hung",
    phone: "222222222",
    email: "olivia@gmail.com",
    role : "user"
  },
  {
    id: 3,  
    name: "huong",
    phone: "111111111",
    email: "olivia@gmail.com",
    role : "user"
  }
]
export const userRows = [
  {
    id: 1,  
    name: "Olivia",
    phone: "111111111",
    email: "olivia@gmail.com",
    role : "user"
  },
  {
    id: 2,  
    name: "Olivia",
    phone: "222222222",
    email: "olivia@gmail.com",
    role : "user"
  },
  {
    id: 3,  
    name: "Olivia",
    phone: "111111111",
    email: "olivia@gmail.com",
    role : "user"
  },
  {
    id: 4,
    username: "Camila",
    img: "/assets/person/person4.jpg",
    email: "camila@gmail.com",
    status: "active",
    age: 26,
  },
  {
    id: 5,
    username: "Madison Clark",
    img: "/assets/person/person5.jpg",
    email: "madison@gmail.com",
    status: "pending",
    age: 28,
  },
  {
    id: 6,
    username: "Alexander Hall",
    img: "/assets/person/person6.jpg",
    email: "alexander@gmail.com",
    status: "passive",
    age: 20,
  },
  {
    id: 7,
    username: "Nova Garcia",
    img: "/assets/person/person7.jpg",
    email: "nova@gmail.com",
    status: "active",
    age: 30,
  },
  {
    id: 8,
    username: "Sebastian",
    img: "/assets/person/person8.jpg",
    email: "sebastian@gmail.com",
    status: "passive",
    age: 27,
  },
  {
    id: 9,
    username: "Olivia",
    img: "/assets/person/person1.jpg",
    email: "olivia@gmail.com",
    status: "active",
    age: 35,
  },
  {
    id: 10,
    username: "Charlotte",
    img: "/assets/person/person2.jpg",
    email: "charlotte@gmail.com",
    status: "passive",
    age: 21,
  },
  {
    id: 11,
    username: "Amelia",
    img: "/assets/person/person3.jpg",
    email: "amelia@gmail.com",
    status: "pending",
    age: 15,
  },
  {
    id: 12,
    username: "Camila",
    img: "/assets/person/person4.jpg",
    email: "camila@gmail.com",
    status: "active",
    age: 26,
  },
  {
    id: 13,
    username: "Madison Clark",
    img: "/assets/person/person5.jpg",
    email: "madison@gmail.com",
    status: "pending",
    age: 28,
  },
  {
    id: 14,
    username: "Alexander Hall",
    img: "/assets/person/person6.jpg",
    email: "alexander@gmail.com",
    status: "passive",
    age: 20,
  },
  {
    id: 15,
    username: "Nova Garcia",
    img: "/assets/person/person7.jpg",
    email: "nova@gmail.com",
    status: "active",
    age: 30,
  },
  {
    id: 16,
    username: "Sebastian",
    img: "/assets/person/person8.jpg",
    email: "sebastian@gmail.com",
    status: "passive",
    age: 27,
  },
];

// export const productColumns = [
//   { field: "partNumber", headerName: "PART NO", width: 100 },
//   {
//     field: "product",
//     headerName: "Product",
//     width: 230,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.img} alt="avatar" />
//           {params.row.product}
//         </div>
//       );
//     },
//   },
//   { field: "brands", headerName: "Brands", width: 100 },
//   { field: "description", headerName: "Description", width: 230 },
//   {
//     field: "price",
//     headerName: "Price",
//     type: "number",
//     width: 100,
//   },
//   {
//     field: "stock",
//     headerName: "Stock",
//     width: 100,
//   },
//   {
//     field: "addtoCart",
//     headerName: "Add to cart",
//     width: 160,
//     renderCell: () => {
//       return (
//         <div className="addtoCart">
//           <span>Add to cart</span>
//         </div>
//       );
//     },
//   },
// ];

// export const productRows = [
//   {
//     partNumber: "DRBDM063",
//     img: "/assets/carbattery.jpg",
//     product: "DRIVETEC 063 CAR BATTERY",
//     brands: "DRIVETEC",
//     description:
//       "Quality, durability and reliability sum up the DriveTec range of automotive and commercial batteries",
//     price: "$40.90",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "51Wy1UhvbZL",
//     img: "/assets/engineoil.jpg",
//     product: "Auto Parts Engine Oil Viscosity",
//     brands: "Turbo",
//     description: "Brand Generic Vehicle Service Type Scooter",
//     price: "$25.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "HJKDM063",
//     img: "/assets/engineoil2.jpg",
//     product: "ENGINE OIL",
//     brands: "Turbo",
//     description: "BMW ENGINE OIL TWIN POWER",
//     price: "$20.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "31CTWTB2",
//     img: "/assets/engineoil.jpg",
//     product: "HONDA 4 STROKE ENGINE OIL",
//     brands: "Platinum",
//     description: "GOOD QUALITY. EASY TO USE. LONG LASTING",
//     price: "$20.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "HRDDR3055",
//     img: "/assets/wheel.jpg",
//     product: "Platinum Plus - Wheel",
//     brands: "Platinum",
//     description: "AlUMINUM WHEEL; 15 X 6; 45MM OFFSET; 5 SPOKE",
//     price: "$160.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "FGH543",
//     img: "/assets/carbrush.jpg",
//     product: "Short Handle Car and Motocycle Wheel Brush",
//     brands: "Amazon",
//     description:
//       "Short-handled cleaning brush for removing dirt, dust and grime from Car, Motocycle",
//     price: "$18.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "YABYBX3055",
//     img: "/assets/.jpg",
//     product: "YUASA 055 3000 SERIES CAR BATTERY -4 YEAR WARRANTY",
//     brands: "YUASA",
//     description:
//       "Quality, durability and reliability sum up the DriveTec range of automotive and commercial batteries",
//     price: "$137.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
// ];
