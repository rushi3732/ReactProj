import React,{useState} from 'react'
import{TableContainer,TableHead,TableBody,TableCell,TableProps,Table,TextField,Button, TableRow} from '@material-ui/core'
import { Tab } from 'bootstrap'
import { data } from 'jquery'
import Chart from './Chart'

function TableList() {
    const[ subData,setSubData]=useState([])
    const[finalData,setFinalData]=useState([])
    function submitData(subData){
        setFinalData(finalData=>[...finalData,subData])
        setSubData(subData={})
        document.myForm.reset()
    }
    return (
        <div>
            <form name="myForm">
                <TableContainer style={{display:"flex",justifyContent:"center"}}>
                    <Table style={{width:"50%",justifyContent:"center"}} size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell><TextField value={subData['sub']} onChange={(e)=>setSubData[{...subData,"sub": e.target.value}]} label="Employee Name"></TextField></TableCell>
                                <TableCell><TextField value={subData['sem']} onChange={(e)=>setSubData[{...subData,"sem": e.target.value}]} label="Employee Name"></TextField></TableCell>
                                <TableCell><Botton variant="contained" onClick={()=>sumbmitData(subData)} color="primary"> Add Employee</Botton></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {finalData.map(data =>(
                            <TableRow>
                                <TableCell>{data.sub}</TableCell>
                                <TableCell>{data.sem}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>

                </TableContainer>

            </form>
            <br/>
            <Chart data={finalData}/>
            
        </div>
    )
}

export default TableList
