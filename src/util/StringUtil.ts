export const cleanupMacroText = (value: number) => {
  return value.toString().replace(/[^0-9]/g, '');
};
