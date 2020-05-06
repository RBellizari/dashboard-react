import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: '241 a 360 meses', uv: 46, amt: 0,
  },
  {
    name: '121 a 240 meses', uv: 2,   amt: 0,
  },
  {
    name: '61 a 120 meses', uv: 2,  amt: 0,
  },
  {
    name: '37 a 60 meses', uv: 0,  amt: 0,
  },
  {
    name: '25 a 36 meses', uv: 0,  amt: 0,
  },
  {
    name: '12 a 24 meses', uv: 0, amt: 0,
  },

]

export default class Prazo extends React.Component {
  

  render() {
    return (
        <ResponsiveContainer width="100%" height="100%">
      <BarChart
        margin={{top: 20, right: 20, left: 20, bottom: 5}}
        layout="vertical"
        data={data}
        
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#66737f"/>
        <XAxis type="number" stroke="#66737f"style={{
        fontSize: '13px',
        
    }}  />
        <YAxis dataKey="name" type="category" stroke="#66737f"style={{
        fontSize: '13px',
        
    }}/>
       
        <Bar name="Multuário Final" dataKey="uv" fill="#f86c6b" isAnimationActive={true}/>
       
      </BarChart>
     </ResponsiveContainer>
    );
  }
}
