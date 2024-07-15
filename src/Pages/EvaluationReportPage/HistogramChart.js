import React from 'react';
import ReactECharts from 'echarts-for-react';

const HistogramChart = () => {
  const option = {
    title: {
      text: 'Histogram of Total Marks',
      left: 'center',
      top: 20,
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '8%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['75', '80', '85', '90', '95'],
      name: 'Total Marks',
      nameLocation: 'middle',
      nameGap: 30,
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      name: 'Frequency',
      nameLocation: 'middle',
      nameGap: 40,
      max: 3,
      interval: 0.5
    },
    series: [
      {
        name: 'Frequency',
        type: 'bar',
        barWidth: '60%',
        data: [3, 0, 3, 2, 3],
        itemStyle: {
          color: '#fac858'
        }
      },
      {
        name: 'Distribution Curve',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: [0.7, 0.9, 1.3, 1.2, 0.9],
        lineStyle: {
          color: '#ff9933',
          width: 2
        }
      }
    ]
  };

  return (
    <div style={{
      backgroundColor: 'white',
      // borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    //   padding: '20px',
      // marginTop: '20px'
    }}>
      <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default HistogramChart;