import { useState } from 'react'
import './App.css'

function App() {
  const [isAnnualPlan, setIsAnnualPlan] = useState(false)
  const prices = [
    {
      title: 'Free',
      content: 'Perfect for individuals or new businesses.',
      price: {
        monthly: '0$/mo',
        yearly: '0$/mo'
      },
      includes: [
        '100 entries',
        '1 user liscense',
        '1 custom field',
        'Help center and email support'
      ],
    },
    {
      title: 'Advanced',
      content: 'Affordable tools small businesses need to manage their inventory and assets.',
      price: {
        monthly: '49$/mo',
        yearly: '29$/mo'
      },
      includes: [
        '2,000 entries',
        '2 user liscenses',
        '10 custom field',
        'Help center and email support',
        'unlimited QR code label generation',
        'in-app barcode scanning',
      ],

    },
    {
      title: 'Ultra',
      content: 'Scalable inventory solution for growing businesses.',
      price: {
        monthly: '149$/mo',
        yearly: '59$/mo'
      },
      includes: [
        '10,000 entries',
        '5 user liscenses',
        '25 custom field',
        'Priority email support',
        'unlimited QR code &b arcode label generation',
        'in-app barcode scanning',
        'use external/ handheld barcode scanners',
      ],
    },
    {
      title: 'Enterprise',
      content: 'For organizations that need additional security, control, and support.',
      price: {
        monthly: 'Get a Quote',
        yearly: 'Get a Quote',
      },
      includes: [
        'Unlimited entries',
        '10+ user liscenses',
        'Unilimited custom field',
        'Scheduled phone support and custom training',
        'unlimited QR code label generation',
        'in-app barcode scanning',
        'API access',
        'SSO and advanced security features',
      ],

    }
  ]
  const getPlanPrice = (item) => {
    if (!isAnnualPlan) {
      return item.price.monthly
    }
    if (item.price.monthly === item.price.yearly) {
      return item.price.yearly
    }
    return item.price.monthly + ' ' + item.price.yearly


  }


  return (
    <div className="App">
      <header className='App-header'>
        <h1>Get your 14-day Trial Today!</h1>
        <p>Save your business time, money, and hassle with the top-rated inventory management software.</p>
      </header>
      <section>
        <input type="checkbox" onChange={() => setIsAnnualPlan(!isAnnualPlan)} />
        <div className='price-container'>
          {prices.map(item => {
            return (<div className='price-card'>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>{getPlanPrice(item)}</p>
              <p>Includes</p>
              <ul>
                {item.includes.map((included) => { return <li>{included}</li> })}
              </ul>
            </div>)
          })}
        </div>
      </section>
    </div>
  )
}



export default App
