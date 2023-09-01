const invoices = [
  {
    id: "INV001",
    method: 10,
    amount: 210,
    percent: 35,
    status: 10
  },
  {
    id: "INV002",
    method: 20,
    amount: 267,
    percent: 78,
    status: 10
  },
  {
    id: "INV003",
    method: 30,
    amount: 890,
    percent: 20,
    status: 10
  },
  {
    id: "INV004",
    method: 20,
    amount: 4555,
    percent: 67,
    status: 20
  },
  {
    id: "INV005",
    method: 10,
    amount: 34443,
    percent: 23,
    status: 10
  },
  {
    id: "INV006",
    method: 10,
    amount: 98,
    percent: 12,
    status: 20
  },
  {
    id: "INV007",
    method: 30,
    amount: 3333,
    percent: 84,
    status: 10
  }
];

const fakeInvoices = {
  response: 200,
  datas: invoices
};

export { fakeInvoices };
