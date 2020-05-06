import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line } from 'recharts';

const data = [{name: 'Ativo', value: 700}, {name: 'Liquidado', value: 120},
                  {name: 'Cancelado', value: 180}];
const COLORS = ['#20a8d8', '#00C49F', '#f86c6b'];

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

export default class SimplePieChart extends React.Component {
	render () {
  	return (
        <ResponsiveContainer width="100%" height="100%">
    	<PieChart onMouseEnter={this.onPieEnter} margin={{top: 20, right: 0, left: 0, bottom: 5}}   style={{
            fontSize: '13px',

        }}>
        <Pie
        
          data={data} 
        
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={50}
outerRadius={100} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Legend layout="horizontal" verticalAlign="top" align="center" iconType="circle" wrapperStyle={{fontSize: "12px"}}/>
           <Line  dataKey="ativo"  stroke="#20a8d8" />
           <Line  dataKey="liquidado"  stroke="#00C49F" />
           <Line  dataKey="cancelado"  stroke="#00C49F" />
      </PieChart>
      
    
           
         
      </ResponsiveContainer>
    );
  }
}


