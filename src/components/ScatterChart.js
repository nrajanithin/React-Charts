import React from 'react'
import {Scatter} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'
class ScatterChart extends React.Component
{
    state = {
        scatter : {
            labels: ['Scatter'],
            datasets : [
                {
                    borderColor : 'rgba(99,0,125,0.3)',
                    backgroundColor: 'rgba(99,0,125,0.9)',
                    label: 'Scatter Chart',
                    data:[
                        {
                            x: 1,
                            y: 2
                        },
                        {
                            x: 2,
                            y: 4
                        },
                        {
                            x: 3,
                            y: 6
                        },
                        {
                            x: 4,
                            y: 8
                        },
                        {
                            x: 5,
                            y: 10
                        },
                        {
                            x: 6,
                            y: 12
                        },
                        {
                            x: 7,
                            y:14
                        },
                        {
                            x: 8,
                            y: 16
                        },
                        {
                            x: 9,
                            y: 18
                        },
                        {
                            x: 10,
                            y: 20
                        },
                        {
                            x: 11,
                            y: 22
                        },
                        {
                            x: 12,
                            y: 24
                        },
                        {
                            x: 13,
                            y: 26
                        }

                    ]
                }
            ]
        }
    }
    render()
    {
        return(
            <MDBContainer>
                <Scatter data={this.state.scatter} options={{responsive:true}} />
            </MDBContainer>
        );
    }
}
export default ScatterChart;