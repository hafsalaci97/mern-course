import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Main.css";


const Main =()=>{

    //manage state to display and remove information
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();
    //get all authors in order to display them 
    useEffect(()=>{
        axios.get("http://localhost:8000/authors/getAll")
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setAuthors(res.data.results);})
        .catch(err=>console.log(err))
    }, []);

    //delete author's with a specific id
    const deleteHandler =(authorId)=>{
        // console.log(authorId)
        axios.delete(`http://localhost:8000/authors/${authorId}/delete`)
            .then(res=>{
                console.log(res);
                setAuthors(authors.filter(author => author._id !== authorId));
            })
        

    }

    return(
        <div>
            <Link to={"/new"}>Add an Author</Link>
            <h3>We have quotes by:</h3>
            <table className="Table-Style">
                <thead>
                    <tr>
                        <th style={{padding: "8px", fontSize: "20px"}} className="Row-Style">Author</th>
                        <th style={{padding: "8px", fontSize: "20px"}} className="Row-Style">Actions Available</th>
                    </tr>
                </thead>
                    {
                        authors.map((author, index)=>{
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td className="Row-Style">{author.authorName}</td>
                                        <td className="Btn-Td">
                                            <button className="Btn" onClick={()=>navigate(`/edit/${author._id}`)}>EDIT</button>
                                            <button className="Btn" onClick={()=>deleteHandler(author._id)}>DELETE</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
            </table>
        </div>
    );
}

export default Main;