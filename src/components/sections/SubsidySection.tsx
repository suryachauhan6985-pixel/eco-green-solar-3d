import React, { useState } from 'react';
import { TextReveal } from '../common/TextReveal.tsx';
import { CountUpNumber } from '../common/CountUpNumber.tsx';
import { content } from '../../content';

export const SubsidySection: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(5000);

  // Gujarat residential tariff & PM Surya Ghar calculation formulas
  const avgTariff = 6.5; // ₹6.50 per unit
  const monthlyUnits = Math.round(monthlyBill / avgTariff);
  
  // 1 kW generates approx 120-130 units per month in Saurashtra
  const recommendedKw = Math.max(1, Math.min(10, Math.round(monthlyUnits / 125)));
  
  // PM Surya Ghar subsidy slab rules
  let subsidyAmount = 78000;
  let subsidyLabel = '₹78,000 (Max)';
  if (recommendedKw === 1) {
    subsidyAmount = 30000;
    subsidyLabel = '₹30,000';
  } else if (recommendedKw === 2) {
    subsidyAmount = 60000;
    subsidyLabel = '₹60,000';
  }

  const annualSavings = Math.round(monthlyBill * 12 * 0.92);
  const lifetimeSavings = Math.round(annualSavings * 25 * 0.9);
  const estimatedPayback = (recommendedKw * 62000 - subsidyAmount) / Math.max(annualSavings, 1);
  const paybackYears = Math.max(2.4, Math.min(4.2, Number(estimatedPayback.toFixed(1))));

  const whatsappInquiryUrl = `https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar!%20My%20monthly%20power%20bill%20is%20%E2%82%B9${monthlyBill}.%20Recommended%20system:%20${recommendedKw}kW%20with%20${subsidyLabel}%20subsidy.%20Please%20share%20quotation.`;

  return (
    <section id="subsidy" className="site-section site-section-subtle">
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Why Choose Us Grid */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
            <span className="badge-green" style={{ marginBottom: '1rem' }}>
              ENGINEERING RELIABILITY
            </span>
            <h2 style={{ fontSize: 'var(--text-title)', lineHeight: 1.1, color: 'var(--text-primary)' }}>
              <TextReveal>Why Rajkot families trust Eco Green Solar.</TextReveal>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.8rem',
            }}
          >
            {[
              {
                title: '19 Years Regional Experience',
                desc: 'Specialized Saurashtra terrace design and high wind-load engineering deployed since 2007.',
                icon: '★',
              },
              {
                title: 'GIDC Metoda Factory',
                desc: 'In-house manufacturing of solar water heaters and mounting structures right here in Rajkot.',
                icon: '⚙',
              },
              {
                title: 'Empanelled PM Surya Ghar Partner',
                desc: 'Direct registration on the National Solar Portal ensuring 100% smooth DBT subsidy credits.',
                icon: '✓',
              },
              {
                title: '24-Hour Service Guarantee',
                desc: 'Prompt technician visit and local parts availability across Saurashtra for continuous uptime.',
                icon: '⚡',
              },
            ].map((item, idx) => (
              <div key={idx} className="pro-card" style={{ padding: '2.5rem 2rem', backgroundColor: '#FFFFFF' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--brand-green-light)',
                    color: 'var(--brand-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    marginBottom: '1.4rem',
                    fontWeight: 700,
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PM Surya Ghar Subsidy Banner & Process Steps */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-card)',
            padding: '3.5rem 3vw',
            marginBottom: '6rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '3rem',
            }}
          >
            <div style={{ gridColumn: 'span 7' }} className="col-span-12 md:col-span-7">
              <span className="badge-amber" style={{ marginBottom: '1rem' }}>
                CENTRAL GOVERNMENT SCHEME
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 2.3vw, 2.15rem)',
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                }}
              >
                {content.subsidy.headline}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {content.subsidy.subheadline}
              </p>
            </div>

            <div style={{ gridColumn: 'span 5' }} className="col-span-12 md:col-span-5">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '1rem',
                }}
              >
                {content.subsidy.slabs.map((slab, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      padding: '1.4rem 1rem',
                      backgroundColor: 'var(--brand-green-light)',
                      border: '1px solid var(--brand-green-tint)',
                      borderRadius: '16px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                      {slab.kw} Capacity
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-green)', fontFamily: 'var(--font-display)' }}>
                      {slab.subsidy}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--brand-green-dark)', fontWeight: 600, marginTop: '0.2rem' }}>
                      Direct Bank Transfer
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Frictionless Steps */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {content.subsidy.steps.map((st) => (
              <div
                key={st.step}
                style={{
                  padding: '1.8rem',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-green)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
                  {st.step}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {st.title}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Solar Savings Calculator with Incremental Numbers */}
        <div
          className="pro-card"
          style={{
            padding: '3.5rem 3vw',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <span className="badge-green" style={{ marginBottom: '1rem' }}>
              SAVINGS SIMULATOR
            </span>
            <h2 style={{ fontSize: 'clamp(1.45rem, 2.1vw, 1.95rem)', lineHeight: 1.18, marginBottom: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {content.subsidy.calculator.headline}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {content.subsidy.calculator.subheadline}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Interactive Slider Control */}
            <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                    Monthly Electricity Bill
                  </span>
                  <span style={{ fontSize: '2.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--brand-green)' }}>
                    ₹<CountUpNumber end={monthlyBill} duration={400} />
                  </span>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    outline: 'none',
                    accentColor: 'var(--brand-green)',
                    cursor: 'pointer',
                  }}
                  data-cursor="Drag"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 500 }}>
                  <span>₹1,000 / mo</span>
                  <span>₹12,500</span>
                  <span>₹25,000+ / mo</span>
                </div>
              </div>

              <div
                style={{
                  padding: '1.5rem 1.8rem',
                  backgroundColor: 'var(--brand-green-light)',
                  borderRadius: '16px',
                  border: '1px solid var(--brand-green-tint)',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--brand-green-dark)', fontWeight: 600 }}>
                  Recommended Rooftop Capacity:
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-green)', fontFamily: 'var(--font-display)', marginTop: '0.2rem' }}>
                  <CountUpNumber end={recommendedKw} suffix=" kW Solar Array" duration={500} />
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                  Generates ~{monthlyUnits} units/month • Requires ~{recommendedKw * 90} sq. ft. shadow-free terrace
                </div>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%' }}
                data-cursor="WhatsApp"
              >
                <span>Get Exact Technical Quote on WhatsApp</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>

            {/* Right: Real-Time Growing Incremental Numbers Grid */}
            <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.2rem',
                }}
              >
                <div
                  style={{
                    padding: '1.8rem',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: '18px',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Government Subsidy
                  </span>
                  <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--brand-green)', fontFamily: 'var(--font-display)', marginTop: '0.4rem' }}>
                    <CountUpNumber end={subsidyAmount} prefix="₹" duration={600} />
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                    Direct DBT to bank account
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.8rem',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: '18px',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Annual Savings
                  </span>
                  <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--sun-warm)', fontFamily: 'var(--font-display)', marginTop: '0.4rem' }}>
                    <CountUpNumber end={annualSavings} prefix="₹" duration={600} />
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                    Every single year
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.8rem',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: '18px',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    25-Year Returns
                  </span>
                  <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginTop: '0.4rem' }}>
                    <CountUpNumber end={lifetimeSavings} prefix="₹" duration={600} />
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                    Lifetime tariff inflation hedge
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.8rem',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: '18px',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Estimated Payback
                  </span>
                  <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--brand-green)', fontFamily: 'var(--font-display)', marginTop: '0.4rem' }}>
                    {paybackYears} Years
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                    Free electricity after payback
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.2rem', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                {content.subsidy.calculator.disclaimer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidySection;
