import { getDataFromCoinWatch } from "../services/crypto";

const TIME_INTERVAL = 1 * 60 * 1000;

setInterval(() => {
    getDataFromCoinWatch()
}, TIME_INTERVAL);