// //clent site

// const ByteMenu = () => {
//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(10);

//   const { totalItems } = useLoaderData();
//   console.log(totalItems);

//   // const itemsPerPage = 10;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const pageNumbers = [...Array(totalPages).keys()];

//   const options = [5, 10, 20];
//   const handleSelectChange = (e) => {
//     setItemsPerPage(parseInt(e.target.value, 10));
//     setCurrentPage(0);
//     // You can also trigger a function to fetch data for the new page here
//   };

//   // ////////////////////////
//   {/* //pagination */}
//   <div className="flex  gap-5 justify-center my-16 ">
//   <p>CurrentPage: {currentPage}</p>
//   {pageNumbers.map((number) => (
//     <button
//       className={`bg-slate-200 px-3 rounded-md pagination ${
//         currentPage === number ? "text-lg" : ""
//       }`}
//       key={number}
//       onClick={() => setCurrentPage(number)}
//     >
//       {number}
//     </button>
//   ))}
//   <select value={itemsPerPage} onChange={handleSelectChange}>
//     {options.map((option) => (
//       <option key={option} value={option}>
//         {option}
//       </option>
//     ))}
//   </select>
// </div>

// ///////////route

// {
//     path: "menu",
//     element: <ByteMenu />,
//     loader: () => fetch("http://localhost:5000/totalItems"),
//   },

//   //server site

//    //get total menu number

//    app.get("/totalItems", async (req, res) => {
//     const result = await menuCollection.estimatedDocumentCount();
//     res.send({ totalItems: result });
//   });

/// rest of work on module 72.(6-7-8-9)
