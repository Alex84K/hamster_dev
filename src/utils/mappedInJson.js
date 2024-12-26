export const extractData = (text) => {
    const lines = text.split('\n');
    const result = {
        apIndexForecast: {},
        geomagneticProbabilities: {},
        kpIndexForecast: []
    };
    let inApIndexForecast = false;
    let inGeomagneticProbabilities = false;
    let inKpIndexForecast = false;
    for (const line of lines) {
        if (line.startsWith('NOAA Ap Index Forecast')) {
            inApIndexForecast = true;
            continue;
        }
        if (line.startsWith('NOAA Geomagnetic Activity Probabilities')) {
            inApIndexForecast = false;
            inGeomagneticProbabilities = true;
            continue;
        }
        if (line.startsWith('NOAA Kp index forecast')) {
            inGeomagneticProbabilities = false;
            inKpIndexForecast = true;
            continue;
        }
        if (inApIndexForecast) {
            if (line.startsWith('Observed Ap')) {
                const values = line.split(' ').slice(2);
                result.apIndexForecast.observed = values[0];
            }
            if (line.startsWith('Estimated Ap')) {
                const values = line.split(' ').slice(2);
                result.apIndexForecast.estimated = values[0];
            }
            if (line.startsWith('Predicted Ap')) {
                const values = line.split(' ').slice(2);
                result.apIndexForecast.predicted = values[0];
            }
        }
        if (inGeomagneticProbabilities) {
            const parts = line.trim().split(/\s+/);
            if (parts.length > 1) {
                const activityType = parts[0];
                const probabilities = parts.slice(1).join(', ');
                result.geomagneticProbabilities[activityType] = probabilities;
            }
        }
        if (inKpIndexForecast) {
            const parts = line.trim().split(/\s+/);
            if (parts.length > 1 && !isNaN(Number(parts[1]))) {
                const timeSlot = parts[0];
                const values = parts.slice(1);
                result.kpIndexForecast.push({ timeSlot, values });
            }
        }
    }
    return result;
};
