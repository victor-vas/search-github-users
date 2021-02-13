import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { IChartData } from '../../Repos';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

interface ChartComponentProps {
  data: IChartData[];
}

const Doughnut2D = ({ data }: ChartComponentProps) => {
  const chartConfigs = {
    type: 'doughnut3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Starts Per Language',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',
        showPercentValues: 0,
        palettecolors: '5d62b5,29c3be,f2726f,0b132b,ffd447',
      },
      // Chart Data
      data,
    },
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;
