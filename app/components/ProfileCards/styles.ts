import styled from "styled-components";

export const CardTable = styled.table`
display: flex;
flex-direction: column;
gap: 1ch;
width: 500px;
max-width: 100%;


`


export const CardLabels = styled.th`
width:7ch;
padding:0.8ch;
`

export const CradBody = styled.tbody`
display: flex;

flex-direction: column;
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
border-radius: 8px;

margin-bottom: 1.5ch;

 }
 &>tr:first-child{
   border-radius: 8px 8px 0 0;
   background-color: ${p => p.theme.colors.primary};
   color:${p => p.theme.colors.textOnLight}
 }
 &>tr:last-child{
   border-radius: 0 0 8px 8px;
   background-color: ${p => p.theme.colors.textOnLight};
   color: ${p => p.theme.colors.headingOnLight};
   margin-bottom: 0;
   ${CardLabels} {
   border-right: 1px solid ${p => p.theme.colors.headingOnLight}
 }
 }

 ${CardLabels} {
   border-right: 1px solid ${p => p.theme.colors.textOnLight}
 }

`



export const CardStudentsAttributes = styled.td`
width:calc(100% - 7ch);
padding:0.8ch;
`

export const CardTableRows =styled.tr`
background-color: ${p => p.theme.colors.primaryLight};
color:${p => p.theme.colors.textOnLight};


`
