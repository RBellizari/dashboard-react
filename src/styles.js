import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  flex-direction:row;
  min-height:100vh ;
  background-color: #1c2025;
  flex-wrap:wrap;
`;

export const Header = styled.div`
  height:64px ;
  background-color: #282C34;
  
  display:flex;
  flex-direction:column;
  flex-shrink:0;
  box-sizing:border-box;
  z-index:1100;
  border-bottom: 1px solid #000;
  color: #fff;
`;

export const Title = styled.span(props => ({
  
  color: props.color,
  padding:'0 5px 0 0',
  
}));

export const Label = styled.span(props => ({
  flex:'1px',
  color: props.color,
  padding:'0 5px 0 0',
  height:props.height,
  fontSize:props.size,
  textAlign:'center',
  height:props.height,
  fontWeight:'100',
  fontFamily:'Roboto',
  
 
  
}));

export const Menu = styled.div`
  min-height:100vh ;
  flex:2;
  background-color: #282C34;
  border-right: 1px solid #000; 
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh ;
  flex:12;
  background-color: #1c2025;
`;

export const Boxs = styled.div`
  display:flex;
  flex-direction:row;
  background-color: #1c2025;
  padding:0 0 20px 20px;
  align-items: center; 
`;

export const BoxTitle = styled.div`
  display:flex;
  flex-direction:row;
  background-color: #282C34;
  align-items: left;
  margin: 0 0 20px 0;
  color: #fff;
  padding: 14px;
  box-sizing:border-box;
  border-bottom: 1px solid #000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 200;  
  
`;

export const Filter = styled.div`
  min-height:100vh ;
  flex:2;
  background-color: #282C34;
  border-left: 1px solid #000; 
`;

export const Box = styled.div(props => ({
  height:props.height,
  flex:1,
  background: props.background,
  color:'#fff',
  margin:'0 20px 0 0',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  borderRadius:' .25rem',
  alignItems:'center',
  padding:'10px, 0 0 0',
  fontFamily:'Roboto',
}));

export const Card = styled.div(props => ({
  height:props.height,
  flex:1,
  background: props.background,
  color:'#fff',
  margin:'0 20px 0 0',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  borderRadius:' .25rem',
  alignItems:'center',
  padding:'15px',
  fontFamily:'Roboto',
  fontWeight:'200'
}));

export const BoxGraph = styled.div(props => ({
  height:props.height,
  display:'flex',
  flexDirection:'column',
  background: props.background,
  color:'#fff',
  margin:'0 20px 0 0',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  borderRadius:' .25rem',
  alignItems:'center',
  padding:'10px, 0 0 0',
  fontFamily:'Roboto',
}));


export const Column = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center; 
`;

export const Line = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;

`;

export const Row = styled.div`
 flex:1;
 height:300px ;
 align-items: center; 
`;


export const RowLine = styled.div`
 flex:1;
 
`;






