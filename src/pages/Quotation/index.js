import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

import axios from '../../utils/httpClient';
import {
  Container,
  QuotationTitle,
  QuotationDesc,
  QuotationFilterBox,
} from './styles';

export default function Quotation() {
  const [date, setDates] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('/quotations');
    const arrDate = [['Date', 'Value']];

    data.map(e => arrDate.push([new Date(e.createdAt), e.value]));

    setDates(arrDate);
  }, []);

  console.log(date);

  return (
    <Container>
      <QuotationTitle>
        <h1> Cotação ThunderCoin </h1>
      </QuotationTitle>

      <QuotationFilterBox>
        <h1> CONSULTE POR PERÍODO.</h1>
      </QuotationFilterBox>

      <Chart
        width="100%"
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={[
          date.forEach(e => {
            console.log(e);
            return e;
          }),
        ]}
        // data={[
        //   ['Date', 'Value'],
        //   [new Date(1997, 1, 1), 2000 * Math.random()],
        //   [new Date(1998, 1, 1), 2000 * Math.random()],
        //   [new Date(1999, 1, 1), 2000 * Math.random()],
        //   [new Date(2000, 1, 1), 2000 * Math.random()],
        //   [new Date(2001, 1, 1), 2000 * Math.random()],
        //   [new Date(2002, 1, 1), 2000 * Math.random()],
        //   [new Date(2003, 1, 1), 2000 * Math.random()],
        //   [new Date(2004, 1, 1), 2000 * Math.random()],
        //   [new Date(2005, 1, 1), 2000 * Math.random()],
        //   [new Date(2006, 1, 1), 2000 * Math.random()],
        //   [new Date(2007, 1, 1), 2000 * Math.random()],
        //   [new Date(2008, 1, 1), 2000 * Math.random()],
        //   [new Date(2009, 1, 1), 2000 * Math.random()],
        // ]}
        options={{
          legendTextStyle: { color: '#FFF' },
          titleTextStyle: { color: '#FFF' },
          colors: ['#640096'],
          backgroundColor: 'rgb(255,255,0)',
          // Use the same chart area width as the control for axis alignment.
          chartArea: { height: '80%', width: '100%' },
          hAxis: { slantedText: false },
          vAxis: { viewWindow: { min: 0, max: 2000 } },
          legend: { position: 'none' },
        }}
        rootProps={{ 'data-testid': '3' }}
        chartPackages={['corechart', 'controls']}
        // controls={[
        //   {
        //     legendTextStyle: { color: '#FFF' },
        //     titleTextStyle: { color: '#FFF' },
        //     controlType: 'ChartRangeFilter',
        //     options: {
        //       filterColumnIndex: 0,
        //       ui: {
        //         chartType: 'LineChart',
        //         chartOptions: {
        //           colors: ['red'],
        //           backgroundColor: 'rgb(255,255,0)',
        //           chartArea: { width: '70%', height: '60%' },
        //           hAxis: { baselineColor: 'none' },
        //         },
        //       },
        //     },
        //     controlPosition: 'top',
        //     controlWrapperParams: {
        //       state: {
        //         range: {
        //           start: new Date(2009, 1, 1),
        //           end: new Date(2009, 1, 1),
        //         },
        //       },
        //     },
        //   },
        // ]}
      />

      <QuotationDesc>
        <h1>Acompanhe a cotação do ThunderCoin.</h1>
      </QuotationDesc>
    </Container>
  );
}
