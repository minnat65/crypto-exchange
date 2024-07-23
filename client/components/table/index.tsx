
'use client';

import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import TableRows from "./table-row";
import { useEffect } from "react";
import { setCryptoData } from "@/lib/features/crypto/cryptoSlice";
import { ICrypto } from "@/lib/interface";

export function CustomTable() {
  const crypto = useSelector((state: any) => state.crypto.cryptoData);
  const dispatch = useDispatch();

  useEffect(() => {
    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:3001');

    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log('Connected to WS Server')
    });

    // Listen for messages
    socket.addEventListener('message',  function (event) {
      const newData = JSON.parse(event.data);
        console.log('Message from server ', newData);
        dispatch(setCryptoData(newData));
    });

    // close the connection on component unmount.
    return () => socket.close();
  }, []);

  return (
    <div className="overflow-x-auto max-h-[700px]">
      <Table striped>
        <TableHead>
          <TableHeadCell>Serial No.</TableHeadCell>
          <TableHeadCell>Coin</TableHeadCell>
          <TableHeadCell>Rate</TableHeadCell>
          <TableHeadCell>Cap</TableHeadCell>
          <TableHeadCell>volume</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {(crypto || []).map((data: ICrypto, index: number) => <TableRows data={data} key={data._id} index={index} />)}
        </TableBody>
      </Table>
    </div>
  );
}
