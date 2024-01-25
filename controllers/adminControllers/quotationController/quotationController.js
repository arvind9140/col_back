 import quotationModel from "../../../models/adminModels/quotationModel.js";
import { responseData } from "../../../utils/respounse.js";
function generateSixDigitNumber() {
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

async function addData(customerId, itemData) {
  try {
    const customer = await quotationModel.findOneAndUpdate(
      { CustomerID: customerId },
      { $push: { items: itemData } },
      { new: true, upsert: true }
    );

    console.log("Data added successfully:");
  } catch (error) {
    console.error("Error adding data:", error);
  }
}

const quotation = async (req, res) => {
  try {
    const customerName = req.body.customerName;
    const itemName = req.body.itemName;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const customerId = req.body.customerId;
    if (!customerName || !itemName || !quantity) {
      res.status(400).json("Please provide all fields");
    } else {
      const data = await quotationModel.find({ CustomerID: customerId });
      if (data.length > 0) {
        let itemData = {
          ItemName: itemName,
          Quantity: quantity + " sq.fit",
          Price: price,
          fileUrl: "http://localhost:3000/files",
          fileID: "123456",
        };
        addData(customerId, itemData);
        res.send({
          message: "Data insert successfully!",
          statuscode: 200,
          status: true,
          errormessage: "",
          data: [{
            "CustomerId":customerId
          }],
        });
      }
      if (data.length < 1) {
        const CustomerID = generateSixDigitNumber();
        let newQuotation = await quotationModel.create({
          CustomerID: CustomerID,
          CustomerName: customerName,
          // TotalAmount:"$"+price,
          items: [
            {
              ItemName: itemName,
              fileUrl: "http://localhost:3000/files",
              fileID:"123456",
              Quantity: quantity + " sq.fit",
              Price: price,
            },
          ],
        });
        newQuotation.save();
       
         responseData(res, `ceate quotation successfully !`, 200, true, "",data[{"CustomerId":CustomerID}]);
      }
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

export default quotation;
