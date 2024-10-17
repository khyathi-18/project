/**
 * Reports web vitals to the given callback function.
 * @param {Function} onPerfEntry The callback function to report web vitals to.
 */
const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    } catch (error) {
      console.error('Error reporting web vitals:', error);
    }
  }
};

export default reportWebVitals;
