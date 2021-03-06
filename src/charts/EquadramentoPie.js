import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line } from 'recharts';

const data = [{name: 'SFH', value: 620}, {name: 'CHH', value: 220},  {name: 'CHC', value: 160}
                 ];
const COLORS = ['#20a8d8', '#f86c6b', '#00C49F'];

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

export default class EquadramentoPie extends React.Component {
	render () {
  	return (
        <ResponsiveContainer width="100%" height="100%">
    	<PieChart onMouseEnter={this.onPieEnter} margin={{top: 0, right: 0, left: 0, bottom: 20}}   style={{
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
        <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{fontSize: "12px"}}/>
           <Line  dataKey="SFH"  stroke="#20a8d8" />
           <Line  dataKey="CHH"  stroke="#f86c6b" />
           <Line  dataKey="CHC"  stroke="#00C49F" />
          
      </PieChart>
      
    
           
         
      </ResponsiveContainer>
    );
  }
}


