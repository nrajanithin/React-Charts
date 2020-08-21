import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'
class Donut extends React.Component
{
    state = {
        doughnut : {
            labels : ['Red','Green','Orange','Blue','Yellow'],
            datasets : [
                {
                    data: [50,40,30,20,10],
                    backgroundColor:['red','green','orange','blue','yellow']
                }
                
            ]
        }
    }
    render()
    {
        return(
            <MDBContainer>
                <Doughnut data={this.state.doughnut} option={{responsive:true}}/>
            </MDBContainer>
        )
    }
}
export default Donut;