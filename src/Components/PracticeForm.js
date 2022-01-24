import React,{useState} from 'react'
const PracticeForm = () =>{
    const [values,setValues] = useState({
        name:'',
        lname:'',
        email:''
    })
    const inputHandler = (e) =>{
       const name = e.target.name
       const value = e.target.value
       console.log(name,value)
       setValues({...values,[name]:value})
    }
    return(
        <div>
           <div>
               <label>Name:</label>
               <input type="text" name="name" value={values.name} onChange={inputHandler}/>
           </div>
           <div>
               <label>Email:</label>
               <input type="text" name="email" value={values.email} onChange={inputHandler}/>
           </div>
           <div>
               <label>Last Name:</label>
               <input type="text" name="lname" values={values.lname} onChange={inputHandler}/>
           </div>
           <button>Register</button>
        </div>
    )
}
export default PracticeForm