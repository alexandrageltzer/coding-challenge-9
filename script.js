document.addEventListener("DOMContentLoaded", function() {
    const container = d3.select("#container");

    // Generate some data points
    const data = Array.from({ length: 20 }, (_, i) => i);

    // Create div elements for each data point
    container.selectAll(".data-point")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "data-point")
        .on("mouseover", function() {
            d3.select(this).style("background-color", "firebrick");
        })
        .on("mouseout", function() {
            d3.select(this).style("background-color", "steelblue");
        });
});
