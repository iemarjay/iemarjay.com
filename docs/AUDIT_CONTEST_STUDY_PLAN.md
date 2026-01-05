# Smart Contract Audit Contest Study Plan

**Goal**: Build competitive audit skills to participate in Code4rena, Sherlock, CodeHawks contests
**Time Budget**: 5-8 hours/week (separate from brand building time)
**Timeline**: 12 weeks to first contest submission

---

## Your Starting Point

You're not starting from zero:
- Already found critical vulnerabilities in smart contract audits (cross-chain replay)
- 8 years full-stack experience
- Backend security depth (160+ issues found)
- Understand replay attacks across layers (web2 + web3)

**Your edge**: Most auditors only know Solidity. You understand backend systems, race conditions, auth flows, and how off-chain components interact with on-chain logic.

---

## Phase 1: Foundations (Weeks 1-4)

### Week 1-2: DeFi Mechanics

**Study**: [RareSkills DeFi Books](https://rareskills.io/blog) (free)
- How AMMs work (Uniswap math)
- Lending protocols (Aave/Compound mechanics)
- Flash loans
- Oracles and price manipulation

**Time**: 4-5 hours/week

### Week 3-4: Token Standards Deep Dive

**Study**: Core EIPs (must know cold)

| EIP | What It Is | Why It Matters |
|-----|------------|----------------|
| ERC20 | Fungible tokens | Most audited, most exploited |
| ERC721 | NFTs | Callback attacks |
| ERC1155 | Multi-token | Batch operations, reentrancy |
| ERC4626 | Tokenized vaults | DeFi building block, rounding issues |
| ERC3156 | Flash loans | Flash loan attacks |
| ERC1363 | Payable tokens | Callback reentrancy |

**Study**: [Weird ERC20](https://github.com/d-xo/weird-erc20)
- Fee-on-transfer tokens
- Rebasing tokens
- Tokens with blacklists
- Non-standard decimals
- Missing return values

**Time**: 4-5 hours/week

---

## Phase 2: CTF Practice (Weeks 5-8)

### Week 5-6: Ethernaut

**Link**: [Ethernaut](https://ethernaut.openzeppelin.com/)

Focus on:
- Reentrancy
- Tx.origin vs msg.sender
- Delegatecall
- Storage layout
- Selfdestruct

**Time**: 5-6 hours/week

### Week 7-8: Damn Vulnerable DeFi

**Link**: [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/)

This is the industry standard. Covers:
- Flash loan attacks
- Price oracle manipulation
- Governance attacks
- Reentrancy in DeFi context
- Access control issues

**Time**: 6-8 hours/week (these are harder)

---

## Phase 3: Advanced + First Contest (Weeks 9-12)

### Week 9-10: MrStealYoCrypto

**Link**: [MrStealYoCrypto](https://mrstealyocrypto.xyz/)

Harder CTF challenges. Only attempt after DVDeFi.

**Time**: 5-6 hours/week

### Week 11: Contest Prep

**Do**:
- Read 5-10 past contest reports on Code4rena/Sherlock
- Study winning submissions
- Understand report format
- Set up local testing environment

**Resources**:
- [Solodit](https://solodit.xyz/) — aggregated audit findings
- Past contest repos on GitHub

### Week 12: First Contest

**Target**: Enter a CodeHawks First Flight or small Code4rena contest

**Goal**: Submit at least 1 valid finding (even low severity)

---

## Weekly Schedule Template

| Day | Activity | Hours |
|-----|----------|-------|
| Mon | Study material (reading/videos) | 1.5 |
| Wed | CTF practice or contest work | 2 |
| Sat | Deep practice session | 2-3 |
| **Total** | | **5.5-6.5** |

---

## Resources Summary

### Required (Free)

| Resource | Purpose | Priority |
|----------|---------|----------|
| [RareSkills DeFi Blog](https://rareskills.io/blog) | DeFi mechanics | High |
| [Weird ERC20](https://github.com/d-xo/weird-erc20) | Token edge cases | High |
| [Ethernaut](https://ethernaut.openzeppelin.com/) | Solidity fundamentals | High |
| [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/) | Real DeFi exploits | Critical |
| [MrStealYoCrypto](https://mrstealyocrypto.xyz/) | Advanced CTF | Medium |

### Contest Platforms

| Platform | Best For |
|----------|----------|
| [CodeHawks First Flights](https://codehawks.cyfrin.io) | Beginners, learning |
| [Code4rena](https://code4rena.com) | All levels |
| [Sherlock](https://sherlock.xyz) | Experienced auditors |
| [Cantina](https://cantina.xyz) | Growing platform |

### Reference

| Resource | Purpose |
|----------|---------|
| [Solodit](https://solodit.xyz/) | Past audit findings database |
| [SWC Registry](https://swcregistry.io/) | Smart contract weakness classification |
| [Rekt News](https://rekt.news/) | Real exploit analysis |

### Optional (Paid)

| Resource | Cost | Worth It If... |
|----------|------|----------------|
| [RareSkills Bootcamp](https://rareskills.io/solidity-bootcamp) | ~$2k | You want structured learning |
| [Smart Contract Hacking](https://smartcontractshacking.com/) | ~$500 | You prefer video courses |

---

## Success Metrics

### Phase 1 Complete When:
- [ ] Can explain AMM math (x * y = k)
- [ ] Understand flash loan attack vectors
- [ ] Know all weird ERC20 behaviors
- [ ] Can explain each EIP from memory

### Phase 2 Complete When:
- [ ] Solved 15+ Ethernaut levels
- [ ] Solved 10+ DVDeFi challenges
- [ ] Can identify reentrancy patterns quickly

### Phase 3 Complete When:
- [ ] Submitted to first contest
- [ ] Got at least 1 valid finding accepted

---

## Your Unique Angle

When writing contest reports, leverage your backend experience:

1. **Off-chain integration issues** — Most auditors miss how contracts interact with keepers, oracles, or backend systems
2. **Replay attack patterns** — Your $10k story translates directly to signature replay, cross-chain replay
3. **Race conditions** — You understand timing attacks from backend context
4. **Business logic** — You think about user flows, not just code

---

## Notes

- Don't skip the EIP study — most findings come from token edge cases
- DVDeFi is non-negotiable — it's referenced in every auditor's journey
- First contest: aim for participation, not winning
- Your backend + web3 combo is rare — use it

---

## Related Documents

- [2026_YEARLY_PLAN.md](./2026_YEARLY_PLAN.md) — How this study plan fits into monthly priorities
- [PERSONAL_BRAND_STRATEGY.md](./PERSONAL_BRAND_STRATEGY.md) — Full brand strategy context
- [SECURITY_AUDIT_EXPERIENCE.md](./SECURITY_AUDIT_EXPERIENCE.md) — Current audit experience to build on

---

_Created: December 2025_
