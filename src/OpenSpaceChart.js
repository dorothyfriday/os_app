/**
 * Created by DFriday on 7/25/2017.
 */
import React, { Component } from 'react';
import {select, selectAll, event} from 'd3'
import './App.css';


class OpenSpaceChart extends Component {
    constructor(props){
        super(props)
        this.createChart = this.createChart.bind(this)
        console.log(this)
    }
    componentDidMount() {
        this.createChart()
    }
    componentDidUpdate() {
        this.createChart()
    }
    createChart() {
        const node = this.node
        const dataArray = [[14,1652],[15,1663],[16,1668],[40,2100]];
        const dataMiles = [[0],[2000]];
        const dataYears = [[2000],[2020],[2040]];
        const yAxisLength = 170;
        const xAxisLength = 450;
        const originy = 220;
        const originx = 50;
        
        const div = select(".tooltip")
        
        const svg = select(node)
    
        svg.selectAll("line.first")
            .data(dataArray)
            .enter().append("line")
            .attr("class", "first")
            .attr("x1","50")
            .attr("stroke-width","1")
            .attr("y1","190")
            .attr("x2","190")
            .attr("y2","173");
    
        svg.selectAll("line.second")
            .data(dataArray)
            .enter().append("line")
            .attr("class", "second")
            .attr("x1","190")
            .attr("stroke-width","1")
            .attr("y1","173")
            .attr("x2","200")
            .attr("y2","170.88");
    
        svg.selectAll("line.third")
            .data(dataArray)
            .enter().append("line")
            .attr("class", "third")
            .attr("x1","200")
            .attr("stroke-width","1")
            .attr("y1","170.88")
            .attr("x2","210")
            .attr("y2","169.68");
    
        svg.selectAll("line.fourth")
            .data(dataArray)
            .enter().append("line")
            .attr("class", "fourth")
            .attr("x1","210")
            .attr("stroke-width","1")
            .attr("stroke-dasharray","5,5")
            .attr("y1","169.68")
            .attr("x2","450")
            .attr("y2","66");
    
    
        svg.selectAll("circle.first")
            .data(dataArray)
            .enter().append("circle")
            .attr("class","first")
            .attr("cx",function(d,i){ return (100+(d[0]*10)-50); })
            .attr("cy",function(d,i){ return (620-(d[1]*12/50)-50); })
            .attr("r","3")
            .on("mouseover",function(d){
                div.transition()
                    .duration(200)
                    .style("opacity",0.8)
                div.html("20" + d[0] + "</br>" + d[1] + " Square Miles")
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                div.transition()
                    .duration(200)
                    .style("opacity", 0);
            });
    
        svg.selectAll("line.axisy")
            .data(dataArray)
            .enter().append("line")
            .attr("class", "axisy")
            .attr("x1",originx)
            .attr("stroke-width","1")
            .attr("y1",originx)
            .attr("x2",originx)
            .attr("y2",originx + yAxisLength);
    
        svg.selectAll("line.axisx")
            .data(dataArray)
            .enter().append("line")
            .attr("class", "axisx")
            .attr("x1",originx)
            .attr("stroke-width","1")
            .attr("y1",originy)
            .attr("x2", originx + xAxisLength)
            .attr("y2", originy);
    
        svg.selectAll("text.bottom")
            .data(dataYears)
            .enter().append("text")
            .attr("x",function(d,i){ return originx + (i*(xAxisLength/2.2)); })
            .attr("y",function(d,i){ return (originy + 25); })
            .text(function(d){ return d; })
            .attr("font-family","sans-serif")
            .attr("font-size","13px")
            .attr("fill","#05A4E1")
    
        svg.selectAll("text.side")
            .data(dataMiles)
            .enter().append("text")
            .attr("x",function(d,i){ return (originx - 40); })
            .attr("y",function(d,i){ return (i + originy)-((i*yAxisLength)-(i*10)); })
            .text(function(d){ return d; })
            .attr("font-family","sans-serif")
            .attr("font-size","13px")
            .attr("fill","#05A4E1")
    
        svg.selectAll("text.bottomLabel")
            .data(dataArray)
            .enter().append("text")
            .attr("x", function(d,i){ return (originx + (xAxisLength/2)-20); })
            .attr("y",function(d,i){ return (originy - 10); })
            .text("Year")
            .attr("font-family","sans-serif")
            .attr("font-size","13px")
            .attr("font-weight","bold")
            .attr("fill","black")
    
        svg.selectAll("text.sideLabel")
            .data(dataArray)
            .enter().append("text")
            .attr("x",function(d,i){ return (originx + 20); })
            .attr("y",function(d,i){ return (originy - 50); })
            .text("Square Miles")
            .attr("font-family","sans-serif")
            .attr("font-size","13px")
            .attr("font-weight","bold")
            .attr("fill","black")
            .attr("transform","rotate(270,70,170)")
    
    
    
    }
    
    render() {
        return (
            <div>
            <svg ref={node => this.node = node}
                 width={this.props.width} height={this.props.height}>
            </svg>
            <div className="tooltip"></div>
            </div>
        );
    }
}


export default OpenSpaceChart

