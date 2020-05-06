import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line } from 'recharts';

const data = [{name: 'Multuário Final', value: 300}, {name: 'Plano Empresário', value: 700}
                 ];
const COLORS = ['#63c2de', '#20a8d8'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor="middle"	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Multuario extends React.Component {
	render () {
  	return (
        <ResponsiveContainer width="100%" height="100%">
    	<PieChart onMouseEnter={this.onPieEnter} margin={{top: 20, right: 0, left: 0, bottom: 0}}   style={{
            fontSize: '13px',

        }}>
        <Pie
          data={data} 
        
          labelLine={false}
          label={renderCustomizedLabel}
          
outerRadius={100} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Legend layout="horizontal" verticalAlign="top" align="center" iconType="circle" wrapperStyle={{fontSize: "12px"}}/>
           <Line  dataKey="multuario"  stroke="#20a8d8" />
           <Line  dataKey="empresario"  stroke="#00C49F" />
          
      </PieChart>
      
    
           
         
      </ResponsiveContainer>
    );
  }
}


