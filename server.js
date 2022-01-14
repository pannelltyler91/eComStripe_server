require('dotenv').config()
//hello
const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3001
const db = require('./models')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get('/menu', (req,res) => {
 db.menuItems.findAll({})
 .then((items) =>{
   console.log(items)
   res.json({menuItems:items})
 })
})

app.post('/create_checkout_session', async (req,res) =>{
  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types:['card'],
      mode:'payment',
      line_items:'',
      success_url:`${process.env.SERVER_URL}/success.html`,
      cancel_url:`${process.env.SERVER_URL}/cancel.html`
    })
    res.json({url:session.url})
  }catch(e){
    res.status(500).json({error:e.message})
  }
  console.log(req.body)
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });