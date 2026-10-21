/* KASE AI — verified knowledge base + answer engine (shared by the browser and the Vercel function).
   Every figure below was taken from an open source listed in KB.sources and re-checked on 21 Oct 2026.
   Figures marked "calc" are computed by the team from two published numbers (method stated in the text). */
(function (root) {
  const KB = {};
  KB.verified = "2026-10-21";

  /* ---------- Sources (all open data) ---------- */
  const K = "https://kase.kz/en/information/news/show/";
  KB.sources = {
    S1:  { title: "KASE: Review of equity market, September 2026", pub: "KASE", date: "2026-10-02", url: K + "1577041" },
    S2:  { title: "KASE: Review of equity market, August 2026", pub: "KASE", date: "2026-09-02", url: K + "1574693" },
    S3:  { title: "KASE: Review of equity market, December 2025", pub: "KASE", date: "2026-01-06", url: K + "1558280" },
    S4:  { title: "KASE: KASE Index constituents effective 4 Nov 2026", pub: "KASE", date: "2026-10-14", url: K + "1577859" },
    S5:  { title: "KASE: KASE Global sector trading, September 2026", pub: "KASE", date: "2026-10-01", url: K + "1576957" },
    S6:  { title: "KASE: Trading volume, January–September 2026", pub: "KASE", date: "2026-10-13", url: K + "1577814" },
    S7:  { title: "KASE: Trading volume, January–June 2026", pub: "KASE", date: "2026-07-14", url: K + "1571004" },
    S8:  { title: "KASE: Analytics and reviews (market indicators)", pub: "KASE", date: "2026-06-01", url: "https://kase.kz/en/information/analytics/market" },
    S9:  { title: "AIFC: Retail investment accounts up 35-fold in five years", pub: "AIFC Analytical Centre", date: "2026-03-10", url: "https://aifc.kz/news/number-of-retail-investment-accounts-in-kazakhstan-increases-35-fold-over-five-years/" },
    S10: { title: "Astana Times: Retail investors reshape Kazakhstan's financial landscape", pub: "The Astana Times", date: "2026-04-01", url: "https://astanatimes.com/2026/04/retail-investors-reshape-kazakhstans-financial-landscape-but-structural-gaps-persist/" },
    S11: { title: "Times of Central Asia: Capital market law set for major overhaul", pub: "Times of Central Asia", date: "2026-09-25", url: "https://timesca.com/kazakhstan-capital-market-law/" },
    S12: { title: "KASE Weekly, 7–10 July 2026", pub: "KASE", date: "2026-07-10", url: "https://kase.kz/uploads/kase_weekly_070726_100726_eng_c42659f549.pdf" },
    S13: { title: "KASE Weekly, 13–17 July 2026", pub: "KASE", date: "2026-07-17", url: "https://kase.kz/uploads/kase_weekly_070726_100726_eng_4a1a45f9e7.pdf" },
    S14: { title: "KASE home page: bond placement news, 24 July 2026", pub: "KASE", date: "2026-07-24", url: "https://kase.kz/kz/" },
    S16: { title: "Trading Economics: Kazakhstan currency", pub: "Trading Economics", date: "2026-03-22", url: "https://tradingeconomics.com/kazakhstan/currency" },
    S17: { title: "EC[ON]OMY: Key findings from Kazakhstan's Q2 2026 business survey", pub: "EC[ON]OMY", date: "2026-08-20", url: "https://economykz.org/en/business-activity-in-kazakhstans/" },
    S18: { title: "Astana Times: KASE 2025 trading volume reached $785 billion", pub: "The Astana Times", date: "2026-01-16", url: "https://astanatimes.com/2026/01/kase-says-2025-trading-volume-reached-785-billion-up-3/" },
    S19: { title: "KASE: Review of equity market, July 2026", pub: "KASE", date: "2026-08-03", url: K + "1572560" },
    S20: { title: "KASE: Review of equity market, June 2026", pub: "KASE", date: "2026-07-01", url: K + "1570049" },
    S21: { title: "KASE: Review of equity market, March 2026", pub: "KASE", date: "2026-04-03", url: K + "1563522" },
    S22: { title: "KASE Weekly, 14–18 September 2026", pub: "KASE", date: "2026-09-18", url: "https://kase.kz/uploads/kase_weekly_140926_180926_eng_aaeea247a5.pdf" },
    S23: { title: "KASE: KASE Index parameters notice, 1 Aug 2024 (older rule: 15% cap)", pub: "KASE", date: "2024-08-01", url: "https://kase.kz/en/news/show/1526956" }
  };

  /* data the full version would add under an agreement with KASE (not used in this prototype) */
  KB.agreementData = [
    { name: "Trading results data (period-aggregated prices and volumes of orders and trades, by e-mail / FTP)", unlocks: "Rolling 12-month rankings for all ~85 listed share names; intraday context" },
    { name: "IRIS Finance information terminal", unlocks: "Live quotes and order-book depth for answers like “what is the price now?”" },
    { name: "KASE information products and services", unlocks: "Historical series for charts and back-tests of explanations" }
  ];

  /* ---------- Entries ---------- */
  KB.entries = [
    {
      id: "shares_growth", title: "Which shares grew the most?", intent: "Price performance", kind: "data",
      asOf: "2026-09-30", asOfLabel: "30 Sep 2026",
      q: ["Which shares grew the most over the past year?"],
      strong: ["grew the most","grew most","top gainers","best performing","best-performing","biggest gainers","most growth","fastest growing","shares grew","stocks grew","shares rose","stocks rose","which shares grew","which stocks grew","какие акции выросли","акции выросли","рост акций","лидеры роста","акциялар өсті"],
      weak: ["grew","growth","gainers","performance","performed","past year","last year","ytd","year-to-date","shares","stocks","акции","выросли","рост"],
      plain: [
        "Among the 10 shares in the KASE Index, the biggest gainers since 1 January 2026 (to 30 September) were **NC KazMunayGas (KMGZ, +64.8%)** and **KazTransOil (KZTO, +37.4%)** [S1]. The index itself is up **10.9%** over the same period, from 7,031.32 to 7,795.44 points (calc from [S3] and [S1]). The weakest was Air Astana (AIRA, −26.4%) [S1].",
        "Gains are not steady. Kaspi.kz (KSPI) rose 16.0% in August and then fell 11.6% in September; Kazatomprom (KZAP) fell 15.1% in September [S2][S1].",
        "For calendar 2025 the leaders were Bank CenterCredit (CCBN, ×2.1), KMGZ (+48.6%) and Halyk Bank (HSBK, +44.9%) [S3]."
      ],
      viz: { type: "bars", title: "Price change since 1 Jan 2026, to 30 Sep (%)", unit: "%",
        rows: [["KMGZ",64.8],["KZTO",37.4],["KSPI",6.2],["KZAP",4.7],["CCBN",4.0],["KZTK",2.7],["HSBK",1.3],["KEGC",-2.4],["KCEL",-6.5],["AIRA",-26.4],["Index",10.9,"index"]], cite: "S1" },
      expert: {
        text: ["KASE publishes price changes from the start of the calendar year, so this answer shows year-to-date 2026 and calendar 2025. A rolling “past 12 months” ranking would compare each share’s price on 30 Sep 2025 with today — that needs KASE Trading results data."],
        table: { cols: ["Ticker","Issuer","Price 30 Sep, KZT","Sep, %","2026 YTD, %","2025, %"],
          rows: [["KMGZ","NC KazMunayGas","35,799.99","+1.5","+64.8","+48.6"],["KZTO","KazTransOil","1,305.00","+9.3","+37.4","+15.9"],["KSPI","Kaspi.kz","42,880.78","−11.6","+6.2","−25.9"],["KZAP","Kazatomprom","29,380.00","−15.1","+4.7","+39.0"],["CCBN","Bank CenterCredit","4,845.99","+0.6","+4.0","×2.1"],["KZTK","Kazakhtelecom","44,548.01","−0.6","+2.7","−0.9"],["HSBK","Halyk Bank","376.30","−3.0","+1.3","+44.9"],["KEGC","KEGOC","1,517.00","+2.9","−2.4","+1.8"],["KCEL","Kcell","3,164.05","−0.1","−6.5","−1.4"],["AIRA","Air Astana","670.10","−5.2","−26.4","+11.0"],["Index","KASE Index (points)","7,795.44","−4.0","+10.9*","+26.1"]],
          note: "* calculated from the 31 Dec 2025 and 30 Sep 2026 index values. Sources: [S1], [S3]." }
      },
      caveats: ["I only cover the 10 KASE Index shares here, not all ~85 listed share names.","KASE reports calendar-year changes, so I can’t give a rolling 12-month ranking from open data.","Past price changes do not predict future returns."],
      sources: ["S1","S2","S3"], related: ["index_members","share_price_factors","usdkzt"], terms: ["Ticker","KASE Index"]
    },
    {
      id: "index_members", title: "Which companies are in the KASE Index?", intent: "Index composition", kind: "data",
      asOf: "2026-10-14", asOfLabel: "14 Oct 2026",
      q: ["Which companies are included in the KASE Index?"],
      strong: ["kase index","index constituents","included in the kase index","companies in the kase index","what is in the index","index members","состав индекса","индекс kase","kase индексі","в индекс входят"],
      weak: ["index","companies","constituents","members","индекс","компании","входят"],
      plain: [
        "The KASE Index tracks **10 shares**: Air Astana, Bank CenterCredit, Halyk Bank, Kcell, KEGOC, NC KazMunayGas, Kaspi.kz, Kazatomprom, Kazakhtelecom and KazTransOil [S4].",
        "On 14 October 2026 KASE decided that this list stays the same from 4 November 2026 [S4]. The index follows share prices weighted by the market value of each company’s free-float shares [S23], and **no single share may exceed 13%** of the index [S4].",
        "At the end of September 2026 the index stood at 7,795.44 points, down 4.01% in the month [S1]."
      ],
      viz: { type: "bars", title: "Weight in the index, 13 Oct 2026 (%)", unit: "%", plain: true,
        rows: [["CCBN",13.7],["KSPI",13.5],["KMGZ",13.4],["KCEL",12.8],["HSBK",12.7],["KZAP",12.0],["AIRA",10.6],["KEGC",4.5],["KZTO",3.8],["KZTK",3.2]], cite: "S4" },
      expert: {
        text: ["KASE will recalculate free float (Fi), the restrictive coefficient (Ri) and weights on 2 November 2026, using 30 October prices, before the unchanged list takes effect [S4]."],
        table: { cols: ["Ticker","Issuer","Free float, %","Weight, %"],
          rows: [["AIRA","Air Astana","58.8","10.6"],["CCBN","Bank CenterCredit","36.3","13.7"],["HSBK","Halyk Bank","38.0","12.7"],["KCEL","Kcell","34.1","12.8"],["KEGC","KEGOC","15.0","4.5"],["KMGZ","NC KazMunayGas","12.2","13.4"],["KSPI","Kaspi.kz","33.9","13.5"],["KZAP","Kazatomprom","25.0","12.0"],["KZTK","Kazakhtelecom","8.7","3.2"],["KZTO","KazTransOil","10.0","3.8"]],
          note: "Parameters as of 13 Oct 2026. Source: [S4]." }
      },
      caveats: ["The 13% cap is recalculated once a quarter (1 Feb, May, Aug, Nov), so a weight can sit slightly above 13% in between — Bank CenterCredit is at 13.7%.","Older web pages show other members and a 15% cap (KASE notice of Aug 2024 [S23]). I always use the latest KASE notice."],
      sources: ["S4","S23","S1"], related: ["shares_growth","share_price_factors"], terms: ["KASE Index","Free float"]
    },
    {
      id: "etf", title: "What is an ETF?", intent: "Concept + KASE facts", kind: "mixed",
      asOf: "2026-09-30", asOfLabel: "30 Sep 2026",
      q: ["What is an ETF?"],
      strong: ["what is an etf","etf","etfs","exchange traded fund","exchange-traded fund","что такое etf","етф"],
      weak: ["fund","basket","index fund","фонд"],
      plain: [
        "An **ETF (exchange-traded fund)** is a fund whose units trade on an exchange like a share. Instead of picking one company, you hold a small slice of a basket — for example, all the shares in an index. Think of a fruit basket instead of a single apple.",
        "On KASE, ETFs are available in the **KASE Global** sector, which lists **82 securities of 73 foreign issuers: 54 shares, 25 ETFs and 3 ADRs** [S5]."
      ],
      viz: { type: "stats", items: [["82","securities in KASE Global"],["54","foreign shares"],["25","ETFs"],["3","ADRs"]], cite: "S5" },
      expert: {
        text: ["Before using any ETF, check what it tracks, its fees, the currency of the assets inside, and how closely its price follows the index (tracking difference). This is a general explanation, not a KASE figure.","In KASE Global (September 2026), individuals were 28.9% of deal value — far below their share in local shares — while other legal entities were 45.9% and broker-dealers 24.4% [S5]."],
        table: { cols: ["Investor group","Share of KASE Global deals, Sep 2026"], rows: [["Other legal entities","45.9%"],["Individuals","28.9%"],["Broker-dealers","24.4%"],["Banks","0.9%"],["Other institutional","0.0%"]], note: "Source: [S5]." }
      },
      caveats: ["An ETF still carries market risk: its price can fall with the assets it holds.","This is an explanation, not a recommendation of any specific ETF."],
      sources: ["S5"], related: ["kase_global","bonds_vs_deposits"], terms: ["ETF","KASE Global","ADR / GDR"]
    },
    {
      id: "bonds_vs_deposits", title: "How do bonds differ from deposits?", intent: "Concept comparison", kind: "mixed",
      asOf: "2026-07-31", asOfLabel: "31 Jul 2026",
      q: ["How do bonds differ from deposits?"],
      strong: ["bonds differ from deposits","bond vs deposit","bonds or deposits","bond and deposit","deposit vs bond","bonds versus deposits","difference between bonds","облигации и депозит","облигации или депозит","депозит и облигации"],
      weak: ["bond","bonds","deposit","deposits","coupon","облигац","депозит","вклад"],
      plain: [
        "A **deposit** is a contract with a bank: you lend it money for a term and it pays interest; the amount you hold does not change in price. A **bond** is a loan to a company or the state that you can usually sell on the exchange before maturity — so its price can go up or down. A bond normally pays a **coupon** (regular interest) and returns the face value at maturity, if the issuer can pay.",
        "In Kazakhstan, corporate debt in circulation reached **KZT 16.8 trillion** on 31 July 2026 [S11], and retail investors have been moving into corporate bonds in search of yields above bank deposits [S9].",
        "Example of how yields can look: Leasing Group bonds (LZGRb17) were placed on KASE on 24 July 2026 at 22.00% a year, raising KZT 117.0 mln [S14]; the one-day money-market rate TONIA was 16.72% on 17 July [S13]. These are different instruments, so the numbers are not directly comparable — higher yield usually means higher risk."
      ],
      viz: { type: "compare", cols: ["", "Deposit", "Bond"], rows: [["Who you lend to","A bank","A company or the state"],["Return","Interest fixed in the contract","Coupon, plus or minus price changes"],["Price changes","No","Yes — market price moves"],["Main risks","Bank failure","Issuer default, low liquidity, rate moves"],["Leaving early","Depends on the contract","Sell on the exchange if there is a buyer"],["Protection","State deposit insurance, within limits","None of that kind"]] },
      expert: { text: ["I don’t quote the deposit-insurance limit because it changes; check the current figure with the Kazakhstan Deposit Insurance Fund. Bond figures depend on each issue’s terms — read the issue’s KASE page."], table: null },
      caveats: ["Not a recommendation to hold one or the other.","The deposit-insurance limit is not quoted — check it with the Deposit Insurance Fund.","The newest data point in this answer is from July 2026; the full version reads current issue data from KASE."],
      sources: ["S11","S9","S14","S13"], related: ["corp_bond_risks","etf"], terms: ["Bond","Coupon","Yield","TONIA","Deposit"]
    },
    {
      id: "corp_bond_risks", title: "What risks come with corporate bonds?", intent: "Risk explanation", kind: "mixed",
      asOf: "2026-09-18", asOfLabel: "18 Sep 2026",
      q: ["What risks come with corporate bonds?"],
      strong: ["risks of corporate bonds","corporate bond risk","corporate bonds risk","risks come with corporate bonds","bond risks","default risk","risks of bonds","риски корпоративных облигаций","корпоративные облигации риски"],
      weak: ["risk","risks","corporate","default","rating","риск","корпоративн"],
      plain: [
        "Four main risks: **credit risk** (the company delays or misses a coupon or the final payment), **liquidity risk** (no buyer at a fair price when you want to sell), **interest-rate risk** (when market rates rise, bond prices usually fall) and **concentration** (too much in one issuer). A very high yield is usually the market’s price for higher risk.",
        "Kazakhstan context: since January 2025 the financial regulator restricts access to complex, high-risk instruments for unqualified investors [S9]. To check an issuer, follow KASE’s issuer news and rating actions — for example, in mid-September 2026 Moody’s affirmed Bank CenterCredit’s ratings with a Stable outlook and Fitch affirmed Halyk Bank’s with a Stable outlook [S22]."
      ],
      viz: { type: "compare", cols: ["Risk", "What it means", "Where to look"], rows: [["Credit","Issuer cannot pay on time","Issuer ratings and KASE issuer news"],["Liquidity","Hard to sell quickly at a fair price","Trading volume and number of deals of the issue"],["Interest rate","Price falls when market rates rise","Maturity — longer bonds react more"],["Concentration","One issuer drives your result","How many issuers you hold"]] },
      expert: { text: ["Rating actions in KASE Weekly are examples of where information appears; they are not a signal about any bond. The assistant does not rate issuers."], table: null },
      caveats: ["This describes risks in general; it does not assess any specific bond or issuer.","Ratings can change; always check the latest issuer disclosure on KASE."],
      sources: ["S9","S22"], related: ["bonds_vs_deposits"], terms: ["Bond","Coupon","Liquidity","Qualified investor"]
    },
    {
      id: "usdkzt", title: "Why did USD/KZT change?", intent: "FX explanation", kind: "data",
      asOf: "2026-09-30", asOfLabel: "30 Sep 2026",
      q: ["Why did the USD/KZT exchange rate change?"],
      strong: ["usd/kzt","usdkzt","exchange rate","dollar rate","tenge rate","курс доллара","курс тенге","курс usd","why did the dollar","why did usd","теңге"],
      weak: ["dollar","tenge","kzt","fx","currency","rate changed","курс","тенге","валют","доллар"],
      plain: [
        "The tenge has strengthened against the dollar in 2026. KASE’s own market-capitalisation figures in tenge and in dollars imply a month-end USD/KZT of about **502.6** on 31 Dec 2025, **464.8** on 31 Aug and **439** on 30 Sep 2026 — roughly **12.6% fewer tenge per dollar** since the start of the year (a lower number means a stronger tenge) (calc from [S3], [S2], [S1]).",
        "What the National Bank (NBK) reports: it planned gradual, even sales of foreign currency from the National Fund through year-end and carried out no direct FX interventions in June [S12]. The public sources do not name a single cause, and exchange rates usually reflect several forces at once (general explanation, not quantified here).",
        "Why investors care: in dollars, the capitalisation of Kazakhstan’s equity market grew **40.8%** from end-2025 to end-September 2026, against **23.0% in tenge**, because a stronger tenge raises dollar values (calc from [S3] and [S1])."
      ],
      viz: { type: "stats", items: [["≈502.6","31 Dec 2025"],["≈464.8","31 Aug 2026"],["≈439","30 Sep 2026"],["−12.6%","USD/KZT since 31 Dec"]], cite: "S1", note: "Implied month-end rates, calculated by us from KASE capitalisation in KZT and USD" },
      expert: {
        text: ["Companies surveyed for Q2 2026 said tenge moves against the dollar and the ruble had the greatest negative impact on their business activity [S17]."],
        table: { cols: ["Date","USD/KZT","Basis","Source"], rows: [["31 Dec 2025","≈502.6","Implied: KZT 39,019.69 bn ÷ USD 77,640.30 mn","S3"],["31 Aug 2026","≈464.8","Implied: KZT 50,242.01 bn ÷ USD 108,100.81 mn","S2"],["30 Sep 2026","≈439","Implied: KZT 48.0 trn ÷ USD 109.3 bn (rounded inputs, ±0.7)","S1"],["Jul 2025","549.90","All-time high","S16"]], note: "Implied rates are calculations, not official quotes." }
      },
      caveats: ["Implied month-end rates are rounded calculations, not the official KASE USD/KZT indicator; the full version reads that indicator daily.","I explain what the sources report; I do not forecast the exchange rate."],
      sources: ["S1","S2","S3","S12","S16","S17"], related: ["market_overview","shares_growth"], terms: ["TONIA"]
    },
    {
      id: "dividends", title: "What are dividends and how are they paid?", intent: "Concept", kind: "concept",
      asOf: null, asOfLabel: null,
      q: ["What are dividends and how are they paid?"],
      strong: ["what are dividends","dividend","dividends","how dividends are paid","дивиденд","дивиденды","дивиденд төлеу"],
      weak: ["paid","payout","payouts","yield","выплат"],
      plain: [
        "A **dividend** is a part of a company’s profit paid to its shareholders — usually in cash, per share. The company decides whether to pay and how much; it is never guaranteed. Only shareholders on the record date the company sets receive it, and the money normally reaches you through your broker.",
        "Preferred shares often carry a priority or defined dividend rule, while ordinary shares depend on the company’s decision. Example: Freedom Bank Kazakhstan paid dividends on its preferred shares for the first half of 2026 (KASE Weekly, 7–10 July) [S12]."
      ],
      viz: null,
      expert: { text: ["**Dividend yield** = annual dividend per share ÷ share price. A very high yield can also mean the price has fallen. Exact payment steps and taxes depend on your broker and the company’s announcement — read the issuer’s disclosure on KASE."], table: null },
      caveats: ["I don’t quote dividend amounts without the issuer’s announcement.","Tax treatment is not covered here."],
      sources: ["S12"], related: ["share_price_factors"], terms: ["Dividend","Share (stock)"]
    },
    {
      id: "share_price_factors", title: "What factors affect share prices?", intent: "Concept + market facts", kind: "mixed",
      asOf: "2026-09-30", asOfLabel: "30 Sep 2026",
      q: ["What factors affect share prices?"],
      strong: ["factors affect share prices","what affects share prices","what moves share prices","why do share prices","share price factors","what factors affect","why did kaspi","why did the index","why did the market","kaspi fell","kaspi fall","index fell","index fall","market fell","market fall","почему упал","почему упали","факторы влияют на цену акций","что влияет на цену акций"],
      weak: ["price","prices","affect","factors","drivers","цена","влияют"],
      plain: [
        "Share prices move on company news and results, dividends, commodity and sector trends, interest rates, the exchange rate, and the balance of buyers and sellers. Thinly traded shares can move more on small orders.",
        "Kazakhstan examples: the KASE Index rose 4.02% in August and fell 4.01% in September 2026 [S2][S1]. Inside the index, Kaspi.kz gained 16.0% in August and lost 11.6% in September [S2][S1], showing how far single shares can swing within a few weeks.",
        "Free float — the part of shares available for trading — differs widely across index shares: from 8.7% (Kazakhtelecom) to 58.8% (Air Astana) [S4]."
      ],
      viz: { type: "bars", title: "Kaspi.kz and the KASE Index, monthly change (%)", unit: "%",
        rows: [["KSPI Aug",16.0],["KSPI Sep",-11.6],["Index Aug",4.0,"index"],["Index Sep",-4.0,"index"]], cite: "S1" },
      expert: {
        text: ["The sources report what happened, not why. The assistant doesn’t attribute a single price move to a single cause."],
        table: { cols: ["Factor","How it can work","What to check"], rows: [["Company results","Profit surprises move expectations","Issuer disclosures on KASE"],["Dividends","Payout news changes demand","Dividend announcements"],["Rates and FX","Change returns on alternatives and foreign-currency earnings","TONIA, USD/KZT"],["Liquidity","Thin trading amplifies moves","Free float, trading volume"]], note: "General explanation; Kazakhstan figures from [S1], [S2], [S4]." }
      },
      caveats: ["I can say what moved, but public sources rarely prove why.","Not a forecast and not a recommendation."],
      sources: ["S1","S2","S4"], related: ["shares_growth","dividends"], terms: ["Free float","Liquidity","Share (stock)"]
    },
    {
      id: "who_trades", title: "Who invests on KASE?", intent: "Investor structure", kind: "data",
      asOf: "2026-09-30", asOfLabel: "30 Sep 2026",
      q: ["How many people invest in Kazakhstan’s stock market?"],
      strong: ["who trades","who invests","who are the investors","retail investors","individual investors","investor structure","how many investors","number of investors","how many people invest","сколько инвесторов","частные инвесторы","розничные инвесторы","инвесторов"],
      weak: ["investors","individuals","accounts","retail","инвестор","физлиц","счет"],
      plain: [
        "Individuals are the largest group on KASE’s share market: **55.4%** of share trading turnover in September 2026, ahead of broker-dealers (21.7%) and other legal entities (20.4%) [S1]. Non-residents accounted for 7.8% [S1]. The share moves from month to month — 59.3% in August and 48.0% in July — so one month alone says little [S2][S19].",
        "Participation is wide but shallow: brokerage and securities accounts exceeded **5.2 million** by September 2026, yet only about **276,000 were active** — roughly 5% (calc from [S11]). Only 40.5% of citizens have basic financial knowledge, according to the financial regulator [S9]."
      ],
      viz: { type: "cols", title: "Individuals’ share of share-trading turnover (%)", unit: "%",
        rows: [["Dec 25",54.2],["Mar 26",53.4],["Jun 26",53.2],["Jul 26",48.0],["Aug 26",59.3],["Sep 26",55.4]], cite: "S1" },
      expert: {
        text: ["Monthly shares are of gross share-trading turnover on the secondary market. Other reports use different bases — for example, individuals were 62.1% of equity turnover in 2024 and 55.2% in the first nine months of 2025 [S10], and 55.8% of the overall investor structure in 2025 [S18]."],
        table: { cols: ["Investor group","Share of turnover, Sep 2026"], rows: [["Individuals","55.4%"],["Broker-dealers","21.7%"],["Other legal entities","20.4%"],["Other institutional","1.8%"],["Banks","0.6%"],["Non-residents (separate cut)","7.8%"]], note: "Source: [S1]." }
      },
      caveats: ["“Active” accounts are defined by the source; definitions differ between reports.","Figures from different sources and periods are shown side by side, not merged."],
      sources: ["S1","S2","S19","S20","S21","S3","S9","S10","S11","S18"], related: ["market_overview","etf"], terms: ["Free float"]
    },
    {
      id: "kase_global", title: "KASE Global: foreign shares and ETFs", intent: "Market segment", kind: "data",
      asOf: "2026-09-30", asOfLabel: "30 Sep 2026",
      q: ["Can I buy foreign shares through KASE?"],
      strong: ["kase global","foreign shares","foreign stocks","buy foreign","international shares","adr","иностранные акции","зарубежные акции"],
      weak: ["foreign","abroad","global","international","иностран","зарубеж"],
      plain: [
        "**KASE Global** is the exchange sector for foreign securities. It currently includes **82 securities of 73 foreign issuers** — 54 shares, 25 ETFs and 3 ADRs [S5]. An ADR is a receipt that represents shares of a foreign company.",
        "Trading is growing fast from a small base: KASE Global volume was KZT 232.9 bn in January–September 2026 against KZT 95.2 bn a year earlier, and KZT 34.6 bn in September alone [S6][S5]. Retail investors normally trade through a licensed broker."
      ],
      viz: { type: "stats", items: [["82","securities"],["73","foreign issuers"],["KZT 34.6 bn","volume in Sep 2026"],["×2.4","Jan–Sep vs a year earlier (calc)"]], cite: "S5" },
      expert: { text: ["Check each instrument’s trading currency and settlement rules on its KASE page before relying on any price comparison."], table: null },
      caveats: ["Which broker supports which instrument is outside this answer.","Foreign securities carry the currency and market risk of their home markets."],
      sources: ["S5","S6"], related: ["etf"], terms: ["KASE Global","ADR / GDR","ETF"]
    },
    {
      id: "market_overview", title: "How big is the market?", intent: "Market size", kind: "data",
      asOf: "2026-09-30", asOfLabel: "30 Sep 2026",
      q: ["How big is Kazakhstan’s stock market?"],
      strong: ["how big is","market size","market capitalization","market capitalisation","trading volume","size of the market","how large","объем торгов","капитализация","размер рынка"],
      weak: ["capitalization","capitalisation","volume","turnover","big","large","объем","капитализ"],
      plain: [
        "At the end of September 2026 the KASE equity market was worth **KZT 48.0 trillion (USD 109.3 bn)**, 4.4% lower than a month earlier, across 85 share issues of 72 issuers [S1].",
        "Total exchange trading volume was KZT 397.6 trillion (USD 833.1 bn) in January–September 2026 [S6]; for January–June it was 48.8% higher than a year earlier in tenge [S7]. Shares are a small slice of that: share trading was KZT 292.0 bn in the same nine months [S6] — about 0.07% of the total (calc), because most volume is in other segments."
      ],
      viz: { type: "stats", items: [["KZT 48.0 trn","equity market value"],["USD 109.3 bn","same, in dollars"],["85 / 72","share issues / issuers"],["KZT 397.6 trn","all-segment volume, Jan–Sep"]], cite: "S1" },
      expert: { text: ["Dollar and tenge values differ because the tenge strengthened in 2026: market value is up 23.0% in tenge since end-2025 but 40.8% in dollars (calc from [S3] and [S1])."], table: null },
      caveats: ["Market value is not the same as money invested by individuals.","Total volume mixes all segments; it should not be read as stock-market activity."],
      sources: ["S1","S3","S6","S7"], related: ["who_trades","usdkzt"], terms: ["Capitalisation"]
    }
  ];

  /* ---------- Glossary (plain language first) ---------- */
  KB.glossary = [
    { term: "Share (stock)", plain: "A part-ownership in a company. If the company does well, the share price and dividends may rise; if not, they may fall.", ask: "share_price_factors" },
    { term: "Dividend", plain: "A part of a company’s profit paid to shareholders, usually per share. Never guaranteed.", expert: "Dividend yield = annual dividend per share ÷ share price.", ask: "dividends" },
    { term: "ETF", plain: "A fund traded on an exchange like a share; one unit gives you a slice of a whole basket of assets.", ask: "etf" },
    { term: "Bond", plain: "A loan you give to a company or the state. It pays a coupon and returns the face value at maturity — if the issuer can pay.", ask: "bonds_vs_deposits" },
    { term: "Coupon", plain: "The regular interest payment on a bond." },
    { term: "Yield", plain: "The yearly return a bond or share gives, measured against its current price. Higher yield usually comes with higher risk." },
    { term: "Deposit", plain: "A bank contract: you leave money for a term and get interest. Not traded on an exchange.", ask: "bonds_vs_deposits" },
    { term: "KASE Index", plain: "KASE’s main share index. It follows 10 shares and no single share can exceed 13% of it.", expert: "Weights reflect market value of free-float shares; Ri limits each share’s portion and is recalculated quarterly.", ask: "index_members" },
    { term: "Free float", plain: "The part of a company’s shares that is actually available for public trading.", expert: "KASE: ratio of free-float shares to total shares in circulation (Fi)." },
    { term: "Capitalisation", plain: "Share price × number of shares: what the market says a company (or the whole market) is worth.", ask: "market_overview" },
    { term: "Ticker", plain: "A short code for a security on the exchange, for example KSPI for Kaspi.kz." },
    { term: "TONIA", plain: "The one-day interest rate on KASE’s money market (overnight repo). It signals how expensive short-term tenge money is.", expert: "Used as the target rate for the National Bank’s monetary-policy operations." },
    { term: "Repo", plain: "A short-term loan secured by securities: one side sells them and agrees to buy them back." },
    { term: "ADR / GDR", plain: "A receipt that represents shares of a company listed elsewhere, so they can trade on another market.", ask: "kase_global" },
    { term: "KASE Global", plain: "The KASE sector for foreign shares, ETFs and ADRs.", ask: "kase_global" },
    { term: "Liquidity", plain: "How quickly you can sell without moving the price. Thin trading means low liquidity." },
    { term: "Qualified investor", plain: "A category of investor allowed to use complex or high-risk instruments. Since January 2025 unqualified investors’ access to those is restricted [S9]." },
    { term: "ISIN", plain: "An identification number that uniquely marks a security, used across markets." }
  ];

  /* ---------- Snapshot cards ---------- */
  KB.snapshot = [
    { big: "7,795.44", label: "KASE Index", sub: "−4.01% in September · +10.9% in 2026 (calc)", asOf: "2026-09-30", asOfLabel: "30 Sep 2026", src: "S1" },
    { big: "KZT 48.0 trn", label: "Equity market value", sub: "USD 109.3 bn · 85 share issues of 72 issuers", asOf: "2026-09-30", asOfLabel: "30 Sep 2026", src: "S1" },
    { big: "55.4%", label: "Individuals’ share of share trading", sub: "59.3% in August · 48.0% in July", asOf: "2026-09-30", asOfLabel: "Sep 2026", src: "S1" },
    { big: "5.2 m / 276 k", label: "Accounts / active accounts", sub: "About 5% of securities accounts are active (calc)", asOf: "2026-09-25", asOfLabel: "Sep 2026", src: "S11" },
    { big: "KZT 397.6 trn", label: "Exchange volume, all segments", sub: "USD 833.1 bn · January–September 2026", asOf: "2026-09-30", asOfLabel: "Jan–Sep 2026", src: "S6" },
    { big: "≈439", label: "USD/KZT, implied", sub: "≈502.6 at end-2025 · calculated from KASE figures", asOf: "2026-09-30", asOfLabel: "30 Sep 2026", src: "S1" },
    { big: "82", label: "Securities in KASE Global", sub: "54 shares · 25 ETFs · 3 ADRs", asOf: "2026-09-30", asOfLabel: "Sep 2026", src: "S5" },
    { big: "40.5%", label: "Citizens with basic financial knowledge", sub: "Financial regulator, via AIFC", asOf: "2026-03-10", asOfLabel: "Mar 2026", src: "S9" },
    { big: "16.72%", label: "TONIA, one-day money-market rate", sub: "17 July 2026", asOf: "2026-07-17", asOfLabel: "17 Jul 2026", src: "S13" }
  ];

  /* ---------- Engine ---------- */
  const lc = (s) => String(s || "").toLowerCase().replace(/[’‘]/g, "'");

  KB.retrieve = function (q, k) {
    const text = lc(q);
    const res = [];
    KB.entries.forEach((e) => {
      let score = 0, hit = [];
      (e.q || []).forEach((s) => { if (lc(s) === text.trim()) { score += 20; hit.push("sample"); } });
      (e.strong || []).forEach((w) => { if (text.indexOf(lc(w)) !== -1) { score += 3; hit.push(w); } });
      (e.weak || []).forEach((w) => { if (text.indexOf(lc(w)) !== -1) { score += 1; hit.push(w); } });
      if (score >= 3) res.push({ entry: e, score: score, hits: hit });
    });
    res.sort((a, b) => b.score - a.score);
    return res.slice(0, k || 2);
  };

  const ADVICE = [
    /should i (buy|sell|invest|hold|put|choose|take)/i,
    /(what|which|where).{0,40}(to buy|to invest in|should i buy|should i invest)/i,
    /(is|are).{0,40}(good|worth|safe|smart).{0,15}(buy|investment|to buy|to invest)/i,
    /\b(recommend|advise|advice)\b/i,
    /(best|top).{0,20}(stock|share|bond|etf)s?.{0,12}(to buy|to invest|for me)/i,
    /(стоит ли|что купить|какие акции купить|посоветуй|порекомендуй|покупать или|во что вложить|вкладывать)/i,
    /(сатып алу керек пе|не сатып алған)/i
  ];
  const FORECAST = [
    /(will|going to|gonna).{0,40}(go up|rise|grow|fall|drop|increase|crash|double|reach)/i,
    /\b(forecast|predict|prediction|outlook for)\b/i,
    /(вырастет|упадет|упадёт|прогноз|что будет с)/i
  ];
  const GREET = /^\s*(hi|hello|hey|salem|salam|привет|здравствуйте|сәлем|салем|добрый день)(?=$|[\s,.!?])/i;

  KB.classify = function (q) {
    const s = String(q || "").trim();
    if (!s) return { type: "empty" };
    if (/\b\d{12}\b/.test(s) || /\b(?:\d[ -]?){13,19}\b/.test(s)) return { type: "pii" };
    if (GREET.test(s) && s.length < 30) return { type: "greeting" };
    if (ADVICE.some((r) => r.test(s))) return { type: "advice" };
    if (FORECAST.some((r) => r.test(s))) return { type: "forecast" };
    return { type: "query" };
  };

  KB.ageDays = function (iso, now) {
    if (!iso) return null;
    const d = new Date(iso + "T00:00:00Z").getTime();
    return Math.floor(((now || Date.now()) - d) / 86400000);
  };

  /* plain-text context for the live LLM mode */
  KB.contextFor = function (hits) {
    const used = {};
    const blocks = hits.map((h, i) => {
      const e = h.entry;
      e.sources.forEach((s) => (used[s] = true));
      const exp = e.expert && e.expert.table ? "\nTABLE (" + e.expert.table.cols.join(" | ") + "):\n" + e.expert.table.rows.map((r) => r.join(" | ")).join("\n") : "";
      const more = e.expert && e.expert.text ? "\nEXTRA: " + e.expert.text.join(" ") : "";
      return "[PASSAGE " + (i + 1) + "] " + e.title + (e.asOfLabel ? " (data as of " + e.asOfLabel + ")" : " (general explanation)") + "\n" + e.plain.join("\n") + more + exp + "\nCAVEATS: " + e.caveats.join(" ");
    });
    const srcs = Object.keys(used).map((id) => id + ": " + KB.sources[id].title + " (" + KB.sources[id].date + ")").join("\n");
    return { text: blocks.join("\n\n") + "\n\nSOURCES:\n" + srcs, ids: Object.keys(used) };
  };

  if (typeof module !== "undefined" && module.exports) module.exports = KB;
  else root.KB = KB;
})(typeof self !== "undefined" ? self : this);
