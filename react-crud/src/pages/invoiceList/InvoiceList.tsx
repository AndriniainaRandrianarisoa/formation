import React, { useEffect, useState } from "react";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../../components/ui/table";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../../components/ui/dropdown-menu";

import {
  Pencil,
  Trash2,
  MoreHorizontal,
  CreditCard,
  Banknote,
  Wallet,
  Plus
} from "lucide-react";
import { Progress } from "../../components/ui/progress";

import { Badge } from "../../components/ui/badge";

import { Button } from "@/components/ui/button";

import { Mail } from "lucide-react";

// import api
import { getInvoices } from "../../services/api/invoice";

// Enum
import {
  InvoiceStatusEnum,
  InvoiceMethodEnum
} from "../../services/enums/general-enums";
import { AddInvoice } from "./modals/AddInvoice";

const InvoiceList = () => {
  // useStats
  const [invoices, setInvoices]: any = useState([]);
  const [addModal, setAddModal] = useState(false);

  // call api
  useEffect(() => {
    const loadInvoices = async (): Promise<any> => {
      const response = await getInvoices();
      const formatted_datas = response?.datas.map((el: any) => {
        return {
          ...el,
          statusFormatted: displayStatus(el.status)
        };
      });

      setInvoices(formatted_datas);
    };
    loadInvoices();
  }, []);

  // status generator
  const displayStatus = (status: number) => {
    switch (status) {
      case InvoiceStatusEnum.PAID:
        return "PAID";
      case InvoiceStatusEnum.NOTPAID:
        return "NOT PAID";
      default:
        return "UNKNOW";
    }
  };

  const handleValidForm = (invoice) => {
    setAddModal(false);
    invoice.statusFormatted = displayStatus(invoice.status);
    const copy = [...invoices];
    copy.push(invoice);
    setInvoices(copy);
  };

  const handleClickAddButtoon = () => {
    setAddModal(true);
  };

  return (
    <div className="p-8">
      <Card>
        <CardHeader className="hidden flex-col md:flex">
          <div className="flex  items-center px-4">
            <CardTitle className="text-left">Liste de facture</CardTitle>

            <div className="ml-auto flex items-center space-x-4">
              <Dialog open={addModal}>
                <DialogTrigger asChild>
                  <Button onClick={handleClickAddButtoon}>
                    <Plus className="mr-2 h-4 w-4" /> Create Invoice
                  </Button>
                </DialogTrigger>

                <AddInvoice
                  handleValidForm={handleValidForm}
                  handleCancelClick={() => setAddModal(false)}
                />
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-center">Client</TableHead>
                <TableHead className="text-center">Amount</TableHead>
                <TableHead className="text-center">Percent</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline">{item.statusFormatted}</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {item.method == InvoiceMethodEnum.CARD && (
                      <span>
                        <CreditCard />
                      </span>
                    )}
                    {item.method == InvoiceMethodEnum.PAYMENT && (
                      <span>
                        <Banknote />
                      </span>
                    )}
                    {item.method == InvoiceMethodEnum.CHEQUE && (
                      <span>
                        <Wallet />
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.clientName}
                  </TableCell>
                  <TableCell className="text-center">${item.amount}</TableCell>
                  <TableCell className="text-center">
                    <Progress value={item.percent} />
                  </TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceList;
