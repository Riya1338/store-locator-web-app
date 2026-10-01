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
| TC-008 | Filter by Pharmacy | Pharmacy | Only Pharmacy stores are displayed | PASS |
| TC-009 | Filter by Clothing | Clothing | Only Clothing stores are displayed | PASS |
| TC-010 | Search by postcode and store type | 8041 + Electronics | Riccarton Electronics is displayed | PASS |
| TC-011 | Empty search | Empty location + All stores | All 5 stores are displayed | PASS |
| TC-012 | Search with spaces around postcode | ` 8041 ` | Riccarton Electronics is displayed | PASS |
| TC-013 | Search with special characters | `@#$%` | No stores found message is displayed | PASS |
| TC-014 | Search with invalid postcode letters | `80AB` | No stores found message is displayed | PASS |
| TC-015 | Very long search input | 50-digit input | No stores found message is displayed and page remains responsive | PASS |
| TC-016 | Refresh page after search | Search 8041, then refresh | Page loads normally and all 5 stores are displayed | PASS |
| TC-017 | Repeated search | 8041, then 8011 | Results update correctly and only Christchurch Central Store is displayed | PASS |
