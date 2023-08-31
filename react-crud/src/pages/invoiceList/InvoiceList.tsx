import React, { useEffect, useState } from "react";

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
  CardDescription,
  CardHeader,
  CardTitle
} from "../../components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../../components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  Pencil,
  Trash2,
  MoreHorizontal,
  CreditCard,
  Banknote,
  Wallet
} from "lucide-react";
import { Progress } from "../../components/ui/progress";

import { Badge } from "../../components/ui/badge";

// import api
import { getInvoices } from "../../services/api/invoice";

// Enum
import {
  InvoiceStatusEnum,
  InvoiceMethodEnum
} from "../../services/enums/general-enums";

const InvoiceList = () => {
  // useStats
  const [invoices, setInvoices]: any = useState([]);

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

  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle className="text-left">Liste de facture</CardTitle>
        <CardDescription className="text-left">
          Liste de facture
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead >Method</TableHead>
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
                <TableCell className="text-center">${item.amount}</TableCell>
                <TableCell className="text-center">
                  <Progress value={item.percent} />
                </TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
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
  );
};

export default InvoiceList;
