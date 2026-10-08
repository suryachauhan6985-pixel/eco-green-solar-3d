import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  Calculator,
  Download,
  Building2,
  Factory,
  Home,
  Check,
  FileText,
  ChevronDown,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ProductHero } from '../components/common/ProductHero';
import { productsData } from '../data/products';

export const SolarRooftopPage: React.FC = () => {
  const solarProduct = productsData.find((p) => p.id === 'solar-rooftop') || productsData[0];

  // Quick Solar Calculator State
  const [billAmount, setBillAmount] = useState<number>(3500);

  // Recommended system size & savings calculation based on Gujarat GUVNL/PGVCL tariffs
  const recommendedKw = Math.max(1, Math.min(10, Math.round(billAmount / 1200)));
  const monthlyUnits = recommendedKw * 120; // 4 units/day/kW * 30 days
  const monthlySavings = Math.round(monthlyUnits * 7.5);
  const annualSavings = monthlySavings * 12;
  const centralSubsidy = recommendedKw === 1 ? 30000 : recommendedKw === 2 ? 60000 : 78000;

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#F8FAF8', minHeight: '100vh' }}>
      <SEO
        title="Solar Rooftop System | PM Surya Ghar Empanelled Vendor Gujarat"
        description="Empanelled vendor under PM Surya Ghar Muft Bijli Yojana in Rajkot, Gujarat. Get up to ₹78,000 direct bank subsidy, Tier-1 TOPCon bifacial panels, 25-year warranty, and seamless PGVCL net-metering."
      />

      {/* Dedicated Bespoke Product Hero */}
      <ProductHero product={solarProduct} />

      {/* PM Surya Ghar Central Government Subsidy Matrix */}
      <section style={{ padding: '4.5rem 5vw', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#008F4F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backgroundColor: '#E6F4EC',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid rgba(0, 143, 79, 0.2)',
              }}
            >
              CENTRAL GOVERNMENT INCENTIVE
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 850,
                color: '#0F172A',
                margin: '0.8rem 0 0.8rem',
                letterSpacing: '-0.02em',
              }}
            >
              PM Surya Ghar: Muft Bijli Yojana Subsidy
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Eco Green Solar is an officially empanelled vendor registered on the National Solar Portal and PGVCL/GUVNL. The central government transfers the subsidy directly into your bank account via Direct Benefit Transfer (DBT).
            </p>
          </div>

          {/* Subsidy Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.8rem',
            }}
          >
            {[
              {
                capacity: '1 kW System',
                subsidy: '₹30,000 DBT',
                generation: '120 Units / Month',
                space: '100 Sq. Ft.',
                ideal: '1 - 2 Rooms / Basic Appliances',
                badge: 'Entry Level',
              },
              {
                capacity: '2 kW System',
                subsidy: '₹60,000 DBT',
                generation: '240 Units / Month',
                space: '200 Sq. Ft.',
                ideal: '2 - 3 BHK House / 1 AC + Fridge',
                badge: 'Most Popular',
              },
              {
                capacity: '3 kW to 10 kW',
                subsidy: '₹78,000 Max DBT',
                generation: '360 - 1200 Units / Month',
                space: '300 - 1000 Sq. Ft.',
                ideal: 'Large Villas & Societies / Multiple ACs',
                badge: 'Maximum Subsidy',
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAF8',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  padding: '2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>{tier.capacity}</span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 750,
                        backgroundColor: '#E6F4EC',
                        color: '#008F4F',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(0, 143, 79, 0.2)',
                      }}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '1.8rem', fontWeight: 850, color: '#008F4F', marginBottom: '1.2rem' }}>
                    {tier.subsidy}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.4rem' }}>
                      <span style={{ color: '#64748B' }}>Avg Generation:</span>
                      <strong style={{ color: '#0F172A' }}>{tier.generation}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.4rem' }}>
                      <span style={{ color: '#64748B' }}>Terrace Area:</span>
                      <strong style={{ color: '#0F172A' }}>{tier.space}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.2rem' }}>
                      <span style={{ color: '#64748B' }}>Ideal Usage:</span>
                      <strong style={{ color: '#0F172A', textAlign: 'right' }}>{tier.ideal}</strong>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/917878444414?text=${encodeURIComponent(`Hello Eco Green Solar! I would like to get a quote and subsidy calculation for a ${tier.capacity} under PM Surya Ghar Yojana.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '1.5rem',
                    padding: '0.75rem 1rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                  }}
                >
                  Claim Subsidy Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Solar Savings & ROI Calculator */}
      <section style={{ padding: '4.5rem 5vw', backgroundColor: '#F8FAF8', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 35px rgba(0,0,0,0.05)',
              padding: '2.8rem 2.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#E6F4EC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#008F4F',
                }}
              >
                <Calculator size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Instant Solar Bill & Savings Calculator
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0 }}>
                  Estimate your recommended solar capacity and 25-year financial savings in Gujarat.
                </p>
              </div>
            </div>

            {/* Range Slider for Electricity Bill */}
            <div style={{ margin: '2rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0F172A' }}>
                  Your Average Monthly Power Bill:
                </label>
                <span style={{ fontSize: '1.5rem', fontWeight: 850, color: '#008F4F' }}>
                  ₹{billAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={billAmount}
                onChange={(e) => setBillAmount(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '6px',
                  accentColor: '#008F4F',
                  cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94A3B8', marginTop: '0.4rem' }}>
                <span>₹1,000 / mo</span>
                <span>₹10,000 / mo</span>
                <span>₹25,000 / mo</span>
              </div>
            </div>

            {/* Calculated Results Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                backgroundColor: '#F8FAF8',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                marginBottom: '2rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Recommended Plant</span>
                <div style={{ fontSize: '1.4rem', fontWeight: 850, color: '#0F172A', marginTop: '0.2rem' }}>
                  {recommendedKw} kW
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Govt DBT Subsidy</span>
                <div style={{ fontSize: '1.4rem', fontWeight: 850, color: '#008F4F', marginTop: '0.2rem' }}>
                  ₹{centralSubsidy.toLocaleString('en-IN')}
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Monthly Savings</span>
                <div style={{ fontSize: '1.4rem', fontWeight: 850, color: '#0F172A', marginTop: '0.2rem' }}>
                  ₹{monthlySavings.toLocaleString('en-IN')}
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>25-Year Net Savings</span>
                <div style={{ fontSize: '1.4rem', fontWeight: 850, color: '#008F4F', marginTop: '0.2rem' }}>
                  ₹{(annualSavings * 25).toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ fontSize: '0.84rem', color: '#64748B', margin: 0, maxWidth: '520px' }}>
                *Calculations based on average Gujarat DISCOM solar tariff rate of ₹7.50/unit. System payback typically achieved within 3 to 4 years.
              </p>

              <a
                href={`https://wa.me/917878444414?text=${encodeURIComponent(`Hello! My power bill is ₹${billAmount}/month. I would like to schedule a free site survey for a ${recommendedKw} kW solar rooftop plant.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.94rem', fontWeight: 700 }}
              >
                <span>Book Free Site Survey</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions By Property Type */}
      <section style={{ padding: '4.5rem 5vw', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#008F4F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              TAILORED SOLAR ENGINEERING
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 850, color: '#0F172A', margin: '0.4rem 0 0.8rem' }}>
              Solar PV Solutions for Every Property
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', margin: 0 }}>
              From residential bungalows in Rajkot to heavy 500 kW industrial sheds in GIDC Metoda and Shapar.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: <Home size={28} color="#008F4F" />,
                title: 'Residential Rooftops',
                subtitle: 'Villas, Bungalows & Housing Societies',
                points: [
                  'Up to ₹78,000 Direct Bank Transfer central subsidy',
                  'Zero electricity bills via PGVCL bi-directional net metering',
                  'Aerodynamic hot-dip galvanized mounting preserving terrace waterproofing',
                  'Smartphone app with live generation monitoring',
                ],
              },
              {
                icon: <Building2 size={28} color="#008F4F" />,
                title: 'Commercial & Institutions',
                subtitle: 'Hospitals, Schools, Hotels & Offices',
                points: [
                  'Cut expensive commercial power tariffs by up to 80%',
                  'Claim 40% Accelerated Depreciation tax benefits in Year 1',
                  'High-capacity string inverters with zero daytime downtime',
                  'Complete liaisoning for DISCOM approvals and high-tension (HT) connections',
                ],
              },
              {
                icon: <Factory size={28} color="#008F4F" />,
                title: 'Industrial & Ground Mounted',
                subtitle: 'Manufacturing Plants, Warehouses & Sheds',
                points: [
                  'Turnkey EPC from 50 kW to 5 MW+ utility-scale solar',
                  'Non-penetrative standing seam clamp structures for metal sheds',
                  'Power quality optimization and harmonic filter integration',
                  'Proven track record in 40+ MW Charanka Solar Park',
                ],
              },
            ].map((sol, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAF8',
                  borderRadius: '22px',
                  border: '1px solid #E2E8F0',
                  padding: '2.2rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {sol.icon}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.3rem' }}>
                    {sol.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: '#008F4F', fontWeight: 650, margin: '0 0 1.25rem' }}>
                    {sol.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {sol.points.map((pt, pIdx) => (
                      <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                        <Check size={16} color="#008F4F" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: '#475569', lineHeight: 1.5 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/917878444414?text=${encodeURIComponent(`Hello! I want to consult regarding ${sol.title} solar solutions.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginTop: '1.8rem',
                    fontSize: '0.9rem',
                    fontWeight: 750,
                    color: '#008F4F',
                    textDecoration: 'none',
                  }}
                >
                  <span>Request Feasibility Proposal</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Net-Metering Installation Process */}
      <section style={{ padding: '4.5rem 5vw', backgroundColor: '#F8FAF8', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#008F4F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              HOW IT WORKS
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 850, color: '#0F172A', margin: '0.4rem 0 0.8rem' }}>
              From Terrace Survey to Subsidy in 4 Steps
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', margin: 0 }}>
              Eco Green Solar manages 100% of the technical design, government portal approvals, and grid connection.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Free Site Feasibility Survey',
                desc: 'Our engineers conduct laser shadow analysis, assess terrace load capacity, and determine optimal azimuth tilt.',
              },
              {
                step: '02',
                title: 'Portal Registration & Approval',
                desc: 'We register your application on the National Solar Portal and submit technical documents to PGVCL/GUVNL for feasibility sanction.',
              },
              {
                step: '03',
                title: 'Turnkey EPC Installation',
                desc: 'Delivery of Tier-1 TOPCon panels, hot-dip galvanized wind structures, string inverter, ACDB/DCDB, and dual chemical earthing.',
              },
              {
                step: '04',
                title: 'Net-Meter & DBT Subsidy',
                desc: 'DISCOM inspects the plant, installs the bi-directional net-meter, and releases the central subsidy directly into your bank account.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  padding: '2rem 1.6rem',
                  position: 'relative',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#E6F4EC',
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                    fontFamily: 'var(--font-display, inherit)',
                  }}
                >
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ padding: '4.5rem 5vw', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#008F4F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              QUESTIONS & ANSWERS
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 850, color: '#0F172A', margin: '0.4rem 0 0.8rem' }}>
              Solar Rooftop FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {solarProduct.faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAF8',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '1.4rem 1.6rem',
                }}
              >
                <h4 style={{ fontSize: '1.05rem', fontWeight: 750, color: '#0F172A', margin: '0 0 0.5rem' }}>
                  {faq.question}
                </h4>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section
        style={{
          padding: '4.5rem 5vw',
          background: 'linear-gradient(135deg, #E6F4EC 0%, #DDF0E4 50%, #D4EBDC 100%)',
          borderBottom: '1px solid #C4E2CF',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 850, color: '#0F172A', margin: '0 0 0.8rem' }}>
            Ready to Generate Free Solar Electricity?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
            Schedule an on-terrace solar feasibility inspection by our factory engineers. We will analyze your monthly electricity bill and design the highest-yielding rooftop system.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar!%20I%20want%20to%20book%20a%20free%20terrace%20solar%20site%20survey."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.9rem 1.8rem', fontSize: '1rem', fontWeight: 700 }}
            >
              <span>Book Free Site Survey</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="tel:+917878444414"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 1.6rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '0.98rem',
                textDecoration: 'none',
              }}
            >
              <Phone size={17} color="#008F4F" />
              <span>+91 7878 4444 14</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarRooftopPage;
