# POSADA TOOLS — QA MVP Specification

**Product:** Extended Electric Ratchet (20V Cordless)  
**SKU:** PT-RCH-EXT | PT-RCH-EXT-TO (tool only) | PT-RCH-EXT-B (with battery)  
**Document:** QA-MVP-PT-RCH-EXT-RevA  
**Status:** Draft for supplier discussion (OEM/ODM, China and global)  
**Classification:** Confidential

---

## 1. Purpose & Scope

Minimum quality, performance, inspection, and process requirements for production planning with manufacturing partners.

**In scope:** Tool assembly, head/drive, motor & gearbox, electronics (trigger, FWD/REV, LED), housing, labeling, packaging, outbound inspection.

**Out of scope:** Battery pack cells/BMS, charger (separate docs), retail fixtures, service network.

---

## 2. Product Definition (MVP)

| Parameter | MVP Target | Notes for Manufacturer |
|-----------|------------|------------------------|
| Platform voltage | 20V nominal Li-ion | POSADA 20V slide-pack interface (drawing TBD) |
| Drive size | 3/8 in square | ASME B107; detent ball preferred |
| Head style | Extended reach, slim | Engine-bay clearance; minimize head height |
| Motor | Brushed DC (MVP) | Quote brushless as optional upgrade |
| No-load speed | 0–220 RPM variable | ±15% acceptable at MVP |
| Working torque | ≥ 40 N·m (≈ 30 ft-lb) | Per test method §6 |
| Control | Variable trigger + FWD/REV | Dust/oil resistant as practical |
| LED | Trigger-activated | Illuminate near anvil |
| Weight (no battery) | ≤ 1.3 kg | Competitive mid-tier target |
| Duty | Intermittent shop use | Not continuous production tooling |
| Operating temp | 0–40°C ambient | Storage −20–50°C |

---

## 3. Critical Quality Characteristics (CTQs)

| CTQ | Requirement | Defect if Fail |
|-----|-------------|----------------|
| Drive fit & retention | Full socket seat; detent holds | Socket drops / no engage |
| Head alignment | Anvil square within tolerance | Wobble, uneven wear |
| Gear durability | No skip under rated load | Functional failure |
| Trigger | Smooth 0→max | Uncontrollable speed |
| FWD/REV | Correct every cycle | Wrong direction |
| Battery interface | Lock + low resistance | Intermittent power |
| Housing | No cracks/sharp edges | Safety / returns |
| Noise | No abnormal rattle/howl | Perceived quality fail |
| Thermal | No melt/odor on duty cycle | Safety risk |
| Branding | Correct SKU/warnings/marks | Compliance / brand |

---

## 4. Materials (Guidance)

| Subsystem | Typical | QA Focus |
|-----------|---------|----------|
| Housing | PA6-GF or equivalent | Drop, color, flash |
| Grip | Oil-resistant TPE | Peel, hardness |
| Anvil | Hardened alloy steel | Hardness, dims |
| Gears | PM or machined steel | Profile, heat treat |
| Motor | Brushed DC sized to targets | Endurance |
| PCB/switch | Conformal coat preferred | Function, solder |
| Battery contacts | POSADA 20V geometry | Golden pack fit |

**RoHS** required; REACH SVHC on request.

---

## 5. Dimensions

Lock on golden sample. Proposal: overall length ±2 mm; 3/8 in drive per ASME B107; battery interface go/no-go with golden pack.

---

## 6. Performance Tests (MVP)

| Test | Method | Pass |
|------|--------|------|
| No-load speed | ≥80% SOC battery | ±15% of 220 RPM max |
| Working torque | Transducer / joint | ≥ 40 N·m |
| Direction | 10 FWD + 10 REV | 100% correct |
| Trigger | Slow 0–100% | No stick-slip |
| Socket retention | Hang + shake | Stays engaged |
| Duty cycle | 10s on / 20s off × 30 min | No failure |
| Drop | 1 m, 3 orientations | Functions; no sharp cracks |
| Hi-Pot | Class III practice | No breakdown |
| Endurance (sample) | ≥20 h intermittent | No gear/motor failure |

---

## 7. Certification Path

- **US:** UL/ETL (NRTL) for cordless tool  
- **EU/UK:** CE (+ UKCA if needed)  
- **EMC:** FCC Part 15 / EN  
- **Battery:** UN38.3; IEC 62133 / UL 2054 as applicable  
- **Docs:** RoHS/REACH declarations; EN manual per POSADA template  

---

## 8. Inspection Plan

### IQC
Motor, PCB, anvil/gears, housing, battery interface, labels — AQL 1.0–1.5 (or COC + audit).

### IPQC
Grease/mesh check; screw torque audit; **100%** function (trigger, FWD/REV, LED, noise); battery fit fixture.

### FQC / OQC
Visual AQL 2.5/4.0; **100%** power-on; performance sample AQL 1.0; pack completeness AQL 1.5.

**AQL baseline:** ISO 2859-1 Level II — Critical 0.065 or 100%; Major 1.0–1.5; Minor 2.5–4.0.

---

## 9. Defect Classes

- **Critical:** Safety or total loss of function  
- **Major:** Impaired function / likely return  
- **Minor:** Cosmetic only, non-primary surfaces  

---

## 10. Packaging

Unit box + EN manual; no battery unless kit SKU; lot/SKU/warnings/origin; master carton with PO and PT-RCH-EXT marks; anvil protection.

---

## 11. Sample Approval Workflow

1. **RFQ** — this QA MVP + capability brief → shortlist  
2. **Engineering sample** — working units + data → iterate  
3. **Golden sample** — full §6 + drawings → signed approval  
4. **Pilot lot (50–200)** — process + OQC → authorize MP  
5. **Mass production** — lot OQC + COC  

No MP shipment without written golden + pilot approval (unless waived).

---

## 12. Manufacturer Meeting Checklist

1. Existing electric ratchet production and monthly capacity?  
2. Brushed vs brushless pricing at 1k / 5k / 10k?  
3. POSADA 20V interface — adapt or new tooling? Lead time?  
4. In-house torque/endurance test equipment?  
5. Existing UL/ETL/CE/FCC on similar tools?  
6. MOQ, sample cost/timeline, payment, EXW vs FOB?  
7. Typical defect rates and top field failures?  
8. Motor/gear/PCB sub-supplier control (AVL)?  
9. Private label + serial/lot tracking?  
10. NDA and process/control plan sharing?  

---

## 13. Document Control

| Rev | Date | Changes |
|-----|------|--------|
| A | 2026-11-01 | Initial QA MVP for supplier discussions |

**Rev B should lock:** final drawings, battery interface dims, exact torque method, cosmetic photo board, certification timeline.

---

*POSADA TOOLS — Built for Real Work — QA-MVP-PT-RCH-EXT-RevA*
