export const filterSayerisByCategory = (sayeris, category) => {
    if (!Array.isArray(sayeris)) return [];
    if (!category) return sayeris;
    return sayeris.filter((sayeri) => sayeri.category === category);
  };
  