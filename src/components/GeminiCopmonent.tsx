import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap'; // Импортируем Spinner из react-bootstrap
import { fetchGemini, fetchGeminiLanguage } from './api/geminiApi';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { dark } from '@mui/material/styles/createPalette';

const GeminiComponent = () => {
    const [textIn, setTextIn] = useState('');
    const [resp, setResp] = useState('');
    const [loading, setLoading] = useState(false); // Состояние для загрузки

    const [language, setLanguage] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };

    const sendForGemini = async () => {
        console.log(language);
        
        setLoading(true); // Устанавливаем загрузку в true перед запросом
        if(language == '') {
            setLanguage('Русский')
        }
        const res = await fetchGeminiLanguage(textIn, language);
        setResp(res);
        setLoading(false); // Устанавливаем загрузку в false после получения ответа
    };

    return (
        <div>
            <h3 className='mt-5 text-light text-center'>Gemini 2.0 Flash API</h3>
            <div className="container">
                <div className="row  ">
                    <div className='col-lg-8 mx-auto mb-3 d-flex flex-row-reverse'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='col-lg-4'>
                            <InputLabel id="demo-simple-select-standard-label" sx={{ color: '#ffffff' }}>Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={language}
                                onChange={handleChange}
                                label="Age"
                                sx={{
                                    color: '#ffffff', // Цвет текста в Select
                                    '& .MuiSelect-icon': {
                                        color: '#ffffff', // Цвет иконки
                                    },
                                    '&:before': {
                                        borderBottom: '1px solid #ffffff', // Цвет подчеркивания по умолчанию
                                    },
                                    '&:after': {
                                        borderBottom: '2px solid #ffffff', // Цвет подчеркивания при фокусе
                                    },
                                    '&:hover:before': {
                                        borderBottom: '1px solid #ffffff', // Цвет подчеркивания при наведении
                                    },
                                }}
                            >
                                <MenuItem value={'русскoм'} sx={{ color: '#111845a6' }}>Русский</MenuItem>
                                <MenuItem value={'английском'} sx={{ color: '#111845a6' }}>English</MenuItem>
                                <MenuItem value={'немецком'} sx={{ color: '#111845a6' }}>Deutsch</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-lg-8 border border-dark rounded p-3 mx-auto bg-white ">
                        {loading ? (
                            <div className="text-center">
                                <Spinner animation="border" />
                            </div>
                        ) : (
                            <div dangerouslySetInnerHTML={{ __html: resp.replace(/\n/g, '<br />') }} className='height100' />
                        )}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row p-2">
                    <textarea
                        value={textIn}
                        placeholder='Введите ваш вопрос...'
                        onChange={e => setTextIn(e.target.value)}
                        className="col-lg-8 border border-dark rounded p-3 mx-auto"
                        style={{ height: '150px' }}
                    />
                    <div className='col-lg-8 mx-auto mt-3'>
                        <div className='d-flex flex-row-reverse'>
                            <Button variant="primary" onClick={sendForGemini} className='col-sm-2 '>
                                {loading ? <Spinner animation="border" size="sm" /> : 'Send'} {/* Показываем Spinner, если loading true */}
                            </Button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default GeminiComponent;
