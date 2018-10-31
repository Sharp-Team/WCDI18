module.exports = {
	jsonHelper: (data, messErr, status) => {
  	let dataType = (data === null) ? null : typeof (data);
  	if(dataType != null) {
    	dataType = (dataType === 'object' && data instanceof Array) ? 'array' : 'object';
  	}
  	return { data, messErr, status };
	}
}
