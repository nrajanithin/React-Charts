import React from 'react'
import {MDBContainer} from 'mdbreact'
import {Pie} from 'react-chartjs-2'
 class PieChart extends React.Component
 {
     state= {
         pie: {
             labels : ['Red','Green','orange','blue','yellow'],
             datasets : [
                 {
                     data : [50,40,30,20,10],
                    backgroundColor :[
                        'red',
                        'green',
                        'orange',
                        'blue',
                        'yellow'
                    ]
                 }
             ]
         }
     }
     render()
     {
         return(
             <MDBContainer>
                 <Pie data={this.state.pie} options={{responsive:true}} />
             </MDBContainer>
         );
     }
 }
 export default PieChart;