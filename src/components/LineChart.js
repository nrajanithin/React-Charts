import React from 'react'
import {Line} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'
class LineChart extends React.Component
{
    state= {
        dataLine : {
            labels: ['ML','TF','SK','NP','PD','PK'],
            datasets:[
                {
                    label : 'first one',
                    fill : true,
                    backgroundColor: "rgba(240, 26, 229,0.3)",
                    borderColor: "rgba(240, 26, 229,0.9)",
                    pointBackgroundColor: "rgb(255,255,255)",
                    pointHoverBackgroundColor: "rgb(0,0,0)",
                    pointBorderColor:"rgba(240, 26, 229,0.9)" ,
                    pointRadius : 6,
                    pointHoverRadius: 12,
                    data: [50,100,20,10,30,40]
                },
                {
                    label : 'second one',
                    fill: true,
                    backgroundColor: "rgba(26, 240, 147,0.3)",
                    borderColor: "rgba(26, 240, 147,0.9)",
                    pointBackgroundColor: "rgb(255,255,255)",
                    pointHoverBackgroundColor: "rgb(0,0,0)",
                    pointBorderColor:"rgba(26, 240, 147,0.9)",
                    pointRadius : 6,
                    pointHoverRadius: 12,
                    data : [100,200,300,10,20,50]
                }
            ]
        }
    }
    render()
    {
        return(
            <MDBContainer>
                <Line data={this.state.dataLine} options={{responsive:true }}/>
            </MDBContainer>
        );
    }
}
export default LineChart;