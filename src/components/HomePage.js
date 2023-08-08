import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function HomePage() {
    

    
const pdata = [
    {
      name: 'React',
      student: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Express',
      student: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MongoDB',
      student: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'c',
      student: 2780,
      pv: 3908,
      amt: 10000,
    },
    {
      name: 'python',
      student: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
    return (
        <>
       <ResponsiveContainer width="100%" aspect={3}>
           <LineChart data={pdata} width={500} height={300} margin={{top:5,right:300,left:20,bottom:5}}>
             <CartesianGrid strokeDasharray="3 3 "/>
             <XAxis dataKey="name"  interval={"preserveStartEnd"} tickFormatter={(value)=>value+"Programing"}/>
             <YAxis/>
             <Tooltip contentStyle={{backgroundColor:"yellow"}}/>
             <Legend/>
               <Line type="monotone"dataKey="student" stroke='red' activeDot={{ r:8}}/>
               <Line dataKey="pv" stroke='green'  activeDot={{ r:8}}/>
               <Line dataKey="amt" stroke='blue'  activeDot={{ r:8}}/>
           </LineChart>

       </ResponsiveContainer>
     
            
        </>
    )
}

export default HomePage

