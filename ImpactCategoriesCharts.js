var xValue = ["Traditional", "Recycling"];
var yValue = [0.0933, 0.0681];
var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  hovertemplate: '%{y:.2f} cubic meters<extra></extra>',
  hoverlabel: { bgcolor: "#FFF" },
  marker: {
    color: ['rgb(36,100,148)', 'rgb(140,172,196)'],
    opacity: 1.0,
  }
};
var data = [trace1];
var layout = {
  hovermode: "closest",
  barmode: 'stack',
  xaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    title: {
      text: 'Scenarios',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    range: ['0', '0.1'],
    type: 'linear',
    title: {
      text: 'cubic meters',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
};
Plotly.newPlot("canvas", data, layout);

// Stratospheric Ozone Depletion
var xValue = ["Traditional", "Recycling"];
var yValue = [1.37E-05, 2.04E-06];
var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  hovertemplate: '%{y} kg CFC-11 eq<extra></extra>',
  hoverlabel: { bgcolor: "#FFF" },
  marker: {
    color: ['rgb(36,100,148)', 'rgb(140,172,196)'],
    opacity: 1.0,
  }
};
var data = [trace1];
var layout = {
  hovermode: "closest",
  barmode: 'stack',
  xaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    title: {
      text: 'Scenarios',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    range: ['0', '0.00001'],
    type: 'linear',
    title: {
      text: 'kg CFC-11 eq',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
};
Plotly.newPlot("canvas2", data, layout);

// Human Toxicity
var xValue = ["Traditional", "Recycling"];
var yValue = [3590, 163];
var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  hovertemplate: '%{y} kg 1,4 DCB eq<extra></extra>',
  hoverlabel: { bgcolor: "#FFF" },
  marker: {
    color: ['rgb(36,100,148)', 'rgb(140,172,196)'],
    opacity: 1.0,
  }
};
var data = [trace1];
var layout = {
  hovermode: "closest",
  barmode: 'stack',
  xaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    title: {
      text: 'Scenarios',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    range: ['0', '3590'],
    type: 'linear',
    title: {
      text: 'kg 1,4-DCB eq',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
};
Plotly.newPlot("canvas3", data, layout);

// Eutrophication
var xValue = ["Traditional", "Recycling"];
var yValue = [0.00332, 0.00243];
var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  hovertemplate: '%{y} kg P eq<extra></extra>',
  hoverlabel: { bgcolor: "#FFF" },
  marker: {
    color: ['rgb(36,100,148)', 'rgb(140,172,196)'],
    opacity: 1.0,
  }
};
var data = [trace1];
var layout = {
  hovermode: "closest",
  barmode: 'stack',
  xaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    title: {
      text: 'Scenarios',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    range: ['0', '0.00332'],
    type: 'linear',
    title: {
      text: 'kg P eq',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
};
Plotly.newPlot("canvas4", data, layout);

// Acidification
var xValue = ["Traditional", "Recycling"];
var yValue = [0.0293, 0.0252];
var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  hovertemplate: '%{y} kg SO2 eq<extra></extra>',
  hoverlabel: { bgcolor: "#FFF" },
  marker: {
    color: ['rgb(36,100,148)', 'rgb(140,172,196)'],
    opacity: 1.0,
  }
};
var data = [trace1];
var layout = {
  hovermode: "closest",
  barmode: 'stack',
  xaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    title: {
      text: 'Scenarios',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    range: ['0', '0.0293'],
    type: 'linear',
    title: {
      text: 'kg SO2 eq',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
};
Plotly.newPlot("canvas5", data, layout);

// Climate Change
var xValue = ["Traditional", "Recycling"];
var yValue = [17.9, 6.67];
var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  hovertemplate: '%{y} kg CO2 eq<extra></extra>',
  hoverlabel: { bgcolor: "#FFF" },
  marker: {
    color: ['rgb(36,100,148)', 'rgb(140,172,196)'],
    opacity: 1.0,
  }
};
var data = [trace1];
var layout = {
  hovermode: "closest",
  barmode: 'stack',
  xaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    title: {
      text: 'Scenarios',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    range: ['0', '17.9'],
    type: 'linear',
    title: {
      text: 'kg CO2 eq',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
};
Plotly.newPlot("canvas6", data, layout);

// All Categories
var xValue = ["Water Consumption", "Climate Change", "Ozone Depletion", "Human Toxicity", "Eutrophication", "Acidification"];
var yValue = [100, 100, 100, 100, 100, 100];
var yValue2 = [72.9, 37.3, 14.9, 4.5, 73.3, 85.8];
var trace1 = {
  x: xValue,
  hovertemplate: 'Environmental Impact Percentage: %{y:.2f}%<extra></extra>',
  name: "Traditional Waste Management Scenario",
  y: yValue,
  type: 'bar',
  marker: {color: ['rgb(36,100,148)', 'rgb(36,100,148)', 'rgb(36,100,148)', 'rgb(36,100,148)', 'rgb(36,100,148)', 'rgb(36,100,148)'], opacity: 1.0}
};
var trace2 = {
    x: xValue,
    y: yValue2,
    hovertemplate: 'Environmental Impact Percentage: %{y:.2f}%<extra></extra>',
    name: "Recycling Scenario",
    type: 'bar',
    marker: {color: ['rgb(140,172,196)', 'rgb(140,172,196)', 'rgb(140,172,196)', 'rgb(140,172,196)', 'rgb(140,172,196)', 'rgb(140,172,196)'], opacity: 1.0}
  };
var data = [trace1, trace2];
var layout = {
  hovermode: "closest",
  hoverlabel: { bgcolor: "#FFF" },
  barmode: 'group',
  xaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    title: {
      text: 'Impact Categories',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    tickfont: {
        family: 'Raleway',
        size: 12,
        color: 'black'
      },
    range: ['0', '100'],
    type: 'linear',
    title: {
      text: 'Percentage of Environmental Impact',
      font: {
        family: "Raleway",
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
};
Plotly.newPlot("canvas7", data, layout);

