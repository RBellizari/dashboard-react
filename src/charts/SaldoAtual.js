import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, ResponsiveContainer} from 'recharts';

const data = [
      {name: 'Plano Empresário', sa: 4000, st: 4000, sd: 0, amt: 0},
      {name: 'Multuário Final', sa: 600, st: 600, sd: 150, amt: 0},
      {name: 'Total', sa: 5000, st: 5000, sd: 150, amt: 0},
      
];
export default class SaldoAtual extends React.Component {
	render () {
  	return (
        <ResponsiveContainer width="100%" height="100%">
    	<BarChart data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3" stroke="#66737f" />
        <XAxis dataKey="name" stroke="#66737f" style={{
        fontSize: '13px',
        
    }} />
       <YAxis stroke="#66737f" style={{
        fontSize: '12px',
        
    }}  />
       <Legend layout="horizontal" verticalAlign="top" align="center" height={36} wrapperStyle={{fontSize: "12px"}}/>
       <Bar name="Saldo Atual" dataKey="sa" stackId="a" fill="#20a8d8" />
       <Bar  name="Saldo em Atraso" dataKey="sd" stackId="a" fill="#f86c6b" />
       <Bar  name="Saldo Devedor Total" dataKey="st" stackId="a" fill="#00C49F" />
      
      </BarChart>
      </ResponsiveContainer>
    );
  }
}




