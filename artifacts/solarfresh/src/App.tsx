import { useState, type ReactNode } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BatteryCharging,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  CloudSun,
  Factory,
  IndianRupee,
  LineChart,
  Menu,
  MonitorCog,
  MoveRight,
  PackageCheck,
  PhoneCall,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sprout,
  SunMedium,
  Thermometer,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';

type IconType = typeof SunMedium;

const navItems = [
  { label: 'The gap', href: '#gap' },
  { label: 'The room', href: '#solution' },
  { label: 'The model', href: '#model' },
  { label: 'The numbers', href: '#economics' },
  { label: 'The path', href: '#path' },
];

const solutionCards: { icon: IconType; title: string; copy: string; tone: string }[] = [
  { icon: SunMedium, title: 'Solar-first power', copy: 'Solar panels and battery storage keep the room useful beyond the grid — and keep running costs predictable.', tone: 'bg-[#e9f0d5] text-[#31533d]' },
  { icon: Thermometer, title: 'Temperature control', copy: 'A dependable cold environment slows spoilage, protects quality, and buys the farmer time to sell well.', tone: 'bg-[#f8e3c7] text-[#834a19]' },
  { icon: Smartphone, title: 'Book without friction', copy: 'Simple booking and digital payment make village-level storage as easy to access as a local mandi service.', tone: 'bg-[#e8e1d6] text-[#4f493f]' },
  { icon: MonitorCog, title: 'Monitored, 24×7', copy: 'Remote monitoring gives operators visibility and customers confidence, day or night.', tone: 'bg-[#dce9e8] text-[#235b59]' },
];

const revenueStreams = [
  { title: 'Pay-as-you-store', kicker: 'Flexible access', copy: 'Farmers rent space around their harvest cycle, paying only for the time and capacity they use.', value: 'Core revenue' },
  { title: 'Season memberships', kicker: 'Predictable demand', copy: 'Repeat users get a simpler booking rhythm while SolarFresh gets steadier utilization across the year.', value: 'Recurring' },
  { title: 'Care + contracts', kicker: 'Institutional trust', copy: 'Maintenance plans and government / FPO contracts extend the model beyond individual rentals.', value: 'B2B / public' },
];

const investmentLines = [
  { label: 'Cold room + insulation', amount: '₹4,50,000', percent: 45, detail: 'The core room, insulated panels, doors, racking, and cooling equipment.' },
  { label: 'Solar + battery system', amount: '₹2,50,000', percent: 25, detail: 'Solar generation and stored power to make village-level operation resilient.' },
  { label: 'Site + installation', amount: '₹1,50,000', percent: 15, detail: 'Site preparation, electrical work, commissioning, and first setup.' },
  { label: 'Technology + launch', amount: '₹1,00,000', percent: 10, detail: 'Booking, digital payment, monitoring, and early customer activation.' },
  { label: 'Working capital reserve', amount: '₹50,000', percent: 5, detail: 'A small operating buffer for the first weeks of a new village unit.' },
];

const risks = [
  { title: 'Seasonal demand', response: 'Balance tomato and vegetable peaks with memberships, FPO contracts, and multiple crop categories.' },
  { title: 'Power reliability', response: 'Solar plus batteries reduce grid dependence; monitoring surfaces issues before they become losses.' },
  { title: 'Trust and adoption', response: 'Stay local: transparent pricing, a village operator, simple booking, and visible 24×7 availability.' },
];

