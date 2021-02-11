const LOOKUP_TABLE: Record<string, any> = {
  bar: { testValue: 4 }
};

export function optionalLookup(foo: string) { 
  return LOOKUP_TABLE[foo]?.testValue;
}
