export const persist = <T>(name: string, obj: T): T => {
  try {
    const data = {
      value: obj,
    };
    localStorage.setItem(name, JSON.stringify(data));

    return obj;
  } catch (e) {
    console.warn(e);
    return obj;
  }
};

export const hydrate = <T>(name: string): T | null => {
  let content: T | undefined;

  try {
    const serialized = localStorage.getItem(name);
    if (serialized) {
      let data = JSON.parse(serialized);
      content = data;
    }

    if (!content) {
      return null;
    }

    return content;
  } catch (e) {
    console.warn(e);
    return null;
  }
};
