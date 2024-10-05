// Function to fetch exchange rates and convert currency
async function convertCurrency(amount, fromCurrency, toCurrency) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result === "success") {
      const rate = data.conversion_rate;
      const convertedAmount = amount * rate;
      console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } else {
      console.log('Error fetching exchange rate:', data['error-type']);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage
convertCurrency(100, 'USD', 'EUR');  // Converts 100 USD to EUR
