//first user validation

//server site

//jwt use for email validation
app.post("/jwt", (req, res) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
});

//client site auth provider page for jwt token varify for signin social signin singup

//   useEffect(() => {
// const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//     setLoading(false);
//     if (currentUser && currentUser.email) {
//       const loggedUser = {
//         email: currentUser.email,
//       };
//       fetch("http://localhost:5000/jwt", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(loggedUser),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("jwt response", data);
//           //warning: local storage is not the best (second best please) to store access token
//           localStorage.setItem("car-access-token", data.token);
//         });
//     } else {
//       localStorage.removeItem("car-access-token");
//     }
//   });
//   return () => {
//     unSubscribe();
//   };
// }, []);

////////////////////////////////////////
//next step is user booking data safe load process

//in the step already did but few things need add on client site

// useEffect(() => {
//     fetch(url, {
//       method: "GET",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (!data.error) {
//           setBookings(data);
//         } else {
//logout and then navigate you can here
//           navigate("/");
//         }
//       });
//   }, [url]);

//server site
// / booking get some data
//     app.get("/booking", verifyJWT, async (req, res) => {
//       const decoded = req.decoded;
//       console.log("come back after varify");

//       if (decoded.email !== req.query.email) {
//         return res.status(403).send({ error: 1, message: "forbidden access" });
//       }
//       let query = {};
//       if (req.query?.email) {
//         query = { email: req.query.email };
//       }
//       const result = await bookingCollection.find(query).toArray();
//       res.send(result);
//     });

//jwt verify

// const verifyJWT = (req, res, next) => {
//     console.log("hitting verify jwt");
//     console.log(req.headers.authorization);
//     const authorization = req.headers.authorization;
//     if (!authorization) {
//       return res
//         .status(401)
//         .send({ error: true, message: "Unauthorized access" });
//     }
//     const token = authorization.split(" ")[1];
//     console.log("TOKEN INSSIDE VERIFY", token);
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
//       if (error) {
//         return res
//           .status(403)
//           .send({ error: true, message: "Unauthorized access" });
//       }
//       req.decoded = decoded;
//       next();
//     });
//   };
