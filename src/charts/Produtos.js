import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, LabelList } from 'recharts';


const data = [
    { name: 'Plano Empresário', va: 15 },
    { name: 'Aquisicação', va: 15},
    { name: 'Home', va: 10},
    { name: 'Repasse', va: 10 },

];



const valueAccessor = attribute => ({ payload }) => {
    return payload[attribute];
};


export default class Produtos extends React.Component {
    render() {
        return (
          
                <BarChart
                width={800}
                height={300}
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#66737f"/>
                    <XAxis dataKey="name" stroke="#66737f" style={{
        fontSize: '13px',
        
    }}/>
                    <YAxis stroke="#66737f"style={{
        fontSize: '13px',
        
    }}/>
                    <Bar dataKey="va" fill="#20a8d8">
                        <LabelList valueAccessor={valueAccessor("va")} style={{
                            fontSize: '13px',

                        }} />
                    </Bar>
                </BarChart>
           
        );
    }
}


