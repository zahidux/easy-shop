// // (One date create) One data insert client site to server to database////////////////
// // Data create then send database
// // create input field - use handelSubmit client site --

// // server site --
// // const bookingCollection = client.db("carService").collection("bookings");

// // app.post("/booking", async (req, res) => {
// //       const booking = req.body;
// //       console.log(booking);
// // (first para for show data on console)
// //       const result = await bookingCollection.insertOne(booking);
// //       res.send(result);
// //     });

// // client site data send
// // fetch("http://localhost:5000/booking", {
// //       method: "POST",
// //       headers: {
// //         "content-type": "application/json",
// //       },
// //       body: JSON.stringify(order),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data);
// //         Swal.fire("Booking Successfully");
// //         from.reset();
// //       });

// ///////////////////////////////////////////////////////////////////////////////////////////////
// //(data read or get data from database )

// //all data get from database///////////////////////
// //server -site
// // app.get("/services", async (req, res) => {
// //     const cursor = serviceCollection.find();
// //     const result = await cursor.toArray();
// //     res.send(result);
// //   });

// //client site--------------
// // const [services, setServices] = useState([]);

// // useEffect(() => {
// //   fetch("http://localhost:5000/services")
// //     .then((res) => res.json())
// //     .then((data) => setServices(data));
// // }, []);
// // after service map get everything------

// //single data get from database///////////////////////////////////
// // client site in a section
// // {
// //   /* <Link to={`/checkout/${_id}`}>
// //             <FaRegArrowAltCircleRight />
// //           </Link> */
// // }
// //client site

// //   {
// //     path: "/checkout/:id",
// //     element: <Checkout />,
// //     loader: ({ params }) =>
// //       fetch(`http://localhost:5000/services/${params.id}`),
// //   },

// // server site
// // single data details load from database to client site-------------------------------------------

// //   app.get("/services/:id", async (req, res) => {
// //     const id = req.params.id;
// //     console.log(id);
// //     const query = { _id: new ObjectId(id) };
// //     const options = {
// //       // Include only the `title` and `imdb` fields in the returned document
// //       projection: { title: 1, price: 1, service_id: 1 },
// //     };
// //     const result = await serviceCollection.findOne(query, options);
// //     res.send(result);
// //   });

// // some data get from database ////////////////////////////
// // server site  get some data
// // app.get("/booking", async (req, res) => {
// //   console.log(req.query.email);
// //   let query = {};
// //   if (req.query?.email) {
// //     query = { email: req.query.email };
// //   }
// //   const result = await bookingCollection.find(query).toArray();
// //   res.send(result);
// // });

// //client site//////////////////

// // const { user } = useContext(AuthContext);
// //   const [bookings, setBookings] = useState([]);
// //   const url = `http://localhost:5000/booking?email=${user.email}`;

// //   useEffect(() => {
// //     fetch(url)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setBookings(data);
// //       });
// //   }, [url]); here dependency isn't sure

// //   navbar

// {
//   /* <>
//           {user?.email ? (
//             <>
//               <ActiveLink className="font-semibold text-lg" to={"/booking"}>
//                 My Booking
//               </ActiveLink>
//               <Link>
//                 <button
//                   onClick={signOut}
//                   className="bg-orange-600 text-xl py-3 px-4 rounded-lg text-white font-semibold bg-gradient-to- from-orange-500 to-orange-100"
//                 >
//                   Log Out
//                 </button>
//               </Link>
//             </>
//           ) : (
//             <Link to={"/login"}>
//               <button className="bg-orange-600 text-xl py-3 px-4 rounded-lg text-white font-semibold bg-gradient-to- from-orange-500 to-orange-100">
//                 Login
//               </button>
//             </Link>
//           )}
//         </> */

// // delete one////////////////////////////////

// //server site

//  //delete one

// //  app.delete("/booking/:id", async (req, res) => {
// //     const id = req.params.id;
// //     const query = { _id: new ObjectId(id) };
// //     const result = await bookingCollection.deleteOne(query);
// //     res.send(result);
// //   });

// //client site//////////

// // const handelDelete = (id) => {
// //     const proceed = confirm("Are you sure ?");
// //     if (proceed) {
// //       fetch(`http://localhost:5000/booking/${id}`, {
// //         method: "DELETE",
// //       })
// //         .then((res) => res.json())
// //         .then((data) => {
// //           console.log(data);
// //           if (data.deletedCount > 0) {
// //             alert("Deleted SuccessFully");
// //             const remaining = booking.filter((item) => item._id !== id);
// //             setBookings(remaining);
// //           }
// //         });
// //     }

// // <button
// //             onClick={() => handelDelete(_id)}
// //             className="bg-red-600 text-white"
// //           >
// //             Delete
// //           </button>

// // update one item ///////////// put hotche na thakle add kore diba ar patch update kore diba

// //that have on module 70.9;
