// import React, { useState, useEffect } from "react";
// import API from "../utils/API";
// import Book from "../components/Results/Results";

// // const Saved = (props) => {
// //     return (
// //         <div className="header card text-class">
// //             <div className="row justify-content-center">
// //                 <div className="col-12 transparent">
// //                     <h2>Book Saved!</h2>
// //                 </div>
// //             </div>
// //         </div>

// //     )
// // }

// function Saved() {
//     const [savedBooks, setSavedBooks] = useState([]);

//     useEffect(() => {
//         API.getSavedBooks().then((data) => {
//             console.log(data.data);

//             setSavedBooks(data.data);
//         })
//     }, [savedBooks])


//     return (
//         <div>
//             <div className="row justify-content-center">
//                 <h4>Saved Books</h4>
//             </div>
//             <div className="books-container row">
//                 {console.log(savedBooks)}
//                 {savedBooks ? savedBooks.map((book) => {
//                     return <form onSubmit={submitDelete} className="col-12 col-md-4 my-2">
//                         <Book data={book} />
//                         <button type="submit" className="btn btn-info">Delete</button>
//                     </form>

//                 }) : null}
//             </div>
//         </div>

//     )
// }

// return (
//     <div>
//         <div className="row justify-content-center">
//             <form className="col-7">
//                 <input type="text" className="form-control m-2"
//                     onChange={handleInputChange}
//                     name="Search Books"
//                     placeholder="Search Books or Authors" />
//             </form>
//             <button type="submit" className="btn btn-primary col-1 m-2"
//                 onClick={handleFormSubmit}>Submit</button>
//         </div>
//         <div className="pt-4">
//             <div className="row book">
//                 {books ? books.map((book) => (
//                     <Book
//                         key={book.id}
//                         volumeInfo={book.volumeInfo}
//                     />
//                 )) : null}
//             </div>
//         </div>

//     </div>
// );
// }


// export default Saved;