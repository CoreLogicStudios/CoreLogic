// Conversion data definitions
const conversionData = {
  currency: {
    units: [
      {code: 'USD', name: 'US Dollar'},
      {code: 'EUR', name: 'Euro'},
      {code: 'GBP', name: 'British Pound'},
      {code: 'JPY', name: 'Japanese Yen'},
      {code: 'CAD', name: 'Canadian Dollar'},
      {code: 'AUD', name: 'Australian Dollar'},
      {code: 'CHF', name: 'Swiss Franc'},
      {code: 'CNY', name: 'Chinese Yuan'},
      {code: 'INR', name: 'Indian Rupee'},
      {code: 'MXN', name: 'Mexican Peso'},
      {code: 'SGD', name: 'Singapore Dollar'},
      {code: 'NZD', name: 'New Zealand Dollar'},
      {code: 'HKD', name: 'Hong Kong Dollar'},
      {code: 'SEK', name: 'Swedish Krona'},
      {code: 'KRW', name: 'South Korean Won'}
    ],
    rates: {
      USD: 1,
      EUR: 0.92,
      GBP: 0.79,
      JPY: 151.67,
      CAD: 1.36,
      AUD: 1.53,
      CHF: 0.90,
      CNY: 7.24,
      INR: 83.45,
      MXN: 17.05,
      SGD: 1.34,
      NZD: 1.65,
      HKD: 7.82,
      SEK: 10.47,
      KRW: 1356.21
    }
  },
  length: {
    units: [
      {code: 'm', name: 'Meter'},
      {code: 'km', name: 'Kilometer'},
      {code: 'cm', name: 'Centimeter'},
      {code: 'mm', name: 'Millimeter'},
      {code: 'in', name: 'Inch'},
      {code: 'ft', name: 'Foot'},
      {code: 'yd', name: 'Yard'},
      {code: 'mi', name: 'Mile'}
    ],
    rates: {
      m: 1,
      km: 1000,
      cm: 0.01,
      mm: 0.001,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.344
    }
  },
  mass: {
    units: [
      {code: 'kg', name: 'Kilogram'},
      {code: 'g', name: 'Gram'},
      {code: 'mg', name: 'Milligram'},
      {code: 't', name: 'Metric Ton'},
      {code: 'lb', name: 'Pound'},
      {code: 'oz', name: 'Ounce'}
    ],
    rates: {
      kg: 1,
      g: 0.001,
      mg: 0.000001,
      t: 1000,
      lb: 0.45359237,
      oz: 0.028349523125
    }
  },
  temperature: {
    units: [
      {code: 'C', name: 'Celsius'},
      {code: 'F', name: 'Fahrenheit'},
      {code: 'K', name: 'Kelvin'}
    ]
  },
  area: {
    units: [
      {code: 'm²', name: 'Square Meter'},
      {code: 'km²', name: 'Square Kilometer'},
      {code: 'cm²', name: 'Square Centimeter'},
      {code: 'mm²', name: 'Square Millimeter'},
      {code: 'ha', name: 'Hectare'},
      {code: 'in²', name: 'Square Inch'},
      {code: 'ft²', name: 'Square Foot'},
      {code: 'ac', name: 'Acre'},
      {code: 'mi²', name: 'Square Mile'}
    ],
    rates: {
      'm²': 1,
      'km²': 1000000,
      'cm²': 0.0001,
      'mm²': 0.000001,
      'ha': 10000,
      'in²': 0.00064516,
      'ft²': 0.09290304,
      'ac': 4046.8564224,
      'mi²': 2589988.110336
    }
  },
  volume: {
    units: [
      {code: 'm³', name: 'Cubic Meter'},
      {code: 'L', name: 'Liter'},
      {code: 'mL', name: 'Milliliter'},
      {code: 'gal', name: 'US Gallon'},
      {code: 'qt', name: 'US Quart'},
      {code: 'pt', name: 'US Pint'},
      {code: 'fl oz', name: 'US Fluid Ounce'}
    ],
    rates: {
      'm³': 1,
      'L': 0.001,
      'mL': 0.000001,
      'gal': 0.00378541,
      'qt': 0.000946353,
      'pt': 0.000473176,
      'fl oz': 0.0000295735
    }
  },
  time: {
    units: [
      {code: 's', name: 'Second'},
      {code: 's', name: 'Second'},
      {code: 'min', name: 'Minute'},
      {code: 'h', name: 'Hour'},
      {code: 'd', name: 'Day'},
      {code: 'wk', name: 'Week'},
      {code: 'mo', name: 'Month (avg)'},
      {code: 'yr', name: 'Year'}
    ],
    rates: {
      's': 1,
      'min': 60,
      'h': 3600,
      'd': 86400,
      'wk': 604800,
      'mo': 2628000,
      'yr': 31536000
    }
  },
  speed: {
    units: [
      {code: 'm/s', name: 'Meter per Second'},
      {code: 'km/h', name: 'Kilometer per Hour'},
      {code: 'ft/s', name: 'Foot per Second'},
      {code: 'mph', name: 'Mile per Hour'},
      {code: 'kn', name: 'Knot'}
    ],
    rates: {
      'm/s': 1,
      'km/h': 0.277778,
      'ft/s': 0.3048,
      'mph': 0.44704,
      'kn': 0.514444
    }
  },
  data: {
    units: [
      {code: 'byte', name: 'Byte'},
      {code: 'KB', name: 'Kilobyte'},
      {code: 'MB', name: 'Megabyte'},
      {code: 'GB', name: 'Gigabyte'},
      {code: 'TB', name: 'Terabyte'}
    ],
    rates: {
      'byte': 1,
      'KB': 1000,
      'MB': 1000000,
      'GB': 1000000000,
      'TB': 1000000000000
    }
  },
  energy: {
    units: [
      {code: 'J', name: 'Joule'},
      {code: 'kJ', name: 'Kilojoule'},
      {code: 'cal', name: 'Calorie'},
      {code: 'kcal', name: 'Kilocalorie'},
      {code: 'Wh', name: 'Watt hour'},
      {code: 'kWh', name: 'Kilowatt hour'}
    ],
    rates: {
      'J': 1,
      'kJ': 1000,
      'cal': 4.184,
      'kcal': 4184,
      'Wh': 3600,
      'kWh': 3600000
    }
  },
  power: {
    units: [
      {code: 'W', name: 'Watt'},
      {code: 'kW', name: 'Kilowatt'},
      {code: 'hp', name: 'Horsepower'}
    ],
    rates: {
      'W': 1,
      'kW': 1000,
      'hp': 745.699872
    }
  },
  pressure: {
    units: [
      {code: 'Pa', name: 'Pascal'},
      {code: 'kPa', name: 'Kilopascal'},
      {code: 'bar', name: 'Bar'},
      {code: 'psi', name: 'Pound per square inch'},
      {code: 'atm', name: 'Standard atmosphere'}
    ],
    rates: {
      'Pa': 1,
      'kPa': 1000,
      'bar': 100000,
      'psi': 6894.75729,
      'atm': 101325
    }
  },
  angle: {
    units: [
      {code: 'deg', name: 'Degree'},
      {code: 'rad', name: 'Radian'},
      {code: 'grad', name: 'Gradian'}
    ],
    rates: {
      'deg': 1,
      'rad': 57.29577951,
      'grad': 0.9
    }
  },
  frequency: {
    units: [
      {code: 'Hz', name: 'Hertz'},
      {code: 'kHz', name: 'Kilohertz'},
      {code: 'MHz', name: 'Megahertz'},
      {code: 'GHz', name: 'Gigahertz'}
    ],
    rates: {
      'Hz': 1,
      'kHz': 1000,
      'MHz': 1000000,
      'GHz': 1000000000
    }
  },
  fuel: {
    units: [
      {code: 'mpg (US)', name: 'Miles per gallon (US)'},
      {code: 'mpg (UK)', name: 'Miles per gallon (UK)'},
      {code: 'L/100km', name: 'Liters per 100 kilometers'},
      {code: 'km/L', name: 'Kilometers per liter'}
    ],
    rates: {} // Special conversion function used
  }
};

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const typeSelect = document.getElementById('type');
  const fromSelect = document.getElementById('from');
  const toSelect = document.getElementById('to');
  const amountInput = document.getElementById('amount');
  const resultDiv = document.getElementById('result');
  const copyBtn = document.getElementById('copy');
  const updateTimeEl = document.getElementById('update-time');
  const swapBtn = document.getElementById('swap-units');
  
  // Function to populate unit dropdowns based on selected conversion type
  function populateUnitDropdowns() {
    const type = typeSelect.value;
    const units = conversionData[type].units;
    
    // Clear existing options
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    
    // Add new options
    units.forEach((unit, index) => {
      const fromOption = document.createElement('option');
      fromOption.value = unit.code;
      fromOption.textContent = unit.name;
      fromSelect.appendChild(fromOption);
      
      const toOption = document.createElement('option');
      toOption.value = unit.code;
      toOption.textContent = unit.name;
      toSelect.appendChild(toOption);
    });
    
    // Set default selection (first option for from, second for to)
    fromSelect.selectedIndex = 0;
    if (toSelect.options.length > 1) {
      toSelect.selectedIndex = 1;
    }
    
    // Show/hide currency info panel
    updateCurrencyInfoVisibility();
  }
  
  // Show/hide currency info based on selected conversion type
  function updateCurrencyInfoVisibility() {
    const currencyInfo = document.getElementById('currency-info');
    if (currencyInfo) {
      if (typeSelect.value === 'currency') {
        currencyInfo.style.display = 'block';
      } else {
        currencyInfo.style.display = 'none';
      }
    }
  }

  // Function to convert values
  function convert() {
    const type = typeSelect.value;
    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = parseFloat(amountInput.value);
    
    if (isNaN(amount)) {
      resultDiv.textContent = 'Please enter a valid number';
      return;
    }
    
    let result;
    
    // Handle different conversion types
    if (type === 'temperature') {
      // Special case for temperature
      result = convertTemperature(amount, from, to);
    } else if (type === 'currency') {
      // Special case for currency - using direct exchange rates
      const rates = conversionData.currency.rates;
      // For currency, we need to convert through the base currency (USD)
      const amountInUSD = amount / rates[from];
      result = amountInUSD * rates[to];
    } else if (type === 'fuel') {
      // Special case for fuel efficiency
      result = convertFuelEfficiency(amount, from, to);
    } else {
      // Standard conversion using rates for other unit types
      const rates = conversionData[type].rates;
      result = amount * (rates[from] / rates[to]);
    }
    
    // Format the result based on magnitude
    let formattedResult;
    if (Math.abs(result) >= 1e9) {
      formattedResult = result.toExponential(6);
    } else if (Math.abs(result) < 0.000001 && result !== 0) {
      formattedResult = result.toExponential(6);
    } else if (Math.abs(result) >= 100) {
      formattedResult = result.toFixed(2);
    } else if (Math.abs(result) >= 10) {
      formattedResult = result.toFixed(4);
    } else {
      formattedResult = result.toFixed(6);
    }
    
    // Display based on type
    if (type === 'temperature') {
      resultDiv.textContent = `${amount}° ${from} = ${formattedResult}° ${to}`;
    } else {
      resultDiv.textContent = `${amount} ${from} = ${formattedResult} ${to}`;
    }
    
    // Update URL hash
    updateUrlHash(type, from, to, amount);
  }
  
  // Special temperature conversion function
  function convertTemperature(value, from, to) {
    // First convert to Celsius as base unit
    let celsius;
    if (from === 'C') celsius = value;
    else if (from === 'F') celsius = (value - 32) * (5/9);
    else if (from === 'K') celsius = value - 273.15;
    
    // Then convert from Celsius to target
    if (to === 'C') return celsius;
    else if (to === 'F') return celsius * (9/5) + 32;
    else if (to === 'K') return celsius + 273.15;
  }
  
  // Special fuel efficiency conversion function
  function convertFuelEfficiency(value, from, to) {
    // First convert to L/100km as base unit
    let L100km;
    
    if (from === 'mpg (US)') L100km = 235.214583 / value;
    else if (from === 'mpg (UK)') L100km = 282.48 / value;
    else if (from === 'L/100km') L100km = value;
    else if (from === 'km/L') L100km = 100 / value;
    
    // Then convert from L/100km to target
    if (to === 'mpg (US)') return 235.214583 / L100km;
    else if (to === 'mpg (UK)') return 282.48 / L100km;
    else if (to === 'L/100km') return L100km;
    else if (to === 'km/L') return 100 / L100km;
  }
  
  // Function to fetch live exchange rates from API
  async function fetchLiveExchangeRates() {
    try {
      // Update status in UI
      if (updateTimeEl) {
        updateTimeEl.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Updating...';
      }
      
      // Using free Exchange Rate API
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.result === 'success') {
        // Update our rates with the live data
        for (const currency in data.rates) {
          if (conversionData.currency.rates.hasOwnProperty(currency)) {
            conversionData.currency.rates[currency] = data.rates[currency];
          }
        }
        
        // Store the timestamp and rates in localStorage
        const timestamp = new Date(data.time_last_update_utc);
        localStorage.setItem('ratesLastUpdated', timestamp.toISOString());
        localStorage.setItem('exchangeRates', JSON.stringify(conversionData.currency.rates));
        
        if (updateTimeEl) {
          updateTimeEl.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success);"></i> Updated ${timestamp.toLocaleTimeString()}`;
        }
        
        // If we're on currency conversion, recalculate with new rates
        if (typeSelect.value === 'currency') {
          convert();
        }
      } else {
        throw new Error('API returned unsuccessful result');
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      
      // If we have stored rates, use those instead
      const storedRates = localStorage.getItem('exchangeRates');
      if (storedRates) {
        const storedTimestamp = localStorage.getItem('ratesLastUpdated');
        conversionData.currency.rates = JSON.parse(storedRates);
        if (updateTimeEl) {
          updateTimeEl.innerHTML = `<i class="fas fa-info-circle" style="color: var(--secondary);"></i> Offline rates from ${new Date(storedTimestamp).toLocaleString()}`;
        }
      } else if (updateTimeEl) {
        updateTimeEl.innerHTML = `<i class="fas fa-exclamation-circle" style="color: var(--error);"></i> Couldn't update rates`;
      }
      
      // Still need to calculate conversion
      if (typeSelect.value === 'currency') {
        convert();
      }
    }
  }
  
  // Update URL hash to make conversions shareable
  function updateUrlHash(type, from, to, amount) {
    const hashParams = new URLSearchParams();
    hashParams.set('type', type);
    hashParams.set('from', from);
    hashParams.set('to', to);
    hashParams.set('amount', amount);
    
    // Update URL without page reload
    history.replaceState(null, null, `#${hashParams.toString()}`);
  }
  
  // Load conversion parameters from URL hash
  function loadFromUrlHash() {
    if (window.location.hash) {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      
      const type = hashParams.get('type');
      if (type && conversionData[type]) {
        typeSelect.value = type;
        
        // Populate unit dropdowns for this type
        populateUnitDropdowns();
        
        // Set from and to values if valid
        const from = hashParams.get('from');
        const to = hashParams.get('to');
        const amount = hashParams.get('amount');
        
        if (from && Array.from(fromSelect.options).some(o => o.value === from)) {
          fromSelect.value = from;
        }
        
        if (to && Array.from(toSelect.options).some(o => o.value === to)) {
          toSelect.value = to;
        }
        
        if (amount && !isNaN(parseFloat(amount))) {
          amountInput.value = amount;
        }
        
        // Perform conversion
        convert();
      }
    }
  }
  
  // Add event listeners
  function setupEventListeners() {
    typeSelect.addEventListener('change', function() {
      populateUnitDropdowns();
      convert();
    });
    
    fromSelect.addEventListener('change', convert);
    toSelect.addEventListener('change', convert);
    amountInput.addEventListener('input', convert);
    
    // Copy button functionality
    copyBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(resultDiv.textContent).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
        }, 1500);
      });
    });
    
    // Add refresh button listener for manual currency updates
    const refreshRatesBtn = document.getElementById('refresh-rates');
    if (refreshRatesBtn) {
      refreshRatesBtn.addEventListener('click', fetchLiveExchangeRates);
    }
    
    // Add swap button functionality
    if (swapBtn) {
      swapBtn.addEventListener('click', function() {
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;
        
        fromSelect.value = toValue;
        toSelect.value = fromValue;
        
        convert();
      });
    }
  }
  
  // Initialize everything
  function init() {
    // Set up event listeners
    setupEventListeners();
    
    // Load cached exchange rates if available
    const storedRates = localStorage.getItem('exchangeRates');
    if (storedRates && updateTimeEl) {
      const storedTimestamp = localStorage.getItem('ratesLastUpdated');
      conversionData.currency.rates = JSON.parse(storedRates);
      updateTimeEl.innerHTML = `<i class="fas fa-history"></i> Rates from ${new Date(storedTimestamp).toLocaleString()}`;
    }
    
    // Populate unit dropdowns
    populateUnitDropdowns();
    
    // Check if we have conversion parameters in URL
    loadFromUrlHash();
    
    // Initial conversion calculation (if not already done by loadFromUrlHash)
    if (!window.location.hash) {
      convert();
    }
    
    // Fetch fresh exchange rates
    fetchLiveExchangeRates();
  }
  
  // Run initialization
  init();
});
