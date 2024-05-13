import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Technology() {
  const [data, setData] = useState([]);
  const [urlToImage, setUrlToImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));

    return chunks;
  };

  useEffect(() => {

    fetch('http://localhost:7000/articles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) =>
        response.json())
      .then((data) => {

        setData(data);
        data.map((singleObject, index) => {
          if (index === 0) {
            setUrlToImage(singleObject.urlToImage);
            setTitle(singleObject.title);
            setDescription(singleObject.description);
          }
          
        return data;
      })
      
      .catch((err) => {
        console.log(err.message);
      });
   
    });
    
  }, [])
  return (
    
    <div >
      <MDBContainer className="py-5">
        <MDBRow className="gx-5 border-bottom pb-4 mb-5">
          <MDBCol md="6" className="mb-4">
            <MDBRipple
              className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
              rippleTag="div"
              rippleColor="light"
            >

              <img
                src={urlToImage}
                className="w-100"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>

          <MDBCol md="6" className="mb-4">
            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
              News of the day
            </span>
            <h4>
              <strong>{title}</strong>
            </h4>
            <p className="text-muted">
              {description}
            </p>
            <MDBBtn>Read More</MDBBtn>
          </MDBCol>
        </MDBRow>

        {arrayChunk(data, 3).map((row, i) => (
          <div key={i} className="row mx-auto">
            <ul key={i}>
            <MDBRow className="gx-lg-5">
              {row.map((todo, index) => (
                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                  <div key={index}>
                    <MDBRipple
                      className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                      rippleTag="div"
                      rippleColor="light"
                    >
                      <img
                        src={todo.urlToImage}
                        className="img-fluid"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBRow className="mb-3">

                      <MDBCol col="6" className="text-end">
                        <u> <strong>{todo.title}</strong></u>
                      </MDBCol>
                    </MDBRow>
                    <a href="#!" className="text-dark">

                      <p>
                        {todo.description}
                      </p>
                    </a>
                    <hr/>
                  </div>
                </MDBCol>
               
              ))}
            </MDBRow>
            </ul>
          </div>
        ))}

      
      </MDBContainer>
    </div>

  );
}