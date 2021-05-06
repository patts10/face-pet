import React, { useEffect, useState } from 'react'
import { PostDetails } from './PostDetails';
import { ApiFetch } from './ApiFetch';
import '../styles.css';

export const AutorPost = (  ) => {

  const [autor, setAutor] = useState({
    firstName: '',
    lastName: '',
    picture: '',
    title: '',
    email: ''
  });

  
  
  const { loading , data } = ApiFetch();
  // console.log(data);
  const personalInfo = !!data && data['data'];
  const { email, firstName, lastName, picture, title}= personalInfo;

  const idList = Object.keys( personalInfo);

  const userList = () => {
    setAutor({
      'email': email, 
      'firstName': firstName,
      'lastName': lastName,
      'picture': picture,
      'title': title
    });
  }

  useEffect( () => {
    
    if(loading){
      const idList = Object.keys( personalInfo);
      userList()
      
    }
  }, []);
  
  return (
    <div className="align-center m-5">

    {
      loading
      ?

      (
        <div className='alert alert-info text-center'>
        <h2>loading</h2>
        </div>
      )
      :
      (
        <ol>
           {
              idList.map( id => (

          <div className='card-body animate__animated mb-3 align-center'>
            <h2>{ personalInfo[id].firstName }</h2>
            <PostDetails/>
            <img 
            
              src={ personalInfo[id].picture } 
              alt={ personalInfo[id].title } 
            />
            <p>#Etiqueta</p>

            <button className="btn btn-primary">Comments</button>

          </div>

            )
          )}
        </ol>

      )
    }
    </div>
  )
  


}