function SectionLabel({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? 'text-[#e9b459]' : 'text-[#b56b27]'}`}>
      <span className={`font-mono ${light ? 'text-[#e9b459]' : 'text-[#b56b27]'}`}>{number}</span>
      <span className={`h-px w-8 ${light ? 'bg-[#e9b459]/50' : 'bg-[#b56b27]/45'}`} />
      <span>{children}</span>
    </div>
  );
}

function Metric({ value, label, detail, dark = false }: { value: string; label: string; detail?: string; dark?: boolean }) {
  return (
    <div className={`border-l pl-5 ${dark ? 'border-[#e9b459]/30' : 'border-[#b6bca3]'}`}>
      <div className={`font-display text-3xl tracking-tight ${dark ? 'text-[#f5e6c7]' : 'text-[#214d3d]'}`}>{value}</div>
      <div className={`mt-1 text-xs font-semibold uppercase tracking-[0.12em] ${dark ? 'text-[#e9b459]' : 'text-[#b56b27]'}`}>{label}</div>
      {detail && <div className={`mt-2 max-w-[155px] text-xs leading-relaxed ${dark ? 'text-[#b3c5ae]' : 'text-[#607064]'}`}>{detail}</div>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [revenueTab, setRevenueTab] = useState(0);
  const [selectedInvestment, setSelectedInvestment] = useState(0);
  const [compareMode, setCompareMode] = useState<'today' | 'solar'>('today');

  const goTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="grain overflow-hidden bg-[#f6f1e7] text-[#173c31]">
      <header className="absolute left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 lg:px-10">
          <button data-testid="button-brand-home" onClick={() => goTo('#top')} className="group flex items-center gap-3 text-left">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#e9a643] text-[#173c31]">
              <SunMedium size={22} strokeWidth={2.1} />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#f6f1e7] bg-[#3f7952]" />
            </span>
            <span>
              <span className="block font-display text-[19px] leading-none tracking-tight text-[#f7e8c8]">SolarFresh</span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.19em] text-[#afc6ae]">Cold storage solutions</span>
            </span>
          </button>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button key={item.href} data-testid={`link-nav-${item.label.replaceAll(' ', '-')}`} onClick={() => goTo(item.href)} className="text-[12px] font-semibold text-[#d7e0d0] transition-colors hover:text-[#e9b459]">{item.label}</button>
            ))}
            <a data-testid="link-contact-nav" href="mailto:hello@solarfresh.in" className="rounded-full border border-[#e9b459]/60 px-4 py-2 text-[12px] font-semibold text-[#f5e6c7] transition-colors hover:bg-[#e9b459] hover:text-[#173c31]">Start a conversation</a>
          </nav>
          <button data-testid="button-mobile-menu" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-[#b7c4af]/40 p-2.5 text-[#f5e6c7] lg:hidden">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {menuOpen && (
          <div className="mx-4 rounded-2xl border border-[#b7c4af]/25 bg-[#173c31] p-3 shadow-xl lg:hidden">
            {navItems.map((item) => <button key={item.href} data-testid={`link-mobile-${item.label.replaceAll(' ', '-')}`} onClick={() => goTo(item.href)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-[#e8eadc] hover:bg-[#295542]">{item.label}</button>)}
            <a data-testid="link-mobile-contact" href="mailto:hello@solarfresh.in" className="mt-1 block rounded-xl px-4 py-3 text-sm font-semibold text-[#e9b459]">Start a conversation</a>
          </div>
        )}
      </header>

      <section id="top" className="relative min-h-[730px] overflow-hidden bg-[#173c31]">
        <div className="absolute -right-16 top-20 h-[420px] w-[420px] rounded-full bg-[#d99034]/20 blur-3xl" />
        <div className="absolute bottom-[-170px] left-[-100px] h-[460px] w-[620px] rounded-[50%] border border-[#739478]/20" />
        <div className="absolute bottom-[-240px] left-[28%] h-[500px] w-[620px] rounded-[50%] border border-[#739478]/20" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 pb-16 pt-36 lg:min-h-[730px] lg:grid-cols-[1.03fr_.97fr] lg:px-10 lg:pb-10 lg:pt-32">
          <div className="reveal max-w-[700px]">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e9b459]">
              <span className="h-2 w-2 rounded-full bg-[#e9b459]" />
              <span>Village-level infrastructure for better harvests</span>
            </div>
            <h1 data-testid="text-hero-headline" className="font-display text-[clamp(3.9rem,8vw,7.8rem)] leading-[.88] tracking-[-0.065em] text-[#f5e6c7]">
              Keep the<br /><span className="text-[#e9b459]">harvest.</span>
            </h1>
            <p className="mt-8 max-w-[520px] text-[17px] leading-7 text-[#c4d1c3]">Affordable solar-powered cold rooms that give small and marginal farmers a little more time — and a much better price.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button data-testid="button-see-model" onClick={() => goTo('#model')} className="group flex items-center gap-3 rounded-full bg-[#e9a643] px-5 py-3 text-sm font-bold text-[#173c31] transition-transform hover:-translate-y-0.5">See the model <ArrowDownRight size={17} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" /></button>
              <button data-testid="button-read-story" onClick={() => goTo('#gap')} className="rounded-full px-4 py-3 text-sm font-semibold text-[#d7e0d0] transition-colors hover:text-[#e9b459]">Why this matters <MoveRight size={15} className="ml-1 inline" /></button>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[480px]">
            <div className="float absolute right-[4%] top-[6%] z-10 w-[84px] rounded-[4px] border border-[#efd19b]/40 bg-[#d99034] p-3 text-[#173c31] shadow-lg shadow-[#0b251d]/30">
              <SunMedium size={19} />
              <div className="mt-6 text-[9px] font-semibold uppercase tracking-widest">solar<br />powered</div>
            </div>
            <div className="absolute left-[8%] top-[15%] h-[245px] w-[82%] rotate-[-3deg] border-2 border-[#d8aa68]/60 bg-[#315f47] shadow-[16px_18px_0_#102f26] lg:left-[11%] lg:top-[18%] lg:h-[310px]">
              <div className="absolute inset-[16px] border border-[#b9d0b5]/50 bg-[#e6eadb]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,rgba(49,95,71,.08)_50%,transparent_51%)] bg-[length:14px_14px]" />
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#315f47]" />
                <div className="absolute left-[17%] top-[22%] h-[46%] w-[30%] border-2 border-[#315f47] bg-[#d3dccb]">
                  <div className="absolute inset-x-2 top-2 h-1 bg-[#315f47]/45" />
                  <div className="absolute inset-x-2 top-6 h-1 bg-[#315f47]/45" />
                  <div className="absolute inset-x-2 top-10 h-1 bg-[#315f47]/45" />
                  <div className="absolute bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#e9a643]" />
                </div>
                <div className="absolute right-[12%] top-[22%] w-[30%]">
                  <div className="flex items-end gap-1.5"><span className="h-10 w-7 rounded-t-full bg-[#c86737]" /><span className="h-14 w-9 rounded-t-full bg-[#e9a643]" /><span className="h-12 w-8 rounded-t-full bg-[#729b4f]" /></div>
                  <div className="mt-[-3px] h-3 rounded-full bg-[#315f47]" />
                  <div className="mt-2 h-1.5 w-full rounded-full bg-[#315f47]/30" />
                  <div className="mt-2 h-1.5 w-[70%] rounded-full bg-[#315f47]/30" />
                </div>
                <div className="absolute bottom-[18%] left-[15%] text-[10px] font-bold uppercase tracking-[.22em] text-[#315f47]">SolarFresh</div>
              </div>
            </div>
            <div className="absolute bottom-[2%] left-[5%] h-[82px] w-[90%] overflow-hidden lg:bottom-[5%]">
              <div className="absolute bottom-[-40px] left-[-5%] h-[100px] w-[120%] rotate-[-5deg] rounded-[50%] bg-[#638f4d]" />
              <div className="absolute bottom-[-57px] left-[12%] h-[100px] w-[110%] rotate-[7deg] rounded-[50%] bg-[#466f45]" />
            </div>
            <div className="absolute bottom-[10%] right-[3%] z-10 rounded-lg border border-[#e8dec8]/25 bg-[#27513f]/95 px-3 py-2 text-[#e9e6d7] shadow-lg">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider"><span className="h-2 w-2 rounded-full bg-[#a3c85d]" /> room online</div>
              <div className="mt-1 font-mono text-sm">4.2°C <span className="text-[#a3c85d]">stable</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#aac0a7]/20">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 px-5 py-6 sm:grid-cols-4 lg:px-10">
            <Metric dark value="20–30%" label="post-harvest loss" />
            <Metric dark value="₹8 → ₹18" label="tomato / kg" />
            <Metric dark value="15–18 mo" label="break-even" />
            <Metric dark value="24×7" label="availability" />
          </div>
        </div>
      </section>

      <section id="gap" className="bg-[#f6f1e7] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <SectionLabel number="01">The gap</SectionLabel>
            <h2 className="font-display text-5xl leading-[.97] tracking-[-.045em] text-[#214d3d] sm:text-6xl">A good harvest should not become a bad bargain.</h2>
            <p className="mt-7 max-w-[390px] text-[15px] leading-7 text-[#607064]">Across India, 20–30% of produce can be lost after harvest. For small farmers, selling immediately is often not a choice — it is the only choice.</p>
            <div className="mt-9 flex items-start gap-3 border-t border-[#c9c8b6] pt-5">
              <Sprout className="mt-0.5 shrink-0 text-[#b56b27]" size={19} />
              <p className="text-sm leading-6 text-[#405c4c]">The missing layer is not more production. It is affordable time between picking and selling.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-5 h-24 w-24 rounded-full bg-[#e9a643]/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2px] border border-[#c8c5b4] bg-[#e9e2d3] p-6 sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[.2em] text-[#9e6b39]">A simple case study</span>
                  <h3 className="mt-3 font-display text-3xl tracking-tight text-[#214d3d]">One week can change the math.</h3>
                </div>
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d46d38] text-[#f8e7cd] sm:flex"><TrendingUp size={22} /></div>
              </div>
              <div className="mt-10 grid items-end gap-5 sm:grid-cols-[1fr_auto_1fr]">
                <div>
                  <div className="font-mono text-4xl tracking-tight text-[#8f4c2b]">₹8<span className="text-lg">/kg</span></div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[.14em] text-[#7d7264]">today, at harvest</div>
                  <div className="mt-4 h-2 rounded-full bg-[#d5c6b2]"><div className="h-full w-[36%] rounded-full bg-[#c86737]" /></div>
                </div>
                <ArrowUpRight className="hidden text-[#b56b27] sm:block" size={25} />
                <div>
                  <div className="font-mono text-4xl tracking-tight text-[#315f47]">₹18<span className="text-lg">/kg</span></div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[.14em] text-[#7d7264]">after one week stored</div>
                  <div className="mt-4 h-2 rounded-full bg-[#c7d0b5]"><div className="h-full w-[81%] rounded-full bg-[#729b4f]" /></div>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-2 border-t border-[#c6bba6] pt-4 text-xs leading-5 text-[#667263]"><Clock3 size={14} className="shrink-0 text-[#b56b27]" /> Storage turns urgency into a decision — without asking the farmer to gamble on quality.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="bg-[#e6eadb] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
            <div>
              <SectionLabel number="02">The room</SectionLabel>
              <h2 className="font-display text-5xl leading-[.97] tracking-[-.045em] text-[#214d3d] sm:text-6xl">A practical room, built around the village.</h2>
            </div>
            <div className="flex items-end">
              <p className="max-w-[530px] text-[15px] leading-7 text-[#526957]">SolarFresh is a village-level solar cold room with batteries, temperature control, booking, digital payment, and monitoring — available when the harvest needs it, day or night.</p>
            </div>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map(({ icon: Icon, title, copy, tone }, index) => (
              <div data-testid={`card-solution-${index}`} key={title} className="group min-h-[250px] rounded-[2px] border border-[#bdc6af] bg-[#eff1e7] p-6 transition-all hover:-translate-y-1 hover:border-[#9cad91] hover:shadow-[8px_8px_0_#c4ceb7]">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone} transition-transform group-hover:rotate-[-6deg]`}><Icon size={22} /></div>
                <h3 className="mt-9 font-display text-2xl tracking-tight text-[#214d3d]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#637463]">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid overflow-hidden rounded-[2px] border border-[#315f47] bg-[#214d3d] text-[#e7eadc] lg:grid-cols-[1fr_1.35fr]">
            <div className="border-b border-[#66846d] p-7 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.17em] text-[#e9b459]"><Zap size={15} /> Why solar belongs here</div>
              <p className="mt-6 font-display text-3xl leading-tight text-[#f5e6c7]">Lower dependence on the grid. More confidence for the crop.</p>
            </div>
            <div className="grid gap-7 p-7 sm:grid-cols-3 lg:p-10">
              <div><div className="font-mono text-2xl text-[#e9b459]">01</div><p className="mt-3 text-sm leading-6 text-[#c1d0c2]">Generate power where produce is grown.</p></div>
              <div><div className="font-mono text-2xl text-[#e9b459]">02</div><p className="mt-3 text-sm leading-6 text-[#c1d0c2]">Store energy for reliable operation.</p></div>
              <div><div className="font-mono text-2xl text-[#e9b459]">03</div><p className="mt-3 text-sm leading-6 text-[#c1d0c2]">Monitor temperature before quality moves.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="bg-[#f6f1e7] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <SectionLabel number="03">The opportunity</SectionLabel>
              <h2 className="font-display text-5xl leading-[.97] tracking-[-.045em] text-[#214d3d] sm:text-6xl">The market gap is close, visible, and worth solving.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="border-t-2 border-[#d46d38] pt-5"><Factory className="text-[#b56b27]" size={22} /><h3 className="mt-5 font-display text-2xl text-[#214d3d]">Small & marginal farmers</h3><p className="mt-2 text-sm leading-6 text-[#657364]">The first customer: someone with good produce, little negotiating power, and no affordable local cold room.</p></div>
              <div className="border-t-2 border-[#729b4f] pt-5"><Users className="text-[#507744]" size={22} /><h3 className="mt-5 font-display text-2xl text-[#214d3d]">FPOs & institutions</h3><p className="mt-2 text-sm leading-6 text-[#657364]">Aggregators, government programs, and farmer producer organisations can anchor utilization and reach.</p></div>
              <div className="border-t-2 border-[#5e9a9a] pt-5"><PackageCheck className="text-[#3f7775]" size={22} /><h3 className="mt-5 font-display text-2xl text-[#214d3d]">Local buyers</h3><p className="mt-2 text-sm leading-6 text-[#657364]">Retailers and traders get a more consistent, better-quality supply close to the point of harvest.</p></div>
              <div className="border-t-2 border-[#d99034] pt-5"><BarChart3 className="text-[#ae7027]" size={22} /><h3 className="mt-5 font-display text-2xl text-[#214d3d]">A repeatable unit</h3><p className="mt-2 text-sm leading-6 text-[#657364]">One village unit is a working proof point — then a blueprint for multiple villages and franchise expansion.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="model" className="bg-[#214d3d] px-5 py-24 text-[#f5e6c7] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <div>
              <SectionLabel number="04" light>The model</SectionLabel>
              <h2 className="font-display text-5xl leading-[.97] tracking-[-.045em] sm:text-6xl">Revenue follows the crop — not the other way around.</h2>
              <p className="mt-7 max-w-[360px] text-[15px] leading-7 text-[#bfd0c0]">Four simple channels let one room serve different kinds of demand while keeping access affordable.</p>
            </div>
            <div>
              <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-[#709079]/40 pb-3">
                {revenueStreams.map((stream, index) => <button key={stream.title} data-testid={`button-revenue-tab-${index}`} onClick={() => setRevenueTab(index)} className={`whitespace-nowrap px-3 py-2 text-left text-sm font-semibold transition-colors ${revenueTab === index ? 'text-[#e9b459]' : 'text-[#a9c1ad] hover:text-[#f5e6c7]'}`}>0{index + 1} / {stream.kicker}</button>)}
              </div>
              <div className="min-h-[220px] border-b border-[#709079]/40 py-8">
                <div className="flex items-start justify-between gap-6">
                  <div><span className="font-mono text-xs uppercase tracking-[.18em] text-[#8faf91]">{revenueStreams[revenueTab].value}</span><h3 className="mt-3 font-display text-4xl text-[#f5e6c7]">{revenueStreams[revenueTab].title}</h3></div>
                  <CircleDollarSign className="shrink-0 text-[#e9b459]" size={28} />
                </div>
                <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#bfd0c0]">{revenueStreams[revenueTab].copy}</p>
              </div>
              <div className="grid gap-6 pt-7 sm:grid-cols-3">
                <div><div className="text-2xl font-semibold text-[#f5e6c7]">Rentals</div><p className="mt-1 text-xs leading-5 text-[#a9c1ad]">Pay for capacity and time used.</p></div>
                <div><div className="text-2xl font-semibold text-[#f5e6c7]">Memberships</div><p className="mt-1 text-xs leading-5 text-[#a9c1ad]">Keep repeat demand close.</p></div>
                <div><div className="text-2xl font-semibold text-[#f5e6c7]">Contracts</div><p className="mt-1 text-xs leading-5 text-[#a9c1ad]">Maintenance, government, FPO.</p></div>
              </div>
            </div>
          </div>
          <div className="mt-20 grid gap-8 border-t border-[#709079]/40 pt-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><span className="font-mono text-[10px] uppercase tracking-[.18em] text-[#e9b459]">The competitive edge</span><h3 className="mt-4 font-display text-3xl">Not just cold storage.<br />The right distance from the farm.</h3></div>
            <div>
              <div className="mb-4 flex justify-end gap-2">
                <button data-testid="button-compare-today" onClick={() => setCompareMode('today')} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${compareMode === 'today' ? 'bg-[#e9b459] text-[#173c31]' : 'border border-[#709079] text-[#aac0a7]'}`}>Today’s alternatives</button>
                <button data-testid="button-compare-solar" onClick={() => setCompareMode('solar')} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${compareMode === 'solar' ? 'bg-[#e9b459] text-[#173c31]' : 'border border-[#709079] text-[#aac0a7]'}`}>SolarFresh</button>
              </div>
              <div className="overflow-hidden rounded-[2px] border border-[#709079]/50 text-sm">
                <div className="grid grid-cols-[1.2fr_.85fr_.85fr] bg-[#173c31] px-4 py-3 text-[10px] font-semibold uppercase tracking-[.14em] text-[#99b39c]"><span>What matters</span><span className={compareMode === 'today' ? 'text-[#e9b459]' : ''}>Alternatives</span><span className={compareMode === 'solar' ? 'text-[#e9b459]' : ''}>SolarFresh</span></div>
                {[
                  ['Distance to farm', 'Far / variable', 'Village-level'],
                  ['Power source', 'Grid / diesel', 'Solar + battery'],
                  ['Availability', 'Limited hours', '24×7'],
                  ['Digital access', 'Usually offline', 'Book + pay digitally'],
                ].map((row) => <div key={row[0]} className="grid grid-cols-[1.2fr_.85fr_.85fr] border-t border-[#709079]/35 px-4 py-3 text-[#bfd0c0]"><span className="font-medium text-[#f5e6c7]">{row[0]}</span><span className="text-[#9eb6a0]">{row[1]}</span><span className="font-semibold text-[#e9b459]">{row[2]}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="economics" className="bg-[#f6f1e7] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <SectionLabel number="05">The numbers</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <div>
              <h2 className="font-display text-5xl leading-[.97] tracking-[-.045em] text-[#214d3d] sm:text-6xl">A small unit with a clear path to payback.</h2>
              <p className="mt-7 max-w-[390px] text-[15px] leading-7 text-[#607064]">The first investment creates a tangible village asset. The monthly picture keeps the story honest.</p>
              <div className="mt-9 rounded-[2px] bg-[#e6eadb] p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#b56b27]"><IndianRupee size={14} /> Initial investment</div>
                <div data-testid="text-investment-total" className="mt-4 font-mono text-4xl tracking-tight text-[#214d3d]">₹10,00,000</div>
                <div className="mt-2 text-xs leading-5 text-[#607064]">One village cold room, solar system, launch, and working capital reserve.</div>
              </div>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[2px] border border-[#bdc6af] bg-[#e6eadb] p-6"><div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.14em] text-[#58745e]">Monthly revenue</span><ArrowUpRight className="text-[#507744]" size={18} /></div><div data-testid="text-monthly-revenue" className="mt-6 font-mono text-4xl text-[#315f47]">₹1,30,000</div><div className="mt-2 text-xs text-[#607064]">from rentals, memberships & contracts</div></div>
                <div className="rounded-[2px] border border-[#d4bda6] bg-[#f3e3d2] p-6"><div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.14em] text-[#96603c]">Monthly expenses</span><ArrowDownRight className="text-[#b56b27]" size={18} /></div><div data-testid="text-monthly-expenses" className="mt-6 font-mono text-4xl text-[#874c2b]">₹55,000</div><div className="mt-2 text-xs text-[#77685d]">operations, maintenance & support</div></div>
                <div className="rounded-[2px] border border-[#bdc6af] bg-[#315f47] p-6 text-[#f5e6c7] sm:col-span-2"><div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.14em] text-[#e9b459]">Expected monthly profit</span><LineChart className="text-[#e9b459]" size={19} /></div><div data-testid="text-monthly-profit" className="mt-5 font-mono text-5xl tracking-tight">₹75,000</div><div className="mt-2 text-xs text-[#bfd0c0]">Break-even expected in 15–18 months.</div><div className="mt-5 h-2 overflow-hidden rounded-full bg-[#183e30]"><div className="h-full w-[58%] rounded-full bg-[#e9b459]" /></div><div className="mt-2 flex justify-between text-[10px] uppercase tracking-[.12em] text-[#9fba9f]"><span>monthly costs</span><span>surplus after operations</span></div></div>
              </div>
              <div className="mt-12">
                <div className="mb-5 flex items-end justify-between"><div><span className="font-mono text-[10px] uppercase tracking-[.18em] text-[#b56b27]">Where ₹10,00,000 goes</span><h3 className="mt-2 font-display text-3xl text-[#214d3d]">Click a line to inspect the unit.</h3></div><span className="font-mono text-xs text-[#728071]">{investmentLines[selectedInvestment].percent}% selected</span></div>
                <div className="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
                  <div className="space-y-2">
                    {investmentLines.map((line, index) => <button key={line.label} data-testid={`button-investment-${index}`} onClick={() => setSelectedInvestment(index)} className={`group flex w-full items-center gap-3 rounded-[2px] border p-3 text-left transition-colors ${selectedInvestment === index ? 'border-[#b56b27] bg-[#eee4d4]' : 'border-transparent hover:border-[#c9c8b6]'}`}><span className="font-mono text-xs text-[#b56b27]">0{index + 1}</span><span className="min-w-0 flex-1 text-sm font-semibold text-[#405c4c]">{line.label}</span><span className="font-mono text-sm text-[#214d3d]">{line.amount}</span><ChevronDown size={14} className={`text-[#b56b27] transition-transform ${selectedInvestment === index ? 'rotate-[-90deg]' : 'rotate-[-90deg] opacity-40 group-hover:opacity-100'}`} /></button>)}
                  </div>
                  <div className="relative flex min-h-[205px] flex-col justify-between overflow-hidden rounded-[2px] bg-[#e9e2d3] p-5"><div className="absolute -right-9 -top-9 h-28 w-28 rounded-full border-[16px] border-[#d99034]/30" /><div><div className="font-mono text-3xl text-[#b56b27]">{investmentLines[selectedInvestment].percent}%</div><div className="mt-1 text-xs font-semibold uppercase tracking-[.14em] text-[#7a7769]">of initial investment</div></div><div><div className="font-display text-2xl text-[#214d3d]">{investmentLines[selectedInvestment].label}</div><p className="mt-2 text-xs leading-5 text-[#687468]">{investmentLines[selectedInvestment].detail}</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="path" className="bg-[#e9e2d3] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div><SectionLabel number="06">The path</SectionLabel><h2 className="font-display text-5xl leading-[.97] tracking-[-.045em] text-[#214d3d] sm:text-6xl">Start local.<br />Learn quickly.<br />Scale with proof.</h2><p className="mt-7 max-w-[360px] text-[15px] leading-7 text-[#607064]">The first four quarters are designed to turn one credible unit into a repeatable operating playbook.</p></div>
            <div className="relative">
              <div className="absolute bottom-5 left-[18px] top-4 w-px bg-[#bfc0aa]" />
              {[
                ['Q1', 'Set the foundation', 'Select village and site. Finalise supplier, install the first solar cold room, and onboard the local operator.'],
                ['Q2', 'Open the doors', 'Launch farmer education, bookings, digital payment, and temperature monitoring. Prove dependable 24×7 operations.'],
                ['Q3', 'Fill the room', 'Build memberships, partner with FPOs and government programs, and smooth the seasonal demand curve.'],
                ['Q4', 'Document the playbook', 'Measure waste avoided, income uplift, and unit economics. Prepare the model for more villages and franchise partners.'],
              ].map(([quarter, title, copy], index) => <div key={quarter} className="relative grid grid-cols-[38px_1fr] gap-6 pb-10 last:pb-0"><div className="relative z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#b56b27] bg-[#e9e2d3] font-mono text-[10px] font-semibold text-[#b56b27]">{quarter}</div><div className="border-b border-[#c8c3b0] pb-8 last:border-0"><div className="flex items-center gap-3"><h3 className="font-display text-2xl text-[#214d3d]">{title}</h3><span className="font-mono text-[10px] text-[#9b9b82]">0{index + 1}</span></div><p className="mt-2 max-w-[580px] text-sm leading-6 text-[#607064]">{copy}</p></div></div>)}
            </div>
          </div>
          <div className="mt-24 grid gap-12 border-t border-[#c8c3b0] pt-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <div><span className="font-mono text-[10px] uppercase tracking-[.18em] text-[#b56b27]">Operating with eyes open</span><h3 className="mt-4 font-display text-4xl tracking-tight text-[#214d3d]">The risks are real.<br />So are the responses.</h3></div>
            <div className="grid gap-3">
              {risks.map((risk, index) => <div key={risk.title} className="grid gap-3 rounded-[2px] border border-[#c8c3b0] bg-[#f1eadf] p-5 sm:grid-cols-[.45fr_1.55fr] sm:items-center"><div className="flex items-center gap-2 text-sm font-bold text-[#214d3d]"><span className="font-mono text-xs text-[#b56b27]">0{index + 1}</span>{risk.title}</div><div className="text-sm leading-6 text-[#607064]">{risk.response}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="growth" className="bg-[#173c31] px-5 py-24 text-[#f5e6c7] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div><SectionLabel number="07" light>Where this goes</SectionLabel><h2 className="font-display text-5xl leading-[.97] tracking-[-.045em] sm:text-6xl">The first room is a signal, not a ceiling.</h2><p className="mt-7 max-w-[400px] text-[15px] leading-7 text-[#bfd0c0]">Over 3–5 years, the operating model can move from one village proof point to a network of dependable, monitored cold rooms.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['01', 'More villages', 'Replicate the unit where farmer demand and local partners are ready.'],
                ['02', 'Franchise expansion', 'Give trusted operators a proven model, not a blank sheet.'],
                ['03', 'AI / IoT monitoring', 'Use richer data to anticipate maintenance and protect quality.'],
                ['04', 'Mobile cold storage', 'Bring flexible capacity closer to seasonal or remote harvests.'],
                ['05', 'Retail partnerships', 'Connect consistent supply to supermarkets and e-grocery partners.'],
              ].map(([no, title, copy], index) => <div key={title} className={`border border-[#66846d]/60 bg-[#214d3d]/60 p-5 transition-colors hover:border-[#e9b459]/70 ${index === 4 ? 'sm:col-span-2' : ''}`}><div className="flex items-start justify-between"><span className="font-mono text-xs text-[#e9b459]">{no}</span><ArrowUpRight size={16} className="text-[#8faf91]" /></div><h3 className="mt-8 font-display text-2xl text-[#f5e6c7]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#b7c9b9]">{copy}</p></div>)}
            </div>
          </div>
          <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-[#66846d]/50 pt-10 sm:flex-row sm:items-end"><div><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.17em] text-[#e9b459]"><ShieldCheck size={16} /> A practical climate solution</div><p className="mt-4 max-w-[600px] font-display text-3xl leading-tight text-[#f5e6c7]">Less waste. Better farmer income. Rural jobs. Renewable energy adoption.</p></div><a data-testid="link-contact-footer" href="mailto:hello@solarfresh.in" className="group flex shrink-0 items-center gap-3 rounded-full bg-[#e9a643] px-5 py-3 text-sm font-bold text-[#173c31] transition-transform hover:-translate-y-0.5">Discuss the first unit <PhoneCall size={16} className="transition-transform group-hover:rotate-12" /></a></div>
        </div>
      </section>

      <footer className="bg-[#102f26] px-5 py-7 text-[#a9c1ad] lg:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-4 text-xs sm:flex-row sm:items-center"><div className="flex items-center gap-2 font-display text-lg text-[#f5e6c7]"><SunMedium size={17} className="text-[#e9b459]" /> SolarFresh</div><div>Cold storage close to the farm. Built for the harvest ahead.</div><div className="font-mono text-[10px] uppercase tracking-[.16em] text-[#729079]">Business plan / 2025</div></div>
      </footer>
    </main>
  );
}

export default App;