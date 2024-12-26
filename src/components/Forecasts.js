import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectDoc1, selectDoc2, selectDoc3, selectForecast } from '../features/solarForecast/forecastSlice';
const Forecasts = () => {
    const forecastGemini = useAppSelector(selectForecast);
    const dispatch = useAppDispatch();
    const forecast1 = useAppSelector(selectDoc1);
    const forecast2 = useAppSelector(selectDoc2);
    const forecast3 = useAppSelector(selectDoc3);
    return (_jsxs("div", { className: 'container mt-4 mb-5', children: [_jsx("div", { className: 'row', children: forecastGemini == '' ? (_jsxs("div", { className: 'col-lg-10 mx-auto', children: [_jsx("h4", { className: 'text-light text-center mb-4', children: "Forecasts" }), _jsx("div", { className: 'mt-4 p-2 border border-info rounded', children: _jsx("p", { className: 'text-light', children: "\u0414\u0430\u043D\u043D\u044B\u0445 \u043D\u0435\u0442..." }) })] })) : (_jsxs("div", { className: 'col-lg-10 mx-auto', children: [_jsx("h3", { className: 'text-light text-center mb-4', children: "Forecasts" }), _jsx("div", { className: 'p-3 border border-info rounded', children: _jsx("p", { className: 'text-light', children: forecastGemini }) })] })) }), _jsxs("div", { className: 'col-lg-10 mx-auto mt-3', children: [_jsxs(Accordion, { children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel1-content", id: "panel1-header", children: _jsx(Typography, { component: "span", children: "3x \u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u043E \u0433\u0435\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445" }) }), _jsx(AccordionDetails, { children: _jsxs("pre", { style: { whiteSpace: 'pre-wrap', wordWrap: 'break-word' }, children: [forecast1, " "] }) })] }), _jsxs(Accordion, { children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel2-content", id: "panel2-header", children: _jsx(Typography, { component: "span", children: "3x \u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u043E \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438" }) }), _jsx(AccordionDetails, { children: _jsxs("pre", { style: { whiteSpace: 'pre-wrap', wordWrap: 'break-word' }, children: [forecast3, " "] }) })] }), _jsxs(Accordion, { children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel3-content", id: "panel3-header", children: _jsx(Typography, { component: "span", children: "\u0418\u0442\u043E\u0433\u043E\u0432\u044B\u0439 \u043E\u0442\u0447\u0435\u0442" }) }), _jsx(AccordionDetails, { children: _jsxs("pre", { style: { whiteSpace: 'pre-wrap', wordWrap: 'break-word' }, children: [forecast2, " "] }) })] })] })] }));
};
export default Forecasts;
