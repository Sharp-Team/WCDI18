const jsonHelper = (data, error, status) => {
  let dataType = (data === null) ? null : typeof (data);
  if(dataType != null) {
    dataType = (dataType === 'object' && data instanceof Array) ? 'array' : 'object';
  }
  return {
    status: status,
    data: data,
    error: error,
    dataType: dataType
  };
};

module.exports = { jsonHelper };
