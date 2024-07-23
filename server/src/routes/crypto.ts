import { Router, Request, Response } from "express";

import { getCrypto, getDataFromCoinWatch } from "../services/crypto";

const router = Router();

interface RequestParams {}

interface ResponseBody {}

interface RequestBody {}

interface RequestQuery {
  coin?: string;
}

router.get('/crypto', async (req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>, res: Response) => {
    const { coin } = req.query;

    res.status(200).json(await getCrypto(coin));
});

export { router as cryptoRouter };
