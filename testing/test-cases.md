# Store Locator - Test Cases

| Test Case ID | Test Scenario | Test Data | Expected Result | Status |
|---|---|---|---|---|
| TC-001 | Verify website loads | URL | Store Locator page loads successfully | PASS |
| TC-002 | Verify all stores display | None | 5 stores are displayed when the page loads | PASS |
| TC-003 | Search by valid postcode | 8041 | Riccarton Electronics is displayed | PASS |
| TC-004 | Search by city | Christchurch | Christchurch stores are displayed | PASS |
| TC-005 | Search by invalid postcode | 9999 | No stores found message is displayed | PASS |
| TC-006 | Filter by Grocery | Grocery | Only Grocery stores are displayed | PASS |
| TC-007 | Filter by Electronics | Electronics | Only Electronics stores are displayed | PASS |
| TC-008 | Filter by Pharmacy | Pharmacy | Only Pharmacy stores are displayed | Not Run |
| TC-009 | Filter by Clothing | Clothing | Only Clothing stores are displayed | Not Run |
| TC-010 | Search by postcode and store type | 8041 + Electronics | Riccarton Electronics is displayed | Not Run |
