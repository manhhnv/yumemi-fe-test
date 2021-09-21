import { getPopulationComposition } from 'apis/getPopulation';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React, { useEffect, useMemo, useState } from 'react';
import { PopulationComposition } from '@types';
import { CHART_LINE_COLORS } from 'constants/colors';

interface ChartProps {
  prefectureCode: number;
  title: string;
}

const Chart = (props: ChartProps) => {
  const [compositionData, setCompositionData] = useState<
    { boundaryYear?: number; data: PopulationComposition[] } | undefined
  >();

  const chartOptions = useMemo(() => {
    if (compositionData?.data?.length) {
      const categories = compositionData.data[0].data.map((item) =>
        item.year.toString().concat('年'),
      );
      const series: Highcharts.SeriesOptionsType[] = compositionData.data.map(
        (item, i) => {
          return {
            type: 'line',
            name: item.label,
            data: item.data.map((element) => {
              return {
                y: element.value,
                z: element.rate ? `(${element.rate}%)` : ('' as any),
              };
            }),
            color: CHART_LINE_COLORS[i],
          };
        },
      );
      const options: Highcharts.Options = {
        title: {
          text: props.title,
          style: {
            fontWeight: 'bold',
          },
        },
        subtitle: {
          text: `(${compositionData.data[0].data[0].year}年 - ${
            compositionData.data[0].data.slice(-1)[0].year
          }年)`,
        },
        tooltip: {
          shared: true,
          valueSuffix: ' 人',
          pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> {point.z}<br/>',
        },
        lang: {
          thousandsSep: ',',
        },
        series: series,
        xAxis: {
          categories: categories,
          title: {
            text: '年度',
            style: {
              fontWeight: 'bold',
            },
          },
        },
        credits: {
          text: '',
        },
        yAxis: {
          title: {
            text: '人口数',
            style: {
              fontWeight: 'bold',
            },
          },
          labels: {
            formatter: (label) => {
              return Highcharts.numberFormat(
                Number(label.value.toString().split('-')[0]),
                0,
                '',
                ',',
              ).concat(' 人');
            },
          },
        },
      };
      return options;
    }
  }, [compositionData]);

  useEffect(() => {
    getPopulationComposition(props.prefectureCode, '-')
      .then((data) => setCompositionData(data))
      .catch((error) => {
        throw error;
      });
  }, [props.prefectureCode]);

  return (
    <React.Fragment>
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </React.Fragment>
  );
};

export default React.memo(Chart);
