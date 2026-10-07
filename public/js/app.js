/**
 * ECO GREEN SOLAR — INTERACTIVE SAVINGS CALCULATOR & SMART LOGIC
 * Real-time thermodynamic & photovoltaic return-on-investment engine
 */

(function () {
  'use strict';

  // 1. MOBILE MENU TOGGLE
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#ffffff';
        navMenu.style.padding = '24px';
        navMenu.style.borderRadius = '16px';
        navMenu.style.marginTop = '10px';
        navMenu.style.boxShadow = '0 12px 32px rgba(12,20,17,0.14)';
      }
    });
  }

  // 2. ACTIVE NAV SCROLL TRACKING
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 3. INTERACTIVE SOLAR & THERMAL SAVINGS CALCULATOR
  const billSlider = document.getElementById('billSlider');
  const billValueDisplay = document.getElementById('billValueDisplay');
  const annualSavingsDisplay = document.getElementById('annualSavingsDisplay');
  const recommendedKwDisplay = document.getElementById('recommendedKwDisplay');
  const paybackYearsDisplay = document.getElementById('paybackYearsDisplay');
  const co2OffsetDisplay = document.getElementById('co2OffsetDisplay');
  const twentyYearSavingsDisplay = document.getElementById('twentyYearSavingsDisplay');
  const typeButtons = document.querySelectorAll('.type-btn');
  const btnHeaterYes = document.getElementById('btnHeaterYes');
  const btnHeaterNo = document.getElementById('btnHeaterNo');
  const heaterStatusDisplay = document.getElementById('heaterStatusDisplay');

  let currentCategory = 'residential';
  let includeWaterHeater = true;

  function updateSolarCalculations() {
    if (!billSlider) return;
    const monthlyBill = parseFloat(billSlider.value);

    // Bill formatted
    if (billValueDisplay) {
      billValueDisplay.textContent = `₹ ${monthlyBill.toLocaleString('en-IN')} / mo`;
    }

    // Recommended System sizing: ~1kW generates approx ₹1,200 - ₹1,400 bill offset
    let tariffRate = 8.0; // average Indian commercial/residential tier
    if (currentCategory === 'commercial') tariffRate = 9.5;
    if (currentCategory === 'industrial') tariffRate = 7.8;

    const monthlyUnits = monthlyBill / tariffRate;
    let kwNeeded = Math.round((monthlyUnits / 120) * 10) / 10;
    if (kwNeeded < 1) kwNeeded = 1;

    // Thermal heater contribution reduces morning electric geyser loads by ~30%
    const thermalBonus = includeWaterHeater ? 1.25 : 1.0;
    const annualSavings = Math.round((monthlyBill * 12 * 0.85) * thermalBonus);
    const paybackYears = includeWaterHeater ? '2.4 - 2.9 Years' : '3.1 - 3.5 Years';
    const co2Tons = Math.round((kwNeeded * 1.35) * 10) / 10;
    const twentyFiveYearSavings = (annualSavings * 25) / 100000;

    // Update DOM
    if (annualSavingsDisplay) annualSavingsDisplay.textContent = `₹ ${annualSavings.toLocaleString('en-IN')}`;
    if (recommendedKwDisplay) recommendedKwDisplay.textContent = `${kwNeeded} kW`;
    if (paybackYearsDisplay) paybackYearsDisplay.textContent = paybackYears;
    if (co2OffsetDisplay) co2OffsetDisplay.textContent = `${co2Tons} Tons`;
    if (twentyYearSavingsDisplay) twentyYearSavingsDisplay.textContent = `₹ ${twentyFiveYearSavings.toFixed(1)} Lakhs`;
  }

  if (billSlider) {
    billSlider.addEventListener('input', updateSolarCalculations);
  }

  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      typeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-type');
      updateSolarCalculations();
    });
  });

  if (btnHeaterYes && btnHeaterNo) {
    btnHeaterYes.addEventListener('click', () => {
      btnHeaterYes.classList.add('active');
      btnHeaterNo.classList.remove('active');
      includeWaterHeater = true;
      if (heaterStatusDisplay) heaterStatusDisplay.textContent = 'Yes (Included)';
      updateSolarCalculations();
    });

    btnHeaterNo.addEventListener('click', () => {
      btnHeaterNo.classList.add('active');
      btnHeaterYes.classList.remove('active');
      includeWaterHeater = false;
      if (heaterStatusDisplay) heaterStatusDisplay.textContent = 'Solar PV Only';
      updateSolarCalculations();
    });
  }

  // Pre-run calculator on init
  updateSolarCalculations();

  // 4. PAN-INDIA STATE DISTRIBUTION INTERACTION
  const statePills = document.querySelectorAll('.state-pill');
  statePills.forEach(pill => {
    pill.addEventListener('click', () => {
      statePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

})();

// Product Specification Modal Data
const PRODUCT_CATALOGUE_DATA = {
  'pressurized': {
    title: 'Pressurized Solar Water Heater',
    subtitle: 'Engineered for High-Pressure Booster Pumps & Multi-Storey Plumbing',
    specs: [
      { name: 'Capacity Range', value: '100 to 5,000+ Liters/Day' },
      { name: 'Inner Tank Material', value: 'Heavy Gauge Food-Grade SUS316L / SUS304' },
      { name: 'Operating Pressure', value: 'Tested up to 6 - 8 Bar Hydrostatic Pressure' },
      { name: 'Insulation', value: '50mm High-Density Injected Polyurethane Foam (PUF)' },
      { name: 'Thermal Retention', value: 'Temperature maintained hot for over 72 Hours' },
      { name: 'Evacuated Tubes', value: 'Three-Target AL-N-AL Borosilicate Glass 3.3' },
      { name: 'Sacrificial Anode', value: 'Magnesium Anode Rod for Anti-Scaling Protection' }
    ],
    features: [
      'Allows seamless connection with automatic pressure booster pumps',
      'Zero mixing of hot and cold water during continuous pressurized showers',
      'Heavy-duty powder coated structural stand withstands 150 km/h wind loads'
    ]
  },
  'copper': {
    title: 'Copper Series Solar Water Heater',
    subtitle: 'Internal Pure Copper Heat Exchanger Coil for Rapid Heat Transfer',
    specs: [
      { name: 'Heat Exchange Coil', value: '99.9% Pure Deoxidized Copper Seamless Tubes' },
      { name: 'Heat Transfer Rate', value: 'Instantaneous Heat Exchange under Pressure' },
      { name: 'Water Quality', value: 'Sterile, potable drinking grade hygienic delivery' },
      { name: 'Tube Capacity', value: '15 to 50 Tubes per manifold bank' }
    ],
    features: [
      'High thermal conductivity of copper maximizes heat transfer speed',
      'Natural antimicrobial property prevents bacterial and algae formation',
      'Suitable for villas, clinics, and luxury hospitality'
    ]
  },
  'glassline': {
    title: 'Glass Line Series Solar Water Heater',
    subtitle: 'Porcelain Enamel Glass-Lined Inner Tank for Hard Water Resistance',
    specs: [
      { name: 'Inner Tank Coating', value: 'High-Temperature Fused Porcelain Enamel Glass' },
      { name: 'Hard Water Resistance', value: 'Handles Water Hardness up to 1500+ PPM TDS' },
      { name: 'Corrosion Shield', value: '100% Anti-Rust & Scaling Prevention' },
      { name: 'Life Expectancy', value: 'Over 15+ Years trouble-free service' }
    ],
    features: [
      'Specifically formulated for borewell water across Gujarat and Rajasthan',
      'Glass lining prevents direct contact between corrosive water and steel',
      'Zero scale deposition inside the water reservoir'
    ]
  },
  'diamond': {
    title: 'Diamond Series Solar Water Heater',
    subtitle: 'Heavy-Duty Reinforced Outer Body & Triple-Layer Vacuum Tubes',
    specs: [
      { name: 'Outer Cladding', value: 'Pre-Coated Industrial Anti-Corrosion Galvanized Sheet' },
      { name: 'Vacuum Tubes', value: 'Triple-Coated High Absorption Vacuum Absorbers' },
      { name: 'Thermal Retention', value: '72+ Hours with zero electric heating required' }
    ],
    features: [
      'High performance in foggy, chilly and overcast winter conditions',
      'Weather-resistant exterior paint finish resistant to UV and rain damage',
      'Ideal for residential bungalows and independent farmhouses'
    ]
  },
  'pearl': {
    title: 'Pearl Series Solar Water Heater',
    subtitle: 'Economical, Highly Efficient Domestic Water Heating',
    specs: [
      { name: 'Target Applications', value: 'Standard Family Residences & Row Houses' },
      { name: 'Payback Period', value: '18 - 24 Months on electricity savings' },
      { name: 'Maintenance', value: 'Near Zero Maintenance Design' }
    ],
    features: [
      'Affordable entry into clean green thermal energy without compromising quality',
      'High absorption borosilicate tubes heat water up to 80°C on sunny days'
    ]
  },
  'heat-pump': {
    title: 'Air Source Heat Pumps',
    subtitle: 'High COP Thermodynamic Centralized Heating for Residences & Commercial',
    specs: [
      { name: 'Coefficient of Performance (COP)', value: 'Up to 4.2+ (Produces 4.2kW heat per 1kW consumed)' },
      { name: 'Compressor', value: 'Panasonic / Mitsubishi DC Inverter Rotary' },
      { name: 'Refrigerant', value: 'Eco-Friendly R410A / R32' },
      { name: 'Savings', value: 'Up to 75% Electricity Reduction' }
    ],
    features: [
      'Operates seamlessly during night, rain, and winter fog without sunshine',
      'Intelligent automatic defrosting algorithm prevents frost buildup',
      'Whisper-quiet acoustic damping (<50 dB)'
    ]
  },
  'pressure-pump': {
    title: 'Pressure Booster Pumps',
    subtitle: 'Hydro-Pneumatic Variable Speed Inverter Pumping Systems',
    specs: [
      { name: 'Hydraulics', value: 'Full AISI 304 Stainless Steel Impellers & Chambers' },
      { name: 'Control Logic', value: 'Automatic Variable Frequency Drive (VFD)' },
      { name: 'Pressure Range', value: 'Adjustable 2.5 to 6.0 Bar constant pressure' }
    ],
    features: [
      'Eliminates shower pressure drop when multiple taps open simultaneously',
      'Soft start and stop prevents pipe-bursting water hammer shocks'
    ]
  },
  'solar-panels': {
    title: 'Solar Rooftop & Ground Mounted Systems',
    subtitle: 'Turnkey EPC Installations & Complete BOM Supply (40+ MW Proven)',
    specs: [
      { name: 'Module Efficiency', value: 'Up to 22.8% Conversion Efficiency' },
      { name: 'Performance Guarantee', value: '27 Years Linear Power Guarantee*' },
      { name: 'EPC Experience', value: '40 MW executed at Charanka Solar Park, Kutch' }
    ],
    features: [
      'Complete BOM item trading and warehouses across Gujarat',
      'Government net-metering grid interconnection support'
    ]
  },
  'cleanx': {
    title: 'Cleanx Automated Nozzles',
    subtitle: 'Specialized High-Pressure Water Spray Nozzles for Solar Array Cleaning',
    specs: [
      { name: 'Function', value: 'Automatic Rooftop Solar Panel Dust & Soiling Removal' },
      { name: 'Spray Pattern', value: 'Wide-Angle High-Velocity Jet Cleaning' },
      { name: 'Generation Gain', value: 'Recovers up to 15-20% lost power from dusty panels' }
    ],
    features: [
      'Eliminates dangerous manual rooftop washing and ladder climbing',
      'Low water consumption cycle paired with automatic timer logic'
    ]
  }
};

function openProductModal(productId) {
  const modal = document.getElementById('productModal');
  const content = document.getElementById('modalContent');
  const data = PRODUCT_CATALOGUE_DATA[productId];
  if (!modal || !content || !data) return;

  const specsRows = data.specs.map(s => `
    <tr>
      <td>${s.name}</td>
      <td>${s.value}</td>
    </tr>
  `).join('');

  const featuresList = data.features.map(f => `
    <li><i class="fa-solid fa-circle-check" style="color:#008F4F; margin-right:8px;"></i> ${f}</li>
  `).join('');

  content.innerHTML = `
    <div style="margin-bottom:20px;">
      <span style="font-family:var(--font-mono); font-size:0.75rem; color:#008F4F; font-weight:700; text-transform:uppercase;">
        <i class="fa-solid fa-microchip"></i> OFFICIAL TECHNICAL SPECIFICATION
      </span>
      <h2 style="font-size:2rem; font-weight:800; color:#0c1411; margin-top:6px;">${data.title}</h2>
      <p style="color:#008F4F; font-weight:600; margin-top:4px;">${data.subtitle}</p>
    </div>

    <h4 style="margin-top:20px; font-weight:700;">Key Engineering Specifications</h4>
    <table class="modal-tech-specs-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Specification</th>
        </tr>
      </thead>
      <tbody>
        ${specsRows}
      </tbody>
    </table>

    <h4 style="margin-top:24px; font-weight:700;">Core Advantages</h4>
    <ul style="list-style:none; padding:0; margin:14px 0 24px; display:flex; flex-direction:column; gap:10px;">
      ${featuresList}
    </ul>

    <div style="display:flex; gap:14px; margin-top:28px;">
      <a href="#contact" class="btn btn-primary" onclick="closeProductModal(); preselectProduct('${data.title}')">
        <i class="fa-solid fa-file-invoice"></i> Request Quotation
      </a>
      <button class="btn btn-outline" onclick="closeProductModal()">Close Window</button>
    </div>
  `;

  modal.classList.add('active');
}

function closeProductModal(event) {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('active');
}

function preselectProduct(productName) {
  const select = document.getElementById('clientProduct');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(productName.toLowerCase()) ||
          productName.toLowerCase().includes(select.options[i].text.toLowerCase())) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

function handleEnquirySubmit(event) {
  event.preventDefault();
  const btn = document.getElementById('btnSubmitEnquiry');
  const alert = document.getElementById('formSuccessMessage');
  
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Processing Request...`;
  }

  setTimeout(() => {
    if (btn) btn.style.display = 'none';
    if (alert) alert.style.display = 'flex';
  }, 1000);
}
