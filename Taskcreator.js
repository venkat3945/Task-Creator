
import React, { useState } from "react";
import './Task.css';
const Taskcreator = () =>{
    const [task, settask] = useState('');
    const [date,setdate] = useState('');
    const [list, setlist] = useState([]);
    const [time,settime] = useState('');
    const submithandler = (e) =>{
        e.preventDefault();
        setlist((list)=>{
            const updatedlist = [...list,task,time]
            settask("");
            settime("");
            return updatedlist
        })
    }
    const upcoming = () =>{
        {
            list.map(
                (value,index)=>{
                    document.getElementById('arr0').innerHTML = list[0];
                    document.getElementById('arr1').innerHTML = list[1];
                    document.getElementById('arr2').innerHTML = list[2];
                    document.getElementById('arr3').innerHTML = list[3];
                    document.getElementById('arr4').innerHTML = list[4];
                    document.getElementById('arr5').innerHTML = list[5];


                }
            )
        }
    }


    return(
        <div>
            <div className="main">
                <h2 id="tacr">Task Creator</h2><br />
                <form onSubmit={submithandler}>
                <label id="taname">Task Name</label><br />
                <input id="tana" type="text" placeholder="Enter your task name" name="taskname" value={task} onChange={(e)=> settask(e.target.value)}></input><br />
                <br />
                <label id="tades">Task Description (optional)</label><br />
                <input id="textdes" type="text" placeholder="Enter your task description" name="taskdes"></input><br />
                <br />
                <input type="date" name="date" value={date} onChange={(e)=> setdate(e.target.value)}></input>
                <input type="time" name="time" value={time} onChange={(e) => settime(e.target.value)}></input><br />
                <br />
                <br />
                <br />
                <br />
                <input type="submit" value="Create task" id="crta"></input>
                </form>
            </div>

            <div id="all">
                <button>All</button>
                {
                    list!==[] && list.map((data,i)=>{
                        return(
                            <div className="box">
                                <div key={i} id="total">
                                    <p id="data">{data}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <br />
            <br />
            <div id="upcom">
                <button onClick={upcoming}>Upcoming Tasks</button>
                <p id="arr0"></p>
                <p id="arr1"></p>
                <p id="arr2"></p>
                <p id="arr3"></p>
                <p id="arr4"></p>
                <p id="arr5"></p>
            </div>
            
        </div>
    )
}
export default Taskcreator;