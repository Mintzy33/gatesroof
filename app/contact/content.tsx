"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
declare global { interface Window { fbq: (...args: unknown[]) => void } }
const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
export default function ContactContent() {
  const [form, setForm] = useState({name:"",email:"",phone:"",address:"",service:"",message:""});
  const [sent, setSent] = useState(false);
  const inp = { width:"100%",padding:"16px 20px",borderRadius:12,border:"1.5px solid rgba(13,33,55,0.1)",background:WHITE,fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:15,color:TEXT,outline:"none",boxSizing:"border-box" as const };
  return (
    <div style={{background:WHITE}}>
      <Header />
      <section style={{padding:"160px 24px 80px",background:`linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`,textAlign:"center" as const}}>
        <span style={{fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:12,fontWeight:700,color:ACCENT,letterSpacing:"0.2em"}}>CONTACT US</span>
        <h1 style={{fontFamily:"var(--font-playfair), 'Playfair Display', Georgia, serif",fontSize:"clamp(36px, 5vw, 56px)",fontWeight:800,color:WHITE,margin:"14px 0 20px"}}>Get Your Free Inspection</h1>
        <p style={{fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:18,color:"rgba(255,255,255,0.7)",maxWidth:550,margin:"0 auto",lineHeight:1.75}}>Fill out the form below and we&apos;ll get back to you within 24 hours. Or call us directly.</p>
      </section>
      <section style={{padding:"80px 24px",background:WHITE}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:80}}>
          <div>
            {sent ? (
              <div style={{background:LIGHT_BG,borderRadius:24,padding:60,textAlign:"center" as const,border:"1px solid rgba(59,125,216,0.1)"}}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <h3 style={{fontFamily:"var(--font-playfair), 'Playfair Display', Georgia, serif",fontSize:28,fontWeight:800,color:NAVY,margin:"20px 0 12px"}}>Thank You!</h3>
                <p style={{fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:16,color:TEXT_LIGHT,lineHeight:1.7}}>We&apos;ve received your request. A Gates team member will contact you within 24 hours.</p>
              </div>
            ) : (
              <div>
                <h2 style={{fontFamily:"var(--font-playfair), 'Playfair Display', Georgia, serif",fontSize:28,fontWeight:800,color:NAVY,marginBottom:8}}>Request a Free Estimate</h2>
                <p style={{fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:15,color:TEXT_LIGHT,marginBottom:36}}>No obligation. No pressure. Just an honest assessment.</p>
                <div style={{display:"flex",flexDirection:"column" as const,gap:20}}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                    <input placeholder="Full Name *" style={inp} value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                    <input placeholder="Phone Number *" style={inp} value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
                  </div>
                  <input placeholder="Email Address *" style={inp} value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                  <input placeholder="Property Address" style={inp} value={form.address} onChange={e=>setForm({...form,address:e.target.value})}/>
                  <select style={{...inp,color:form.service?TEXT:TEXT_LIGHT}} value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                    <option value="">What do you need help with?</option>
                    <option value="roof-replacement">Roof Replacement</option>
                    <option value="storm-damage">Storm / Hail Damage</option>
                    <option value="roof-repair">Roof Repair</option>
                    <option value="siding">Siding</option>
                    <option value="gutters">Gutters</option>
                    <option value="insurance">Insurance Claim</option>
                    <option value="inspection">Free Inspection</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea placeholder="Anything else we should know?" rows={4} style={{...inp,resize:"vertical" as const}} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
                  <button onClick={()=>{if(window.fbq)window.fbq('track','Lead',{content_name:form.service||'general',content_category:'contact_form'});setSent(true)}} style={{background:ACCENT,color:WHITE,border:"none",borderRadius:100,padding:"18px 40px",cursor:"pointer",fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:16,fontWeight:600,boxShadow:"0 8px 30px rgba(59,125,216,0.25)",alignSelf:"flex-start" as const}}>Submit Request →</button>
                </div>
              </div>
            )}
          </div>
          <div>
            <div style={{background:LIGHT_BG,borderRadius:24,padding:"40px 36px",marginBottom:24,border:"1px solid rgba(13,33,55,0.04)"}}>
              <h3 style={{fontFamily:"var(--font-playfair), 'Playfair Display', Georgia, serif",fontSize:20,fontWeight:700,color:NAVY,marginBottom:24}}>Contact Info</h3>
              {[{l:"PHONE",v:"(720) 766-3377",h:"tel:7207663377"},{l:"EMAIL",v:"info@gatesroof.com",h:"mailto:info@gatesroof.com"},{l:"ADDRESS",v:"1445 Holland St, Lakewood, CO 80215",h:"https://maps.google.com/?q=1445+Holland+St+Lakewood+CO"}].map((c,i)=>(
                <div key={i} style={{marginBottom:20}}>
                  <div style={{fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:12,fontWeight:700,color:ACCENT,letterSpacing:"0.1em",marginBottom:4}}>{c.l}</div>
                  <a href={c.h} onClick={()=>{if(c.h.startsWith("tel:")&&window.fbq)window.fbq('track','Contact',{content_name:'phone_call'})}} style={{fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:16,color:TEXT,textDecoration:"none",fontWeight:500}}>{c.v}</a>
                </div>
              ))}
            </div>
            <div style={{background:LIGHT_BG,borderRadius:24,padding:"40px 36px",marginBottom:24,border:"1px solid rgba(13,33,55,0.04)"}}>
              <h3 style={{fontFamily:"var(--font-playfair), 'Playfair Display', Georgia, serif",fontSize:20,fontWeight:700,color:NAVY,marginBottom:16}}>Business Hours</h3>
              <div style={{fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:15,color:TEXT_LIGHT,lineHeight:2}}>Monday - Friday: 7:00 AM - 6:00 PM<br/>Saturday: 8:00 AM - 2:00 PM<br/>Sunday: Closed<br/><span style={{color:ACCENT,fontWeight:600}}>24/7 Emergency Service Available</span></div>
            </div>
            <div style={{background:NAVY,borderRadius:24,padding:"40px 36px"}}>
              <h3 style={{fontFamily:"var(--font-playfair), 'Playfair Display', Georgia, serif",fontSize:20,fontWeight:700,color:WHITE,marginBottom:12}}>Prefer to Call?</h3>
              <p style={{fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:15,color:"rgba(255,255,255,0.7)",lineHeight:1.7,marginBottom:24}}>Talk to a real person, not a call center.</p>
              <a href="tel:7207663377" onClick={()=>{if(window.fbq)window.fbq('track','Contact',{content_name:'phone_call'})}} style={{display:"inline-block",background:ACCENT,color:WHITE,borderRadius:100,padding:"16px 32px",textDecoration:"none",fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif",fontSize:16,fontWeight:600}}>Call (720) 766-3377</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
