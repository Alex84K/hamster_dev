import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap'; // Импортируем Spinner из react-bootstrap
import { fetchGeminiLanguage } from './api/geminiApi';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const GeminiComponent = () => {
    const [textIn, setTextIn] = useState('');
    const [resp, setResp] = useState('');
    const [loading, setLoading] = useState(false); // Состояние для загрузки
    const [language, setLanguage] = React.useState('');
    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    const sendForGemini = async () => {
        console.log(language);
        setLoading(true); // Устанавливаем загрузку в true перед запросом
        if (language == '') {
            setLanguage('Русский');
        }
        const res = await fetchGeminiLanguage(textIn, language);
        setResp(res);
        setLoading(false); // Устанавливаем загрузку в false после получения ответа
    };
    return (_jsxs("div", { children: [_jsx("h3", { className: 'mt-5 text-light text-center', children: "Gemini 2.0 Flash API" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "row  ", children: [_jsx("div", { className: 'col-lg-8 mx-auto mb-3 d-flex flex-row-reverse', children: _jsxs(FormControl, { variant: "standard", sx: { m: 1, minWidth: 120 }, className: 'col-lg-4', children: [_jsx(InputLabel, { id: "demo-simple-select-standard-label", sx: { color: '#ffffff' }, children: "Language" }), _jsxs(Select, { labelId: "demo-simple-select-standard-label", id: "demo-simple-select-standard", value: language, onChange: handleChange, label: "Age", sx: {
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
                                        }, children: [_jsx(MenuItem, { value: 'русскoм', sx: { color: '#111845a6' }, children: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }), _jsx(MenuItem, { value: 'английском', sx: { color: '#111845a6' }, children: "English" }), _jsx(MenuItem, { value: 'немецком', sx: { color: '#111845a6' }, children: "Deutsch" })] })] }) }), _jsx("div", { className: "col-lg-8 border border-dark rounded p-3 mx-auto bg-white ", children: loading ? (_jsx("div", { className: "text-center", children: _jsx(Spinner, { animation: "border" }) })) : (_jsx("div", { dangerouslySetInnerHTML: { __html: resp.replace(/\n/g, '<br />') }, className: 'height100' })) })] }) }), _jsx("div", { className: "container", children: _jsxs("div", { className: "row p-2", children: [_jsx("textarea", { value: textIn, placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441...', onChange: e => setTextIn(e.target.value), className: "col-lg-8 border border-dark rounded p-3 mx-auto", style: { height: '150px' } }), _jsx("div", { className: 'col-lg-8 mx-auto mt-3', children: _jsx("div", { className: 'd-flex flex-row-reverse', children: _jsxs(Button, { variant: "primary", onClick: sendForGemini, className: 'col-sm-2 ', children: [loading ? _jsx(Spinner, { animation: "border", size: "sm" }) : 'Send', " "] }) }) })] }) })] }));
};
export default GeminiComponent;
