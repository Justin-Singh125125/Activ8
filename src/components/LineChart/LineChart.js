import React from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2';


var styles = {
    chart: {
        width: "1000px",
        height: "1000px"
    }
}
export default function LineChart(props) {
    return (
        <div className="chart" style={styles.chart}>
            <Pie
                data={props.chartData}
                options={{
                    segmentShowStroke: false,
                    title: {
                        display: props.displayTitle,
                        text: 'Largest Cities In ' + props.location,
                        fontSize: 25
                    },
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition
                    },
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: false
                        }]
                    },
                    elements: {
                        arc: {
                            borderColor: "black"
                        }
                    }
                }}
            />
        </div>
    )
}
