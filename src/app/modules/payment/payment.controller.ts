import catchAsync from "../../utils/cathcAsync";
import { paymentService } from "./payment.service";

const confirmationController = catchAsync(async (req, res) => {
  const {transactionId,status} = req.query;
  // console.log(transactionId);
 

  const result = await paymentService.confirmationService(
    transactionId as string,
    status as string
  );
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          
        }
        .container {
          text-align: center;
         
         
        }
        .container h1 {
          margin-bottom: 20px;
          color: #333;
        }
        .container a {
          text-decoration: none;
        }
        .container button {
          padding: 10px 20px;
          font-size: 16px;
          color: #fff;
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .container button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${result}</h1>
        <a href="https://carwashing-service.netlify.app/">
          <button>Back Home</button>
        </a>
      </div>
    </body>
    </html>
  `);
});

export const paymentController = {
  confirmationController,
};
