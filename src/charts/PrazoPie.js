import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line } from 'recharts';

const data = [{name: '12 a 24 meses', value: 620}, {name: '25 a 36 meses', value: 220},  {name: '37 a 60 meses', value: 160},  {name: '61 a 120 meses', value: 160},  {name: '121 a 240 meses', value: 160},  {name: '241 a 360 meses', value: 160}
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

export default class PrazoPie extends React.Component {
	render () {
  	return (
        <ResponsiveContainer width="100%" height="100%">
    	<PieChart onMouseEnter={this.onPieEnter} margin={{top: 30, right: 30, left: 0, bottom: 20}}   style={{
            fontSize: '13px',

        }}>
        <Pie
          data={data} 
        
          labelLine={false}
          label={renderCustomizedLabel}
          
outerRadius={120} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" wrapperStyle={{fontSize: "12px"}}/>
           <Line  dataKey="SFH"  stroke="#20a8d8"  />
           <Line  dataKey="CHH"  stroke="#f86c6b" />
           <Line  dataKey="CHC"  stroke="#00C49F" />
           <Line  dataKey="CHC"  stroke="#00C49F" />
           <Line  dataKey="CHC"  stroke="#00C49F" />
           <Line  dataKey="CHC"  stroke="#00C49F" />
          
      </PieChart>
      
    
           
         
      </ResponsiveContainer>
    );
  }
}


