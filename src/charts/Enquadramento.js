import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'CHC', uv: 5, pv: 3, amt: 0,
  },
  {
    name: 'CHH', uv: 7, pv: 4, amt: 0,
  },
  {
    name: 'SFH', uv: 8, pv: 23, amt: 0,
  },

]

export default class Enquadramento extends React.Component {
  

  render() {
    return (
        <ResponsiveContainer width="100%" height="100%">
      <BarChart
        margin={{top: 20, right: 20, left: 0, bottom: 5}}
        layout="vertical"
        data={data}
        
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#66737f"/>
        <XAxis type="number" stroke="#66737f"style={{
        fontSize: '13px',
        
    }}  />
        <YAxis  dataKey="name" type="category" stroke="#66737f"style={{
        fontSize: '13px',
        
    }}/>
        <Legend layout="horizontal" verticalAlign="top" align="center" height={36} wrapperStyle={{fontSize: "12px"}}/>
        <Bar name="Multuário Final" dataKey="pv" fill="#f86c6b" isAnimationActive={true}/>
        <Bar name="Plano Empresário" dataKey="uv" fill="#20a8d8" isAnimationActive={true}/>
      </BarChart>
     </ResponsiveContainer>
    );
  }
}
