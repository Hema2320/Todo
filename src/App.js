import './App.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button'

function App() {
  let [task, setTask]= useState("")
  let [todo, setToDo] = useState([
    {
      work:"Create Theme",
      status:false
    },
    {
      work:"Work on wordpress",
      status:false
    },
    {
      work:"Build the Site",
      status:false
    },
    {
      work:"Test the Application",
      status:false
    }
  ])

  let handleChange = (e)=>{
    let update = [...todo];//achieving the immutability

    console.log(update==todo)

    let item = e;
    item.status=!item.status
    update.splice(update.indexOf(e),1,item)
    console.log(update)
    setToDo(update)
  }

  let add = ()=>{
    if(task)
    {
        let newArr = [...todo];
        newArr.push({
            work:task,
            status:false
        })
        setToDo(newArr)
    }
  }
  let handleDelete=(i)=>{
    let newArray=[...todo];
    newArray.splice(i,1);
    setToDo(newArray)
  }
  return <>
  

        <div className="container">
    <div className="row">
      
        <div className="col-md-12">
            <div className="card card-white">
                <div className="card-body">
                    
                         <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e)=>{
                            setTask(e.target.value)
                            console.log(e.target.value)
                        }
                          }/> 
                         
                        <button className='btn btn-success' onClick={()=>add()}>Create</button> 
                    
                    <ul className="nav nav-pills todo-nav">
                        <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
                        
                    </ul>
                    <div className="todo-list">
                        {
                          todo.map((e,index)=>{
                            return <>
                                <div className="todo-item" key={index}>
                                    <div className="checker"><span className=""><input type="checkbox" defaultChecked={e.status} onChange={()=>handleChange(e)}/></span></div>
                                    {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <Button variant='danger'className='align' onClick={()=>handleDelete()}>Close</Button>
                                  </div>                            
                            </>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div>
  
</div>
    </>
}

export default App;
