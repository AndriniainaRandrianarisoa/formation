import { fakeInvoices } from "../../pages/invoiceList/faker";

export async function getInvoices() {
  try {
    const response = await fakeInvoices.datas;
    // const response = await api.get("/groups");
    return {
      datas : response, 
      status : true
    }
  } catch (error) {
    return {
      datas : [], 
      status : false
    }
  }
}


export async function getInvoiceById(id) {
  try {
    const response = await fakeInvoices.datas.find((el: any) => el.id == id);
    // const response = await api.get("/groups/id");
    return {
      datas : response, 
      status : true
    }
  } catch (error) {
    return {
      datas : [], 
      status : false
    }
  }
}








