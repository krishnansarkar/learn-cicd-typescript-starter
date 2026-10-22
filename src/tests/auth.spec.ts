import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey tests", () => {
  test("mock headers", () => {
    const mockAPIKey = "YABADOOYABADAA";
    const mockData: IncomingHttpHeaders = {
      authorization: `ApiKey ${mockAPIKey}`,
    };

    expect(getAPIKey(mockData)).toBe(mockAPIKey);
  });
});
