import React, { useState } from 'react';
import { Award, Factory, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
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
                Icon: Award,
              },
              {
                title: 'GIDC Metoda Factory',
                desc: 'In-house manufacturing of solar water heaters and mounting structures right here in Rajkot.',
                Icon: Factory,
              },
              {
                title: 'Empanelled PM Surya Ghar Partner',
                desc: 'Direct registration on the National Solar Portal ensuring 100% smooth DBT subsidy credits.',
                Icon: ShieldCheck,
              },
              {
                title: '24-Hour Service Guarantee',
                desc: 'Prompt technician visit and local parts availability across Saurashtra for continuous uptime.',
                Icon: Clock,
              },
            ].map((item, idx) => {
              const CardIcon = item.Icon;
              return (
                <div
                  key={idx}
                  className="pro-card"
                  style={{
                    padding: '2.5rem 2rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 143, 79, 0.12)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = '#008F4F';
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 143, 79, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(0, 143, 79, 0.12)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#E6F4EC',
                      color: '#008F4F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.4rem',
                      flexShrink: 0,
                    }}
                  >
                    <CardIcon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-primary)', fontWeight: 750 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PM Surya Ghar Subsidy Banner & Process Steps */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '6rem',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.03)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '2.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <div>
              <span className="badge-green" style={{ marginBottom: '0.8rem' }}>
                DIRECT BANK TRANSFER (DBT)
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: 'var(--text-primary)', fontWeight: 800 }}>
                PM Surya Ghar: Muft Bijli Yojana
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginTop: '0.4rem', maxWidth: '650px' }}>
                Eco Green Solar is officially registered and empanelled on the National Solar Portal. We handle complete documentation, DISCOM net-meter approvals, and subsidy disbursal.
              </p>
            </div>
            <div
              style={{
                backgroundColor: 'var(--brand-green-light)',
                borderRadius: '16px',
                padding: '1.2rem 1.6rem',
                textAlign: 'center',
                border: '1px solid rgba(0, 143, 79, 0.2)',
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-green)', textTransform: 'uppercase' }}>
                Maximum Central Subsidy
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 850, color: 'var(--brand-green-dark)', lineHeight: 1.1, marginTop: '0.2rem' }}>
                ₹78,000
              </div>
              <div style={{ fontSize: '0.74rem', color: '#4B6354', marginTop: '0.2rem' }}>
                Direct into beneficiary bank account
              </div>
            </div>
          </div>

          {/* 4-Step Subsidy Process */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Site Survey & Feasibility',
                desc: 'Our engineers conduct shadow analysis on your terrace to compute optimal kW capacity.',
              },
              {
                step: '02',
                title: 'Portal Registration',
                desc: 'We register your application on the National Solar Portal and submit DISCOM technical drawings.',
              },
              {
                step: '03',
                title: 'Precision Turnkey EPC',
                desc: 'Installation of high-efficiency N-type solar modules with certified galvanized mounting structure.',
              },
              {
                step: '04',
                title: 'Net-Meter & Subsidy Credit',
                desc: 'DISCOM inspects meter, commissions bi-directional unit, and ₹78,000 DBT is credited to your bank.',
              },
            ].map((st, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.6rem',
                  borderRadius: '16px',
                  backgroundColor: '#F8FAF8',
                  border: '1px solid rgba(0, 143, 79, 0.1)',
                }}
              >
                <div
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 850,
                    color: 'var(--brand-green)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {st.step}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Savings Calculator */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.03)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge-green" style={{ marginBottom: '0.8rem' }}>
              SOLAR ROI CALCULATOR
            </span>
            <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: 'var(--text-primary)', fontWeight: 800 }}>
              Interactive Solar Savings Calculator
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginTop: '0.5rem' }}>
              Slide your average monthly PGVCL/UGVCL/DGVCL electricity bill to see your government subsidy, recommended plant size, and lifetime financial savings.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Input Slider Box */}
            <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
              <div
                style={{
                  backgroundColor: '#F8FAF8',
                  padding: '2.5rem 2rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-light)',
                }}
              >
                <label
                  htmlFor="monthly-bill-input"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.2rem',
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Your Monthly Electricity Bill
                  </span>
                  <span
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 850,
                      color: 'var(--brand-green)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </label>

                {/* Slider Component */}
                <input
                  id="monthly-bill-input"
                  type="range"
                  min="1500"
                  max="25000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: 'var(--brand-green)',
                    cursor: 'pointer',
                    marginBottom: '1.2rem',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                  }}
                >
                  <span>₹1,500/mo</span>
                  <span>₹10,000/mo</span>
                  <span>₹25,000/mo</span>
                </div>

                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Recommended Solar Plant</div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {recommendedKw} kW Rooftop System
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Monthly Generation</div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-green)' }}>
                      ~{recommendedKw * 125} Units
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Calculations & Subsidy Results */}
            <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.2rem',
                  marginBottom: '1.8rem',
                }}
              >
                <div
                  style={{
                    padding: '1.6rem',
                    borderRadius: '16px',
                    backgroundColor: 'var(--brand-green-light)',
                    border: '1px solid rgba(0, 143, 79, 0.2)',
                  }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: 650, color: 'var(--brand-green-dark)' }}>
                    Applicable PM Subsidy
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 850, color: 'var(--brand-green-dark)', marginTop: '0.3rem' }}>
                    {subsidyLabel}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#4B6354', marginTop: '0.2rem' }}>Direct Bank Transfer</div>
                </div>

                <div
                  style={{
                    padding: '1.6rem',
                    borderRadius: '16px',
                    backgroundColor: '#F8FAF8',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: 650, color: 'var(--text-secondary)' }}>
                    Annual Bill Reduction
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 850, color: 'var(--text-primary)', marginTop: '0.3rem' }}>
                    ₹{annualSavings.toLocaleString('en-IN')}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>92% Electricity Offset</div>
                </div>

                <div
                  style={{
                    padding: '1.6rem',
                    borderRadius: '16px',
                    backgroundColor: '#F8FAF8',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: 650, color: 'var(--text-secondary)' }}>
                    25-Year Lifetime Savings
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 850, color: 'var(--brand-green)', marginTop: '0.3rem' }}>
                    ₹{(lifetimeSavings / 100000).toFixed(1)} Lakhs
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Inflation-proof power</div>
                </div>

                <div
                  style={{
                    padding: '1.6rem',
                    borderRadius: '16px',
                    backgroundColor: '#F8FAF8',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: 650, color: 'var(--text-secondary)' }}>
                    Estimated Payback Period
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 850, color: 'var(--text-primary)', marginTop: '0.3rem' }}>
                    {paybackYears} Years
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Free power afterwards</div>
                </div>
              </div>

              {/* Instant WhatsApp Calculation CTA */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '1rem',
                  fontSize: '1rem',
                }}
                data-cursor="WhatsApp"
              >
                <span>Claim ₹{subsidyAmount.toLocaleString('en-IN')} Subsidy on WhatsApp</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidySection;
