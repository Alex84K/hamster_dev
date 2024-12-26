import { createAppSlice } from "../../app/createAppSlice";
import { fechForecast } from "../../components/api/forecastTxt";
import { fetchGemini } from "../../components/api/geminiApi";
import {  Forecast } from "./type";


const initialState: Forecast = {
  forecastGeneral: '',
  doc1: '',
  doc2: '',
  doc3: '',
  status: "idle",
}

export const forecastSlice = createAppSlice({
  name: "forecast",
  initialState,
  reducers: create => ({
    getForecastAsync: create.asyncThunk(
      async (txt: string) => {
        const response = await fetchGemini(txt)
        // The value we return becomes the `fulfilled` action payload
        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.forecastGeneral = action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
    getDoc1: create.asyncThunk(
      async (txt: string) => {
        const response = await fechForecast(txt)
        // The value we return becomes the `fulfilled` action payload
        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.doc1 = action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
    getDoc2: create.asyncThunk(
      async (txt: string) => {
        const response = await fechForecast(txt)
        // The value we return becomes the `fulfilled` action payload
        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.doc2 = action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
    getDoc3: create.asyncThunk(
      async (txt: string) => {
        const response = await fechForecast(txt)
        // The value we return becomes the `fulfilled` action payload
        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.doc3 = action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),

  selectors: {
    selectForecast: forecast => forecast.forecastGeneral,
    selectDoc1: forecast => forecast.doc1,
    selectDoc2: forecast => forecast.doc2,
    selectDoc3: forecast => forecast.doc3,
    selectStatus: forecast => forecast.status,
  },
})

export const { getForecastAsync, getDoc1, getDoc2, getDoc3 } = forecastSlice.actions

export const { selectForecast, selectStatus, selectDoc1, selectDoc2, selectDoc3 } = forecastSlice.selectors