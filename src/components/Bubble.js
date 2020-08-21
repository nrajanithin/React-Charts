import React from 'react'
import {Bubble} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'
class BubbleChart extends React.Component
{
    state = {
        bubble : {
            labels : 'Bubble',
            datasets:[
                {
                    label : 'Varma',
                    data : [
                        {
                            x: 3,
                            y: 7,
                            r: 9
                        }
                    ],
                    backgroundColor : 'red'
                },
                {
                    label : 'Syam',
                    data : [
                        {
                            x: 4,
                            y: 7,
                            r: 9
                        }
                    ],
                    backgroundColor : 'green'
                },
                {
                    label : 'Nithin',
                    data : [
                        {
                            x: 5,
                            y: 7,
                            r: 9
                        }
                    ],
                    backgroundColor : 'orange'
                },
                {
                    label : 'Anil',
                    data : [
                        {
                            x: 6,
                            y: 7,
                            r: 9
                        }
                    ],
                    backgroundColor : 'blue'
                }
            ]
        }
    }
    render()
    {
        return(
            <MDBContainer>
                <Bubble data={this.state.bubble} options={{responsive:true}} />
            </MDBContainer>
        );
    }
}
export default BubbleChart;