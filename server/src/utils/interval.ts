import { getDataFromCoinWatch } from "../services/crypto";

const TIME_INTERVAL = 30 * 1000;

setInterval(() => {
    getDataFromCoinWatch()
}, TIME_INTERVAL);