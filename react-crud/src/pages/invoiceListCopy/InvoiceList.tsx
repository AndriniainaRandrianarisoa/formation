import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

import { Button } from "../../components/ui/button";
import {
  Pencil,
  Trash2,
  MoreHorizontal,
  CreditCard,
  Banknote,
  Wallet,
} from "lucide-react";

import { Progress } from "../../components/ui/progress";

import { Badge } from "../../components/ui/badge";
import { getInvoices } from "@/services/api/invoice";

const InvoiceList = () => {
  //const [test, setTest] = useState(0);

  const [invoices, setInvoices]: any = useState([]);

  useEffect(() => {
    const loadInvoices = async () => {
      const response = await getInvoices();
      setInvoices(response?.datas);
    };

    loadInvoices();
  }, []);

  // const handleClick = () => {
  //   let copy = test;
  //   copy++;
  //   setTest(copy);
  // };

  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle className="text-left">Liste de facture</CardTitle>
        <CardDescription className="text-left">
          Liste de facture
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline">Button</Button>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Percent</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="text-center">
                <Badge variant="outline">PAID</Badge>
              </TableCell>
              <TableCell className="text-center">
                <span>
                  <CreditCard />
                </span>
              </TableCell>
              <TableCell className="text-center">$250</TableCell>
              <TableCell className="text-center">
                <Progress value={33} />
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
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default InvoiceList;
