import quotationModel from "../../../models/adminModels/quotationModel.js";
import {responseData} from "../../../utils/respounse.js"
const getQuotation = async (req, res) => {
  const customerId = req.query.customerId;
  if (!customerId) {
    res.send({
      message: "",
      statuscode: 400,
      status: false,
      errormessage: "Please provide the fields",
      data: [],
    });
  } else {
    try {
      const data = await quotationModel.findOne({ CustomerID: customerId });
      // console.log(data)
      if (!data) {
        res.send({
          message: "",
          statuscode: 404,
          status: false,
          errormessage: "Data Not Found! ",
          data: [],
        });
      }
      if (data) {
        let TotalAmount = 0;
        console.log(data.items.length);
        for (let i = 0; i < data.items.length; i++) {
          const price = data.items[i].Price;
          const match = parseInt(price, 10);

          TotalAmount += match;
        }
        const jsonData = [{
          CustomerName: data.CustomerName,
          items: data.items,
          TotalAmount: TotalAmount,
        }];

       responseData(
         res,
         `Get Quotation  Data Successfully !`,
         200,
         true,
         "",
         jsonData
       );
      }
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
};
export default getQuotation;
