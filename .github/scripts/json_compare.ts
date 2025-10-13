import fs from "node:fs";
import path from "node:path";

export type JsonMismatch = { path: string; reason: string };
export type JsonCheckResult = { valid: boolean; mismatches: JsonMismatch[] };

function loadJson(p: string): any {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function isObject(v: any) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

export function compareJsonStructure(
  refObj: any,
  testObj: any,
  basePath = ""
): JsonMismatch[] {
  const mismatches: JsonMismatch[] = [];

  const tRef = Array.isArray(refObj) ? "array" : isObject(refObj) ? "object" : typeof refObj;
  const tTest = Array.isArray(testObj) ? "array" : isObject(testObj) ? "object" : typeof testObj;

  if (tRef !== tTest) {
    mismatches.push({ path: basePath || ".", reason: `type mismatch: ${tRef} vs ${tTest}` });
    return mismatches;
  }

  if (Array.isArray(refObj) && Array.isArray(testObj)) {
    const lenRef = refObj.length;
    const lenTest = testObj.length;
    if (lenRef !== lenTest) {
      mismatches.push({ path: basePath || ".", reason: `array length ${lenRef} vs ${lenTest}` });
    }
    // NOTE: requirement says: compare number of items only; do NOT compare values or nested structure
    return mismatches;
  }

  if (isObject(refObj) && isObject(testObj)) {
    const refKeys = Object.keys(refObj).sort();
    const testKeys = Object.keys(testObj).sort();

    for (const k of refKeys) {
      if (!testKeys.includes(k)) {
        mismatches.push({ path: path.posix.join(basePath, k), reason: "missing key" });
      }
    }
    for (const k of testKeys) {
      if (!refKeys.includes(k)) {
        mismatches.push({ path: path.posix.join(basePath, k), reason: "extra key" });
      }
    }

    const common = refKeys.filter(k => testKeys.includes(k));
    for (const k of common) {
      mismatches.push(
        ...compareJsonStructure(refObj[k], testObj[k], path.posix.join(basePath, k))
      );
    }
    return mismatches;
  }

  // Primitive types: structure equality ignores values => no mismatch here
  return mismatches;
}

export function checkJsonPair(refPath: string, testPath: string): JsonCheckResult {
  const ref = loadJson(refPath);
  const tst = loadJson(testPath);
  const mismatches = compareJsonStructure(ref, tst, "");
  return { valid: mismatches.length === 0, mismatches };
}
