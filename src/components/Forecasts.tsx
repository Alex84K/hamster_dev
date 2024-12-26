import React, { useEffect, useState } from 'react'
import { fetchGemini } from './api/geminiApi';
import { fechForecast } from './api/forecastTxt';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getForecastAsync, selectDoc1, selectDoc2, selectDoc3, selectForecast } from '../features/solarForecast/forecastSlice';

const Forecasts = () => {

  const forecastGemini = useAppSelector(selectForecast)
  const dispatch = useAppDispatch()

  const forecast1= useAppSelector(selectDoc1)
  const forecast2 = useAppSelector(selectDoc2)
  const forecast3 = useAppSelector(selectDoc3)


  return (
    <div className='container mt-4 mb-5'>
      <div className='row'>
        {forecastGemini == '' ? (
          <div className='col-lg-10 mx-auto'>
          <h4 className='text-light text-center mb-4'>Forecasts</h4>
          <div className='mt-4 p-2 border border-info rounded'>
          <p className='text-light'>Данных нет...</p>
          </div>
        </div>) : (
          <div className='col-lg-10 mx-auto'>
            <h3 className='text-light text-center mb-4'>Forecasts</h3>
            <div className='p-3 border border-info rounded'>
              <p className='text-light'>{forecastGemini}</p>
            </div>
          </div>
        )}

      </div>

      <div className='col-lg-10 mx-auto mt-3'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">3x дневный отчет о геомагнитных данных</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              {forecast1} {/* Отображаем текст с сохранением форматирования */}
            </pre>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">3x дневный отчет о данных солнечной активности</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              {forecast3} {/* Отображаем текст с сохранением форматирования */}
            </pre>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">Итоговый отчет</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              {forecast2} {/* Отображаем текст с сохранением форматирования */}
            </pre>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Forecasts